import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, CheckCircle, Star, ArrowLeft, Crown, Scissors, Timer, TrendingUp, Target, Diamond, Zap, Users, BookOpen, Award, Gift, Rocket, CloudLightning as Lightning } from 'lucide-react';
import StripeCheckout from '../components/StripeCheckout';

interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
  hasOrderBump: boolean;
  basePaymentIntentId: string;
}

export default function UpsellCheckoutPage() {
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Retrieve customer data from localStorage
    const storedData = localStorage.getItem('customerData');
    if (storedData) {
      try {
        const data = JSON.parse(storedData);
        setCustomerData(data);
      } catch (error) {
        console.error('Error parsing customer data:', error);
        // Redirect back to main checkout if data is corrupted
        navigate('/checkout');
      }
    } else {
      // No customer data found, redirect to main checkout
      navigate('/checkout');
    }
  }, [navigate]);

  const handlePaymentSuccess = (paymentIntent: any) => {
    // Update localStorage with upsell purchase info
    if (customerData) {
      const updatedData = {
        ...customerData,
        hasUpsell: true,
        upsellPaymentIntentId: paymentIntent.id
      };
      localStorage.setItem('customerData', JSON.stringify(updatedData));
    }
    
    // Navigate to upsell thank you page
    navigate('/upsell-success?package=complete_package');
  };

  const handlePaymentError = (error: Error) => {
    setPaymentError(error.message);
  };

  const handleBackToUpsell = () => {
    navigate('/special-offer');
  };

  if (!customerData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-luxury mx-auto mb-4"></div>
          <p className="text-gray-300">Loading your information...</p>
        </div>
      </div>
    );
  }

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
                onClick={handleBackToUpsell}
                className="flex items-center text-gray-400 hover:text-luxury transition-colors duration-300 group"
              >
                <ArrowLeft className="h-5 w-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-medium">Back to Offer</span>
              </button>
              
              <div className="flex items-center">
                <Scissors className="h-7 w-7 text-luxury-gold mr-4" />
                <span className="text-2xl font-playfair font-bold tracking-wider text-luxury">MACK DADDY'S</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 py-8 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-luxury-gradient rounded mb-8">
              <Rocket className="h-10 w-10 text-black" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
              Complete Your <span className="text-gradient-gold">Elite Transformation</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              You're one step away from having <strong className="text-gradient-gold">everything</strong> you need to build a 
              six-figure styling business. Let's finish what we started, <strong className="text-white">{customerData.firstName}</strong>!
            </p>
            
            {/* Customer Info Display */}
            <div className="card-luxury rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gradient-gold font-semibold">Your Information Confirmed</span>
              </div>
              <div className="text-gray-300 text-sm">
                <p><strong className="text-white">{customerData.firstName} {customerData.lastName}</strong></p>
                <p>{customerData.email}</p>
              </div>
            </div>
          </div>

          {/* Upgrade Offer Summary */}
          <div className={`card-luxury rounded-lg p-8 mb-8 border-l-4 border-luxury ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            <div className="text-center mb-8">
              <div className="badge-premium rounded-full px-6 py-3 mb-6">
                <Crown className="h-5 w-5 text-luxury-gold mr-2" />
                <span className="text-white font-medium">BUSINESS MASTERY UPGRADE</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-gradient-gold mb-4">
                The Complete Business Mastery System
              </h2>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Transform your cutting skills into a thriving business empire with premium pricing strategies, 
                client retention secrets, and the complete shop-opening blueprint.
              </p>
            </div>

            {/* Quick Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: <Target className="h-6 w-6" />,
                  title: "Premium Pricing",
                  description: "Charge $120+ per cut with confidence"
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Client Retention",
                  description: "Book clients 8 weeks in advance"
                },
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: "Business Growth",
                  description: "Scale to 6-figure annual income"
                }
              ].map((benefit, index) => (
                <div key={index} className="card-burgundy rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-luxury-gradient rounded mb-4">
                    <div className="text-black">{benefit.icon}</div>
                  </div>
                  <h4 className="text-gradient-gold font-bold text-sm mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 text-xs leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-gray-400 text-xl mr-4">Regular Price:</span>
                <span className="text-gray-400 text-xl line-through">$297</span>
              </div>
              <div className="flex items-center justify-center mb-6">
                <span className="text-gradient-gold text-xl mr-4 font-medium">Upgrade Price:</span>
                <span className="text-4xl font-bold text-gradient-gold">$97</span>
              </div>
              
              <div className="card-luxury rounded-lg p-4 max-w-md mx-auto border border-luxury/30">
                <div className="flex items-center justify-center mb-2">
                  <Timer className="h-4 w-4 text-luxury-gold mr-2" />
                  <span className="text-gradient-gold font-medium text-sm">Limited Time Upgrade Price</span>
                </div>
                <p className="text-gray-400 text-xs">This offer expires when you leave this page</p>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className={`card-luxury rounded-lg p-6 sm:p-8 mb-8 ${isVisible ? 'slide-in-luxury-delayed-2' : 'opacity-0'}`}>
            <h2 className="text-2xl font-playfair font-bold text-white mb-8 text-center flex items-center justify-center">
              <Lightning className="h-6 w-6 text-luxury mr-3" />
              Complete Your Elite Upgrade
            </h2>
            
            {/* Payment Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">Secure Payment</h3>
              
              {/* Error Message */}
              {paymentError && (
                <div className="card-burgundy rounded-lg p-4 border-l-4 border-red-500 mb-6">
                  <p className="text-red-400 text-sm">{paymentError}</p>
                </div>
              )}

              {/* Stripe Checkout */}
              <StripeCheckout
                amount={97 * 100} // $97 in cents
                currency="usd"
                description="Business Mastery System Upgrade"
                customerEmail={customerData.email}
                customerName={`${customerData.firstName} ${customerData.lastName}`}
                firstName={customerData.firstName}
                lastName={customerData.lastName}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            </div>

            {/* Order Summary */}
            <div className="border-t border-gray-700 pt-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Upgrade Summary</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">✅ Cutting Mastery Course:</span>
                  <span className="text-green-400 font-medium">Already Purchased</span>
                </div>
                {customerData.hasOrderBump && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">✅ Stylist Survival Kit:</span>
                    <span className="text-green-400 font-medium">Already Purchased</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-lg">
                  <span className="text-white font-medium">+ Business Mastery System:</span>
                  <span className="text-white font-bold">$97</span>
                </div>
              </div>
              
              <div className="border-t border-gray-600 mt-4 pt-4">
                <div className="flex items-center justify-between text-xl font-bold">
                  <span className="text-white">Total Upgrade:</span>
                  <span className="text-gradient-gold">$97</span>
                </div>
                <div className="card-luxury rounded-lg p-3 border border-luxury/30 mt-4">
                  <p className="text-luxury font-medium text-sm flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    One-time payment • No subscriptions • 365-day guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What You're Adding */}
          <div className="card-luxury rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-playfair font-bold text-gradient-gold mb-8 text-center">
              What You're Adding to Your Success Arsenal
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Target className="h-6 w-6" />,
                  title: "Premium Pricing Strategies",
                  description: "Watch clients happily pay $120+ without hesitation while you feel completely confident in your worth"
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Client Retention Secrets", 
                  description: "Have clients texting you 'When's your next opening?' and booking 8 weeks in advance"
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: "Social Media Marketing",
                  description: "Wake up to DMs saying 'I NEED an appointment' from followers who found you online"
                },
                {
                  icon: <Diamond className="h-6 w-6" />,
                  title: "Shop Opening Blueprint",
                  description: "Walk into your own shop knowing exactly what to do, from lease to grand opening celebration"
                },
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: "Financial Planning Tools",
                  description: "See your monthly income predictions and watch your savings grow with clear financial roadmaps"
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Legal & Insurance Guide",
                  description: "Sleep soundly knowing you're fully protected and following every rule perfectly"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-luxury-gradient rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="text-black">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-gradient-gold font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
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

          {/* Success Stories */}
          <div className="card-luxury rounded-lg p-8 mb-8">
            <h3 className="text-xl font-playfair font-bold text-gradient-gold mb-6 text-center">
              Elite Members Are Seeing Incredible Results
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  quote: "The business training was a game-changer. I went from $30 cuts to $120 cuts in 3 months using Sean's pricing psychology!",
                  name: "Sarah M.",
                  achievement: "Now earning $8,500/month"
                },
                {
                  quote: "I opened my own shop using Sean's blueprint. The financial planning tools showed me exactly when I'd be profitable!",
                  name: "Marcus T.", 
                  achievement: "Shop Owner making $15k/month"
                }
              ].map((testimonial, index) => (
                <div key={index} className="card-burgundy rounded-lg p-6">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-luxury fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm italic mb-3 leading-relaxed">"{testimonial.quote}"</p>
                  <p className="text-gradient-gold font-semibold text-sm">- {testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Motivation */}
          <div className="card-luxury rounded-lg p-8 text-center border-l-4 border-luxury">
            <Crown className="h-12 w-12 text-luxury-gold mx-auto mb-6" />
            <h3 className="text-2xl font-playfair font-bold text-gradient-gold mb-4">
              You're Going the Extra Mile to Success
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
              Most people stop at learning the skills. You're choosing to master the business side too. 
              This is what separates the successful from the struggling. You're making the smart choice.
            </p>
            <div className="card-burgundy rounded-lg p-4 max-w-xl mx-auto">
              <p className="text-gradient-gold font-medium text-sm">
                🚀 <strong>Elite Status:</strong> You'll join the top 5% of stylists who have both the skills AND the business knowledge to build real wealth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}