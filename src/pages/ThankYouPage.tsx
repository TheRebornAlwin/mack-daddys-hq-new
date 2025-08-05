import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CheckCircle, Play, Mail, BookOpen, Users, Home, Crown, Diamond, Target, Scissors, Star, Gift, Heart, Download, MessageCircle, Calendar, Award, Zap, Clock } from 'lucide-react';

export default function ThankYouPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [purchaseDetails, setPurchaseDetails] = useState({
    hasBase: true,
    hasBump: false,
    hasUpsell: false,
    totalPaid: 47,
    totalValue: 1582,
    savings: 1535
  });

  useEffect(() => {
    // Check URL parameters to determine what was purchased
    const urlParams = new URLSearchParams(location.search);
    const package_type = urlParams.get('package') || 'base';
    
    let details = {
      hasBase: true,
      hasBump: false,
      hasUpsell: false,
      totalPaid: 47,
      totalValue: 1582,
      savings: 1535
    };

    switch (package_type) {
      case 'base_plus_bump':
        details = {
          hasBase: true,
          hasBump: true,
          hasUpsell: false,
          totalPaid: 74, // $47 + $27
          totalValue: 1879, // Base value + bump value
          savings: 1805
        };
        break;
      case 'base_plus_upsell':
        details = {
          hasBase: true,
          hasBump: false,
          hasUpsell: true,
          totalPaid: 144, // $47 + $97
          totalValue: 1879, // Base value + business value
          savings: 1735
        };
        break;
      case 'complete_package':
        details = {
          hasBase: true,
          hasBump: true,
          hasUpsell: true,
          totalPaid: 171, // $47 + $27 + $97
          totalValue: 2176, // All values combined
          savings: 2005
        };
        break;
      default: // 'base' package
        break;
    }
    
    setPurchaseDetails(details);
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Luxury geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="luxury-shape luxury-shape-1 top-20 right-20"></div>
        <div className="luxury-shape luxury-shape-2 bottom-20 left-20" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Heartfelt Welcome */}
        <div className="text-center mb-20 pt-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-luxury-gradient rounded mb-12">
            <Heart className="h-12 w-12 text-black" />
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8 leading-tight">
            You Did It! 🎉<br />
            <span className="text-gradient-gold">Welcome to Your New Future</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Take a moment to celebrate this decision. You just invested in yourself and your craft in a way that 
            will pay dividends for the rest of your career.
          </p>
          <div className="card-luxury rounded-lg p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-gradient-gold font-semibold">This isn't just another course.</span> You've joined an exclusive community of serious stylists who refuse to settle for average. You're about to discover techniques that took Sean 30+ years to perfect, and you'll master them in weeks, not decades.
            </p>
          </div>
        </div>

        {/* What You Get Right Now */}
        <div className="card-luxury rounded-lg p-10 mb-16 border-l-4 border-luxury">
          <h2 className="text-3xl font-playfair font-bold text-gradient-gold mb-10 text-center flex items-center justify-center">
            <Gift className="h-8 w-8 text-luxury-gold mr-4" />
            Everything You Get Right Now
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {(() => {
              const baseItems = [
                {
                  icon: <Scissors className="h-8 w-8" />,
                  title: "Complete Video Course",
                  description: "12 hours of step-by-step instruction covering every technique Sean uses daily",
                  value: "$297"
                },
                {
                  icon: <BookOpen className="h-8 w-8" />,
                  title: "Downloadable Guides",
                  description: "Reference materials you can print and keep in your station for quick review",
                  value: "$97"
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Private Community",
                  description: "24/7 access to fellow students and direct communication with Sean",
                  value: "$197"
                },
                {
                  icon: <MessageCircle className="h-8 w-8" />,
                  title: "Live Q&A Sessions",
                  description: "Monthly group calls where Sean answers your specific questions",
                  value: "$497"
                },
                {
                  icon: <Calendar className="h-8 w-8" />,
                  title: "30-Day Challenge",
                  description: "Structured daily practice with accountability and community support",
                  value: "$197"
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "Lifetime Updates",
                  description: "Every new technique, trend, and method Sean develops - yours forever",
                  value: "$297"
                }
              ];

              const bumpItems = [
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Stylist Survival Kit",
                  description: "Learn the 12 biggest mistakes beginners make and how to avoid them completely",
                  value: "$97"
                },
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "Red-Flag Client Guide",
                  description: "Identify and handle difficult clients before they become problems",
                  value: "$67"
                },
                {
                  icon: <CheckCircle className="h-8 w-8" />,
                  title: "First-Cut Action Plan",
                  description: "Exact step-by-step plan for your first professional cut so you never freeze up",
                  value: "$133"
                }
              ];

              const upsellItems = [
                {
                  icon: <Crown className="h-8 w-8" />,
                  title: "Premium Pricing Strategies",
                  description: "Watch clients happily pay $120+ without hesitation while you feel completely confident",
                  value: "$97"
                },
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: "Client Retention Secrets",
                  description: "Have clients texting you 'When's your next opening?' and booking 8 weeks in advance",
                  value: "$67"
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Social Media Marketing",
                  description: "Wake up to DMs saying 'I NEED an appointment' from followers who found you online",
                  value: "$97"
                },
                {
                  icon: <Diamond className="h-8 w-8" />,
                  title: "Shop Opening Blueprint",
                  description: "Walk into your own shop knowing exactly what to do, from lease to grand opening",
                  value: "$197"
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Financial Planning Tools",
                  description: "See your monthly income predictions and watch your savings grow with clear roadmaps",
                  value: "$97"
                },
                {
                  icon: <Lock className="h-8 w-8" />,
                  title: "Legal & Insurance Guide",
                  description: "Sleep soundly knowing you're fully protected and following every rule perfectly",
                  value: "$67"
                }
              ];

              let allItems = [...baseItems];
              
              if (purchaseDetails.hasBump) {
                allItems = [...allItems, ...bumpItems];
              }
              
              if (purchaseDetails.hasUpsell) {
                allItems = [...allItems, ...upsellItems];
              }
              
              return allItems;
            })().map((item, index) => (
              <div key={index} className="card-luxury rounded-lg p-8 text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-black">{item.icon}</div>
                </div>
                <h3 className="text-gradient-gold font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                <div className="text-luxury font-semibold">{item.value} Value</div>
              </div>
            ))}
          </div>
              {
                icon: <Scissors className="h-8 w-8" />,
                title: "Complete Video Course",
                description: "12 hours of step-by-step instruction covering every technique Sean uses daily",
                value: "$297"
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Downloadable Guides",
                description: "Reference materials you can print and keep in your station for quick review",
                value: "$97"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Private Community",
                description: "24/7 access to fellow students and direct communication with Sean",
                value: "$197"
              },
              {
                icon: <MessageCircle className="h-8 w-8" />,
                title: "Live Q&A Sessions",
                description: "Monthly group calls where Sean answers your specific questions",
                value: "$497"
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "30-Day Challenge",
                description: "Structured daily practice with accountability and community support",
                value: "$197"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Lifetime Updates",
                description: "Every new technique, trend, and method Sean develops - yours forever",
                value: "$297"
              }
            ].map((item, index) => (
              <div key={index} className="card-luxury rounded-lg p-8 text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-black">{item.icon}</div>
                </div>
                <h3 className="text-gradient-gold font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                <div className="text-luxury font-semibold">{item.value} Value</div>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-8 border-t border-luxury/30">
            <p className="text-2xl text-gray-300 mb-2">Total Value: <span className="text-gradient-gold font-bold">${purchaseDetails.totalValue.toLocaleString()}</span></p>
            <p className="text-3xl font-playfair font-bold text-gradient-gold">Your Investment: Only ${purchaseDetails.totalPaid}</p>
            <p className="text-luxury font-medium mt-2">You saved ${purchaseDetails.savings.toLocaleString()} today!</p>
          </div>
        </div>

        {/* Your Next Steps */}
        <div className="card-luxury rounded-lg p-10 mb-16">
          <h2 className="text-3xl font-playfair font-bold text-white mb-10 text-center flex items-center justify-center">
            <Target className="h-8 w-8 text-luxury mr-4" />
            Your Journey Starts Now
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {[
              {
                step: "1",
                title: "Check Your Email",
                description: "Your welcome email with login details is on its way (check spam if needed)",
                icon: <Mail className="h-6 w-6 text-black" />
              },
              {
                step: "2",
                title: "Set Up Your Space",
                description: "Create your practice area and gather the tools you'll need to practice",
                icon: <Zap className="h-6 w-6 text-black" />
              },
              {
                step: "3",
                title: "Start Module 1",
                description: "Begin with the fundamentals and build your foundation strong",
                icon: <Play className="h-6 w-6 text-black" />
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <div className="text-luxury mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="card-burgundy rounded-lg p-8 text-center">
            <h3 className="text-gradient-gold font-bold text-xl mb-4">📧 Important: Your Access Email</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong>Check your inbox in the next 5 minutes.</strong> If you don't see our email, check your spam folder and add our email to your contacts. This ensures you'll receive all course updates and exclusive bonuses.
            </p>
          </div>
        </div>

        {/* Instant Access Buttons */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card-luxury rounded-lg p-8 text-center">
            <BookOpen className="h-12 w-12 text-luxury mx-auto mb-6" />
            <h3 className="text-2xl font-playfair font-bold text-gradient-gold mb-4">Access Your Course</h3>
            <p className="text-gray-300 mb-6">
              Jump right into your training and start transforming your skills today
            </p>
            <button className="btn-luxury text-black font-bold text-lg px-8 py-4 rounded w-full">
              Enter Course Dashboard
            </button>
          </div>
          
          <div className="card-luxury rounded-lg p-8 text-center">
            <Users className="h-12 w-12 text-luxury mx-auto mb-6" />
            <h3 className="text-2xl font-playfair font-bold text-gradient-gold mb-4">Join The Community</h3>
            <p className="text-gray-300 mb-6">
              Connect with fellow students and get support from Sean and the team
            </p>
            <button className="btn-luxury text-black font-bold text-lg px-8 py-4 rounded w-full">
              Join Private Group
            </button>
          </div>
        </div>

        {/* Personal Message from Sean */}
        <div className="card-luxury rounded-lg p-10 mb-16 border-l-4 border-luxury">
          <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-8 text-center">A Personal Message from Sean</h2>
          <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-luxury-gradient rounded mb-4 hover:scale-110 transition-transform cursor-pointer">
                  <Play className="h-8 w-8 text-black ml-1" />
                </div>
                <p className="text-gray-300">Watch Sean's personal welcome message</p>
              </div>
            </div>
          </div>
          <div className="card-burgundy rounded-lg p-6">
            <p className="text-gray-300 leading-relaxed text-center">
              <em>"Welcome to the family! I'm genuinely excited to be part of your journey. Remember, every master was once a beginner. What matters is that you've taken the first step. I'm here to guide you every step of the way."</em>
            </p>
            <p className="text-gradient-gold font-semibold text-center mt-4">- Sean</p>
          </div>
        </div>

        {/* Study Plan & Resources */}
        <div className="card-luxury rounded-lg p-10 mb-16">
          <h2 className="text-2xl font-playfair font-bold text-white mb-8 text-center flex items-center justify-center">
            <Clock className="h-6 w-6 text-luxury mr-3" />
            Your 30-Day Success Roadmap
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                week: "Week 1-2",
                title: "Foundation Building",
                tasks: [
                  "Master basic cutting positions",
                  "Practice consultation techniques",
                  "Learn shape fundamentals"
                ]
              },
              {
                week: "Week 3-4",
                title: "Skill Development", 
                tasks: [
                  "Advanced cutting techniques",
                  "Work with different hair types",
                  "Practice finishing methods"
                ]
              },
              {
                week: "Week 5+",
                title: "Mastery & Business",
                tasks: [
                  "Perfect your signature style",
                  "Build client confidence",
                  "Price your skills properly"
                ]
              }
            ].map((phase, index) => (
              <div key={index} className="card-burgundy rounded-lg p-6">
                <div className="text-gradient-gold font-bold text-lg mb-3">{phase.week}</div>
                <h3 className="text-white font-semibold text-xl mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="h-4 w-4 text-luxury mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Support & Help */}
        <div className="card-luxury rounded-lg p-10 mb-16">
          <h2 className="text-2xl font-playfair font-bold text-white mb-8 text-center">We're Here to Help You Succeed</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-gradient-gold font-bold text-xl">Get Help Anytime:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MessageCircle className="h-5 w-5 text-luxury mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Email Support</p>
                    <p className="text-gray-300 text-sm">support@mackdaddyscourse.com</p>
                    <p className="text-gray-400 text-xs">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-luxury mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Community Support</p>
                    <p className="text-gray-300 text-sm">Get help from fellow students 24/7</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-luxury mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Monthly Live Q&A</p>
                    <p className="text-gray-300 text-sm">Direct access to Sean every month</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-gradient-gold font-bold text-xl">Quick Resources:</h3>
              <div className="space-y-3">
                <button className="w-full text-left border border-luxury/30 rounded-lg p-4 hover:border-luxury transition-colors duration-300">
                  <div className="flex items-center">
                    <Download className="h-5 w-5 text-luxury mr-3" />
                    <span className="text-white">Download Practice Sheets</span>
                  </div>
                </button>
                <button className="w-full text-left border border-luxury/30 rounded-lg p-4 hover:border-luxury transition-colors duration-300">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-luxury mr-3" />
                    <span className="text-white">Course Curriculum Guide</span>
                  </div>
                </button>
                <button className="w-full text-left border border-luxury/30 rounded-lg p-4 hover:border-luxury transition-colors duration-300">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-luxury mr-3" />
                    <span className="text-white">Student Success Stories</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Final Encouragement */}
        <div className="text-center">
          <div className="card-luxury rounded-lg p-12 mb-12 border-l-4 border-luxury">
            <Crown className="h-16 w-16 text-luxury mx-auto mb-8" />
            <h2 className="text-3xl font-playfair font-bold text-gradient-gold mb-6">You're Going to Love What Comes Next</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              Today marks the beginning of something special. In just 30 days, you'll look back at this moment as the turning point in your career. The skills you're about to learn will serve you for life, and the confidence you'll gain will transform not just your cutting, but how you see yourself as a professional.
            </p>
            <div className="card-burgundy rounded-lg p-8 max-w-3xl mx-auto">
              <p className="text-gradient-gold font-semibold text-2xl mb-4">
                🚀 Your transformation starts NOW!
              </p>
              <p className="text-gray-300 text-lg">
                Check your email, access your course, and take that first step. We're incredibly excited to watch you grow into the stylist you've always wanted to be.
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