import React, { useState } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
  LinkAuthenticationElement
} from '@stripe/react-stripe-js';
import { CreditCard, Lock, Shield } from 'lucide-react';

interface StripePaymentFormProps {
  amount: number;
  onSuccess: (paymentIntent: any) => void;
  onError: (error: Error) => void;
  customerEmail?: string;
  customerName?: string;
}

export default function StripePaymentForm({
  amount,
  onSuccess,
  onError,
  customerEmail = '',
  customerName = ''
}: StripePaymentFormProps) {
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
          return_url: `${window.location.origin}/thank-you`,
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
    <div className="space-y-6">
      {/* Security Badge */}
      <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mb-6">
        <Lock className="h-4 w-4" />
        <span>Secured by Stripe</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Link Authentication Element */}
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

        {/* Payment Element */}
        <div>
          <PaymentElement
            options={{
              layout: 'tabs',
              wallets: {
                applePay: 'auto',
                googlePay: 'auto',
              },
              fields: {
                name: customerName ? 'never' : 'auto',
                email: customerEmail ? 'never' : 'auto',
                phone: 'auto',
                address: {
                  country: 'auto',
                  postalCode: 'auto',
                },
              },
            }}
          />
        </div>

        {/* Error Message */}
        {message && (
          <div className="card-burgundy rounded-lg p-4 border-l-4 border-red-500">
            <p className="text-red-400 text-sm">{message}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !stripe || !elements}
          className={`w-full btn-luxury text-black font-bold text-xl py-6 rounded transition-all duration-300 ${
            isLoading || !stripe || !elements
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:scale-105'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
              Processing Payment...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Lock className="h-6 w-6 mr-3" />
              Complete Secure Payment – ${(amount / 100).toFixed(2)}
            </div>
          )}
        </button>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center space-x-4 text-xs text-gray-400 pt-4 border-t border-gray-700">
          <div className="flex items-center">
            <Shield className="h-3 w-3 mr-1" />
            <span>SSL Secured</span>
          </div>
          <div>•</div>
          <div>PCI Compliant</div>
          <div>•</div>
          <div>256-bit Encryption</div>
        </div>
      </form>
    </div>
  );
}