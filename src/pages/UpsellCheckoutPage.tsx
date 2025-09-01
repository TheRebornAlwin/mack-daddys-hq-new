import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, CheckCircle, Crown, Scissors, Timer, Gift } from 'lucide-react';

export default function UpsellCheckoutPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle upsell checkout logic here
    navigate('/upsell-success');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      <div className="bg-black/10 backdrop-blur-2xl border-b border-luxury/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/special-offer')}
              className="flex items-center text-gray-400 hover:text-luxury transition-colors duration-300 group"
            >
              <ArrowLeft className="h-5 w-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Back to Offer</span>
            </button>
            
            <div className="flex items-center">
              <Scissors className="h-7 w-7 text-luxury-gold mr-4" />
              <span className="text-2xl font-playfair font-bold tracking-wider text-gradient-gold">MACK DADDY'S</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6">
            <Crown className="h-8 w-8 text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Complete Your <span className="text-gradient-gold">Business Training</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Secure your business mastery system and start building wealth with your skills
          </p>
        </div>

        {/* Checkout Form */}
        <div className="card-luxury rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-playfair font-bold text-white mb-8 text-center">
            Complete Your Purchase
          </h2>
          
          <form onSubmit={handleCheckout} className="space-y-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="input-luxury w-full px-4 py-4 rounded text-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="input-luxury px-4 py-4 rounded text-lg"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="input-luxury px-4 py-4 rounded text-lg"
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t border-gray-700 pt-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Order Summary</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg text-gray-300">Business Mastery System:</span>
                <span className="text-lg text-white">$97</span>
              </div>
              <div className="flex items-center justify-between text-2xl font-bold mb-4">
                <span className="text-white">Total:</span>
                <span className="text-gradient-gold">$97</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-luxury text-black font-bold text-xl py-6 rounded"
            >
              <div className="flex items-center justify-center">
                <Lock className="h-6 w-6 mr-3" />
                Complete Secure Payment – $97
              </div>
            </button>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Shield, text: "Secure Checkout" },
            { icon: CheckCircle, text: "Money-Back Guarantee" },
            { icon: Lock, text: "SSL Encryption" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center card-luxury rounded-lg p-4">
              <item.icon className="h-6 w-6 text-luxury-gold mb-2" />
              <span className="text-sm text-gray-300 font-medium text-center">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}