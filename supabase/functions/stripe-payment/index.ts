import Stripe from 'npm:stripe@14.21.0';
import { createClient } from 'npm:@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': '*',
};

// Get the Stripe secret key from environment variables
const stripeSecretKey = Deno.env.get('STRIPE_SECRET_KEY');

if (!stripeSecretKey) {
  console.error('STRIPE_SECRET_KEY environment variable is not set');
}

// Initialize Stripe
const stripe = new Stripe(stripeSecretKey || '', {
  apiVersion: '2023-10-16',
});

// Initialize Supabase client with service role key for backend operations
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

const supabase = createClient(supabaseUrl || '', supabaseServiceKey || '');

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    // Check if Stripe secret key is available
    if (!stripeSecretKey) {
      return new Response(
        JSON.stringify({ 
          error: 'Stripe API key is not configured. Please set STRIPE_SECRET_KEY environment variable.' 
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

    // Parse request body
    const { 
      amount, 
      currency = 'usd',
      description = 'Mack Daddy\'s Course',
      customerEmail,
      customerName,
      firstName,
      lastName,
      metadata = {},
      has_order_bump = false
    } = await req.json();

    // Validate required fields
    if (!amount || amount <= 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid payment amount' }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Validate customer data
    if (!customerEmail || !firstName || !lastName) {
      return new Response(
        JSON.stringify({ error: 'Customer information is required' }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    console.log('Creating payment intent for amount:', amount, currency);

    // Save user data to database using service role
    try {
      const { error: userError } = await supabase
        .from('users')
        .upsert([
          {
            email: customerEmail,
            first_name: firstName,
            last_name: lastName
          }
        ], {
          onConflict: 'email'
        });
      
      if (userError) {
        console.error('Error saving user data:', userError);
        // Don't fail the payment intent creation if user save fails
      } else {
        console.log('User data saved successfully');
      }
    } catch (error) {
      console.error('Error saving user data:', error);
      // Don't fail the payment intent creation if user save fails
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(Number(amount)), // Ensure it's a valid integer
      currency: currency.toLowerCase(),
      description,
      receipt_email: customerEmail || undefined,
      metadata: {
        ...metadata,
        customer_name: String(customerName || `${firstName} ${lastName}`),
        customer_email: String(customerEmail || ''),
        has_order_bump: String(has_order_bump || false),
        created_via: 'mack_daddys_course',
        timestamp: new Date().toISOString(),
      },
      // Enable automatic payment methods (includes cards, wallets, etc.)
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'always',
      },
      // Set up for immediate confirmation
      confirmation_method: 'automatic',
    });

    console.log('Payment intent created:', paymentIntent.id);

    // Return the client secret for the frontend
    return new Response(
      JSON.stringify({ 
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('Payment processing error:', error);

    // Handle specific Stripe errors
    let errorMessage = 'Payment processing failed';
    let statusCode = 500;

    if (error instanceof Error) {
      errorMessage = error.message;
      
      // Handle specific Stripe error types
      const stripeError = error as any;
      if (stripeError.type) {
        switch (stripeError.type) {
          case 'StripeCardError':
            errorMessage = 'Your card was declined.';
            statusCode = 400;
            break;
          case 'StripeRateLimitError':
            errorMessage = 'Too many requests made to the API too quickly.';
            statusCode = 429;
            break;
          case 'StripeInvalidRequestError':
            errorMessage = 'Invalid parameters were supplied to Stripe\'s API.';
            statusCode = 400;
            break;
          case 'StripeAPIError':
            errorMessage = 'An error occurred internally with Stripe\'s API.';
            statusCode = 500;
            break;
          case 'StripeConnectionError':
            errorMessage = 'Some kind of error occurred during the HTTPS communication.';
            statusCode = 500;
            break;
          case 'StripeAuthenticationError':
            errorMessage = 'Authentication with Stripe\'s API failed.';
            statusCode = 401;
            break;
        }
      }
    }

    return new Response(
      JSON.stringify({
        error: errorMessage,
        type: error.type || 'unknown',
      }),
      {
        status: statusCode,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});