import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Clock, MessageSquare, Send, MapPin, Headphones, Scissors, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      <div className="bg-black/10 backdrop-blur-2xl border-b border-luxury/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-gray-400 hover:text-luxury transition-colors duration-300 group"
            >
              <ArrowLeft className="h-5 w-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Back to Home</span>
            </button>
            
            <div className="flex items-center">
              <Scissors className="h-7 w-7 text-luxury-gold mr-4" />
              <span className="text-2xl font-playfair font-bold tracking-wider text-gradient-gold">MACK DADDY'S</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6">
            <MessageSquare className="h-8 w-8 text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions about our course? Need technical support? We're here to help you succeed.
          </p>
        </div>

        <div className={`grid lg:grid-cols-3 gap-12 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Contact Methods */}
            <div className="card-luxury rounded-lg p-8">
              <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-luxury-gradient rounded flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email Support</h3>
                    <p className="text-gray-300 text-sm mb-2">support@mackdaddyscourse.com</p>
                    <p className="text-gray-400 text-xs">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-luxury-gradient rounded flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone Support</h3>
                    <p className="text-gray-300 text-sm mb-2">1-888-MACK-CUT</p>
                    <p className="text-gray-300 text-sm mb-2">(1-888-622-5288)</p>
                    <p className="text-gray-400 text-xs">Mon-Fri, 9 AM to 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-luxury-gradient rounded flex items-center justify-center mr-4 flex-shrink-0">
                    <Headphones className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Live Chat</h3>
                    <p className="text-gray-300 text-sm mb-2">Available on course platform</p>
                    <p className="text-gray-400 text-xs">Real-time support for students</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card-burgundy rounded-lg p-8 border-l-4 border-luxury">
              <h3 className="text-xl font-playfair font-bold text-gradient-gold mb-4 flex items-center">
                <Clock className="h-5 w-5 text-luxury-gold mr-3" />
                Support Hours
              </h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM to 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM to 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Email support is available 24/7 with responses within 24 hours.
              </p>
            </div>

            {/* FAQ Link */}
            <div className="card-luxury rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-3">Quick Answers</h3>
              <p className="text-gray-300 text-sm mb-4">
                Check our FAQ section for instant answers to common questions.
              </p>
              <button className="btn-luxury text-black font-medium px-6 py-2 rounded text-sm">
                View FAQ
              </button>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-luxury rounded-lg p-8">
              <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded mb-6">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-300">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="input-luxury w-full px-4 py-3 rounded"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="input-luxury w-full px-4 py-3 rounded"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="input-luxury w-full px-4 py-3 rounded"
                    >
                      <option value="">Select a subject</option>
                      <option value="course-question">Course Question</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="billing">Billing & Payments</option>
                      <option value="refund">Refund Request</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="input-luxury w-full px-4 py-3 rounded resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-luxury text-black font-bold py-4 rounded flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-3" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Additional Support Options */}
        <div className={`mt-16 ${isVisible ? 'slide-in-luxury-delayed-2' : 'opacity-0'}`}>
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">
            More Ways to <span className="text-gradient-gold">Get Help</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="card-burgundy rounded-lg p-8 text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Student Community</h3>
              <p className="text-gray-300 mb-6">
                Connect with fellow students and get answers from our active community of learners.
              </p>
              <button className="badge-burgundy text-white font-medium px-6 py-2 rounded">
                Join Community
              </button>
            </div>

            <div className="card-burgundy rounded-lg p-8 text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Course Resources</h3>
              <p className="text-gray-300 mb-6">
                Access our comprehensive resource library with step-by-step guides and video tutorials.
              </p>
              <button className="badge-burgundy text-white font-medium px-6 py-2 rounded">
                Browse Resources
              </button>
            </div>

            <div className="card-burgundy rounded-lg p-8 text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1-on-1 Support</h3>
              <p className="text-gray-300 mb-6">
                Schedule a personal consultation call with our expert instructors for advanced guidance.
              </p>
              <button className="badge-burgundy text-white font-medium px-6 py-2 rounded">
                Book Session
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}