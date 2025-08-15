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

    // Parse request body with error handling
    let requestData;
    try {
      requestData = await req.json();
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return new Response(
        JSON.stringify({ error: 'Invalid request body. Please check your data and try again.' }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const { 
      amount, 
      currency = 'usd',
      description = 'Mack Daddy\'s Course',
      customerEmail,
      firstName,
      lastName,
      metadata = {}
    } = requestData;

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
        JSON.stringify({ error: 'Customer information is required (email, first name, last name)' }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    console.log('Creating payment intent for:', { amount, currency, customerEmail });

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
        // Continue with payment intent creation even if user save fails
      } else {
        console.log('User data saved successfully');
      }
    } catch (error) {
      console.error('Error saving user data:', error);
      // Continue with payment intent creation even if user save fails
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(Number(amount)),
      currency: currency.toLowerCase(),
      description,
      receipt_email: customerEmail,
      metadata: {
        customer_name: `${firstName} ${lastName}`,
        customer_email: customerEmail,
        created_via: 'mack_daddys_course',
        timestamp: new Date().toISOString(),
        ...metadata
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    console.log('Payment intent created successfully:', paymentIntent.id);

    // Return the client secret for the frontend
    return new Response(
      JSON.stringify({ 
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
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
    console.error('Payment processing error:', error);

    // Always return valid JSON, never HTML
    let errorMessage = 'Payment processing failed. Please try again.';
    let statusCode = 500;

    if (error instanceof Error) {
      errorMessage = error.message;
      
      // Handle specific Stripe error types
      const stripeError = error as any;
      if (stripeError.type) {
        switch (stripeError.type) {
          case 'StripeCardError':
            errorMessage = 'Your card was declined. Please try a different card.';
            statusCode = 400;
            break;
          case 'StripeRateLimitError':
            errorMessage = 'Too many requests. Please wait a moment and try again.';
            statusCode = 429;
            break;
          case 'StripeInvalidRequestError':
            errorMessage = 'Invalid payment information. Please check your details.';
            statusCode = 400;
            break;
          case 'StripeAPIError':
            errorMessage = 'Payment service temporarily unavailable. Please try again.';
            statusCode = 500;
            break;
          case 'StripeConnectionError':
            errorMessage = 'Connection error. Please check your internet and try again.';
            statusCode = 500;
            break;
          case 'StripeAuthenticationError':
            errorMessage = 'Payment service configuration error. Please contact support.';
            statusCode = 500;
            break;
          default:
            errorMessage = 'Payment processing failed. Please try again.';
        }
      }
    }

    // Always return JSON response with proper headers
    return new Response(
      JSON.stringify({
        error: errorMessage,
        code: 'PAYMENT_ERROR'
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