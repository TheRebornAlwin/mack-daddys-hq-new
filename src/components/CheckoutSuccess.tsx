import React from 'react';
import { CheckCircle, Download, Mail, ArrowRight } from 'lucide-react';

interface CheckoutSuccessProps {
  paymentIntent: any;
  amount: number;
  onContinue?: () => void;
}

const CheckoutSuccess: React.FC<CheckoutSuccessProps> = ({
  paymentIntent,
  amount,
  onContinue
}) => {
  return (
    <div className="max-w-md mx-auto p-6 card-luxury rounded-lg">
      <div className="text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-luxury-gradient">
            <CheckCircle className="h-8 w-8 text-black" />
          </div>
        </div>

        {/* Success Message */}
        <h2 className="text-2xl font-bold text-white mb-2">Payment Successful!</h2>
        <p className="text-gray-300 mb-6">
          Thank you for your purchase. Your payment has been processed successfully.
        </p>

        {/* Payment Details */}
        <div className="card-burgundy rounded-lg p-4 mb-6 text-left">
          <h3 className="font-medium text-white mb-3">Payment Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Amount:</span>
              <span className="font-medium text-white">${(amount / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Transaction ID:</span>
              <span className="font-medium text-xs text-white">{paymentIntent.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Date:</span>
              <span className="font-medium text-white">
                {new Date().toLocaleDateString()}
              </span>
            </div>
            {paymentIntent.receipt_email && (
              <div className="flex justify-between">
                <span className="text-gray-300">Receipt sent to:</span>
                <span className="font-medium text-xs text-white">{paymentIntent.receipt_email}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Download/Access Product Button */}
          <button
            onClick={() => {
              // Add your product delivery logic here
              console.log('Delivering product to customer');
            }}
            className="w-full btn-luxury text-black font-bold py-3 px-4 rounded"
          >
            <Download className="h-5 w-5 mr-2 inline" />
            Access Your Purchase
          </button>

          {/* Email Receipt Button */}
          <button
            onClick={() => {
              // Add email receipt logic here
              console.log('Sending receipt email');
            }}
            className="w-full border border-luxury/30 text-gray-300 rounded-lg py-2 px-4 hover:bg-luxury/10 transition-colors"
          >
            <Mail className="h-4 w-4 mr-2 inline" />
            Email Receipt
          </button>

          {/* Continue Button */}
          {onContinue && (
            <button
              onClick={onContinue}
              className="w-full flex items-center justify-center py-2 px-4 text-luxury hover:text-luxury/80 transition-colors"
            >
              Continue Shopping
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          )}
        </div>

        {/* Support Info */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-400 text-center">
            Need help? Contact support with transaction ID: {paymentIntent.id}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;