import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Play, 
  Users, 
  Award, 
  Clock, 
  Shield, 
  Scissors, 
  Crown, 
  Diamond, 
  Target, 
  TrendingUp, 
  Zap, 
  Heart, 
  Gift, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail,
  Lock,
  Timer
} from 'lucide-react';
import TestimonialsSection from '../components/TestimonialsSection';

export default function HomePage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Cycle through stats every 3 seconds
    const timer = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: "2,000+", label: "Students Trained", description: "Join thousands of successful stylists who've transformed their careers with Sean's proven system" },
    { number: "30+", label: "Years Experience", description: "Sean brings three decades of cutting expertise, distilled into easy-to-follow lessons" },
    { number: "365", label: "Day Guarantee", description: "Try the course risk-free with our full money-back guarantee - we're that confident you'll love it" }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Luxury geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="luxury-shape luxury-shape-1 top-20 right-20"></div>
        <div className="luxury-shape luxury-shape-2 bottom-20 left-20" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-20 bg-black/10 backdrop-blur-2xl border-b border-luxury/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Scissors className="h-8 w-8 text-luxury-gold mr-4" />
              <span className="text-3xl font-playfair font-bold tracking-wider text-gradient-gold">MACK DADDY'S</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
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
                onClick={() => navigate('/checkout')}
                className="btn-luxury text-black font-bold px-6 py-3 rounded"
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
              <div className="badge-premium rounded-full px-6 py-3 inline-flex items-center">
                <Crown className="h-5 w-5 text-luxury-gold mr-2" />
                <span className="text-white font-medium">MASTER BARBER TRAINING</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
                Master the Art of 
                <span className="text-gradient-gold block">Cutting Hair</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Learn Sean's proven <strong className="text-luxury">Shape & Flow System</strong> that transforms 
                beginners into confident professionals. Master every cut, every texture, every time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => navigate('/checkout')}
                  className="btn-luxury text-black font-bold text-xl px-8 py-4 rounded group"
                >
                  <span className="flex items-center">
                    Start Your Journey
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                
                <button className="flex items-center text-luxury hover:text-luxury-dark transition-colors duration-300 text-lg group">
                  <Play className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Watch Preview
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className={`relative ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
              <div className="relative">
                <img 
                  src="/images/seancuttinggirlshair.jpeg"
                  alt="Sean demonstrating professional hair cutting technique"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-lg"></div>
                
                {/* Floating Stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="stats-badge bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-luxury/30">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gradient-gold mb-1">
                        {stats[currentStat].number}
                      </div>
                      <div className="text-white font-medium text-sm">
                        {stats[currentStat].label}
                      </div>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="stats-tooltip">
                      {stats[currentStat].description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-black relative">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 leading-tight">
              What You'll <span className="text-gradient-gold">Master</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Sean's complete system breaks down every technique into simple, repeatable steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: <Scissors className="h-8 w-8" />,
                title: "Shape & Flow Mastery",
                description: "Learn Sean's signature approach to creating cuts that grow out beautifully for months"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Perfect Consultations",
                description: "Master the art of reading clients and delivering exactly what they envision"
              },
              {
                icon: <Diamond className="h-8 w-8" />,
                title: "All Hair Textures",
                description: "Confidently cut straight, wavy, curly, and coily hair with precision techniques"
              },
              {
                icon: <Crown className="h-8 w-8" />,
                title: "Advanced Finishing",
                description: "The professional touches that make your cuts look magazine-ready"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Speed & Efficiency",
                description: "Cut faster without sacrificing quality using Sean's proven workflow"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Business Confidence",
                description: "Price your skills properly and build a loyal client base that pays premium rates"
              }
            ].map((skill, index) => (
              <div 
                key={index} 
                className={`card-luxury rounded-lg p-10 text-center group hover:transform hover:-translate-y-4 transition-all duration-500 ${isVisible ? 'slide-in-luxury' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-luxury-gradient rounded mb-8 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-black">{skill.icon}</div>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-gradient-gold mb-6 group-hover:text-white transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Sean Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left - Sean's Image */}
            <div className={`relative ${isVisible ? 'slide-in-luxury' : 'opacity-0'}`}>
              <div className="relative">
                <img 
                  src="/images/darkbarbershop.jpeg"
                  alt="Sean in his professional barbershop"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
                
                {/* Achievement Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="badge-premium rounded-lg px-6 py-4 backdrop-blur-sm">
                    <p className="text-white font-bold text-center">
                      30+ Years of Cutting Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className={`space-y-8 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
              <div className="badge-premium rounded-full px-6 py-3 inline-flex items-center">
                <Award className="h-5 w-5 text-luxury-gold mr-2" />
                <span className="text-white font-medium">MEET YOUR INSTRUCTOR</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight">
                Learn From a 
                <span className="text-gradient-gold block">True Master</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">Sean has spent over 30 years</strong> perfecting his craft, 
                  cutting hair for celebrities, models, and everyday people who demand perfection.
                </p>
                <p>
                  His <strong className="text-luxury">Shape & Flow System</strong> isn't just theory—it's 
                  battle-tested techniques that work in the real world, under pressure, with every hair type.
                </p>
                <p>
                  <strong className="text-white">Now he's sharing everything</strong> he's learned in a 
                  comprehensive course that takes you from beginner to confident professional.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "30+", label: "Years Experience" },
                  { number: "10K+", label: "Cuts Completed" },
                  { number: "500+", label: "Students Trained" },
                  { number: "100%", label: "Success Rate" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gradient-gold mb-2">{stat.number}</div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-32 bg-gradient-to-br from-black to-gray-900 relative">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 leading-tight">
              Inside the <span className="text-gradient-gold">Course</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              See exactly what you'll learn in this comprehensive training system
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Video Preview */}
            <div className={`relative ${isVisible ? 'slide-in-luxury' : 'opacity-0'}`}>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                <div className="aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-luxury-gradient rounded mb-6 hover:scale-110 transition-transform cursor-pointer">
                      <Play className="h-8 w-8 text-black ml-1" />
                    </div>
                    <p className="text-gray-300 text-lg">Watch Course Preview</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Modules */}
            <div className={`space-y-8 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
              <h3 className="text-3xl font-playfair font-bold text-white mb-8">
                Complete Training Modules
              </h3>
              
              {[
                {
                  module: "Module 1",
                  title: "Cutting Foundations",
                  lessons: "6 lessons • 2.5 hours",
                  description: "Master the basics: tools, sectioning, and fundamental techniques"
                },
                {
                  module: "Module 2", 
                  title: "Shape & Flow System",
                  lessons: "8 lessons • 4 hours",
                  description: "Sean's signature approach to creating beautiful, lasting cuts"
                },
                {
                  module: "Module 3",
                  title: "Advanced Techniques", 
                  lessons: "10 lessons • 5.5 hours",
                  description: "Professional-level methods for complex cuts and all hair types"
                }
              ].map((module, index) => (
                <div key={index} className="card-luxury rounded-lg p-8 group hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-luxury-gradient rounded flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="text-black font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-luxury font-medium text-sm">{module.module}</span>
                        <span className="text-gray-400 text-sm">{module.lessons}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-luxury transition-colors duration-300">
                        {module.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Get Access Now Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight text-gradient-gold text-center">
                Get Access Now
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed text-center">
                Join thousands of successful stylists who've transformed their careers
              </p>
              
              <div className="space-y-6">
                {[
                  "Complete Shape & Flow Mastery System",
                  "Advanced Consultation Techniques", 
                  "All Hair Types Cutting Methods",
                  "Modern Finishing Techniques",
                  "Lifetime Access & Updates",
                  "Private Community Access"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-gradient-gold mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image */}
            <div className={`relative ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
              <img 
                src="/images/bin11.jpg"
                alt="Professional barber at work"
                className="w-full h-auto rounded-lg shadow-2xl"
                style={{ marginTop: '-2rem' }}
              />
            </div>
          </div>

          {/* Centered Pricing Section */}
          <div className="text-center mt-20">
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-gradient-gold mb-8">
              Become a Master Barber Today
            </h3>
            
            <div className="flex items-center justify-center gap-6 mb-4">
              <span className="text-5xl md:text-6xl font-bold text-gradient-gold">$47</span>
              <div className="text-left">
                <div className="text-gray-400 text-xl line-through">Regular price: $297</div>
                <div className="text-luxury text-lg">Limited time offer</div>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg mb-8">one-time</p>
            
            <button 
              onClick={() => navigate('/checkout')}
              className="btn-luxury text-black font-bold text-2xl px-12 py-6 rounded mx-auto block mb-8"
            >
              GET ACCESS NOW
            </button>
            
            <p className="text-gray-400 text-sm text-center">
              All orders are 100% SAFE using our SECURE SSL encrypted server
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-black relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`space-y-12 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight">
              Your <span className="text-gradient-gold">Success</span> Starts Today
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Don't let another day pass wondering "what if." Join the thousands of stylists who've 
              transformed their careers with Sean's proven system.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
              <div className="card-luxury rounded-lg p-6 text-center">
                <Shield className="h-8 w-8 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-gradient-gold font-bold text-lg mb-2">365-Day Money-Back Guarantee</h3>
                <p className="text-gray-300 text-sm">Try the course risk-free with our full guarantee</p>
              </div>
              
              <div className="card-luxury rounded-lg p-6 text-center">
                <Lock className="h-8 w-8 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-gradient-gold font-bold text-lg mb-2">Secure Checkout</h3>
                <p className="text-gray-300 text-sm">SSL encrypted and powered by Stripe</p>
              </div>
            </div>

            <button 
              onClick={() => navigate('/checkout')}
              className="btn-luxury text-black font-bold text-2xl px-12 py-6 rounded"
            >
              <span className="flex items-center">
                Start Your Transformation
                <ArrowRight className="ml-4 h-6 w-6" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Scissors className="h-8 w-8 text-luxury-gold mr-4" />
                <span className="text-2xl font-playfair font-bold tracking-wider text-gradient-gold">MACK DADDY'S</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Master the art of cutting hair with Sean's proven Shape & Flow System. 
                Transform your skills and build the career you've always wanted.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <div className="space-y-4">
                <button 
                  onClick={() => navigate('/courses')}
                  className="block text-gray-400 hover:text-luxury transition-colors duration-300"
                >
                  Course Details
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="block text-gray-400 hover:text-luxury transition-colors duration-300"
                >
                  Contact Us
                </button>
                <button 
                  onClick={() => navigate('/terms')}
                  className="block text-gray-400 hover:text-luxury transition-colors duration-300"
                >
                  Terms & Conditions
                </button>
                <button 
                  onClick={() => navigate('/privacy')}
                  className="block text-gray-400 hover:text-luxury transition-colors duration-300"
                >
                  Privacy Policy
                </button>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-3" />
                  <span className="text-sm">support@mackdaddyscourse.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-3" />
                  <span className="text-sm">1-888-MACK-CUT</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MessageCircle className="h-4 w-4 mr-3" />
                  <span className="text-sm">Live Chat Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Mack Daddy's Education LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}