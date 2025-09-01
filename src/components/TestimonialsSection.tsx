import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  achievement?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    role: 'Professional Stylist',
    content: "Sean's course completely transformed my cutting technique. I went from struggling with basic cuts to confidently creating stunning styles that my clients absolutely love. The shape and flow system is pure genius!",
    rating: 5,
    achievement: 'Now earning $8,500/month'
  },
  {
    id: '2',
    name: 'Marcus T.',
    role: 'Salon Owner',
    content: "I've been cutting hair for 10 years, but Sean's methods opened my eyes to techniques I never knew existed. My clients are blown away by the difference, and I'm booked solid for months.",
    rating: 5,
    achievement: 'Opened his own successful salon'
  },
  {
    id: '3',
    name: 'Jessica R.',
    role: 'Recent Graduate',
    content: "As someone new to the industry, this course gave me the confidence I needed. The step-by-step approach made everything so clear. I landed my dream job within weeks of completing the course!",
    rating: 5,
    achievement: 'Hired at top salon in 3 weeks'
  },
  {
    id: '4',
    name: 'David L.',
    role: 'Career Changer',
    content: "I switched careers at 35 and was terrified I was too old to learn. Sean's teaching style made everything click. Now I'm making more than I ever did in my corporate job!",
    rating: 5,
    achievement: 'Career change success story'
  },
  {
    id: '5',
    name: 'Amanda K.',
    role: 'Freelance Stylist',
    content: "The business training was a game-changer. I learned how to price my services properly and build a loyal client base. My income has tripled since taking this course!",
    rating: 5,
    achievement: 'Tripled her income in 6 months'
  },
  {
    id: '6',
    name: 'Carlos M.',
    role: 'Barber Shop Owner',
    content: "Sean's techniques work for both men's and women's cuts. My barber shop now offers premium services, and clients are willing to pay top dollar for the quality we deliver.",
    rating: 5,
    achievement: 'Expanded to premium services'
  }
];

export default function TestimonialsSection() {
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

        {/* Testimonials Slider Container - Fixed Layout */}
        <div className="relative">
          {/* Scroll Indicator */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm flex items-center justify-center">
              <span className="mr-2">Scroll to see more stories</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-luxury rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </p>
          </div>

          {/* Testimonials Horizontal Scroll Container */}
          <div className="overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex space-x-6 min-w-max">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`flex-shrink-0 w-80 sm:w-96 card-luxury rounded-lg p-8 group hover:transform hover:-translate-y-2 transition-all duration-300 slide-in-luxury`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-luxury fill-current" />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <Quote className="h-8 w-8 text-luxury-gold opacity-50" />
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 text-center italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="text-center border-t border-gray-700 pt-6">
                    <h4 className="text-gradient-gold font-bold text-lg mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">{testimonial.role}</p>
                    {testimonial.achievement && (
                      <div className="badge-premium rounded-full px-4 py-2">
                        <span className="text-white text-xs font-medium">{testimonial.achievement}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Hint */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              ← Scroll horizontally to read more success stories →
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 slide-in-luxury-delayed-2">
          <div className="card-luxury rounded-lg p-8 max-w-2xl mx-auto border-l-4 border-luxury">
            <h3 className="text-2xl font-playfair font-bold text-gradient-gold mb-4">
              Ready to Write Your Own Success Story?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Join thousands of students who've transformed their careers with Sean's proven system.
            </p>
            <button className="btn-luxury text-black font-bold px-8 py-4 rounded text-lg hover:scale-105 transition-transform duration-300">
              Start Your Transformation Today
            </button>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}