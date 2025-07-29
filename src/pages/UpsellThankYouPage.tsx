import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Star, Gift, BookOpen, Users, Home, Crown, Diamond, Target, TrendingUp, Scissors } from 'lucide-react';

export default function UpsellThankYouPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Luxury geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="luxury-shape luxury-shape-1 top-20 right-20"></div>
        <div className="luxury-shape luxury-shape-2 bottom-20 left-20" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Success Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-luxury-gradient rounded mb-10">
            <Crown className="h-14 w-14 text-black" />
          </div>
          <h1 className="text-4xl md:text-7xl font-playfair font-bold mb-8 leading-tight">
            🎉 <span className="text-gradient-gold">CONGRATULATIONS!</span> 🎉
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-luxury mb-10">
            You're Now Part of the Elite!
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            You've just made the smartest investment in your future. You now have <strong className="text-gradient-gold">EVERYTHING</strong> you need 
            to not just cut hair, but to build a thriving, profitable business that works for you.
          </p>
        </div>

        {/* Complete Package Overview */}
        <div className="card-luxury rounded-lg p-12 mb-20 shadow-2xl border-l-4 border-luxury">
          <h3 className="text-3xl font-playfair font-bold text-white mb-12 text-center flex items-center justify-center">
            <Gift className="h-8 w-8 text-luxury-gold mr-4" />
            Your Complete Success Package
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Cutting Course */}
            <div className="space-y-8">
              <h4 className="text-xl font-bold text-gradient-gold mb-6 flex items-center">
                <Scissors className="h-6 w-6 text-luxury-gold mr-4" />
                Cutting Mastery Course ($297 Value)
              </h4>
              <div className="space-y-4">
                {[
                  "Complete Shape & Flow System",
                  "Advanced Consultation Techniques",
                  "All Hair Types Cutting Methods", 
                  "Modern Finishing Techniques",
                  "Lifetime Access & Updates"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-luxury-gold mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Business Course */}
            <div className="space-y-8">
              <h4 className="text-xl font-bold text-gradient-gold mb-6 flex items-center">
                <Target className="h-6 w-6 text-luxury-gold mr-4" />
                Business Mastery System ($297 Value)
              </h4>
              <div className="space-y-4">
                {[
                  "Premium Pricing Strategies",
                  "Client Retention Secrets",
                  "Social Media Marketing Blueprint",
                  "Shop Opening Complete Guide",
                  "Financial Planning Tools"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-luxury-gold mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Value Summary */}
          <div className="text-center mt-16 pt-10 border-t border-luxury/30">
            <p className="text-3xl font-bold text-white mb-3">
              Total Value: <span className="text-gray-400 line-through">$594</span>
            </p>
            <p className="text-4xl font-playfair font-bold text-gradient-gold">
              Your Investment: Only $144 (You Saved $450!)
            </p>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="card-luxury rounded-lg p-10 mb-16">
          <h3 className="text-2xl font-playfair font-bold text-white mb-10 text-center">What Happens Next</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "Check Your Email", 
                description: "You'll receive access to BOTH courses within 5 minutes"
              },
              {
                step: "2",
                title: "Access Your VIP Dashboard",
                description: "Get immediate access to all premium content and bonuses"
              },
              {
                step: "3", 
                title: "Start Building Your Empire",
                description: "Apply both skill and business training to transform your career"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-gradient-gold mb-3">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VIP Access */}
        <div className="card-burgundy rounded-lg p-10 text-center mb-16 border-l-4 border-burgundy">
          <Crown className="h-12 w-12 text-luxury-gold mx-auto mb-8" />
          <h3 className="text-2xl font-playfair font-bold text-gradient-gold mb-6">VIP Elite Member Access</h3>
          <p className="text-gray-300 mb-8 text-lg">
            You now have access to our exclusive VIP community and premium resources
          </p>
          <button className="badge-burgundy text-white font-bold text-lg px-10 py-4 rounded hover:scale-105 transition-all duration-300 shadow-xl">
            Access Your VIP Dashboard
          </button>
        </div>

        {/* Success Stories */}
        <div className="card-luxury rounded-lg p-10 mb-16">
          <h3 className="text-2xl font-playfair font-bold text-white mb-10 text-center flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-luxury-gold mr-3" />
            You're Following in the Footsteps of Success
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                quote: "The business training was a game-changer. I went from $30 cuts to $120 cuts in 3 months!",
                name: "Sarah M.",
                achievement: "Now earning $8,500/month"
              },
              {
                quote: "I opened my own shop using Sean's blueprint. Now I'm making $15k/month as a shop owner!",
                name: "Marcus T.", 
                achievement: "Shop Owner"
              }
            ].map((testimonial, index) => (
              <div key={index} className="card-burgundy rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-luxury fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-gradient-gold font-semibold">- {testimonial.name}, {testimonial.achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center">
          <div className="card-luxury rounded-lg p-10 mb-12">
            <Crown className="h-12 w-12 text-luxury-gold mx-auto mb-6" />
            <h3 className="text-3xl font-playfair font-bold text-gradient-gold mb-6">Welcome to Your New Life</h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              You've just invested in the most comprehensive hair cutting and business training available. 
              You now have everything you need to not just cut hair, but to build wealth doing what you love.
            </p>
            <p className="text-gradient-gold font-semibold text-xl mb-8">
              Your transformation starts NOW. Let's build your empire! 👑✂️💰
            </p>
            <div className="card-burgundy rounded-lg p-6 max-w-3xl mx-auto border-l-4 border-burgundy">
                <p className="text-gradient-gold font-medium">
                  🔥 <strong>Pro Tip:</strong> Start with the cutting course to build your skills, then dive into the business training to maximize your earnings. You've got this!
                </p>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center text-gray-400 hover:text-luxury transition-colors duration-300 text-lg group"
          >
            <Home className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}