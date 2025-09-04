
import React from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, BookOpen } from 'lucide-react';

const PastEventsPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Past Events</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <Users className="w-8 h-8" />
                Our Event History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed">
                Look back at the successful events we've organized, the knowledge shared, 
                and the connections made within our computer science community.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-cyan-400/30">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Award className="w-6 h-6" />
                  Annual Research Conference 2023
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Our flagship annual conference featured 50+ research presentations, 
                  keynote speakers from top tech companies, and networking sessions.
                </p>
                <p className="text-cyan-400 font-semibold">300+ Attendees • 20 Awards Given</p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <BookOpen className="w-6 h-6" />
                  Deep Learning Workshop Series
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  A comprehensive 6-week workshop series covering neural networks, 
                  computer vision, and natural language processing applications.
                </p>
                <p className="text-cyan-400 font-semibold">120 Participants • 95% Completion Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PastEventsPage;
