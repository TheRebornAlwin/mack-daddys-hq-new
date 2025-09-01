import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Scissors, Users, Star, Clock, Award, Shield, ArrowRight, Target, TrendingUp, BookOpen, Zap, Timer, ChevronLeft, ChevronRight, Crown, ArrowDown, CheckCircle, Diamond, Gem, Banknote, GraduationCap, Trophy, Briefcase, X } from 'lucide-react';
import TestimonialsSection from '../components/TestimonialsSection';

export default function HomePage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStates, setTooltipStates] = useState<Record<string, boolean>>({});
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const getCurrentDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      month: 'long', 
      day: 'numeric' 
    };
    return now.toLocaleDateString('en-US', options);
  };
  
  const handleCheckoutClick = () => {
    navigate('/checkout');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const showTooltip = (id: string) => {
    setTooltipStates(prev => ({ ...prev, [id]: true }));
  };

  const hideTooltip = (id: string) => {
    setTooltipStates(prev => ({ ...prev, [id]: false }));
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden" style={{ minHeight: '135vh' }}>
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-all duration-700"
            style={{
              backgroundImage: 'url(/images/darkbarbershop.jpeg)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/90"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 grid lg:grid-cols-12 gap-16">
          <div className={`lg:col-span-7 ${isVisible ? 'slide-in-luxury' : 'opacity-0'}`} style={{ transform: 'translateY(-15px)' }}>
            {/* Developer Access Button */}
            <div className="absolute top-4 right-4 z-50">
              <button 
                onClick={() => navigate('/courses')}
                className="badge-premium rounded px-4 py-2 hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="h-4 w-4 text-luxury-gold mr-2 inline" />
                <span className="text-white font-medium text-sm">Courses</span>
              </button>
            </div>
            
            <div className="badge-premium rounded px-6 py-3 mb-12">
              <Crown className="h-4 w-4 text-luxury-gold mr-3" />
              <span className="text-white font-medium text-sm tracking-wide">MASTER CRAFTSMAN TRAINING</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-12 leading-relaxed tracking-tight pr-4">
              <span className="block text-white">Transform From</span>
              <span className="block">
                <span className="text-gradient-gold text-shadow-luxury pr-0.5">Beginner</span>
                <span className="text-white"> to</span>
              </span>
              <span className="block pb-2">
                <span className="text-gradient-gold text-shadow-luxury pr-0.5">Master</span>
                <span className="text-white"> </span>
                <span className="text-gradient-gold text-shadow-luxury pr-0.5">Barber</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed font-light max-w-2xl">
              Master the art of precision cuts and fades as you level up your skills and join the ranks of <span className="text-gradient-gold font-medium">world-class barbers.</span>
            </p>
            
            <div className="grid grid-cols-3 gap-8 mb-16">
              <div 
                className="text-center stats-badge"
                onMouseEnter={() => showTooltip('students')}
                onMouseLeave={() => hideTooltip('students')}
                onClick={() => setTooltipStates(prev => ({ ...prev, students: !prev.students }))}
              >
                <div className="text-4xl font-playfair font-bold text-gradient-gold mb-2">1,927</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Students Trained</div>
                <div className={`stats-tooltip ${tooltipStates.students ? 'show' : ''}`}>
                  <div className="font-semibold text-luxury mb-1">1,927 Success Stories</div>
                  <div className="text-gray-300 leading-relaxed">Active students across 47 states with an average 340% income increase within 6 months of completion</div>
                </div>
              </div>
              <div 
                className="text-center stats-badge"
                onMouseEnter={() => showTooltip('experience')}
                onMouseLeave={() => hideTooltip('experience')}
                onClick={() => setTooltipStates(prev => ({ ...prev, experience: !prev.experience }))}
              >
                <div className="text-4xl font-playfair font-bold text-gradient-gold mb-2">28+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
                <div className={`stats-tooltip ${tooltipStates.experience ? 'show' : ''}`}>
                  <div className="font-semibold text-luxury mb-1">Master-Level Expertise</div>
                  <div className="text-gray-300 leading-relaxed">28+ years cutting hair, 15 years training professionals, former shop owner with 6-figure annual revenue</div>
                </div>
              </div>
              <div 
                className="text-center stats-badge"
                onMouseEnter={() => showTooltip('rating')}
                onMouseLeave={() => hideTooltip('rating')}
                onClick={() => setTooltipStates(prev => ({ ...prev, rating: !prev.rating }))}
              >
                <div className="text-4xl font-playfair font-bold text-gradient-gold mb-2">4.95★</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Average Rating</div>
                <div className={`stats-tooltip ${tooltipStates.rating ? 'show' : ''}`}>
                  <div className="font-semibold text-luxury mb-1">Exceptional Reviews</div>
                  <div className="text-gray-300 leading-relaxed">4.95/5 stars from 1,200+ verified student reviews. 97% would recommend to other stylists</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={handleCheckoutClick}
                className="group btn-luxury text-black font-bold text-lg px-12 py-5 rounded"
              >
                <span className="flex items-center justify-center">
                  START YOUR TRANSFORMATION
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
          
          <div className={`lg:col-span-5 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`} style={{ transform: 'translateY(-15px)' }}>
            <div className="relative">
              <div className="card-luxury rounded-lg p-10 float-luxury">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6">
                    <Scissors className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-white mb-3">Course Preview</h3>
                  <p className="text-gray-400">See what's inside</p>
                </div>
                <div className="space-y-5">
                  {[
                    "Master Consultation Techniques",
                    "Shape & Flow Fundamentals", 
                    "Advanced Cutting Methods",
                    "Business Building Strategies"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-luxury-gold mr-4 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ transform: 'translateX(-50%) translateY(-15px)' }}>
          <ArrowDown className="h-6 w-6 text-luxury" />
        </div>
      </section>

      {/* Meet Sean Section */}
      <section id="about" className="relative py-32 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/images/seancuttinggirlshair.jpeg"
                  alt="Sean cutting hair - professional training and mentorship"
                  className="w-full h-[600px] object-cover rounded shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded"></div>
              </div>
              
              <div className="absolute -bottom-12 -right-12 bg-luxury-gradient rounded p-8 shadow-2xl z-20">
              <div className="absolute -bottom-12 -right-12 rounded p-8 shadow-2xl z-20" style={{background: 'linear-gradient(135deg, #FFD54F 0%, #FFCA28 50%, #FFB300 100%)'}}>
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-black mb-2">28+</div>
                  <div className="text-black/90 text-sm font-medium uppercase tracking-wider">Years Mastering</div>
                  <div className="text-black/90 text-sm font-medium uppercase tracking-wider">The Craft</div>
                </div>
              </div>
              </div>
              
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-luxury-gradient opacity-20 rounded-full blur-2xl"></div>
            </div>
            
            <div className="space-y-10 fade-in-luxury">
              <div>
                <div className="badge-premium rounded px-5 py-2 mb-8">
                  <Award className="h-4 w-4 text-luxury-gold mr-3" />
                  <span className="text-white font-medium text-sm tracking-wide">YOUR MASTER INSTRUCTOR</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-8 leading-tight">
                  Meet Sean: <br />
                  <span className="text-gradient-gold">Your Coach & Mentor</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 mb-6 lg:mb-10">
                  Sean's been behind the chair for <span className="text-gradient-gold font-semibold">28+ years, </span>
                  built a <span className="text-gradient-gold font-semibold">six-figure barbershop from nothing</span>, 
                  trained over a thousand barbers who started where you are.
                </p>
                
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 mb-8 lg:mb-12">
                  He remembers shaky hands and second-guessing every guard change. This course is the map he wish he had, with real shop techniques, simple consultations, and cuts that hold after a week of pillows and hoodies.
                </p>
                
                <div className="card-luxury rounded p-8 border-l-4 border-luxury">
                  <p className="text-gradient-gold font-medium italic text-base sm:text-lg">
                    "This is a beginner friendly, step-by-step guide that makes you skilled, in-demand, and gets you PAID."
                  </p>
                  <p className="text-gray-400 text-sm mt-3 font-medium">— Sean, Master Instructor</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { 
                    icon: GraduationCap, 
                    text: "1800+ Barbers", 
                    subtext: "Trained Successfully",
                    tooltip: "Over 1,800 successful graduates now working in salons, barbershops, and running their own businesses across the country"
                  },
                  { 
                    icon: Trophy, 
                    text: "4.95 Rating", 
                    subtext: "Student Reviews",
                    tooltip: "Consistently rated as the #1 hair cutting course with 97% of students reporting significant income increases"
                  },
                  { 
                    icon: Diamond, 
                    text: "Industry", 
                    subtext: "Certified Master",
                    tooltip: "Sean holds advanced certifications from top industry organizations and has trained stylists for major salon chains"
                  },
                  { 
                    icon: Briefcase, 
                    text: "Proven", 
                    subtext: "Track Record",
                    tooltip: "30 years of hands-on experience, former successful shop owner, and mentor to hundreds of top-earning stylists"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="card-luxury rounded-lg p-6 group stats-badge"
                    onMouseEnter={() => showTooltip(`sean-${index}`)}
                    onMouseLeave={() => hideTooltip(`sean-${index}`)}
                    onClick={() => setTooltipStates(prev => ({ ...prev, [`sean-${index}`]: !prev[`sean-${index}`] }))}
                  >
                    <item.icon className="h-7 w-7 text-luxury-gold mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-white font-semibold">{item.text}</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">{item.subtext}</div>
                    <div className={`stats-tooltip ${tooltipStates[`sean-${index}`] ? 'show' : ''}`}>
                      <div className="text-gray-300 leading-relaxed">{item.tooltip}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 leading-tight">
              Learn To <span className="text-gradient-gold">Charge $100 for a <i>Taper.</i></span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Every client is more than a haircut. It's confidence and connections that YOU helped build along your journey to being a $130K+ barbershop owner.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="relative">
              <div className="card-burgundy rounded-lg p-12 h-full border-l-4 border-burgundy">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gray-600 rounded flex items-center justify-center mr-6">
                    <X className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-3xl font-playfair font-bold text-gray-300">The Hard Truth</h3>
                </div>
                <div className="space-y-6">
                  {[
                    "Scissors still feel awkward in your hand",
                    "Your fades look patchy, your layers feel wrong", 
                    "Every cut feels like guessing",
                    "You're stuck charging bottom dollar",
                    "Clients leave disappointed"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-5 flex-shrink-0"></div>
                      <p className="text-gray-300 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="card-luxury rounded-lg p-12 h-full border-l-4 border-luxury shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-luxury-gradient rounded flex items-center justify-center mr-6">
                    <CheckCircle className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-3xl font-playfair font-bold text-gradient-gold">The Transformation</h3>
                </div>
                <div className="space-y-6">
                  {[
                    "Walk into any consultation with complete confidence",
                    "Create cuts that grow out beautifully for months",
                    "Turn every client into a walking advertisement", 
                    "Charge premium prices for your expertise",
                    "Build a waiting list of loyal customers"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-luxury-gold mr-5 h-5 w-5 mt-1 flex-shrink-0" />
                      <p className="text-gray-300 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button 
              onClick={handleCheckoutClick}
              className="btn-luxury text-black font-bold px-16 py-6 rounded text-xl"
            >
              MAKE THE CHANGE TODAY
            </button>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section id="course" className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 leading-tight">
              What You'll Learn <span className="text-gradient-gold">Inside</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A comprehensive curriculum designed to take you from beginner to master craftsman
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Diamond className="h-8 w-8" />,
                title: "The Art of the Consultation",
                description: "Turn nervous clients into loyal ones. Learn how to read hair, face shape, and lifestyle within minutes."
              },
              {
                icon: <Gem className="h-8 w-8" />,
                title: "The Fundamentals of Cutting", 
                description: "Master the geometry behind every great cut. Understand angles, tension, and elevation like a pro."
              },
              {
                icon: <Crown className="h-8 w-8" />,
                title: "Creating Shape & Flow",
                description: "Craft styles that move. Learn how to give your cuts personality and structure that holds."
              },
              {
                icon: <Trophy className="h-8 w-8" />,
                title: "Finishing Techniques for Modern Looks",
                description: "The secret sauce that separates amateur from artist. Texture, movement, and that 'wow' factor."
              },
              {
                icon: <Scissors className="h-8 w-8" />,
                title: "Cutting for ALL Hair Types",
                description: "Fine, thick, curly or straight, we've got you. Learn to cut confidently across all textures."
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Ladies + Gents Cuts",
                description: "The classics meet modern precision. Styles from the past 30 years adapted for today's looks."
              }
            ].map((module, index) => (
              <div key={index} className="group relative">
                <div className="card-luxury rounded-lg p-10 h-full transform hover:-translate-y-2 transition-all duration-500">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-8 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-black">{module.icon}</div>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold mb-6 text-white group-hover:text-luxury transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                    {module.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <section className="py-32 bg-black relative">
        <div className="max-w-5xl mx-auto text-center px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 leading-tight">
              Transform Your Life <span className="text-gradient-gold">Today</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Whether you're still in school, fresh in the shop, or struggling to charge your worth, 
              this course gives you the skills to change your life behind the chair.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { 
                icon: <Clock className="h-6 w-6" />, 
                text: "Learn Forever", 
                tooltip: "Never lose access - learn at your own pace forever. Includes all future updates and bonus content at no extra cost" 
              },
              { 
                icon: <Users className="h-6 w-6" />, 
                text: "Beginner Friendly", 
                tooltip: "No experience required - we start from the very basics. Perfect for beauty school students or career changers" 
              }, 
              { 
                icon: <Diamond className="h-6 w-6" />, 
                text: "Learn Your Way", 
                tooltip: "Go as fast or slow as you need - it's your journey. Average completion time is 2-4 weeks" 
              },
              { 
                icon: <Trophy className="h-6 w-6" />, 
                text: "Fast Results", 
                tooltip: "See improvement in your first week of practice. 89% of students report better cuts within 7 days" 
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="card-luxury rounded-lg p-8 group relative stats-badge"
                onMouseEnter={() => showTooltip(`benefit-${index}`)}
                onMouseLeave={() => hideTooltip(`benefit-${index}`)}
                onClick={() => setTooltipStates(prev => ({ ...prev, [`benefit-${index}`]: !prev[`benefit-${index}`] }))}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-luxury mb-4 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform duration-300">
                    {benefit.icon}
                  </div>
                  <span className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                    {benefit.text}
                  </span>
                </div>
                <div className={`stats-tooltip ${tooltipStates[`benefit-${index}`] ? 'show' : ''}`}>
                  <div className="text-gray-300 leading-relaxed">{benefit.tooltip}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="card-luxury rounded-lg p-16 shadow-2xl">
              <div className="mb-12">
                <div className="flex items-center justify-center mb-6">
                  <span className="text-gray-400 text-2xl mr-6">Regular Price:</span>
                  <span className="text-gray-400 text-3xl line-through">$297</span>
                </div>
                <div className="flex items-center justify-center mb-8">
                  <span className="text-gradient-gold text-3xl mr-6 font-medium">Limited Time Price:</span>
                  <span className="text-7xl font-bold text-gradient-gold-price text-shadow-luxury">$47</span>
                </div>
                
                <div className="badge-safety rounded-full px-8 py-4 mb-8">
                  <Shield className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-green-100 font-medium">365-DAY MONEY-BACK GUARANTEE</span>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 border border-luxury/30">
                  <div className="flex items-center justify-center mb-4">
                    <Timer className="h-5 w-5 text-luxury-gold mr-3" />
                    <span className="text-gradient-gold font-bold text-lg">Limited Time Pricing</span>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-medium mb-2">Price increases to $297 after 2,000 students</p>
                    <p className="text-gray-400">Current enrollment: <span className="text-gradient-gold font-bold">1,927 students</span></p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleCheckoutClick}
                className="w-full btn-luxury text-black font-bold text-2xl py-8 rounded"
              >
                <span className="flex items-center justify-center">
                  JOIN THE SUCCESSFUL
                  <ArrowRight className="ml-4 h-6 w-6" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Modeled after screenshot */}
      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Side */}
            <div className="text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 leading-tight">
                Get Access <span className="text-gradient-gold">Now</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Transform Your Skills with Mack Daddy's Academy! Your One-Stop 
                Destination for Everything You Need. Join the Journey Today!
              </p>
              
              {/* Included Features */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-gradient-gold mb-8">
                  Included in your Mack Daddy's Academy Membership
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  {[
                    "70+ Educational videos",
                    "Full Walk Throughs With Sean",
                    "Tips on Station Setup", 
                    "Detailed Cutting Techniques",
                    "Instant Access To All Courses",
                    "How To Price Services",
                    "Tips for Growing Your Clientele",
                    "How To Build Your Brand"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-luxury-gold mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Become a Member */}
              <div className="mb-12">
                <h3 className="text-3xl font-playfair font-bold text-white mb-6">
                  Become a Master Barber Today
                </h3>
                <div className="flex items-baseline justify-center lg:justify-start mb-8">
                  <span className="text-6xl md:text-7xl font-bold text-gradient-gold">$47</span>
                  <span className="text-2xl text-gray-400 ml-2">one-time</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <button 
                onClick={handleCheckoutClick}
                className="w-full max-w-md btn-luxury text-black font-bold text-2xl py-6 rounded-lg mb-8 hover:scale-105 transition-all duration-300"
              >
                GET ACCESS NOW
              </button>
              
              {/* Payment Methods */}
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">VISA</div>
                <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">MC</div>
                <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-bold">PayPal</div>
                <div className="bg-blue-700 text-white px-3 py-1 rounded text-sm font-bold">AMEX</div>
              </div>
              
              {/* Security Text */}
              <div className="flex items-center justify-center lg:justify-start">
                <Shield className="h-5 w-5 text-green-400 mr-2" />
                <p className="text-green-400 text-sm font-medium">
                  All orders are 100% SAFE using our SECURE SSL encrypted server
                </p>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="relative">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional barber at work"
                  className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-luxury-gradient rounded-lg p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-black mb-2">1,927+</div>
                  <div className="text-black/90 text-sm font-medium uppercase tracking-wider">Students</div>
                  <div className="text-black/90 text-sm font-medium uppercase tracking-wider">Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-luxury/20 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16">
            <div className="md:col-span-2">
              <div className="flex items-center mb-8">
                <Scissors className="h-8 w-8 text-luxury-gold mr-4" />
                <span className="text-3xl font-playfair font-bold tracking-wider text-gradient-gold">MACK DADDY'S</span>
              </div>
              <p className="text-gray-400 mb-10 leading-relaxed text-lg max-w-md">
                Master the art of cutting hair that grows out beautifully. 30 years of expertise, now available to you.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-playfair font-semibold mb-8 text-gradient-gold">Navigation</h4>
              <ul className="space-y-4">
                {['Home', 'About Sean', 'Course', 'Reviews'].map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-luxury transition-colors duration-300 relative group">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gradient group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-playfair font-semibold mb-8 text-gradient-gold">Legal</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Terms & Conditions', path: '/terms' },
                  { name: 'Privacy Policy', path: '/privacy' },
                  { name: 'Contact', path: '/contact' }
                ].map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => navigate(item.path)}
                      className="text-gray-400 hover:text-luxury transition-colors duration-300 relative group text-left"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gradient group-hover:w-full transition-all duration-300"></span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="luxury-divider"></div>
          
          <div className="text-center text-gray-500">
            <p>&copy; 2025 Mack Daddy's. All rights reserved. Master your craft.</p>
          </div>
          
          {/* Refined maker's mark */}
          <div className="mt-12 pt-6 border-t border-gray-800/50">
            <div className="text-center text-xl">
              <a href="mailto:alwin@tripletendigits.com" className="inline-block">
                <span className="font-bold text-gradient-gold border-b-2 border-luxury hover:text-luxury/70 hover:border-luxury/50 transition-all duration-300">
                  Triple Ten Digits
                </span>
                <span className="ml-1 text-white">| Precision-built websites. Delivered in a week or less. Designed to convert.</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}