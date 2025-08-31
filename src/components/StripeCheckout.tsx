import React, { useState, useEffect } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import CheckoutSuccess from './CheckoutSuccess';

interface StripeCheckoutProps {
  amount: number; // Amount in cents (e.g., 2999 for $29.99)
  currency?: string;
  description?: string;
  customerEmail?: string;
  customerName?: string;
  firstName?: string;
  lastName?: string;
  onSuccess?: (paymentIntent: any) => void;
  onError?: (error: Error) => void;
  onCancel?: () => void;
}

const StripeCheckout: React.FC<StripeCheckoutProps> = ({
  amount,
  currency = 'usd',
  description = 'Payment',
  customerEmail = '',
  customerName = '',
  firstName = '',
  lastName = '',
  onSuccess,
  onError,
  onCancel
}) => {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentIntent, setPaymentIntent] = useState<any>(null);

  // Initialize Stripe
  useEffect(() => {
    const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    if (!publishableKey) {
      setError('Stripe publishable key is not configured');
      setIsLoading(false);
      return;
    }
    
    setStripePromise(loadStripe(publishableKey));
  }, []);

  // Create payment intent
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-payment`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount,
            currency,
            description,
            customerEmail,
            firstName,
            lastName,
            metadata: {
              customer_name: customerName,
              description
            }
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to create payment intent');
        }

        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to initialize payment';
        setError(errorMessage);
        if (onError) {
          onError(new Error(errorMessage));
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (amount > 0) {
      createPaymentIntent();
    }
  }, [amount, currency, description, customerEmail, customerName, onError]);

  const handlePaymentSuccess = (paymentIntent: any) => {
    setPaymentSuccess(true);
    setPaymentIntent(paymentIntent);
    if (onSuccess) {
      onSuccess(paymentIntent);
    }
  };

  const handlePaymentError = (error: Error) => {
    setError(error.message);
    if (onError) {
      onError(error);
    }
  };

  // Show success page
  if (paymentSuccess && paymentIntent) {
    return (
      <CheckoutSuccess 
        paymentIntent={paymentIntent}
        amount={amount}
        onContinue={() => {
          // Reset for another payment
          setPaymentSuccess(false);
          setPaymentIntent(null);
          setClientSecret('');
        }}
      />
    );
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Preparing checkout...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-red-800">{error}</p>
          </div>
          {onCancel && (
            <button
              onClick={onCancel}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Go Back
            </button>
          )}
        </div>
      </div>
    );
  }

  // Show payment form
  if (!clientSecret || !stripePromise) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <p className="text-gray-600">Unable to load payment form</p>
        </div>
      </div>
    );
  }

  const options = {
    clientSecret,
    appearance: {
      theme: 'night' as const,
      variables: {
        colorPrimary: '#FFD700',
        colorBackground: '#000000',
        colorText: '#ffffff',
        colorDanger: '#ef4444',
        fontFamily: 'Inter, system-ui, sans-serif',
        spacingUnit: '4px',
        borderRadius: '8px',
      },
      rules: {
        '.Tab': {
          border: '1px solid rgba(255, 215, 0, 0.3)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        '.Tab:hover': {
          backgroundColor: 'rgba(255, 215, 0, 0.1)',
        },
        '.Tab--selected': {
          borderColor: '#FFD700',
          backgroundColor: 'rgba(255, 215, 0, 0.2)',
        },
        '.Input': {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          color: '#ffffff',
        },
        '.Input:focus': {
          borderColor: '#FFD700',
          boxShadow: '0 0 0 3px rgba(255, 215, 0, 0.1)',
        },
      },
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm
        amount={amount}
        onSuccess={handlePaymentSuccess}
        onError={handlePaymentError}
        onCancel={onCancel}
        customerEmail={customerEmail}
        customerName={customerName}
      />
    </Elements>
  );
};

export default StripeCheckout;