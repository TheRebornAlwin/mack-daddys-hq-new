import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Play, 
  Clock, 
  Users, 
  Award, 
  Shield, 
  Scissors, 
  Crown, 
  Diamond, 
  Target, 
  TrendingUp, 
  Gift, 
  Menu, 
  X, 
  ChevronDown,
  Heart,
  Zap,
  BookOpen,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';

interface StatsBadgeProps {
  number: string;
  label: string;
  tooltip: string;
}

const StatsBadge: React.FC<StatsBadgeProps> = ({ number, label, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="stats-badge relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="text-center group">
        <div className="text-2xl md:text-3xl font-bold text-gradient-gold mb-2">{number}</div>
        <div className="text-gray-300 text-sm font-medium">{label}</div>
      </div>
      <div className={`stats-tooltip ${showTooltip ? 'show' : ''}`}>
        {tooltip}
      </div>
    </div>
  );
};

export default function HomePage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => {
    navigate('/checkout');
  };

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Los Angeles, CA", 
      rating: 5,
      text: "This course changed everything. I went from charging $35 to $85 per cut in just 2 months. Sean's techniques are pure gold.",
      achievement: "Increased prices by 143%"
    },
    {
      name: "Marcus Rodriguez", 
      location: "Miami, FL",
      rating: 5,
      text: "The consultation techniques alone made me $3,000 extra this month. Clients actually thank me for charging more now.",
      achievement: "$3K+ monthly increase"
    },
    {
      name: "Jennifer Chen",
      location: "New York, NY",
      rating: 5, 
      text: "I was struggling to book clients. Now I'm booked 6 weeks out and turning people away. Sean's system works.",
      achievement: "Booked 6 weeks ahead"
    },
    {
      name: "David Thompson",
      location: "Chicago, IL",
      rating: 5,
      text: "Best investment I ever made. The shape and flow method makes every cut look effortless and professional.",
      achievement: "Salon owner, 3 locations"
    },
    {
      name: "Ashley Williams",
      location: "Atlanta, GA", 
      rating: 5,
      text: "Sean's teaching style is incredible. Everything finally clicked and now cutting feels natural and intuitive.",
      achievement: "Top stylist at premium salon"
    },
    {
      name: "Carlos Mendez",
      location: "Phoenix, AZ",
      rating: 5,
      text: "The advanced techniques transformed my work. Clients specifically ask for me now and pay premium prices happily.",
      achievement: "80% repeat client rate"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How long does it take to complete the course?",
      answer: "Most students complete the core curriculum in 4-6 weeks when practicing 3-4 times per week. However, you have lifetime access, so you can learn at your own pace. Some students finish in 2 weeks with intensive practice, while others take 2-3 months."
    },
    {
      question: "Do I need experience to start this course?",
      answer: "Absolutely not! This course is designed for complete beginners. Sean starts from the very basics and builds up systematically. Whether you're starting from zero or have some experience, you'll benefit from Sean's unique approach to cutting."
    },
    {
      question: "What tools do I need?",
      answer: "You'll need basic cutting tools: professional shears, a razor, clips, and a spray bottle. Sean provides a detailed tools list with specific recommendations and where to get them at the best prices. The total investment for tools is typically $150-250."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes! We offer a full 365-day money-back guarantee. If you're not completely satisfied with your purchase for any reason within a full year, we'll refund every penny. No questions asked."
    },
    {
      question: "How is this different from cosmetology school?",
      answer: "This focuses purely on cutting mastery using Sean's proven Shape & Flow system. Unlike traditional schools that cover everything briefly, this goes deep on cutting techniques that actually work in the real world. You'll learn advanced methods that many cosmetology schools don't teach."
    },
    {
      question: "Can I access the course on mobile?",
      answer: "Yes! The course platform works perfectly on all devices - phone, tablet, laptop, or desktop. You can practice techniques while watching on your phone, or use a larger screen for detailed viewing. Everything syncs across your devices."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Luxury geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="luxury-shape luxury-shape-1 top-20 right-20"></div>
        <div className="luxury-shape luxury-shape-2 bottom-20 left-20" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 bg-black/10 backdrop-blur-2xl border-b border-luxury/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Scissors className="h-8 w-8 text-luxury-gold mr-4" />
              <span className="text-2xl font-playfair font-bold tracking-wider text-gradient-gold">MACK DADDY'S</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigate('/courses')}
                className="text-gray-300 hover:text-luxury transition-colors duration-300 font-medium"
              >
                Courses
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="text-gray-300 hover:text-luxury transition-colors duration-300 font-medium"
              >
                Contact
              </button>
              <button
                onClick={handleGetStarted}
                className="btn-luxury text-black font-bold px-6 py-3 rounded"
              >
                Enroll Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-luxury transition-colors duration-300"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-luxury/20">
              <div className="space-y-4">
                <button 
                  onClick={() => {
                    navigate('/courses');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-300 hover:text-luxury transition-colors duration-300 font-medium py-2"
                >
                  Courses
                </button>
                <button 
                  onClick={() => {
                    navigate('/contact');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-300 hover:text-luxury transition-colors duration-300 font-medium py-2"
                >
                  Contact
                </button>
                <button
                  onClick={() => {
                    handleGetStarted();
                    setMobileMenuOpen(false);
                  }}
                  className="btn-luxury text-black font-bold px-6 py-3 rounded w-full mt-4"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="badge-premium rounded-full px-6 py-3 mb-8 inline-flex items-center">
              <Crown className="h-5 w-5 text-luxury-gold mr-2" />
              <span className="text-white font-medium">MASTER BARBER TRAINING</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 leading-tight">
              Master The Art of 
              <br />
              <span className="text-gradient-gold">Precision Cutting</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Learn Sean's signature <strong className="text-gradient-gold">Shape & Flow System</strong> that's helped over 2,000 stylists transform their cutting skills and boost their income by an average of <strong className="text-luxury">$2,847 per month</strong>
            </p>

            {/* Hero Image */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/seancuttinggirlshair.jpeg"
                  alt="Sean demonstrating cutting technique"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="badge-safety rounded px-3 py-1 mb-2">
                    <span className="text-white text-sm font-medium">Live Training Footage</span>
                  </div>
                  <p className="text-white text-lg font-medium">Sean McLaughlin</p>
                  <p className="text-gray-300 text-sm">Master Barber & Instructor</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className={`${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
              <button
                onClick={handleGetStarted}
                className="btn-luxury text-black font-bold text-xl px-12 py-6 rounded mb-8 hover:scale-105 transition-transform duration-300"
              >
                <span className="flex items-center">
                  Start Your Transformation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </span>
              </button>
              
              <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>365-Day Guarantee</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>2,000+ Students</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-2 text-luxury fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="relative z-10 py-20 border-y border-luxury/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            <StatsBadge 
              number="2,000+" 
              label="Students Trained" 
              tooltip="Over 2,000 stylists have transformed their careers using Sean's cutting system, with many seeing immediate improvements in their technique and client satisfaction."
            />
            <StatsBadge 
              number="$2,847" 
              label="Avg Monthly Increase" 
              tooltip="Students report an average monthly income increase of $2,847 within 90 days of completing the course, through improved skills and confidence to charge premium prices."
            />
            <StatsBadge 
              number="97%" 
              label="Success Rate" 
              tooltip="97% of students who complete the course report significant improvement in their cutting skills and increased client satisfaction within 30 days."
            />
            <StatsBadge 
              number="30+ Years" 
              label="Sean's Experience" 
              tooltip="Sean has over 30 years of professional cutting experience, having trained at elite salons and developed techniques used by top stylists worldwide."
            />
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-20 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
              What You'll <span className="text-gradient-gold">Master</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              This isn't just another cutting course. It's a complete transformation system that takes you from uncertain to unstoppable.
            </p>
          </div>

          <div className={`grid lg:grid-cols-3 gap-12 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            {[
              {
                icon: <Scissors className="h-8 w-8" />,
                title: "Shape & Flow Mastery",
                description: "Learn Sean's signature system for creating cuts that look amazing from every angle and grow out beautifully.",
                highlights: ["Perfect sectioning", "Natural movement", "Face-flattering shapes"]
              },
              {
                icon: <Diamond className="h-8 w-8" />,
                title: "Advanced Techniques", 
                description: "Master professional methods that separate you from amateur cutters and command premium prices.",
                highlights: ["Precision layering", "Texture creation", "Modern finishing"]
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Consultation Mastery",
                description: "Read clients like a book and create cuts that exceed their expectations every single time.",
                highlights: ["Face shape analysis", "Lifestyle consultation", "Style recommendations"]
              }
            ].map((feature, index) => (
              <div key={index} className={`card-luxury rounded-lg p-10 group hover:transform hover:-translate-y-2 transition-all duration-300 slide-in-luxury`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-8 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-black">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-6 group-hover:text-luxury transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-luxury-gold mr-3 flex-shrink-0" />
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories - FIXED TESTIMONIALS SECTION */}
      <section className="relative z-10 py-32 bg-gradient-to-b from-black via-gray-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
              Success Stories From <span className="text-gradient-gold">Real Students</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              See how Sean's students transformed their careers and started earning what they're truly worth
            </p>
          </div>

          {/* Testimonials Slider - PROPERLY CENTERED AND SPACED */}
          <div className={`relative ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-6 px-4 sm:px-6 lg:px-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-80 sm:w-96 card-luxury rounded-lg p-8 group hover:transform hover:-translate-y-2 transition-all duration-300"
                  >
                    {/* Rating Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-luxury fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 italic text-center">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="text-center border-t border-gray-700 pt-6">
                      <h4 className="text-gradient-gold font-bold text-lg mb-1">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm mb-3">{testimonial.location}</p>
                      <div className="badge-premium rounded-full px-4 py-2">
                        <span className="text-white text-xs font-medium">{testimonial.achievement}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <div key={index} className="w-2 h-2 bg-luxury/30 rounded-full"></div>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-4 text-center">← Scroll to see more stories →</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="relative z-10 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 leading-tight">
                Stop Struggling With <span className="text-gradient-gold">Inconsistent Cuts</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  You know the feeling. One cut looks amazing, the next one... not so much. You're talented, but something's missing. That "something" is Sean's Shape & Flow system.
                </p>
                <p className="text-lg">
                  Instead of guessing your way through each cut, you'll have a proven framework that works every single time, on every hair type, for every face shape.
                </p>
              </div>
              
              <div className="mt-12 space-y-4">
                {[
                  "Never second-guess yourself during a cut again",
                  "Create stunning results that clients rave about",
                  "Build the confidence to charge premium prices",
                  "Master techniques that took Sean 30+ years to perfect"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-luxury-gold mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:order-first">
              <div className="relative">
                <img 
                  src="/images/darkbarbershop.jpeg"
                  alt="Professional barbershop setting"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="badge-safety rounded px-3 py-1 mb-2">
                    <span className="text-white text-sm font-medium">Professional Environment</span>
                  </div>
                  <p className="text-white font-medium">Master Your Craft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="relative z-10 py-32 bg-gradient-to-b from-black via-gray-900/20 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-20 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
              Complete <span className="text-gradient-gold">Curriculum</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform from uncertain to unstoppable, organized in a step-by-step system
            </p>
          </div>

          <div className={`space-y-8 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            {[
              {
                module: "Module 1",
                title: "Foundation & Setup",
                lessons: "4 Lessons • 2.5 Hours",
                description: "Master your tools, workspace, and basic positioning for professional results from day one.",
                topics: ["Professional tool selection", "Workspace optimization", "Basic cutting positions", "Safety protocols"]
              },
              {
                module: "Module 2", 
                title: "Shape & Flow System",
                lessons: "6 Lessons • 4 Hours",
                description: "Learn Sean's signature approach to creating beautiful, natural-looking cuts that clients love.",
                topics: ["Shape fundamentals", "Flow creation", "Face shape analysis", "Style adaptation"]
              },
              {
                module: "Module 3",
                title: "Advanced Techniques",
                lessons: "5 Lessons • 3 Hours", 
                description: "Master professional-level methods for complex cuts and challenging hair types.",
                topics: ["Precision layering", "Texture techniques", "Problem-solving methods", "Finishing touches"]
              },
              {
                module: "Module 4",
                title: "Client Mastery",
                lessons: "3 Lessons • 2 Hours",
                description: "Perfect your consultation skills and learn to exceed client expectations every time.",
                topics: ["Consultation framework", "Client communication", "Style recommendations", "Managing expectations"]
              }
            ].map((item, index) => (
              <div key={index} className={`card-luxury rounded-lg p-8 slide-in-luxury`} style={{ animationDelay: `${index * 150}ms` }}>
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div>
                    <div className="badge-premium rounded px-4 py-2 mb-4">
                      <span className="text-white font-medium text-sm">{item.module}</span>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-luxury font-medium text-sm">{item.lessons}</p>
                  </div>
                  <div>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                  <div>
                    <h4 className="text-gradient-gold font-semibold mb-3">Key Topics:</h4>
                    <ul className="space-y-2">
                      {item.topics.map((topic, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <CheckCircle className="h-4 w-4 text-luxury-gold mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
              Invest in Your <span className="text-gradient-gold">Future</span>
            </h2>
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
              This system typically takes stylists from $30-40 cuts to $80-120 cuts. Do the math on your return on investment.
            </p>
          </div>

          <div className={`card-luxury rounded-lg p-12 relative overflow-hidden ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            {/* Popular Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="badge-premium rounded-full px-6 py-2">
                <Crown className="h-4 w-4 text-luxury-gold mr-2" />
                <span className="text-white font-medium">MOST POPULAR</span>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-3xl font-playfair font-bold text-gradient-gold mb-6">
                Complete Cutting Mastery
              </h3>
              
              {/* Pricing */}
              <div className="mb-12">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-gray-400 text-2xl mr-4">Regular Price:</span>
                  <span className="text-gray-400 text-2xl line-through">$497</span>
                </div>
                <div className="flex items-center justify-center mb-8">
                  <span className="text-gradient-gold text-3xl mr-4 font-medium">Today Only:</span>
                  <span className="text-5xl font-playfair font-bold text-gradient-gold">$47</span>
                </div>
                <p className="text-luxury font-medium">90% OFF - Limited Time</p>
              </div>

              {/* What's Included */}
              <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
                {[
                  "Complete video training system (12+ hours)",
                  "Downloadable practice guides & templates", 
                  "Private student community access",
                  "Monthly live Q&A sessions with Sean",
                  "Lifetime access & future updates",
                  "365-day money-back guarantee"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-luxury-gold mr-4 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleGetStarted}
                className="btn-luxury text-black font-bold text-xl px-12 py-6 rounded mb-6 hover:scale-105 transition-transform duration-300"
              >
                <span className="flex items-center">
                  Enroll Now - $47
                  <ArrowRight className="ml-3 h-6 w-6" />
                </span>
              </button>

              <p className="text-gray-400 text-sm">
                💳 Secure checkout • 365-day guarantee • Instant access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`text-center mb-16 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about transforming your cutting skills
            </p>
          </div>

          <div className={`space-y-4 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            {faqData.map((faq, index) => (
              <div key={index} className="card-luxury rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-8 flex items-center justify-between hover:bg-luxury/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-luxury transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`faq-answer ${openFAQ === index ? 'open' : ''}`}>
                  <div className="px-8 pb-8">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`card-luxury rounded-lg p-12 ${isVisible ? 'slide-in-luxury-delayed-2' : 'opacity-0'}`}>
            <Crown className="h-16 w-16 text-luxury-gold mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
              Your Transformation <span className="text-gradient-gold">Starts Today</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              Every day you wait is another day of settling for cuts that don't showcase your true potential. 
              Join the thousands of stylists who've already transformed their careers with Sean's system.
            </p>

            <button
              onClick={handleGetStarted}
              className="btn-luxury text-black font-bold text-2xl px-16 py-8 rounded mb-8 hover:scale-105 transition-transform duration-300"
            >
              <span className="flex items-center">
                Start Your Transformation - $47
                <ArrowRight className="ml-4 h-8 w-8" />
              </span>
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                <span>365-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                <span>Lifetime Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 border-t border-luxury/20 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Scissors className="h-8 w-8 text-luxury-gold mr-4" />
                <span className="text-2xl font-playfair font-bold tracking-wider text-gradient-gold">MACK DADDY'S</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Transform your cutting skills with Sean's proven Shape & Flow system. 
                Join thousands of successful stylists who've mastered their craft.
              </p>
              <div className="flex space-x-4">
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-luxury fill-current" />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">4.9/5 from 2,000+ students</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gradient-gold font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => navigate('/courses')}
                    className="text-gray-300 hover:text-luxury transition-colors duration-300"
                  >
                    Course Details
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="text-gray-300 hover:text-luxury transition-colors duration-300"
                  >
                    Contact Support
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/terms')}
                    className="text-gray-300 hover:text-luxury transition-colors duration-300"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/privacy')}
                    className="text-gray-300 hover:text-luxury transition-colors duration-300"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-gradient-gold font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <Mail className="h-4 w-4 mr-3" />
                  <span className="text-sm">support@mackdaddyscourse.com</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Phone className="h-4 w-4 mr-3" />
                  <span className="text-sm">1-888-MACK-CUT</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <MessageCircle className="h-4 w-4 mr-3" />
                  <span className="text-sm">24/7 Community Support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Mack Daddy's Education LLC. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <Shield className="h-4 w-4" />
              <span>Secure Payments by Stripe</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}