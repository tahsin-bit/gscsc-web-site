import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { Button } from '@/components/ui/button';

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button
            onClick={() => navigate(-1)}
            variant="ghost"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-cyan-400/20 p-8">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">Privacy Policy</h1>
          <h2 className="text-xl text-cyan-400 mb-8 text-center font-semibold">
            Govt. Science College Science Club (GSCSC)
          </h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Govt. Science College Science Club (GSCSC) values your trust and is committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our club activities, 
              events, website, or digital platforms.
            </p>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h3>
              <p className="text-gray-300 mb-4">We may collect the following information when you join or participate in GSCSC:</p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside ml-4">
                <li>Personal details (name, student ID, class/section, contact number, email address).</li>
                <li>Academic and extracurricular interests (subjects, projects, competitions).</li>
                <li>Event participation details (registration, submissions, certificates).</li>
                <li>Photos, videos, or other media during club activities and events.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h3>
              <p className="text-gray-300 mb-4">Your information may be used for the following purposes:</p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside ml-4">
                <li>To manage club membership and activities.</li>
                <li>To communicate important updates, notices, and announcements.</li>
                <li>To organize and conduct competitions, workshops, and events.</li>
                <li>To maintain records of participation and achievements.</li>
                <li>To promote club activities on official platforms (with consent for photos/videos).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h3>
              <ul className="text-gray-300 space-y-2 list-disc list-inside ml-4">
                <li>GSCSC does not sell, trade, or rent your personal information to third parties.</li>
                <li>Information may be shared with Govt. Science College authorities for official purposes.</li>
                <li>Photos or videos may be shared on GSCSC's official social media, website, or publications with prior consent.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">4. Data Security</h3>
              <p className="text-gray-300">
                We take reasonable measures to protect your personal data from unauthorized access, misuse, or disclosure. 
                However, no digital or physical storage is 100% secure, and GSCSC cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h3>
              <p className="text-gray-300 mb-4">As a member or participant, you have the right to:</p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside ml-4">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request corrections to inaccurate information.</li>
                <li>Withdraw consent for the use of your photos, videos, or personal details in club promotions.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">6. Policy Updates</h3>
              <p className="text-gray-300">
                GSCSC reserves the right to update or revise this Privacy Policy at any time. 
                Any changes will be communicated through official club channels.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h3>
              <p className="text-gray-300 mb-4">
                If you have any questions regarding this Privacy Policy or how your information is handled, please contact:
              </p>
              <div className="bg-black/20 p-4 rounded-lg border border-cyan-400/20">
                <p className="text-white font-semibold">Govt. Science College Science Club (GSCSC)</p>
                <p className="text-gray-300">Govt. Science College, Tejgaon, Dhaka-1205, Bangladesh</p>
                <p className="text-cyan-400">Email: gscsc.official@gmail.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicyPage;