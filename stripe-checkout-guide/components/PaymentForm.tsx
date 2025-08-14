import React, { useState } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
  LinkAuthenticationElement
} from '@stripe/react-stripe-js';
import { CreditCard, Lock, ArrowLeft } from 'lucide-react';

interface PaymentFormProps {
  amount: number;
  onSuccess: (paymentIntent: any) => void;
  onError: (error: Error) => void;
  onCancel?: () => void;
  customerEmail?: string;
  customerName?: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  amount,
  onSuccess,
  onError,
  onCancel,
  customerEmail = '',
  customerName = ''
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [email, setEmail] = useState(customerEmail);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      // Trigger form validation and wallet collection
      const { error: submitError } = await elements.submit();
      if (submitError) {
        throw new Error(submitError.message || 'Please check your payment details');
      }

      // Confirm the payment
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/success`,
          payment_method_data: {
            billing_details: {
              name: customerName || 'Customer',
              email: email || customerEmail,
            },
          },
        },
        redirect: 'if_required',
      });

      if (error) {
        // Payment failed
        if (error.type === 'card_error' || error.type === 'validation_error') {
          setMessage(error.message || 'Please check your payment details and try again.');
        } else {
          setMessage('An unexpected error occurred. Please try again.');
        }
        onError(new Error(error.message || 'Payment failed'));
      } else if (paymentIntent) {
        // Payment succeeded
        if (paymentIntent.status === 'succeeded') {
          onSuccess(paymentIntent);
        } else if (paymentIntent.status === 'processing') {
          setMessage('Your payment is processing. We\'ll confirm once it\'s complete.');
        } else if (paymentIntent.status === 'requires_action') {
          setMessage('Please complete the additional verification step.');
        } else {
          setMessage(`Payment status: ${paymentIntent.status}`);
        }
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setMessage(errorMessage);
      onError(new Error(errorMessage));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Security Badge */}
      <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-4">
        <Lock className="h-4 w-4" />
        <span>Secured by Stripe</span>
      </div>

      {/* Link Authentication Element (for faster future checkouts) */}
      {!customerEmail && (
        <div>
          <LinkAuthenticationElement
            options={{ defaultValues: { email: email } }}
            onChange={(event) => {
              if (event.value?.email) {
                setEmail(event.value.email);
              }
            }}
          />
        </div>
      )}

      {/* Payment Element (handles all payment methods) */}
      <div>
        <PaymentElement
          options={{
            layout: 'tabs',
            wallets: {
              applePay: 'auto',
              googlePay: 'auto',
            },
            fields: {
              billingDetails: {
                name: 'auto',
                email: customerEmail ? 'never' : 'auto',
                phone: 'auto',
                address: {
                  country: 'auto',
                  postalCode: 'auto',
                },
              },
            },
            defaultValues: {
              billingDetails: {
                name: customerName,
                email: customerEmail || email,
              },
            },
          }}
        />
      </div>

      {/* Error Message */}
      {message && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">{message}</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          type="submit"
          disabled={isLoading || !stripe || !elements}
          className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white ${
            isLoading || !stripe || !elements
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          } transition-colors`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
              <CreditCard className="h-5 w-5 mr-2" />
              Pay ${(amount / 100).toFixed(2)}
            </>
          )}
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="w-full flex items-center justify-center py-2 px-4 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Cancel
          </button>
        )}
      </div>

      {/* Trust Badges */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
          <div className="flex items-center">
            <Lock className="h-3 w-3 mr-1" />
            <span>SSL Secured</span>
          </div>
          <div>•</div>
          <div>PCI Compliant</div>
          <div>•</div>
          <div>256-bit Encryption</div>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;