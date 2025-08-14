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
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>

        {/* Success Message */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your payment has been processed successfully.
        </p>

        {/* Payment Details */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-medium text-gray-900 mb-3">Payment Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Amount:</span>
              <span className="font-medium">${(amount / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Transaction ID:</span>
              <span className="font-medium text-xs">{paymentIntent.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">
                {new Date().toLocaleDateString()}
              </span>
            </div>
            {paymentIntent.receipt_email && (
              <div className="flex justify-between">
                <span className="text-gray-600">Receipt sent to:</span>
                <span className="font-medium text-xs">{paymentIntent.receipt_email}</span>
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
            className="w-full flex items-center justify-center py-3 px-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
          >
            <Download className="h-5 w-5 mr-2" />
            Access Your Purchase
          </button>

          {/* Email Receipt Button */}
          <button
            onClick={() => {
              // Add email receipt logic here
              console.log('Sending receipt email');
            }}
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <Mail className="h-4 w-4 mr-2" />
            Email Receipt
          </button>

          {/* Continue Button */}
          {onContinue && (
            <button
              onClick={onContinue}
              className="w-full flex items-center justify-center py-2 px-4 text-blue-600 hover:text-blue-800 transition-colors"
            >
              Continue Shopping
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          )}
        </div>

        {/* Support Info */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Need help? Contact support with transaction ID: {paymentIntent.id}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;