import React, { useState } from 'react';
import StripeCheckout from '../components/StripeCheckout';
import '../styles/checkout.css';

function App() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderData, setOrderData] = useState({
    amount: 2999, // $29.99 in cents
    description: 'Premium Course Access',
    customerEmail: '',
    customerName: ''
  });

  const handlePaymentSuccess = (paymentIntent: any) => {
    console.log('Payment successful!', paymentIntent);
    
    // Here you would typically:
    // 1. Grant access to the product
    // 2. Send confirmation email
    // 3. Update user account
    // 4. Redirect to success page
    
    alert('Payment successful! Check console for details.');
  };

  const handlePaymentError = (error: Error) => {
    console.error('Payment failed:', error);
    alert(`Payment failed: ${error.message}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Stripe Checkout Demo
        </h1>

        {!showCheckout ? (
          // Product showcase
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Premium Course</h2>
            <p className="text-gray-600 mb-4">
              Get access to our comprehensive course with lifetime updates.
            </p>
            <div className="text-2xl font-bold text-blue-600 mb-6">
              ${(orderData.amount / 100).toFixed(2)}
            </div>
            
            {/* Customer details */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  value={orderData.customerEmail}
                  onChange={(e) => setOrderData(prev => ({ 
                    ...prev, 
                    customerEmail: e.target.value 
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={orderData.customerName}
                  onChange={(e) => setOrderData(prev => ({ 
                    ...prev, 
                    customerName: e.target.value 
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        ) : (
          // Stripe checkout
          <StripeCheckout
            amount={orderData.amount}
            currency="usd"
            description={orderData.description}
            customerEmail={orderData.customerEmail}
            customerName={orderData.customerName}
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
            onCancel={() => setShowCheckout(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;