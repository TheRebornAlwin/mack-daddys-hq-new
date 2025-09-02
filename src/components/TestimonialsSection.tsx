import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      text: "I was cutting hair in my garage for friends and family, barely making $20 per cut. After Sean's course, I'm now charging $85 per cut at my barbershop and booked solid 3 weeks out. Last month I made $4,200 working part-time!",
      name: "Marcus Johnson",
      location: "Tulsa, Oklahoma", 
      achievement: "Went from $20 to $85 per cut using Sean's pricing techniques",
      imageUrl: "/images/bin1.jpg"
    },
    {
      text: "I was terrified to touch anyone's hair. Sean's step-by-step approach gave me the confidence to start cutting. Now I'm making $1,800 a week at my local barbershop and clients specifically request me.",
      name: "Jake Martinez",
      location: "Boise, Idaho",
      achievement: "Overcame fear, now earning $1,800/week using course methods",
      imageUrl: "/images/bin2.jpg"
    },
    {
      text: "Fresh out of barber school, I was struggling to get clients. Sean's techniques helped me create cuts that people actually wanted. I went from 2 clients a week to fully booked, making $3,500 monthly.",
      name: "Tyler Anderson",
      location: "Grand Rapids, Michigan",
      achievement: "Applied Sean's cutting techniques, now fully booked at $3,500/month",
      imageUrl: "/images/bin3.jpg"
    },
    {
      text: "I thought I knew how to cut hair until I took this course. Sean's consultation method alone doubled my client retention. My cuts now grow out clean for weeks.",
      name: "Samuel Williams",
      location: "Bend, Oregon",
      achievement: "Used Sean's consultation system to double client retention",
      imageUrl: "/images/bin4.jpg"
    },
    {
      text: "After 5 years of mediocre cuts, I was ready to quit. Sean's fade and taper system completely changed my technique. I now run my own successful barbershop with 3 barbers.",
      name: "David Chen",
      location: "Chattanooga, Tennessee",
      achievement: "Used course methods to open successful 3-barber shop",
      imageUrl: "/images/bin5.jpg"
    },
    {
      text: "The fade and taper techniques completely changed how I approach every cut. Now my clients' hair grows out clean and they book 8 weeks in advance.",
      name: "Anthony Thompson",
      location: "Fort Collins, Colorado",
      achievement: "Clients now book 8 weeks in advance using Sean's techniques",
      imageUrl: "/images/bin6.jpg"
    },
    {
      text: "I was working at a chain shop making minimum wage. After applying Sean's methods, I landed a chair at an upscale barbershop making $65/hour plus tips.",
      name: "Kevin Rodriguez",
      location: "Spokane, Washington",
      achievement: "Used course skills to land $65/hour barbershop position",
      imageUrl: "/images/bin7.jpg"
    },
    {
      text: "Sean's finishing techniques made all the difference. My cuts look magazine-ready and clients pay premium prices. I'm making more money working fewer hours.",
      name: "Michael Davis",
      location: "Burlington, Vermont",
      achievement: "Charges premium prices using Sean's finishing techniques",
      imageUrl: "/images/bin8.jpg"
    },
    {
      text: "I failed my first state board exam because I couldn't cut properly under pressure. Sean's step-by-step system gave me the confidence to pass and now I'm a top barber.",
      name: "Jordan Parker",
      location: "Sioux Falls, South Dakota",
      achievement: "Used course system to pass state board and become top barber",
      imageUrl: "/images/bin9.jpg"
    },
    {
      text: "After 10 years of cutting hair, I thought I had nothing left to learn. Sean's advanced fade techniques doubled my income and gave me confidence with every hair type.",
      name: "Brian Foster",
      location: "Billings, Montana",
      achievement: "Doubled income using Sean's advanced cutting techniques",
      imageUrl: "/images/bin10.jpg"
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

  return (
    <section id="reviews" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-6 sm:mb-8 leading-tight">
            Success <span className="text-gradient-gold">Stories</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real barbers, real results. See how Sean's training transformed their careers and income.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="card-luxury rounded-lg p-6 sm:p-8 lg:p-12 shadow-2xl">
                    <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                      <div className="lg:col-span-4 order-2 lg:order-1">
                        <div className="relative">
                          <img
                            src={testimonial.imageUrl}
                            alt={`${testimonial.name} - Success Story`}
                            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded shadow-2xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded"></div>
                          
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="badge-premium rounded px-3 py-2">
                              <span className="text-white font-medium text-xs sm:text-sm">{testimonial.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-8 order-1 lg:order-2">
                        <div className="mb-6 sm:mb-8">
                          <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-luxury-gold mb-4 sm:mb-6" />
                          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 italic">
                            "{testimonial.text}"
                          </p>
                        </div>
                        
                        <div className="border-t border-luxury/20 pt-6 sm:pt-8">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div className="mb-4 sm:mb-0">
                              <p className="text-white font-bold text-lg sm:text-xl mb-1 sm:mb-2">{testimonial.name}</p>
                              <p className="text-gradient-gold font-medium text-sm sm:text-base mb-2 sm:mb-0">{testimonial.achievement}</p>
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
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows - Moved further outward */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-luxury-gradient rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-10"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-luxury-gradient rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-10"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
}