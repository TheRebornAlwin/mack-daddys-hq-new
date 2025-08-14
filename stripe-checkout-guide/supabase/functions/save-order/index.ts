import { createClient } from 'npm:@supabase/supabase-js@2.39.7';
import Stripe from 'npm:stripe@14.21.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': '*',
};

// Initialize Stripe
const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16'
});

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') || '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
);

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    // Parse request data
    const {
      paymentIntentId,
      customerEmail,
      customerName,
      amount,
      products = []
    } = await req.json();

    // Validate required fields
    if (!paymentIntentId || !customerEmail || !amount) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Verify the payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    // Verify payment was successful
    if (paymentIntent.status !== 'succeeded') {
      return new Response(
        JSON.stringify({ 
          error: `Payment not completed. Status: ${paymentIntent.status}` 
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Check if order already exists to prevent duplicates
    const { data: existingOrder } = await supabase
      .from('orders')
      .select('id')
      .eq('transaction_id', paymentIntentId)
      .maybeSingle();

    if (existingOrder) {
      return new Response(
        JSON.stringify({ 
          success: true,
          orderId: existingOrder.id,
          message: 'Order already exists'
        }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Create order record
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        transaction_id: paymentIntentId,
        status: 'completed',
        payment_status: 'paid',
        payment_method: 'card',
        total_amount: amount / 100, // Convert cents to dollars
        grand_total: amount / 100,
        currency: paymentIntent.currency.toUpperCase(),
        completed_at: new Date().toISOString(),
        notes: `Customer: ${customerName || customerEmail}, Products: ${products.join(', ')}`
      })
      .select()
      .single();

    if (orderError) {
      console.error('Error creating order:', orderError);
      throw new Error('Failed to save order details');
    }

    // Log the successful payment
    await supabase
      .from('payment_logs')
      .insert({
        type: 'payment_success',
        payment_method: 'stripe',
        amount: amount / 100,
        currency: paymentIntent.currency.toUpperCase(),
        transaction_id: paymentIntentId,
        customer_email: customerEmail,
        metadata: {
          customer_name: customerName,
          products: products,
          order_id: order.id
        }
      });

    console.log('Order saved successfully:', order.id);

    return new Response(
      JSON.stringify({
        success: true,
        orderId: order.id,
        message: 'Order created successfully'
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('Error saving order:', error);
    
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Failed to save order',
        success: false
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});