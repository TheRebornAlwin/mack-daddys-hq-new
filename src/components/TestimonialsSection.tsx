import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  location: string;
  achievement: string;
  imageUrl: string;
}

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "I was cutting hair in my garage for friends and family, barely making $20 per cut. After Sean's course, I'm now charging $85 per cut and booked solid 3 weeks out. Last month I made $4,200 working part-time!",
      name: "Marcus Johnson",
      location: "Tulsa, Oklahoma",
      achievement: "Owns a $100K+ barbershop",
      imageUrl: "/images/bin1.jpg"
    },
    {
      id: 2,
      text: "I was terrified to touch anyone's hair. Sean's step-by-step approach gave me the confidence to start cutting. Now I'm making $1,800 a week at my local salon and clients specifically request me.",
      name: "Jake Martinez",
      location: "Boise, Idaho",
      achievement: "Charges $60+ on an average cut",
      imageUrl: "/images/bin2.jpg"
    },
    {
      id: 3,
      text: "Fresh out of beauty school, I was struggling to get clients. Sean's techniques helped me create cuts that people actually wanted. I went from 2 clients a week to fully booked, making $3,500 monthly.",
      name: "Tyler Anderson",
      location: "Grand Rapids, Michigan",
      achievement: "Opened a barbershop that makes $7K monthly and growing",
      imageUrl: "/images/bin3.jpg"
    },
    {
      id: 4,
      text: "I thought I knew how to cut hair until I took this course. Sean's consultation method alone doubled my client retention. My cuts now grow out perfectly for months.",
      name: "Samuel Williams",
      location: "Bend, Oregon",
      achievement: "Doubled client retention using Sean's methods",
      imageUrl: "/images/bin4.jpg"
    },
    {
      id: 5,
      text: "After 5 years of mediocre cuts, I was ready to quit. Sean's shape and flow system completely changed my technique. I now run my own successful shop with 3 employees.",
      name: "David Chen",
      location: "Chattanooga, Tennessee",
      achievement: "Runs a successful 3-employee barbershop",
      imageUrl: "/images/bin5.jpg"
    },
    {
      id: 6,
      text: "The shape and flow techniques completely changed how I approach every cut. Now my clients' hair grows out beautifully and they book 8 weeks in advance.",
      name: "Anthony Thompson",
      location: "Fort Collins, Colorado",
      achievement: "Clients book 8 weeks in advance",
      imageUrl: "/images/bin6.jpg"
    },
    {
      id: 7,
      text: "I was working at Supercuts making minimum wage. After applying Sean's methods, I landed a chair at an upscale salon making $65/hour plus tips.",
      name: "Kevin Rodriguez",
      location: "Spokane, Washington",
      achievement: "Makes $65/hour plus tips at upscale salon",
      imageUrl: "/images/bin7.jpg"
    },
    {
      id: 8,
      text: "Sean's finishing techniques made all the difference. My cuts look magazine-ready and clients pay premium prices. I'm making more money working fewer hours.",
      name: "Michael Davis",
      location: "Burlington, Vermont",
      achievement: "Charges premium prices for magazine-ready cuts",
      imageUrl: "/images/bin8.jpg"
    },
    {
      id: 9,
      text: "I failed my first state board exam because I couldn't cut properly under pressure. Sean's step-by-step system gave me the confidence to pass and now I'm a top performer.",
      name: "Jordan Parker",
      location: "Sioux Falls, South Dakota",
      achievement: "Top performer after passing state board",
      imageUrl: "/images/bin9.jpg"
    },
    {
      id: 10,
      text: "After 10 years of cutting hair, I thought I had nothing left to learn. Sean's advanced techniques doubled my income and gave me confidence with every texture.",
      name: "Brian Foster",
      location: "Billings, Montana",
      achievement: "Doubled income using advanced techniques",
      imageUrl: "/images/bin10.jpg"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-advance testimonials every 5 seconds
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 leading-tight">
            Success Stories From <span className="text-gradient-gold">Real Students</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            See how our students transformed their careers and lives
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Side */}
            <div className={`relative transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="relative">
                <div 
                  className="w-full h-96 lg:h-[500px] bg-cover bg-center rounded-lg shadow-2xl transition-all duration-500"
                  style={{ backgroundImage: `url(${currentTestimonialData.imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
                </div>
                
                {/* Achievement Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="badge-premium rounded-lg px-4 py-3 backdrop-blur-sm">
                    <p className="text-white font-medium text-sm text-center">
                      {currentTestimonialData.achievement}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Side */}
            <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="card-luxury rounded-lg p-10 relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-luxury-gradient rounded flex items-center justify-center">
                  <Quote className="h-6 w-6 text-black" />
                </div>
                
                {/* Stars */}
                <div className="flex justify-center mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-luxury fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-xl font-light mb-8 leading-relaxed text-gray-300 text-center">
                  "{currentTestimonialData.text}"
                </blockquote>
                
                {/* Author Info */}
                <div className="text-center">
                  <p className="text-gradient-gold font-bold text-xl mb-1">
                    {currentTestimonialData.name}
                  </p>
                  <p className="text-gray-500 text-lg">
                    {currentTestimonialData.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}