import Stripe from 'npm:stripe@14.21.0';

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
      customer = {},
      metadata = {},
      hasOrderBump = false
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

    console.log('Creating payment intent for amount:', amount, currency);

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(Number(amount)), // Ensure it's a valid integer
      currency: currency.toLowerCase(),
      description,
      receipt_email: customer.email || undefined,
      metadata: {
        ...metadata,
        customer_name: String(customer.name || ''),
        customer_email: String(customer.email || ''),
        has_order_bump: hasOrderBump.toString(),
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