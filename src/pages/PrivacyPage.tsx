import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Globe, Scissors } from 'lucide-react';

export default function PrivacyPage() {
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
            <Shield className="h-8 w-8 text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg">
            Last updated: January 1, 2025
          </p>
        </div>

        {/* Content */}
        <div className={`card-luxury rounded-lg p-8 md:p-12 space-y-12 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6 flex items-center">
              <Lock className="h-6 w-6 mr-3" />
              Your Privacy Matters
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                At Mack Daddy's Education LLC ("we", "our", or "us"), we are committed to protecting your 
                privacy and personal information. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
                policy, please do not access the site or use our services.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6 flex items-center">
              <Database className="h-6 w-6 mr-3" />
              Information We Collect
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                <p className="mb-3">We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Register for our course</li>
                  <li>Make a purchase</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact our support team</li>
                  <li>Participate in community forums</li>
                </ul>
                <p className="mt-3">This information may include:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Billing and payment information</li>
                  <li>Course progress and completion data</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
                <p className="mb-3">When you visit our website, we may automatically collect:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages viewed and time spent on site</li>
                  <li>Referring website addresses</li>
                  <li>Device information</li>
                </ul>
              </div>

            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6 flex items-center">
              <Eye className="h-6 w-6 mr-3" />
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our course platform</li>
                <li>Process payments and deliver purchased content</li>
                <li>Send you course updates and important notifications</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Improve our website and course content</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Prevent fraud and ensure platform security</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <div className="card-burgundy rounded-lg p-6 border-l-4 border-luxury">
                <h4 className="text-gradient-gold font-semibold mb-2">Marketing Communications</h4>
                <p>
                  We may send you promotional emails about new courses, updates, and special offers. 
                  You can opt out of these communications at any time by clicking the unsubscribe 
                  link in our emails or contacting us directly.
                </p>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6 flex items-center">
              <UserCheck className="h-6 w-6 mr-3" />
              How We Share Your Information
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information only in the following circumstances:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Service Providers</h4>
                  <p>
                    We work with trusted third-party service providers who help us operate our business, 
                    including payment processors (Stripe), email services, hosting providers, and analytics tools. 
                    These providers have access to your information only to perform their services and are 
                    contractually obligated to protect your data.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Legal Requirements</h4>
                  <p>
                    We may disclose your information if required by law, court order, or government regulation, 
                    or if we believe such disclosure is necessary to protect our rights or prevent illegal activity.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Business Transfers</h4>
                  <p>
                    In the event of a merger, acquisition, or sale of assets, your information may be 
                    transferred to the new entity, subject to the same privacy protections.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6 flex items-center">
              <Lock className="h-6 w-6 mr-3" />
              Data Security
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-burgundy rounded-lg p-6">
                  <h4 className="font-semibold text-gradient-gold mb-3">Technical Safeguards</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure payment processing via Stripe</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication</li>
                  </ul>
                </div>
                
                <div className="card-burgundy rounded-lg p-6">
                  <h4 className="font-semibold text-gradient-gold mb-3">Operational Safeguards</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Limited access to personal data</li>
                    <li>Employee privacy training</li>
                    <li>Regular backup procedures</li>
                    <li>Incident response protocols</li>
                  </ul>
                </div>
              </div>
              
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6">
              Your Privacy Rights
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to certain exceptions)</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Withdraw consent for marketing communications</li>
                <li><strong>Restriction:</strong> Request limitation of how we process your information</li>
              </ul>
              
              <p>
                To exercise these rights, please contact us using the information provided below. 
                We will respond to your request within 30 days.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6 flex items-center">
              <Globe className="h-6 w-6 mr-3" />
              Cookies and Tracking
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Our website uses cookies and similar tracking technologies to enhance your experience 
                and analyze usage patterns. Cookies are small data files stored on your device.
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-white mb-2">Essential Cookies</h4>
                  <p>Required for basic website functionality and cannot be disabled.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Analytics Cookies</h4>
                  <p>Help us understand how visitors interact with our website to improve performance.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Marketing Cookies</h4>
                  <p>Used to deliver relevant advertisements and track campaign effectiveness.</p>
                </div>
              </div>
              
              <p>
                You can control cookie settings through your browser preferences. Note that disabling 
                certain cookies may affect website functionality.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6">
              Children's Privacy
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Our services are not intended for children under 18 years of age. We do not knowingly 
                collect personal information from children under 18. If you are a parent or guardian and 
                believe your child has provided us with personal information, please contact us immediately.
              </p>
            </div>
          </section>

          {/* International Users */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6">
              International Users
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Our services are primarily intended for users in the United States. If you are accessing 
                our services from outside the US, please be aware that your information may be transferred 
                to, stored, and processed in the United States where our servers are located.
              </p>
              <p>
                By using our services, you consent to the transfer of your information to the United States 
                and acknowledge that US privacy laws may differ from those in your jurisdiction.
              </p>
            </div>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gradient-gold mb-6">
              Policy Updates
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices 
                or legal requirements. We will notify you of any material changes by posting the new 
                privacy policy on this page and updating the "Last updated" date.
              </p>
              <p>
                We encourage you to review this privacy policy periodically for any changes. Changes to 
                this privacy policy are effective when they are posted on this page.
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
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="card-burgundy rounded-lg p-6 border-l-4 border-luxury">
                <p className="font-medium text-white mb-2">Mack Daddy's Education LLC</p>
                <p>Privacy Officer</p>
                <p>Email: privacy@mackdaddyscourse.com</p>
                <p>Support: support@mackdaddyscourse.com</p>
                <p>Phone: 1-888-MACK-CUT (1-888-622-5288)</p>
                <p className="mt-3 text-sm text-gray-400">
                  For privacy-related inquiries, please include "Privacy Request" in your subject line.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}