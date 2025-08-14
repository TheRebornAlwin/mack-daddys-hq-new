import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, CheckCircle, Star, ArrowLeft, ExternalLink, Gift, Scissors, Crown, Timer, Target } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { supabase } from '../lib/supabase';
import StripePaymentForm from '../components/StripePaymentForm';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [orderBump, setOrderBump] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });
  const [userSaved, setUserSaved] = useState(false);
  
  // Stripe-related state
  const [stripePromise, setStripePromise] = useState<Promise<any> | null>(null);
  const [clientSecret, setClientSecret] = useState<string>('');
  const [isLoadingPaymentIntent, setIsLoadingPaymentIntent] = useState(false);
  const [paymentIntentError, setPaymentIntentError] = useState<string | null>(null);

  // Initialize Stripe
  useEffect(() => {
    const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    if (publishableKey) {
      setStripePromise(loadStripe(publishableKey));
    } else {
      setPaymentIntentError('Stripe publishable key is not configured');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Save user data to Supabase when form is filled
  useEffect(() => {
    const saveUserData = async () => {
      if (formData.email && formData.firstName && formData.lastName && !userSaved) {
        try {
          const { data, error } = await supabase
            .from('users')
            .insert([
              {
                email: formData.email,
                first_name: formData.firstName,
                last_name: formData.lastName
              }
            ])
            .select();
          
          if (!error) {
            console.log('User data saved successfully:', data);
            setUserSaved(true);
          } else {
            if (error.code === '23505') {
              console.log('User already exists in database');
              setUserSaved(true);
            } else {
              console.error('Error saving user data:', error);
            }
          }
        } catch (error) {
          console.error('Error saving user data:', error);
        }
      }
    };

    const debounceTimer = setTimeout(saveUserData, 1000);
    return () => clearTimeout(debounceTimer);
  }, [formData.email, formData.firstName, formData.lastName, userSaved]);

  // Create payment intent when form is ready
  useEffect(() => {
    const createPaymentIntent = async () => {
      if (!formData.email || !formData.firstName || !formData.lastName) {
        return;
      }

      try {
        setIsLoadingPaymentIntent(true);
        setPaymentIntentError(null);

        const basePrice = 47;
        const bumpPrice = 27;
        const totalAmount = (orderBump ? basePrice + bumpPrice : basePrice) * 100; // Convert to cents

        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-payment`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: totalAmount,
            currency: 'usd',
            description: orderBump ? 'Cutting Mastery Course + Stylist Survival Kit' : 'Cutting Mastery Course',
            customer: {
              email: formData.email,
              name: `${formData.firstName} ${formData.lastName}`
            },
            metadata: {
              has_order_bump: orderBump.toString(),
              customer_first_name: formData.firstName,
              customer_last_name: formData.lastName
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
        setPaymentIntentError(errorMessage);
        console.error('Payment intent creation error:', err);
      } finally {
        setIsLoadingPaymentIntent(false);
      }
    };

    const debounceTimer = setTimeout(createPaymentIntent, 500);
    return () => clearTimeout(debounceTimer);
  }, [formData.email, formData.firstName, formData.lastName, orderBump]);

  const handlePaymentSuccess = (paymentIntent: any) => {
    const packageType = orderBump ? 'base_plus_bump' : 'base';
    navigate(`/thank-you?package=${packageType}`);
  };

  const handlePaymentError = (error: Error) => {
    setPaymentIntentError(error.message);
  };

  const basePrice = 47;
  const bumpPrice = 27;
  const totalPrice = orderBump ? basePrice + bumpPrice : basePrice;

  const stripeAppearance = {
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
  };

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
                <Scissors className="h-7 w-7 text-luxury-gold mr-4" />
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
                  <span className="text-lg text-gray-300">Stylist Survival Kit:</span>
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

            {/* Step 2 - Payment Info */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-luxury-gradient text-black rounded flex items-center justify-center text-sm font-bold mr-3">2</div>
                Payment Information
              </h3>
              
              {/* Payment Form */}
              {paymentIntentError ? (
                <div className="card-burgundy rounded-lg p-6 border-l-4 border-red-500">
                  <p className="text-red-400">{paymentIntentError}</p>
                </div>
              ) : isLoadingPaymentIntent ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-luxury mx-auto mb-4"></div>
                  <p className="text-gray-300">Preparing secure payment...</p>
                </div>
              ) : !clientSecret ? (
                <div className="text-center py-8">
                  <p className="text-gray-300">Please fill in your information above to continue</p>
                </div>
              ) : stripePromise ? (
                <Elements 
                  stripe={stripePromise} 
                  options={{ 
                    clientSecret,
                    appearance: stripeAppearance
                  }}
                >
                  <StripePaymentForm
                    amount={totalPrice * 100}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                    customerEmail={formData.email}
                    customerName={`${formData.firstName} ${formData.lastName}`}
                  />
                </Elements>
              ) : (
                <div className="card-burgundy rounded-lg p-6 border-l-4 border-red-500">
                  <p className="text-red-400">Unable to load payment form</p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center text-gray-400 text-sm">
              <Shield className="h-4 w-4 mr-2" />
              <span>256-bit SSL encryption • Your payment is 100% secure</span>
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
                Your payment is processed securely on this page using Stripe's industry-leading security. 
                Your card details are encrypted and never stored on our servers.
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