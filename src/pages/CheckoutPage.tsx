import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, CheckCircle, Star, ArrowLeft, Gift, Scissors, Crown, Timer } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { supabase } from '../lib/supabase';
import { createPaymentIntent } from '../lib/api';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [orderBump, setOrderBump] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });
  const [isExpirationFocused, setIsExpirationFocused] = useState(false);
  const [userSaved, setUserSaved] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      // Format card number with spaces
      formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19);
    } else if (name === 'expirationDate') {
      // Format expiration date as MM/YY
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
      if (formattedValue.length > 5) formattedValue = formattedValue.slice(0, 5);
    } else if (name === 'cvv') {
      // Only allow numbers for CVV
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length > 4) formattedValue = formattedValue.slice(0, 4);
    }

    setCardData(prev => ({ ...prev, [name]: formattedValue }));
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

  // Create payment intent when user info is complete
  useEffect(() => {
    const createIntent = async () => {
      if (formData.email && formData.firstName && formData.lastName) {
        try {
          setPaymentError(null);
          const response = await createPaymentIntent({
            amount: totalPrice * 100,
            currency: 'usd',
            description: orderBump ? 'Cutting Mastery Course + Stylist Survival Kit' : 'Cutting Mastery Course',
            customer: {
              email: formData.email,
              name: `${formData.firstName} ${formData.lastName}`
            },
            metadata: {
              hasOrderBump: orderBump.toString(),
              customerName: `${formData.firstName} ${formData.lastName}`,
              customerEmail: formData.email
            }
          });
          setClientSecret(response.clientSecret);
        } catch (error) {
          console.error('Payment intent creation error:', error);
          setPaymentError(error instanceof Error ? error.message : 'Failed to initialize payment');
        }
      }
    };

    const debounceTimer = setTimeout(createIntent, 1000);
    return () => clearTimeout(debounceTimer);
  }, [formData.email, formData.firstName, formData.lastName, totalPrice, orderBump]);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!clientSecret) {
      setPaymentError('Payment not initialized. Please check your information.');
      return;
    }

    setIsLoadingPayment(true);
    setPaymentError(null);

    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      // Create a payment method with the card data
      const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: {
          number: cardData.cardNumber.replace(/\s/g, ''),
          exp_month: parseInt(cardData.expirationDate.split('/')[0]),
          exp_year: parseInt('20' + cardData.expirationDate.split('/')[1]),
          cvc: cardData.cvv,
        },
        billing_details: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
        },
      });

      if (paymentMethodError) {
        throw new Error(paymentMethodError.message || 'Invalid card details');
      }

      // Confirm the payment
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (confirmError) {
        throw new Error(confirmError.message || 'Payment failed');
      }

      if (paymentIntent && paymentIntent.status === 'succeeded') {
        const packageType = orderBump ? 'base_plus_bump' : 'base';
        navigate(`/thank-you?package=${packageType}`);
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentError(error instanceof Error ? error.message : 'Payment failed');
    } finally {
      setIsLoadingPayment(false);
    }
  };

  const basePrice = 47;
  const bumpPrice = 27;
  const totalPrice = orderBump ? basePrice + bumpPrice : basePrice;
  const isFormComplete = formData.email && formData.firstName && formData.lastName;
  const isCardComplete = cardData.cardNumber && cardData.expirationDate && cardData.cvv;

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
              {isFormComplete ? (
                <form onSubmit={handleCheckout} className="space-y-6">
                  {/* Security Badge */}
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mb-6">
                    <Lock className="h-4 w-4" />
                    <span>Secured by Stripe</span>
                  </div>

                  {/* Card Number */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardData.cardNumber}
                      onChange={handleCardInputChange}
                      required
                      className="input-luxury w-full px-4 py-4 rounded text-lg"
                    />
                  </div>

                  {/* Expiration and CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-medium mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        name="expirationDate"
                        placeholder="MM/YY"
                        value={cardData.expirationDate}
                        onChange={handleCardInputChange}
                        onFocus={() => setIsExpirationFocused(true)}
                        onBlur={() => setIsExpirationFocused(false)}
                        required
                        className="input-luxury w-full px-4 py-4 rounded text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-medium mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="123"
                        value={cardData.cvv}
                        onChange={handleCardInputChange}
                        required
                        className="input-luxury w-full px-4 py-4 rounded text-lg"
                      />
                    </div>
                  </div>

                  {/* Error Message */}
                  {paymentError && (
                    <div className="card-burgundy rounded-lg p-4 border-l-4 border-red-500">
                      <p className="text-red-400 text-sm">{paymentError}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoadingPayment || !isCardComplete || !clientSecret}
                    className={`w-full btn-luxury text-black font-bold text-xl py-6 rounded transition-all duration-300 ${
                      isLoadingPayment || !isCardComplete || !clientSecret
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:scale-105'
                    }`}
                  >
                    {isLoadingPayment ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                        Processing Payment...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Lock className="h-6 w-6 mr-3" />
                        Complete Secure Payment – ${totalPrice}
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
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-300">Please fill in your information above to continue</p>
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
                Your payment is processed securely using Stripe's industry-leading security. 
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