import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Scale, FileText, AlertCircle, CheckCircle, Crown, Scissors } from 'lucide-react';

export default function TermsPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6">
            <Scale className="h-8 w-8 text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Terms & Conditions
          </h1>
          <p className="text-gray-300 text-lg">
            Last updated: January 1, 2025
          </p>
        </div>

        {/* Content */}
        <div className={`card-luxury rounded-lg p-8 md:p-12 space-y-12 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
          
          {/* Agreement Section */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-3" />
              Agreement to Terms
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with 
                Mack Daddy's Barbering and Hairdressing Course ("us", "we", or "our") operated by Mack Daddy's 
                Education LLC.
              </p>
              <p>
                Please read these Terms and Conditions carefully before using our Service. Your access to and 
                use of the Service is conditioned on your acceptance of and compliance with these Terms. These 
                Terms apply to all visitors, users and others who access or use the Service.
              </p>
              <p>
                By accessing or using our Service you agree to be bound by these Terms. If you disagree with 
                any part of the terms then you may not access the Service.
              </p>
            </div>
          </section>

          {/* Course Access */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6 flex items-center">
              <Crown className="h-6 w-6 mr-3" />
              Course Access & Use
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Upon successful payment, you will receive lifetime access to the Mack Daddy's Barbering & 
                Hairdressing Course content. This includes:
              </p>
              <ul className="list-none space-y-3 ml-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-luxury-gold mr-3 mt-0.5 flex-shrink-0" />
                  All video lessons and training materials
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-luxury-gold mr-3 mt-0.5 flex-shrink-0" />
                  Access to private community forums
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-luxury-gold mr-3 mt-0.5 flex-shrink-0" />
                  Future updates and bonus content at no additional cost
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-luxury-gold mr-3 mt-0.5 flex-shrink-0" />
                  24/7 online access through our learning platform
                </li>
              </ul>
              <p>
                Course content is for your personal use only and may not be shared, redistributed, or resold. 
                Violation of this policy will result in immediate termination of access without refund.
              </p>
            </div>
          </section>

          {/* Refund Policy */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6 flex items-center">
              <Shield className="h-6 w-6 mr-3" />
              365-Day Money-Back Guarantee
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We stand behind our course 100%. If you're not completely satisfied with your purchase, 
                you may request a full refund within 365 days of your purchase date.
              </p>
              <p>
                To request a refund, simply contact our support team with your order information. 
                Refunds will be processed within 5-10 business days to your original payment method.
              </p>
              <div className="card-burgundy rounded-lg p-6 border-l-4 border-luxury">
                <h4 className="text-gradient-gold font-semibold mb-2">Refund Conditions:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Request must be made within 365 days of purchase</li>
                  <li>Must provide order number and purchase email</li>
                  <li>Course access will be revoked upon refund processing</li>
                  <li>Bonus materials and community access also terminated</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6 flex items-center">
              <AlertCircle className="h-6 w-6 mr-3" />
              User Responsibilities
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>As a student of our course, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use course materials for personal educational purposes only</li>
                <li>Not share login credentials with others</li>
                <li>Not record, download, or distribute course content</li>
                <li>Maintain respectful communication in community forums</li>
                <li>Follow all applicable laws and regulations when practicing techniques</li>
                <li>Obtain proper licensing and insurance as required in your jurisdiction</li>
              </ul>
            </div>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6">
              Educational Disclaimer
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                This course is for educational purposes only. While we provide comprehensive training, 
                individual results may vary. Success depends on many factors including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Individual skill and dedication</li>
                <li>Local market conditions</li>
                <li>Compliance with local licensing requirements</li>
                <li>Business acumen and marketing efforts</li>
              </ul>
              <p>
                We make no guarantees regarding specific income levels or career outcomes. Students are 
                responsible for obtaining proper licensing and insurance in their jurisdiction.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6">
              Intellectual Property Rights
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                The Service and its original content, features and functionality are and will remain the 
                exclusive property of Mack Daddy's Education LLC and its licensors. The Service is protected 
                by copyright, trademark, and other laws.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service 
                without our prior written consent.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6">
              Termination
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We may terminate or suspend your access immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the Service will cease immediately. If you wish to 
                terminate your account, you may simply discontinue using the Service.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6">
              Changes to Terms
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material we will try to provide at least 30 days notice prior to any new 
                terms taking effect.
              </p>
              <p>
                What constitutes a material change will be determined at our sole discretion. By continuing 
                to access or use our Service after those revisions become effective, you agree to be bound 
                by the revised terms.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6">
              Contact Us
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="card-burgundy rounded-lg p-6 border-l-4 border-luxury">
                <p className="font-medium text-white mb-2">Mack Daddy's Education LLC</p>
                <p>Email: legal@mackdaddyscourse.com</p>
                <p>Support: support@mackdaddyscourse.com</p>
                <p>Phone: 1-888-MACK-CUT (1-888-622-5288)</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}