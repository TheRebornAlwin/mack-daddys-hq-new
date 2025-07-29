import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, CheckCircle, Star, ArrowLeft, Users, ExternalLink, Gift, Scissors, Crown, Timer, Target } from 'lucide-react';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [orderBump, setOrderBump] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckout = () => {
    if (!formData.email || !formData.firstName || !formData.lastName) {
      alert('Please fill in all required fields');
      return;
    }

    const basePrice = 47;
    const bumpPrice = 27;
    const totalPrice = orderBump ? basePrice + bumpPrice : basePrice;
    
    // Determine package type for thank you page
    const packageType = orderBump ? 'base_plus_bump' : 'base';
    
    const paymentLinkUrl = orderBump 
      ? 'https://buy.stripe.com/test_cNi3cw6V7e2cdRff5p2sM01'
      : 'https://buy.stripe.com/test_aFa3cw2ER7DOeVj1ez2sM02';
    
    const urlParams = new URLSearchParams({
      'prefilled_email': formData.email,
      'client_reference_id': `${formData.firstName}_${formData.lastName}_${Date.now()}`,
      'success_url': `${window.location.origin}/thank-you?package=${packageType}`
    });
    
    const fullUrl = `${paymentLinkUrl}?${urlParams.toString()}`;
    window.location.href = fullUrl;
  };

  const basePrice = 47;
  const bumpPrice = 27;
  const totalPrice = orderBump ? basePrice + bumpPrice : basePrice;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Luxury geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="luxury-shape luxury-shape-1 top-20 right-20"></div>
        <div className="luxury-shape luxury-shape-2 bottom-20 left-20" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-black/10 backdrop-blur-2xl border-b border-luxury/20">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center text-gray-400 hover:text-luxury transition-colors duration-300 group"
              >
                <ArrowLeft className="h-5 w-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-medium">Back to Course Details</span>
              </button>
              
              <div className="flex items-center">
                <Scissors className="h-7 w-7 text-luxury mr-4" />
                <span className="text-2xl font-playfair font-bold tracking-wider text-luxury">MACK DADDY'S</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Mobile Optimized */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6">
            <Crown className="h-8 w-8 text-black" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
              Secure Your <span className="text-gradient-gold">Transformation</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Join thousands of successful stylists who've mastered their craft with Sean's proven system
            </p>
          </div>

          {/* Checkout Form - Mobile First */}
          <div className="card-luxury rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-playfair font-bold text-white mb-8 text-center flex items-center justify-center">
              <Crown className="h-6 w-6 text-luxury mr-3" />
              Complete Your Purchase
            </h2>
            
            {/* Step 1 - Contact Info */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-luxury-gradient text-black rounded flex items-center justify-center text-sm font-bold mr-3">1</div>
                Your Information
              </h3>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="input-luxury w-full px-4 py-4 rounded text-lg"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            {/* Order Bump - Checked by Default */}
            <div className="card-luxury rounded-lg p-6 mb-8 border-l-4 border-luxury">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="orderBump"
                  checked={orderBump}
                  onChange={(e) => setOrderBump(e.target.checked)}
                  className="mt-1 mr-4 h-5 w-5 text-luxury bg-black border-luxury rounded focus:ring-luxury focus:ring-2"
                />
                <div className="flex-1">
                  <label htmlFor="orderBump" className="cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Gift className="h-5 w-5 text-luxury-gold mr-2" />
                        <span className="text-gradient-gold font-bold text-lg">Exclusive Bonus Offer</span>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-400 text-sm line-through">$97</div>
                        <span className="text-white font-bold text-xl">+$27</span>
                      </div>
                    </div>
                    <p className="text-white font-semibold mb-2">
                      Add the <strong>Stylist Survival Kit</strong> and avoid rookie disasters before they happen!
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      Learn the 12 biggest mistakes beginners make (and how to dodge them), how to deal with red-flag clients, and grab the first-cut plan that lays out exactly what to prep, say, and do on Day 1 — so you never freeze up in the moment.

The perfect safety net to complement your skills.
                    </p>
                    <div className="badge-premium rounded-full px-3 py-1">
                      <span className="text-white text-xs font-medium">70% OFF - Limited Time</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-gray-700 pt-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg text-gray-300">Course:</span>
                <span className="text-lg text-white">$47</span>
              </div>
              {orderBump && (
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg text-gray-300">Business Blueprint:</span>
                  <span className="text-lg text-white">$27</span>
                </div>
              )}
              <div className="flex items-center justify-between text-2xl font-bold mb-4">
                <span className="text-white">Total:</span>
                <span className="text-gradient-gold">${totalPrice}</span>
              </div>
              <div className="card-luxury rounded-lg p-3 border border-luxury/30">
                <p className="text-luxury font-medium text-sm flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  One-time payment • No subscriptions • No hidden fees
                </p>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full btn-luxury text-black font-bold text-xl py-6 rounded mb-4"
            >
              <ExternalLink className="h-6 w-6 mr-3 inline" />
              <span>Proceed to Secure Checkout – ${totalPrice}</span>
            </button>

            <p className="text-center text-gray-400 text-sm">
              You'll be redirected to Stripe's secure checkout page
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { icon: Shield, text: "Secure Checkout" },
              { icon: Star, text: "365-Day Guarantee" },
              { icon: Lock, text: "SSL Encryption" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center group card-luxury rounded-lg p-4">
                <item.icon className="h-6 w-6 text-luxury-gold mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-gray-300 font-medium text-center">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Course Details - After Checkout Button */}
          <div className="space-y-8">
            {/* What's Included */}
            <div className="card-luxury rounded-lg p-8">
              <h3 className="text-2xl font-playfair font-bold text-gradient-gold mb-6 text-center">
                What's Included in Your Course
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Complete Shape & Flow Mastery System",
                  "Advanced Consultation Techniques", 
                  "All Hair Types Cutting Methods",
                  "Modern Finishing Techniques",
                  "Lifetime Access & Updates",
                  "Private Community Access"
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-luxury-gold mr-3 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div className="card-luxury rounded-lg p-6 border-l-4 border-luxury text-center">
              <div className="flex items-center justify-center mb-3">
                <Timer className="h-5 w-5 text-luxury-gold mr-3" />
                <span className="text-gradient-gold font-bold">Limited Time Offer</span>
              </div>
              <p className="text-white font-medium mb-2">
                Price increases to $297 after 2,000 students join
              </p>
              <p className="text-gray-300">
                Current enrollment: <span className="text-gradient-gold font-bold">1,927 students</span>
              </p>
            </div>

            {/* Security Info */}
            <div className="card-luxury rounded-lg p-6 text-center">
              <div className="flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-luxury-gold mr-3" />
                <span className="text-gradient-gold font-semibold text-lg">Powered by Stripe</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
                You'll be securely redirected to Stripe's checkout page to complete your payment. 
                Stripe is trusted by millions of businesses worldwide.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Lock className="h-4 w-4 mr-1" />
                  <span>SSL Encrypted</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  <span>PCI Compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Bank-Level Security</span>
                </div>
              </div>
            </div>
          </div>

          {/* Temporary Upsell Link for Testing */}
          <div className="card-burgundy rounded-lg p-6 text-center border-l-4 border-burgundy">
            <h3 className="text-gradient-gold font-semibold mb-3">Development Testing</h3>
            <p className="text-gray-300 text-sm mb-4">
              Preview pages (these will be removed in production)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/special-offer')}
                className="badge-burgundy text-white font-medium px-6 py-2 rounded hover:scale-105 transition-all duration-300"
              >
                Preview Upsell Page
              </button>
              <button 
                onClick={() => navigate('/thank-you')}
                className="badge-burgundy text-white font-medium px-6 py-2 rounded hover:scale-105 transition-all duration-300"
              >
                Preview Thank You Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}