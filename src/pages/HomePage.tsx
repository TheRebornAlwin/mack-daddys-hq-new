import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Play, Star, ArrowRight, Users, Clock, Award, Gift, Crown, Diamond, Target, TrendingUp, Scissors, Shield, Menu, X, ChevronDown, ExternalLink, Zap, Heart, BookOpen, MessageCircle, Mail, Phone, MapPin, Timer, Plus, Minus } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCTAClick = () => {
    navigate('/checkout');
  };

  const faqData = [
    {
      question: "How long does the course take to complete?",
      answer: "The course is designed to be completed at your own pace. Most students finish the core content within 4-6 weeks, practicing 1-2 hours per day. However, you have lifetime access, so you can take as long as you need to master each technique."
    },
    {
      question: "Do I need prior experience to start?",
      answer: "No prior experience is required! The course starts with absolute fundamentals and builds systematically. Whether you're completely new to hair cutting or looking to improve existing skills, the course is designed to meet you where you are."
    },
    {
      question: "What tools do I need to get started?",
      answer: "You'll need basic cutting tools: professional scissors, a good comb set, sectioning clips, and a spray bottle. We provide a complete tool list and recommendations for quality equipment that won't break the bank."
    },
    {
      question: "Is there ongoing support after I complete the course?",
      answer: "Absolutely! You get lifetime access to the private community, monthly live Q&A calls with Sean, and all future course updates. Plus, our support team is always available to help with any questions."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 365-day money-back guarantee. If you're not completely satisfied with the course for any reason within a full year, we'll refund your purchase completely. No questions asked."
    },
    {
      question: "Will this work for different hair types?",
      answer: "Yes! The course covers cutting techniques for all hair types - straight, wavy, curly, and coily hair. Sean demonstrates how to adapt the Shape & Flow system for different textures, lengths, and styles."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Luxury geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="luxury-shape luxury-shape-1 top-20 right-20"></div>
        <div className="luxury-shape luxury-shape-2 bottom-20 left-20" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Header */}
      <header className="bg-black/10 backdrop-blur-2xl border-b border-luxury/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Scissors className="h-8 w-8 text-luxury-gold mr-4" />
              <span className="text-2xl font-playfair font-bold tracking-wider text-gradient-gold">MACK DADDY'S</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-luxury transition-colors duration-300">Home</a>
              <a href="#course" className="text-gray-300 hover:text-luxury transition-colors duration-300">Course</a>
              <a href="#about" className="text-gray-300 hover:text-luxury transition-colors duration-300">About</a>
              <a href="#testimonials" className="text-gray-300 hover:text-luxury transition-colors duration-300">Reviews</a>
              <a href="#faq" className="text-gray-300 hover:text-luxury transition-colors duration-300">FAQ</a>
              <button
                onClick={() => navigate('/contact')}
                className="text-gray-300 hover:text-luxury transition-colors duration-300"
              >
                Contact
              </button>
              <button
                onClick={handleCTAClick}
                className="btn-luxury text-black font-bold px-6 py-3 rounded"
              >
                Get Started
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-luxury transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-luxury/20">
              <nav className="flex flex-col space-y-4 pt-4">
                <a href="#home" className="text-gray-300 hover:text-luxury transition-colors duration-300">Home</a>
                <a href="#course" className="text-gray-300 hover:text-luxury transition-colors duration-300">Course</a>
                <a href="#about" className="text-gray-300 hover:text-luxury transition-colors duration-300">About</a>
                <a href="#testimonials" className="text-gray-300 hover:text-luxury transition-colors duration-300">Reviews</a>
                <a href="#faq" className="text-gray-300 hover:text-luxury transition-colors duration-300">FAQ</a>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-left text-gray-300 hover:text-luxury transition-colors duration-300"
                >
                  Contact
                </button>
                <button
                  onClick={handleCTAClick}
                  className="btn-luxury text-black font-bold px-6 py-3 rounded w-full mt-4"
                >
                  Get Started
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column - Shifted Up */}
            <div className="lg:col-span-7 text-center lg:text-left mb-12 lg:mb-0 lg:self-start">
              <div className={`space-y-8 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
                
                {/* Trust Badge */}
                <div className="flex justify-center lg:justify-start">
                  <div className="badge-premium rounded-full px-6 py-3">
                    <Crown className="h-5 w-5 text-luxury-gold mr-2" />
                    <span className="text-white font-medium">MASTER CRAFTSMAN TRAINING</span>
                  </div>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
                  Master the Art of{' '}
                  <span className="text-gradient-gold">Perfect Cuts</span>{' '}
                  Every Single Time
                </h1>

                {/* Subheading */}
                <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl lg:max-w-none">
                  Learn Sean's revolutionary <strong className="text-luxury">Shape & Flow System</strong> that's helped over 5,000 stylists create stunning cuts that clients love and pay premium prices for.
                </p>

                {/* Trust Factors */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-luxury-gold mr-2" />
                    <span className="text-gray-300">5,000+ Students</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-luxury-gold mr-2" />
                    <span className="text-gray-300">365-Day Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-luxury-gold mr-2" />
                    <span className="text-gray-300">Lifetime Access</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={handleCTAClick}
                    className="btn-luxury text-black font-bold text-xl px-10 py-5 rounded shadow-2xl"
                  >
                    Start Your Transformation Today
                  </button>
                </div>

                {/* Secondary Button */}
                <div className="pt-2">
                  <button
                    onClick={() => navigate('/courses')}
                    className="text-luxury hover:text-luxury-gold transition-colors duration-300 font-medium text-lg underline flex items-center justify-center lg:justify-start"
                  >
                    View Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>

              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative">
              <div className="flex flex-col items-end justify-between gap-y-8">
                
                {/* Video Placeholder */}
                <div className="card-luxury rounded-lg p-2 max-w-md mx-auto w-full">
                  <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video h-48 w-full"></div>
                </div>

                {/* Testimonial */}
                <div className="card-luxury rounded-lg p-6 sm:p-8 max-w-md mx-auto w-full">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-luxury fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg mb-4 italic leading-relaxed">
                    "This course completely transformed my cutting technique. I went from struggling with basic cuts to clients specifically requesting me. Sean's Shape & Flow system is pure gold!"
                  </p>
                  <p className="text-gradient-gold font-semibold">- Jessica Martinez, Professional Stylist</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            {[
              { number: "5,000+", label: "Students Trained", description: "Professional stylists worldwide have transformed their careers with our proven system" },
              { number: "98%", label: "Success Rate", description: "Students report significant improvement in their cutting skills within 30 days" },
              { number: "30+", label: "Years Experience", description: "Sean's decades of experience distilled into easy-to-follow lessons" },
              { number: "24/7", label: "Community Support", description: "Get help anytime from fellow students and expert instructors" }
            ].map((stat, index) => (
              <div key={index} className="text-center stats-badge">
                <div className="card-luxury rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-gradient-gold mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                  <div className="stats-tooltip">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section id="course" className="relative z-10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className={`text-center mb-20 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6">
              <BookOpen className="h-8 w-8 text-black" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-8 leading-tight">
              What You'll Learn <span className="text-gradient-gold">Inside</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to transform from someone who cuts hair to someone who creates art. 
              Master the complete system that took Sean 30+ years to perfect.
            </p>
          </div>

          {/* Course Modules */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            {[
              {
                icon: <Scissors className="h-8 w-8" />,
                title: "Shape & Flow Fundamentals",
                lessons: ["Understanding Face Shapes", "Hair Growth Patterns", "The Golden Ratio Method", "Natural Flow Principles"],
                description: "Master the foundation that makes every cut look effortlessly perfect"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Advanced Cutting Techniques",
                lessons: ["Precision Sectioning", "Layering Mastery", "Texturizing Methods", "Finishing Touches"],
                description: "Professional techniques that separate good stylists from great ones"
              },
              {
                icon: <Crown className="h-8 w-8" />,
                title: "Consultation Mastery",
                lessons: ["Reading Your Client", "Setting Expectations", "Problem Solving", "Upselling Services"],
                description: "Build trust and command premium prices through expert consultations"
              },
              {
                icon: <Diamond className="h-8 w-8" />,
                title: "Styling & Finishing",
                lessons: ["Product Knowledge", "Tool Mastery", "Styling Techniques", "Final Touches"],
                description: "Complete the look with professional styling that wows every client"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Client Experience",
                lessons: ["Service Flow", "Communication Skills", "Handling Challenges", "Building Loyalty"],
                description: "Create an experience that keeps clients coming back and referring others"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Business Fundamentals",
                lessons: ["Pricing Your Services", "Building Your Brand", "Social Media", "Growing Your Business"],
                description: "Turn your new skills into a thriving, profitable career"
              }
            ].map((module, index) => (
              <div 
                key={index} 
                className={`card-luxury rounded-lg p-6 sm:p-8 group hover:transform hover:-translate-y-2 transition-all duration-500 slide-in-luxury`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-black">{module.icon}</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-white mb-4 group-hover:text-luxury transition-colors duration-300">
                  {module.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {module.description}
                </p>
                <ul className="space-y-2">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <CheckCircle className="h-4 w-4 text-luxury-gold mr-3 flex-shrink-0" />
                      <span className="text-sm">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button
              onClick={handleCTAClick}
              className="btn-luxury text-black font-bold text-xl px-12 py-6 rounded shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              START YOUR TRANSFORMATION
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Content */}
            <div className={`space-y-8 ${isVisible ? 'slide-in-luxury' : 'opacity-0'}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6 lg:mx-0 mx-auto">
                <Scissors className="h-8 w-8 text-black" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight text-center lg:text-left">
                Meet Your <span className="text-gradient-gold">Master Instructor</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Sean "Mack Daddy" Johnson has been perfecting the art of hair cutting for over 30 years. 
                  What started as a passion in a small neighborhood barbershop has evolved into a revolutionary 
                  system that's transformed thousands of careers.
                </p>
                <p>
                  His <strong className="text-luxury">Shape & Flow Method</strong> isn't just theory—it's a 
                  proven system developed through decades of cutting every hair type, face shape, and style 
                  imaginable. When other stylists were guessing, Sean was developing a science.
                </p>
                <p>
                  Now, he's condensing 30+ years of expertise into a comprehensive course that takes you from 
                  basic cuts to mastery in weeks, not decades.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "30+", label: "Years Experience" },
                  { number: "50,000+", label: "Cuts Completed" },
                  { number: "5,000+", label: "Students Trained" },
                  { number: "98%", label: "Success Rate" }
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-gradient-gold">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className={`lg:order-last ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
              <div className="card-luxury rounded-lg p-2 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg"
                  alt="Professional stylist cutting hair"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className={`text-center mb-20 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6">
              <Star className="h-8 w-8 text-black" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-8 leading-tight">
              Success <span className="text-gradient-gold">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real transformations from real students. See how Sean's system has changed careers and lives.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            {[
              {
                name: "Sarah Chen",
                title: "Salon Owner",
                quote: "I went from $40 cuts to $120 cuts in just 3 months. The Shape & Flow system completely changed how I approach every client. My book is now full months in advance!",
                achievement: "300% price increase",
                image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg"
              },
              {
                name: "Marcus Rodriguez",
                title: "Independent Stylist", 
                quote: "Sean's consultation techniques alone paid for the entire course. I'm now confident discussing any style with any client. My confidence skyrocketed overnight!",
                achievement: "Doubled client base",
                image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg"
              },
              {
                name: "Amanda Foster",
                title: "Beauty School Graduate",
                quote: "I wish I had this course in beauty school. Sean teaches things they never covered - the real secrets that make the difference between good and great.",
                achievement: "Hired immediately",
                image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className={`card-luxury rounded-lg p-8 text-center group hover:transform hover:-translate-y-2 transition-all duration-500 slide-in-luxury`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-luxury fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-gradient-gold font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  <div className="badge-burgundy rounded-full px-3 py-1 mt-2">
                    <span className="text-white text-xs font-medium">{testimonial.achievement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-20 lg:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Header */}
          <div className={`text-center mb-20 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6">
              <Gift className="h-8 w-8 text-black" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-8 leading-tight">
              Your <span className="text-gradient-gold">Investment</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your career for less than the cost of a single premium haircut
            </p>
          </div>

          {/* Pricing Card */}
          <div className={`max-w-2xl mx-auto ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            <div className="card-luxury rounded-lg p-10 lg:p-12 text-center shadow-2xl border border-luxury/30">
              <div className="badge-premium rounded-full px-6 py-3 mb-8">
                <Crown className="h-5 w-5 text-luxury-gold mr-2" />
                <span className="text-white font-medium">COMPLETE MASTERY COURSE</span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-6">
                Master the Art of Perfect Cuts
              </h3>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-gray-400 text-2xl mr-6">Normal Price:</span>
                  <span className="text-gray-400 text-2xl line-through">$297</span>
                </div>
                <div className="flex items-center justify-center mb-6">
                  <span className="text-gradient-gold text-3xl mr-6 font-medium">Today Only:</span>
                  <span className="text-5xl lg:text-6xl font-playfair font-bold text-gradient-gold-price">$47</span>
                </div>
              </div>

              {/* What's Included */}
              <div className="space-y-4 mb-10 text-left">
                {[
                  "Complete Shape & Flow Mastery System",
                  "Advanced Consultation Techniques", 
                  "All Hair Types Cutting Methods",
                  "Modern Finishing & Styling",
                  "Private Student Community Access",
                  "Lifetime Course Updates",
                  "30-Day Money-Back Guarantee"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-luxury-gold mr-4 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={handleCTAClick}
                className="w-full btn-luxury text-black font-bold text-xl py-6 rounded shadow-2xl hover:scale-105 transition-transform duration-300 mb-6"
              >
                Get Instant Access Now
              </button>

              {/* Guarantee */}
              <div className="flex items-center justify-center text-sm text-gray-400">
                <Shield className="h-4 w-4 mr-2" />
                <span>365-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <div className={`max-w-2xl mx-auto mt-12 ${isVisible ? 'slide-in-luxury-delayed-2' : 'opacity-0'}`}>
            <div className="card-luxury rounded-lg p-6 text-center border-l-4 border-luxury">
              <div className="flex items-center justify-center mb-3">
                <Timer className="h-5 w-5 text-luxury-gold mr-3" />
                <span className="font-medium text-gradient-gold">Limited Time Offer</span>
              </div>
              <p className="text-white font-medium mb-2">
                Price increases to $297 after 2,000 students join
              </p>
              <p className="text-gray-300">
                Current enrollment: <span className="text-gradient-gold font-bold">1,927 students</span>
              </p>
              <div className="w-full bg-gray-800 rounded-full h-2 mt-4">
                <div className="bg-luxury-gradient h-2 rounded-full" style={{ width: '96.35%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6">
          {/* Section Header */}
          <div className={`text-center mb-20 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6">
              <MessageCircle className="h-8 w-8 text-black" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-8 leading-tight">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about the course
            </p>
          </div>

          {/* FAQ Items */}
          <div className={`space-y-6 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`card-luxury rounded-lg overflow-hidden slide-in-luxury`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 sm:p-8 text-left flex items-center justify-between hover:bg-luxury/5 transition-colors duration-300"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-white pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFaqIndex === index ? (
                      <Minus className="h-6 w-6 text-luxury" />
                    ) : (
                      <Plus className="h-6 w-6 text-luxury" />
                    )}
                  </div>
                </button>
                <div className={`faq-answer ${openFaqIndex === index ? 'open' : ''}`}>
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`space-y-8 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-luxury-gradient rounded mb-8">
              <Crown className="h-10 w-10 text-black" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight">
              Ready to <span className="text-gradient-gold">Transform</span> Your Career?
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Join thousands of successful stylists who've already mastered the Shape & Flow system. 
              Your transformation starts with a single click.
            </p>

            <div className="space-y-6">
              <button
                onClick={handleCTAClick}
                className="btn-luxury text-black font-bold text-2xl px-12 py-6 rounded shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                Get Instant Access Now
              </button>
              
              <div className="flex items-center justify-center text-gray-400">
                <Shield className="h-4 w-4 mr-2" />
                <span>365-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black border-t border-luxury/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Scissors className="h-8 w-8 text-luxury-gold mr-4" />
                <span className="text-2xl font-playfair font-bold tracking-wider text-gradient-gold">MACK DADDY'S</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Transforming passionate stylists into master craftsmen through proven techniques, 
                expert guidance, and a supportive community.
              </p>
              <div className="flex space-x-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-luxury fill-current" />
                ))}
                <span className="text-gray-300 ml-3">5,000+ Happy Students</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gradient-gold font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-luxury transition-colors duration-300">Home</a></li>
                <li><a href="#course" className="text-gray-300 hover:text-luxury transition-colors duration-300">Course</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-luxury transition-colors duration-300">About</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-luxury transition-colors duration-300">Reviews</a></li>
                <li><button onClick={() => navigate('/contact')} className="text-gray-300 hover:text-luxury transition-colors duration-300">Contact</button></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-gradient-gold font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><button onClick={() => navigate('/terms')} className="text-gray-300 hover:text-luxury transition-colors duration-300">Terms & Conditions</button></li>
                <li><button onClick={() => navigate('/privacy')} className="text-gray-300 hover:text-luxury transition-colors duration-300">Privacy Policy</button></li>
                <li><a href="#" className="text-gray-300 hover:text-luxury transition-colors duration-300">Refund Policy</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Mack Daddy's Education LLC. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@mackdaddyscourse.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>1-888-MACK-CUT</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}