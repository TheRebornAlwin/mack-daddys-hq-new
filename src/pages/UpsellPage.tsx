import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, X, ExternalLink, Crown, Diamond, Target, TrendingUp, Scissors, Star, Gift, Timer } from 'lucide-react';

export default function UpsellPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleUpsellPurchase = () => {
    // Navigate to our custom upsell checkout page
    navigate('/upsell-checkout');
  };

  const handleDecline = () => {
    // Get customer data from localStorage to determine package type
    const customerData = localStorage.getItem('customerData');
    if (customerData) {
      const data = JSON.parse(customerData);
      const packageType = data.hasOrderBump ? 'base_plus_bump' : 'base';
      navigate(`/thank-you?package=${packageType}`);
    } else {
      navigate('/thank-you?package=base');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Luxury geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="luxury-shape luxury-shape-1 top-20 right-20"></div>
        <div className="luxury-shape luxury-shape-2 bottom-20 left-20" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className={`max-w-5xl mx-auto text-center ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
          {/* Success Header */}
          <div className="mb-16 pt-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-luxury-gradient rounded mb-8 shadow-lg">
              <CheckCircle className="h-10 w-10 text-black" />
            </div>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8 leading-tight">
              Payment Successful! 🎉 <br />
              <span className="text-gradient-gold">But Wait... There's More!</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              You just secured the cutting skills. Now let me show you how to turn those skills into 
              a <strong className="text-gradient-gold">thriving, profitable business</strong> that works for you.
            </p>
          </div>

          {/* Main Offer Card */}
          <div className={`relative max-w-4xl mx-auto mb-12 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            <div className="card-luxury rounded-lg p-12 shadow-2xl">
              <div className="mb-10">
                <div className="badge-premium rounded-full px-6 py-3 mb-8">
                  <Crown className="h-5 w-5 text-luxury-gold mr-2" />
                  <span className="text-white font-medium">EXCLUSIVE BUSINESS TRAINING</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient-gold mb-6">
                  The Complete Business Mastery System
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Most stylists learn to cut hair but never learn to build a business. This exclusive system 
                  shows you exactly how to go from cutting hair to building wealth. From pricing strategies 
                  to opening your own shop, this is your roadmap to financial freedom.
                </p>
              </div>

              {/* What's Included Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    title: "Premium Pricing Strategies",
                    description: "Watch clients happily pay $120+ without hesitation while you feel completely confident in your worth"
                  },
                  {
                    title: "Client Retention Secrets", 
                    description: "Have clients texting you 'When's your next opening?' and booking 8 weeks in advance"
                  },
                  {
                    title: "Social Media Marketing",
                    description: "Wake up to DMs saying 'I NEED an appointment' from followers who found you online"
                  },
                  {
                    title: "Shop Opening Blueprint",
                    description: "Walk into your own shop knowing exactly what to do, from lease to grand opening celebration"
                  },
                  {
                    title: "Financial Planning Tools",
                    description: "See your monthly income predictions and watch your savings grow with clear financial roadmaps"
                  },
                  {
                    title: "Legal & Insurance Guide",
                    description: "Sleep soundly knowing you're fully protected and following every rule perfectly"
                  }
                ].map((item, index) => (
                  <div key={index} className="card-luxury rounded-lg p-8 group hover:transform hover:-translate-y-2 transition-all duration-300 border border-luxury/20 hover:border-luxury/40 text-center">
                    <h4 className="text-gradient-gold font-bold text-lg mb-4 group-hover:text-white transition-colors duration-300">{item.title}</h4>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Pricing Section */}
              <div className="mb-10">
                <div className="flex items-center justify-center mb-6">
                  <span className="text-gray-400 text-2xl mr-6">Regular Price:</span>
                  <span className="text-gray-400 text-2xl line-through">$297</span>
                </div>
                <div className="flex items-center justify-center mb-8">
                  <span className="text-gradient-gold text-2xl mr-6 font-medium">Today Only:</span>
                  <span className="text-5xl font-bold text-gradient-gold">$97</span>
                </div>
                
                {/* Urgency */}
                <div className="card-luxury rounded-lg p-6 mb-8 max-w-2xl mx-auto border border-luxury/30">
                  <div className="flex items-center justify-center mb-3">
                    <Timer className="h-5 w-5 text-luxury-gold mr-3" />
                    <span className="font-medium" style={{background: 'linear-gradient(135deg, #FFEF94 0%, #FFE55C 25%, #FFD700 50%, #FFD966 75%, #FFE55C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>This offer expires when you leave this page</span>
                  </div>
                  <p className="text-gray-400 text-sm">You won't see this price again.</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-6">
                <button
                  onClick={handleUpsellPurchase}
                  className="w-full max-w-3xl mx-auto btn-luxury text-black font-bold text-xl py-6 rounded"
                >
                  <ExternalLink className="h-6 w-6 mr-3 inline" />
                  <span>Yes, Add This to My Order for $97</span>
                </button>
                
                <button
                  onClick={handleDecline}
                  className="text-gray-400 hover:text-gray-300 transition-colors duration-300 text-lg underline flex items-center justify-center mx-auto group"
                >
                  <X className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  No thanks, I'll stick with just the basics
                </button>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className={`max-w-2xl mx-auto ${isVisible ? 'slide-in-luxury-delayed-2' : 'opacity-0'}`}>
            <div className="card-burgundy rounded-lg p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-luxury fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-4 italic">
                "I wish I had this business training when I started. It would have saved me years of struggle and thousands in lost revenue." 
              </p>
              <p className="text-gradient-gold font-semibold">- Marcus T., Shop Owner making $15k/month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}