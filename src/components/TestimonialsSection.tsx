import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  imageUrl: string;
  achievement?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    role: 'Professional Stylist',
    content: "Sean's course completely transformed my cutting technique. I went from struggling with basic cuts to confidently creating stunning styles that my clients absolutely love. The shape and flow system is pure genius!",
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
    achievement: 'Now earning $8,500/month'
  },
  {
    id: '2',
    name: 'Marcus T.',
    role: 'Salon Owner',
    content: "I've been cutting hair for 10 years, but Sean's methods opened my eyes to techniques I never knew existed. My clients are blown away by the difference, and I'm booked solid for months.",
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
    achievement: 'Opened his own successful salon'
  },
  {
    id: '3',
    name: 'Jessica R.',
    role: 'Recent Graduate',
    content: "As someone new to the industry, this course gave me the confidence I needed. The step-by-step approach made everything so clear. I landed my dream job within weeks of completing the course!",
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600',
    achievement: 'Hired at top salon in 3 weeks'
  },
  {
    id: '4',
    name: 'David L.',
    role: 'Career Changer',
    content: "I switched careers at 35 and was terrified I was too old to learn. Sean's teaching style made everything click. Now I'm making more than I ever did in my corporate job!",
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
    achievement: 'Career change success story'
  },
  {
    id: '5',
    name: 'Amanda K.',
    role: 'Freelance Stylist',
    content: "The business training was a game-changer. I learned how to price my services properly and build a loyal client base. My income has tripled since taking this course!",
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/3992660/pexels-photo-3992660.jpeg?auto=compress&cs=tinysrgb&w=600',
    achievement: 'Tripled her income in 6 months'
  },
  {
    id: '6',
    name: 'Carlos M.',
    role: 'Barber Shop Owner',
    content: "Sean's techniques work for both men's and women's cuts. My barber shop now offers premium services, and clients are willing to pay top dollar for the quality we deliver.",
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600',
    achievement: 'Expanded to premium services'
  },
  {
    id: '7',
    name: 'Rachel P.',
    role: 'Beauty School Graduate',
    content: "This course filled all the gaps that beauty school left. Sean's real-world experience and practical tips made me feel prepared for anything. I'm now the top stylist at my salon!",
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/3992663/pexels-photo-3992663.jpeg?auto=compress&cs=tinysrgb&w=600',
    achievement: 'Top performer at prestigious salon'
  },
  {
    id: '8',
    name: 'Tony B.',
    role: 'Master Barber',
    content: "Even after 15 years in the business, Sean taught me techniques that revolutionized my approach. My clients notice the difference immediately, and word-of-mouth has exploded my business.",
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600',
    achievement: 'Doubled client base in 4 months'
  },
  {
    id: '9',
    name: 'Lisa H.',
    role: 'Salon Manager',
    content: "I implemented Sean's training across our entire team. The improvement in cut quality and client satisfaction has been incredible. We've raised our prices and clients are happier than ever.",
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/3992659/pexels-photo-3992659.jpeg?auto=compress&cs=tinysrgb&w=600',
    achievement: 'Increased salon revenue by 60%'
  },
  {
    id: '10',
    name: 'Miguel S.',
    role: 'Independent Stylist',
    content: "Sean's course gave me the confidence to go independent. The business strategies alone paid for the course ten times over. I'm now booked 8 weeks out and charging premium rates.",
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1516681/pexels-photo-1516681.jpeg?auto=compress&cs=tinysrgb&w=600',
    achievement: 'Built 6-figure independent practice'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 250);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 250);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="luxury-shape luxury-shape-1 top-10 right-10 opacity-30"></div>
        <div className="luxury-shape luxury-shape-2 bottom-10 left-10 opacity-30" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Main Container - Properly Centered with Breathing Room */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-luxury">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Success Stories From <span className="text-gradient-gold">Real Students</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See what students are saying about their transformation 
            and the incredible results they're achieving.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            style={{ marginLeft: '-3rem' }}
          >
            <ChevronLeft className="h-6 w-6 text-black" />
          </button>

          <button
            onClick={nextTestimonial}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            style={{ marginRight: '-3rem' }}
          >
            <ChevronRight className="h-6 w-6 text-black" />
          </button>

          {/* Testimonial Content */}
          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            
            {/* Image Side */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={currentTestimonial.imageUrl}
                  alt={`${currentTestimonial.name} - ${currentTestimonial.role}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Achievement Badge */}
                {currentTestimonial.achievement && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="badge-premium rounded-full px-4 py-2 text-center">
                      <span className="text-white text-sm font-medium">{currentTestimonial.achievement}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quote Side */}
            <div className="relative">
              <div className="card-luxury rounded-lg p-8 lg:p-12 shadow-2xl">
                {/* Rating Stars */}
                <div className="flex justify-center lg:justify-start mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-luxury fill-current" />
                  ))}
                </div>

                {/* Quote Icon */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <Quote className="h-8 w-8 text-luxury-gold opacity-50" />
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-8 text-center lg:text-left">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="text-center lg:text-left border-t border-gray-700 pt-6">
                  <h4 className="text-gradient-gold font-bold text-xl mb-1">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 250);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-luxury-gradient scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Progress Text */}
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
              {currentIndex + 1} of {testimonials.length} success stories
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}