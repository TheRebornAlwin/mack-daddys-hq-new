import React, { useState, useEffect } from 'react';
import TestimonialsSection from '../components/TestimonialsSection';
import { useNavigate } from 'react-router-dom';
import { Scissors, Users, Star, Clock, Award, Shield, ArrowRight, Target, TrendingUp, BookOpen, Zap, Timer, ChevronLeft, ChevronRight, Crown, ArrowDown, CheckCircle, Diamond, Gem, Banknote, GraduationCap, Trophy, Briefcase, X, ChevronDown, HelpCircle, Quote } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStates, setTooltipStates] = useState<Record<string, boolean>>({});
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  
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
  
  const testimonials = [
    {
      text: "I was cutting hair in my garage for friends and family, barely making $20 per cut. After Sean's course, I'm now charging $85 per cut at my barbershop and booked solid 3 weeks out. Last month I made $4,200 working part-time!",
      name: "Marcus Johnson",
      location: "Tulsa, Oklahoma", 
      achievement: "Went from $20 to $85 per cut using Sean's pricing techniques"
    },
    {
      text: "I was terrified to touch anyone's hair. Sean's step-by-step approach gave me the confidence to start cutting. Now I'm making $1,800 a week at my local barbershop and clients specifically request me.",
      name: "Jessica Martinez",
      location: "Boise, Idaho",
      achievement: "Overcame fear, now earning $1,800/week using course methods"
    },
    {
      text: "Fresh out of barber school, I was struggling to get clients. Sean's techniques helped me create cuts that people actually wanted. I went from 2 clients a week to fully booked, making $3,500 monthly.",
      name: "Tyler Anderson",
      location: "Grand Rapids, Michigan",
      achievement: "Applied Sean's cutting techniques, now fully booked at $3,500/month"
    },
    {
      text: "I thought I knew how to cut hair until I took this course. Sean's consultation method alone doubled my client retention. My cuts now grow out clean for weeks.",
      name: "Sarah Williams",
      location: "Bend, Oregon",
      achievement: "Used Sean's consultation system to double client retention"
    },
    {
      text: "After 5 years of mediocre cuts, I was ready to quit. Sean's fade and taper system completely changed my technique. I now run my own successful barbershop with 3 barbers.",
      name: "David Chen",
      location: "Chattanooga, Tennessee",
      achievement: "Used course methods to open successful 3-barber shop"
    },
    {
      text: "The fade and taper techniques completely changed how I approach every cut. Now my clients' hair grows out clean and they book 8 weeks in advance.",
      name: "Ashley Thompson",
      location: "Fort Collins, Colorado",
      achievement: "Clients now book 8 weeks in advance using Sean's techniques"
    },
    {
      text: "I was working at a chain shop making minimum wage. After applying Sean's methods, I landed a chair at an upscale barbershop making $65/hour plus tips.",
      name: "Kevin Rodriguez",
      location: "Spokane, Washington",
      achievement: "Used course skills to land $65/hour barbershop position"
    },
    {
      text: "Sean's finishing techniques made all the difference. My cuts look magazine-ready and clients pay premium prices. I'm making more money working fewer hours.",
      name: "Michelle Davis",
      location: "Burlington, Vermont",
      achievement: "Charges premium prices using Sean's finishing techniques"
    },
    {
      text: "I failed my first state board exam because I couldn't cut properly under pressure. Sean's step-by-step system gave me the confidence to pass and now I'm a top barber.",
      name: "Jordan Parker",
      location: "Sioux Falls, South Dakota",
      achievement: "Used course system to pass state board and become top barber"
    },
    {
      text: "After 10 years of cutting hair, I thought I had nothing left to learn. Sean's advanced fade techniques doubled my income and gave me confidence with every hair type.",
      name: "Brian Foster",
      location: "Billings, Montana",
      achievement: "Doubled income using Sean's advanced cutting techniques"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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

  const handleFaqClick = (index: number) => {
    setOpenFaqId(openFaqId === index ? null : index);
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className={`lg:col-span-7 lg:self-start ${isVisible ? 'slide-in-luxury' : 'opacity-0'}`} style={{ transform: 'translateY(-50px)' }}>
            {/* Developer Access Button */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50">
              <button 
                onClick={() => navigate('/courses')}
                className="badge-premium rounded px-2 py-1 sm:px-4 sm:py-2 hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-luxury-gold mr-1 sm:mr-2 inline" />
                <span className="text-white font-medium text-xs sm:text-sm">Courses</span>
              </button>
            </div>
            
            <div className="badge-premium rounded px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-12">
              <Crown className="h-3 w-3 sm:h-4 sm:w-4 text-luxury-gold mr-2 sm:mr-3" />
              <span className="text-white font-medium text-xs sm:text-sm tracking-wide">MASTER CRAFTSMAN TRAINING</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-8 sm:mb-12 leading-tight sm:leading-relaxed tracking-tight pr-2 sm:pr-4">
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
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-16 leading-relaxed font-light max-w-2xl">
              Master the art of precision cuts and fades as you level up your skills and join the ranks of <span className="text-gradient-gold font-medium">world-class barbers.</span>
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
              <div 
                className="text-center stats-badge"
                onMouseEnter={() => showTooltip('students')}
                onMouseLeave={() => hideTooltip('students')}
                onClick={() => setTooltipStates(prev => ({ ...prev, students: !prev.students }))}
              >
                <div className="text-2xl sm:text-4xl font-playfair font-bold text-gradient-gold mb-2">1,927</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Barbers Trained</div>
                <div className={`stats-tooltip ${tooltipStates.students ? 'show' : ''}`}>
                  <div className="font-semibold text-luxury mb-1">1,927 Success Stories</div>
                  <div className="text-gray-300 leading-relaxed">Active barbers across 47 states with an average 340% income increase within 6 months of completion</div>
                </div>
              </div>
              <div 
                className="text-center stats-badge"
                onMouseEnter={() => showTooltip('experience')}
                onMouseLeave={() => hideTooltip('experience')}
                onClick={() => setTooltipStates(prev => ({ ...prev, experience: !prev.experience }))}
              >
                <div className="text-2xl sm:text-4xl font-playfair font-bold text-gradient-gold mb-2">28+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
                <div className={`stats-tooltip ${tooltipStates.experience ? 'show' : ''}`}>
                  <div className="font-semibold text-luxury mb-1">Master-Level Expertise</div>
                  <div className="text-gray-300 leading-relaxed">28+ years cutting hair, 15 years training barbers, former barbershop owner with 6-figure annual revenue</div>
                </div>
              </div>
              <div 
                className="text-center stats-badge"
                onMouseEnter={() => showTooltip('rating')}
                onMouseLeave={() => hideTooltip('rating')}
                onClick={() => setTooltipStates(prev => ({ ...prev, rating: !prev.rating }))}
              >
                <div className="text-2xl sm:text-4xl font-playfair font-bold text-gradient-gold mb-2">4.95★</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Average Rating</div>
                <div className={`stats-tooltip ${tooltipStates.rating ? 'show' : ''}`}>
                  <div className="font-semibold text-luxury mb-1">Exceptional Reviews</div>
                  <div className="text-gray-300 leading-relaxed">4.95/5 stars from 1,200+ verified barber reviews. 97% would recommend to other barbers</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button 
                onClick={handleCheckoutClick}
                className="group btn-luxury text-black font-bold text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 rounded"
              >
                <span className="flex items-center justify-center">
                  START YOUR TRANSFORMATION
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
          
          <div className={`lg:col-span-5 mt-8 lg:mt-0 flex flex-col items-end justify-between gap-y-8 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
            <div className="relative">
              <div className="card-luxury rounded-lg p-2 w-[28rem]">
                <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video h-48 w-full">
                </div>
              </div>
            </div>
            
            {/* Hero Testimonial */}
            <div className="relative">
              <div className="card-luxury rounded-lg p-6 sm:p-8 lg:p-10 max-w-md">
                <div className="mb-6">
                  <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-luxury-gold mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
                    "BUILT A <span className="underline text-gradient-gold">SIX FIGURE BARBERSHOP</span> FROM MACK DADDY'S COURSE, REALLY A GAME CHANGER"
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                    "Best course for those aspiring barbers who want to learn and make loads of money doing what they love. It helped me grow as a person so much and gave me a career for life. So thankful for Mack Daddy's!"
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm sm:text-base">RUSELL LAMBARD</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Mack Daddy's Academy Student</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-luxury fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Sean Section */}
      <section id="about" className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-center">
            <div className="relative lg:col-span-5 lg:pr-12">
              <div className="relative z-10">
                <img 
                  src="/images/seancuttinggirlshair.jpeg"
                  alt="Sean cutting hair - professional training and mentorship"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] object-cover rounded shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 lg:-bottom-12 lg:-right-12 rounded p-4 sm:p-6 lg:p-8 shadow-2xl z-20" style={{background: 'linear-gradient(135deg, #FFD54F 0%, #FFCA28 50%, #FFB300 100%)'}}>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-black mb-1 sm:mb-2">28+</div>
                  <div className="text-black/90 text-xs sm:text-sm font-medium uppercase tracking-wider">Years Mastering</div>
                  <div className="text-black/90 text-xs sm:text-sm font-medium uppercase tracking-wider">The Craft</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 lg:-top-12 lg:-left-12 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-luxury-gradient opacity-20 rounded-full blur-2xl"></div>
            </div>
            
            <div className="lg:col-span-7 lg:pl-12 fade-in-luxury mt-8 lg:mt-0">
              <div>
                <div className="badge-premium rounded px-4 sm:px-5 py-2 mb-6 lg:mb-10">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4 text-luxury-gold mr-2 sm:mr-3" />
                  <span className="text-white font-medium text-xs sm:text-sm tracking-wide">YOUR MASTER INSTRUCTOR</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-8 lg:mb-12 leading-tight">
                  Meet Sean: <br />
                  <span className="text-gradient-gold">Your Coach & Mentor</span>
                </h2>
              </div>
              
              <div className="space-y-6 lg:space-y-8">
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 mb-6 lg:mb-10">
                  Sean's been behind the chair for <span className="text-gradient-gold font-semibold">28+ years, </span>
                  built a <span className="text-gradient-gold font-semibold">six-figure barbershop from nothing</span>, 
                  trained over a thousand barbers who started where you are.
                </p>
                
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 mb-8 lg:mb-12">
                  He remembers shaky hands and second-guessing every guard change. This course is the map he wish he had, with real shop techniques, simple consultations, and cuts that hold after a week of pillows and hoodies.
                </p>
                
                <div className="card-luxury rounded p-4 sm:p-6 lg:p-8 border-l-4 border-luxury mb-8 lg:mb-14">
                  <p className="text-gradient-gold font-medium italic text-base sm:text-lg">
                    "This is a beginner friendly, step-by-step guide that makes you skilled, in-demand, and gets you PAID."
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-3 font-medium">— Sean, Master Instructor</p>
                </div>
              
                <div className="grid grid-cols-2 gap-4 lg:gap-8">
                  {[
                    { 
                      icon: GraduationCap, 
                      text: "1800+ Barbers", 
                      subtext: "Trained Successfully",
                      tooltip: "Over 1,800 successful graduates now working in barbershops and running their own shops across the country"
                    },
                    { 
                      icon: Trophy, 
                      text: "4.95 Rating", 
                      subtext: "Student Reviews",
                      tooltip: "Consistently rated as the #1 barbering course with 97% of barbers reporting significant income increases"
                    },
                    { 
                      icon: Diamond, 
                      text: "Industry", 
                      subtext: "Certified Master",
                      tooltip: "Sean holds advanced certifications from top industry organizations and has trained barbers for major barbershop chains"
                    },
                    { 
                      icon: Briefcase, 
                      text: "Proven", 
                      subtext: "Track Record",
                      tooltip: "30 years of hands-on experience, former successful barbershop owner, and mentor to hundreds of top-earning barbers"
                    }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="card-luxury rounded-lg p-3 sm:p-4 lg:p-6 group stats-badge"
                      onMouseEnter={() => showTooltip(`sean-${index}`)}
                      onMouseLeave={() => hideTooltip(`sean-${index}`)}
                      onClick={() => setTooltipStates(prev => ({ ...prev, [`sean-${index}`]: !prev[`sean-${index}`] }))}
                    >
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-luxury-gold mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-white font-semibold text-sm sm:text-base lg:text-lg">{item.text}</div>
                      <div className="text-gray-400 text-xs sm:text-sm lg:text-sm uppercase tracking-wider">{item.subtext}</div>
                      <div className={`stats-tooltip ${tooltipStates[`sean-${index}`] ? 'show' : ''}`}>
                        <div className="text-gray-300 leading-relaxed">{item.tooltip}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-6 sm:mb-8 leading-tight">
              Learn To <span className="text-gradient-gold">Charge $100 for a <i>Taper.</i></span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Every client is more than a haircut. It's confidence and connections that YOU helped build along your journey to being a $130K+ barbershop owner.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            <div className="relative">
              <div className="card-burgundy rounded-lg p-6 sm:p-8 lg:p-12 h-full border-l-4 border-burgundy">
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 rounded flex items-center justify-center mr-4 sm:mr-6">
                    <X className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-gray-300">The Hard Truth</h3>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  {[
                    "Scissors still feel awkward in your hand",
                    "Your fades look patchy, your lineups are crooked", 
                    "Every cut feels like guessing",
                    "You're stuck charging bottom dollar",
                    "Clients leave disappointed"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-5 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm sm:text-base lg:text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="card-luxury rounded-lg p-6 sm:p-8 lg:p-12 h-full border-l-4 border-luxury shadow-2xl">
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-luxury-gradient rounded flex items-center justify-center mr-4 sm:mr-6">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-gradient-gold">The Transformation</h3>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  {[
                    "Walk into any consultation with complete confidence",
                    "Create fades and cuts that grow out clean for weeks",
                    "Turn every client into a walking advertisement", 
                    "Charge $60+ for simple cuts",
                    "Build a waiting list of loyal clients"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-luxury-gold mr-5 h-5 w-5 mt-1 flex-shrink-0" />
                      <p className="text-gray-300 text-sm sm:text-base lg:text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <button 
              onClick={handleCheckoutClick}
              className="btn-luxury text-black font-bold px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded text-base sm:text-lg lg:text-xl"
            >
              MAKE THE CHANGE TODAY
            </button>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section id="course" className="py-16 sm:py-24 lg:py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-6 sm:mb-8 leading-tight">
              What You'll Learn <span className="text-gradient-gold">Inside</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A comprehensive curriculum designed to take you from beginner to a rich, world-class barber:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                icon: <Diamond className="h-8 w-8" />,
                title: "The Art of the Consultation",
                description: "Turn nervous clients into regulars. Learn how to read hair, face shape, and style preferences within minutes."
              },
              {
                icon: <Gem className="h-8 w-8" />,
                title: "The Fundamentals of Cutting", 
                description: "Master the geometry behind every great cut. Understand angles, guard work, and blade techniques like a pro."
              },
              {
                icon: <Crown className="h-8 w-8" />,
                title: "Mastering Fades & Tapers",
                description: "Perfect seamless fades and crisp tapers. Learn the techniques that separate pros from amateurs."
              },
              {
                icon: <Trophy className="h-8 w-8" />,
                title: "Finishing Techniques & Lineups",
                description: "The secret sauce that separates amateur from master. Clean lineups, edge work, and that 'wow' factor."
              },
              {
                icon: <Scissors className="h-8 w-8" />,
                title: "Cutting for ALL Hair Types",
                description: "Coarse, fine, curly or straight, we've got you. Learn to cut confidently across all hair textures."
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Classic & Modern Men's Cuts",
                description: "The classics meet modern precision. Timeless cuts and today's trending styles for the modern man."
              }
            ].map((module, index) => (
              <div key={index} className="group relative">
                <div className="card-luxury rounded-lg p-6 sm:p-8 lg:p-10 h-full transform hover:-translate-y-2 transition-all duration-500">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-luxury-gradient rounded mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-black text-sm sm:text-base">{module.icon}</div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-playfair font-bold mb-4 sm:mb-6 text-white group-hover:text-luxury transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg group-hover:text-gray-200 transition-colors duration-300">
                    {module.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <button 
              onClick={handleCheckoutClick}
              className="btn-luxury text-black font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded hover:scale-105 transition-transform duration-300"
            >
              <span className="flex items-center justify-center">
                START YOUR TRANSFORMATION
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories Section - Replace existing testimonials */}
      <TestimonialsSection />

      {/* Final CTA Section - Modeled after the screenshot */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="luxury-shape luxury-shape-1 top-20 right-20 opacity-20"></div>
          <div className="luxury-shape luxury-shape-2 bottom-20 left-20 opacity-20" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
                Get Access Now
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 mb-12 leading-relaxed">
                Level Up to Barber Mastery with Mack Daddy's Academy! Your One-Stop 
                Destination for Everything You Need. Join the Journey Today!
              </p>

              {/* Included Features */}
              <div className="mb-12">
                <h3 className="text-xl lg:text-2xl font-bold text-gradient-gold mb-8">
                  Included in your Mack Daddy's Academy Membership
                </h3>
                <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                  {[
                    "28+ Years of Expert Knowledge",
                    "Complete Shape & Flow System", 
                    "Advanced Consultation Techniques",
                    "All Hair Types Cutting Methods",
                    "Modern Finishing Techniques",
                    "Premium Pricing Strategies",
                    "Client Retention Secrets",
                    "Business Growth Blueprint",
                    "Lifetime Access & Updates",
                    "Private Community Access",
                    "Monthly Live Q&A Sessions",
                    "Downloadable Practice Guides"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start text-left">
                      <div className="w-5 h-5 bg-luxury-gradient rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                      </div>
                      <span className="text-gray-300 text-sm lg:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-playfair font-bold text-white mb-6">
                  Become a Master Barber Today
                </h3>
                
                {/* Price Display */}
                <div className="mb-8">
                  <div className="flex items-baseline justify-center lg:justify-start mb-2">
                    <span className="text-5xl lg:text-6xl font-bold text-gradient-gold-price">$47</span>
                    <span className="text-xl lg:text-2xl text-gray-400 ml-2">one-time</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    <span className="line-through">Regular price: $297</span> • Limited time offer
                  </p>
                </div>

                {/* Main CTA Button */}
                <button 
                  onClick={handleCheckoutClick}
                  className="w-full lg:w-auto btn-luxury text-black font-bold text-xl lg:text-2xl px-12 lg:px-16 py-6 lg:py-8 rounded-lg mb-8 hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  GET ACCESS NOW
                </button>

                {/* Payment Icons */}
                <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                    <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                    <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">PP</div>
                    <div className="w-8 h-5 bg-blue-400 rounded text-white text-xs flex items-center justify-center font-bold">AE</div>
                  </div>
                </div>

                {/* Security Text */}
                <div className="flex items-center justify-center lg:justify-start">
                  <Shield className="h-4 w-4 text-green-400 mr-2" />
                  <p className="text-green-400 text-sm font-medium">
                    All orders are 100% SAFE using our SECURE SSL encrypted server
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:order-last order-first">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional barber at work"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6">
                  <div className="badge-premium rounded-lg px-4 py-3">
                    <Crown className="h-5 w-5 text-luxury-gold mr-2" />
                    <span className="text-white font-bold text-sm">MASTER LEVEL</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-black relative">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-6 sm:mb-8 leading-tight">
              Transform Your Life <span className="text-gradient-gold">Today</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Whether you're still in school, fresh in the shop, or struggling to charge your worth, 
              this course gives you the skills to change your life behind the chair.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
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
                className="card-luxury rounded-lg p-4 sm:p-6 lg:p-8 group relative stats-badge"
                onMouseEnter={() => showTooltip(`benefit-${index}`)}
                onMouseLeave={() => hideTooltip(`benefit-${index}`)}
                onClick={() => setTooltipStates(prev => ({ ...prev, [`benefit-${index}`]: !prev[`benefit-${index}`] }))}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-luxury mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform duration-300">
                    {benefit.icon}
                  </div>
                  <span className="text-gray-200 font-medium text-sm sm:text-base group-hover:text-white transition-colors duration-300">
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
            <div className="card-luxury rounded-lg p-8 sm:p-12 lg:p-16 shadow-2xl">
              <div className="mb-8 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 gap-2 sm:gap-6">
                  <span className="text-gray-400 text-lg sm:text-2xl">Regular Price:</span>
                  <span className="text-gray-400 text-2xl sm:text-3xl line-through">$297</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8 gap-2 sm:gap-6">
                  <span className="text-gradient-gold text-lg sm:text-2xl lg:text-3xl font-medium">Limited Time Price:</span>
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient-gold-price text-shadow-luxury">$47</span>
                </div>
                
                <div className="badge-safety rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 mb-6 sm:mb-8">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 sm:mr-3" />
                  <span className="text-green-100 font-medium text-sm sm:text-base">365-DAY MONEY-BACK GUARANTEE</span>
                </div>
              </div>
              
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-block bg-gradient-to-r from-gray-900 to-black rounded-xl p-4 sm:p-6 lg:p-8 border border-luxury/30">
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <Timer className="h-4 w-4 sm:h-5 sm:w-5 text-luxury-gold mr-2 sm:mr-3" />
                  </div>
                  <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video h-72 w-full">
                  </div>
                  <div className="text-center">
                    <p className="text-white font-medium mb-2 text-sm sm:text-base">Price increases to $297 after 2,000 barbers</p>
                    <p className="text-gray-400 text-sm sm:text-base">Current enrollment: <span className="text-gradient-gold font-bold">1,927 barbers</span></p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleCheckoutClick}
                className="w-full btn-luxury text-black font-bold text-lg sm:text-xl lg:text-2xl py-4 sm:py-6 lg:py-8 rounded"
              >
                <span className="flex items-center justify-center">
                  JOIN THE SUCCESSFUL
                  <ArrowRight className="ml-3 sm:ml-4 h-5 w-5 sm:h-6 sm:w-6" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-black relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-6 sm:mb-8 leading-tight">
              <span className="text-gradient-gold">FAQs</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real questions from real barbers. Get the answers you need to start your transformation.
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                question: "I've never cut hair. Can I actually quickly succeed in this?",
                answer: "Yes. We built it for exactly that. You'll learn where to start, what guard to grab, how to set a guide, and when to stop. Day 1 = calm plan, not guesswork."
              },
              {
                question: "How fast before I can charge real money?",
                answer: "Typical: 5–10 clean practice cuts → start charging mates a small fee → raise as your blends stop stepping. Most motivated students see paid cuts in 2–3 weeks. Your hands + reps decide the exact date."
              },
              {
                question: "What if my hands shake or I get nervous when the clippers touch hair?",
                answer: "Welcome to the club. We slow you down, show hand position, body angle, and give you a simple checklist so you breathe and build instead of panic and chase."
              },
              {
                question: "Do I need fancy gear?",
                answer: "Nope. A reliable clipper, guards, lever, scissors, combs, cape, neck strips, a spray bottle, and a mirror. We give you a short \"buy this, skip that\" list inside."
              },
              {
                question: "Can I learn on a mannequin, or do I need real heads?",
                answer: "Start on a mannequin to get movement and sectioning without fear. Then switch to real people fast (friends/family) so you learn growth patterns and pressure. Do both."
              },
              {
                question: "Does this cover curly/coily hair, or just straight?",
                answer: "All hair types. You'll learn what changes (tension, approach, weight) and what never does (guides, balance, finish)."
              },
              {
                question: "I'm awkward at the consult. What do I even say?",
                answer: "Use our script (in the course) and tailor it to your situation! I've been using this for the past 3 decades and it's worked wonders."
              },
              {
                question: "How long are the lessons? Can I watch on my phone?",
                answer: "Short, tight videos you can pause and copy cut-for-cut. Phone, tablet, laptop, whatever you've got works."
              },
              {
                question: "Will this help me raise prices without losing everyone?",
                answer: "Yes. We give you a simple ladder: proof → consistency → small raises + clear wording. Clients respect clean work and clear communication."
              },
              {
                question: "Is there a guarantee?",
                answer: "Yep, 365 days. A full year. Go through it. If you don't feel your cuts and confidence level up, email us and we'll make it right."
              },
              {
                question: "What makes this different from YouTube?",
                answer: "Sequence and standards. You're not watching random fades with no context, nor learning from a random guy with 2 weeks of experience. You're following a shop-tested path with checks at each step so you're guaranteed to win."
              },
              {
                question: "Do I need a license to cut hair and get paid?",
                answer: "Depends on your country/state. We teach technique and client experience; you're responsible for local rules. We include a quick \"check your area\" guide so you're prepared."
              },
              {
                question: "Can I open a shop after this?",
                answer: "Eventually, yes. We recommend you apply to be a barber after practice with our course, then eventually open a shop if it interests you. Details on how to do so is laid out in the Business Mastery System."
              },
              {
                question: "How do I find my first paying clients?",
                answer: "Start with 5–10 friends/family, post clean before/afters, ask happy clients to tag you, offer limited \"new client\" slots, and rebook on the spot. We give you the exact lines."
              },
              {
                question: "Is support a thing or am I on my own?",
                answer: "You're not alone. If you're stuck, shoot us a message with photos/video and we'll point you in the right direction. (Keep notes, small tweaks fix big problems.)"
              },
              {
                question: "What if I mess up a cut?",
                answer: "You will. We all do. We show you how to read your mistakes, fix what's fixable, and turn it into a clean lesson instead of a panic spiral."
              },
              {
                question: "I'm 30+, is it too late to switch careers?",
                answer: "Not if you work. Craft pays any age. Clients care about how they look walking out, not what year you were born."
              },
              {
                question: "How do I enroll?",
                answer: "Use any major card at checkout. You get instant, lifetime access and updates."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="card-luxury rounded-lg group hover:border-luxury/40 transition-all duration-300 overflow-hidden"
              >
                <div 
                  className="flex items-center justify-between p-6 sm:p-8 cursor-pointer"
                  onClick={() => handleFaqClick(index)}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-luxury transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown className={`h-5 w-5 sm:h-6 sm:w-6 text-luxury-gold transition-transform duration-300 flex-shrink-0 ${
                    openFaqId === index ? 'rotate-180' : ''
                  }`} />
                </div>
                <div className={`faq-answer ${openFaqId === index ? 'open' : ''}`}>
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="border-t border-luxury/20 pt-6">
                      <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                        {faq.answer.split(/(\b(?:calm plan|clean practice cuts|shop-tested path|guaranteed to win|365 days|lifetime access|Business Mastery System|exact lines)\b)/gi).map((part, partIndex) => {
                          const isHighlight = /^(calm plan|clean practice cuts|shop-tested path|guaranteed to win|365 days|lifetime access|Business Mastery System|exact lines)$/i.test(part);
                          return isHighlight ? (
                            <span key={partIndex} className="text-gradient-gold font-semibold">{part}</span>
                          ) : (
                            part
                          );
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <div className="card-luxury rounded-lg p-6 sm:p-8 max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gradient-gold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We're here to help you succeed. Reach out to our support team for personalized answers.
              </p>
              <button 
                onClick={() => {
                  window.open('mailto:mackdaddysbpmac@gmail.com', '_blank');
                }}
                className="btn-luxury text-black font-bold px-8 py-4 rounded text-lg hover:scale-105 transition-transform duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-luxury/20 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
            <div className="md:col-span-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-6 sm:mb-8">
                <Scissors className="h-6 w-6 sm:h-8 sm:w-8 text-luxury-gold mr-3 sm:mr-4" />
                <span className="text-2xl sm:text-3xl font-playfair font-bold tracking-wider text-gradient-gold">MACK DADDY'S</span>
              </div>
              <p className="text-gray-400 mb-6 sm:mb-8 lg:mb-10 leading-relaxed text-sm sm:text-base lg:text-lg max-w-md mx-auto md:mx-0">
                Master the art of barbering that builds respect and loyalty. 30 years of expertise, now available to you.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-lg sm:text-xl font-playfair font-semibold mb-4 sm:mb-6 lg:mb-8 text-gradient-gold">Navigation</h4>
              <ul className="space-y-2 sm:space-y-4">
                {['Home', 'About Sean', 'Course', 'Reviews'].map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-luxury transition-colors duration-300 relative group text-sm sm:text-base">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gradient group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-lg sm:text-xl font-playfair font-semibold mb-4 sm:mb-6 lg:mb-8 text-gradient-gold">Legal</h4>
              <ul className="space-y-2 sm:space-y-4">
                {[
                  { name: 'Terms & Conditions', path: '/terms' },
                  { name: 'Privacy Policy', path: '/privacy' },
                  { name: 'Contact', path: '/contact' }
                ].map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => navigate(item.path)}
                      className="text-gray-400 hover:text-luxury transition-colors duration-300 relative group text-left text-sm sm:text-base"
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
          
          <div className="text-center text-gray-500 text-sm sm:text-base">
            <p>&copy; 2025 Mack Daddy's. All rights reserved. Master your craft.</p>
          </div>
          
          {/* Refined maker's mark */}
          <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-800/50">
            <div className="text-center text-sm sm:text-base lg:text-xl">
              <a href="mailto:alwin@tripletendigits.com" className="inline-block">
                <span className="font-bold text-gradient-gold border-b-2 border-luxury hover:text-luxury/70 hover:border-luxury/50 transition-all duration-300">
                  Triple Ten Digits
                </span>
                <span className="ml-1 text-white block sm:inline">| Precision-built websites. Delivered in a week or less. Designed to convert.</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}