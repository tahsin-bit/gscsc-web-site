import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const TermsOfServicesPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Services</h1>
            <h2 className="text-xl text-cyan-400 font-semibold">Govt. Science College Science Club (GSCSC)</h2>
            <p className="text-gray-300 mt-4">
              Welcome to Govt. Science College Science Club (GSCSC). By joining, participating, or engaging with our activities, events, or digital platforms, you agree to the following Terms of Services.
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-cyan-400/20 p-8 space-y-8">
            
            {/* Section 1 */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">1. Membership</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside pl-4">
                <li>Membership is open to students of Govt. Science College as per club rules.</li>
                <li>Members must provide accurate information during registration.</li>
                <li>GSCSC reserves the right to approve, suspend, or cancel membership at its discretion.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">2. Code of Conduct</h3>
              <p className="text-gray-300 mb-3">All members and participants must:</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside pl-4">
                <li>Maintain respect and discipline during club activities and events.</li>
                <li>Avoid any behavior that harms the reputation of GSCSC or Govt. Science College.</li>
                <li>Follow the instructions of club coordinators, teachers, and event organizers.</li>
                <li>Refrain from any form of harassment, discrimination, or misconduct.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">3. Events and Activities</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside pl-4">
                <li>Participation in events, competitions, and workshops may require prior registration.</li>
                <li>GSCSC reserves the right to set eligibility criteria for specific activities.</li>
                <li>Certificates and awards are provided based on fair evaluation and club guidelines.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">4. Use of Materials</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside pl-4">
                <li>Any study materials, resources, or publications provided by GSCSC are for educational purposes only.</li>
                <li>Members may not copy, distribute, or misuse GSCSC's official content without permission.</li>
                <li>Photos, videos, or media taken during events may be used by GSCSC for promotional purposes (with consent).</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">5. Digital Platforms</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside pl-4">
                <li>Members must use GSCSC's online platforms (website, social media, groups) responsibly.</li>
                <li>Posting inappropriate, offensive, or misleading content is strictly prohibited.</li>
                <li>GSCSC reserves the right to remove or restrict access to digital platforms for violations.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">6. Liability</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside pl-4">
                <li>GSCSC is not responsible for personal loss, damage, or injury during participation in events.</li>
                <li>Members are responsible for their personal belongings during club activities.</li>
                <li>GSCSC is not liable for any misuse of information shared by members outside official platforms.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">7. Termination of Membership</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside pl-4">
                <li>Violation of these Terms may lead to suspension or permanent removal from GSCSC.</li>
                <li>Serious misconduct will be reported to college authorities for further action.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">8. Changes to Terms</h3>
              <p className="text-gray-300">
                GSCSC reserves the right to update or modify these Terms of Services at any time. Members will be notified of significant changes through official announcements.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">9. Contact Us</h3>
              <p className="text-gray-300 mb-3">For questions about these Terms of Services, please contact:</p>
              <div className="bg-black/20 rounded-lg p-4 border border-cyan-400/30">
                <p className="text-white font-semibold">Govt. Science College Science Club (GSCSC)</p>
                <p className="text-gray-300">📍 Govt. Science College, Tejgaon, Dhaka, Bangladesh</p>
                <p className="text-gray-300">📧 Email: gscsc.official@gmail.com</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsOfServicesPage;