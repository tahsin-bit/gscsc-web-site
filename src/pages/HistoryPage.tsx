
import React from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Award, Users, Milestone } from 'lucide-react';

const HistoryPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">History of GSCSC</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <Clock className="w-8 h-8" />
                History of the Govt. Science College Science Club (GSCSC)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                The Govt. Science College Science Club was founded on <span className="text-cyan-400 font-semibold">December 22, 1981</span>, by passionate students from Classes 9 and 10 at the Intermediate Technical College in Tejgaon, Dhaka. Initially named the Intermediate Technical College Science Club, the club became the Tejgaon Government Science College Science Club after the college's nationalization in 1984. It was later renamed to its current form, Govt. Science College Science Club (GSCSC), in the late 1990s.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                In its early years, particularly in the 1980s and 1990s, the club emphasized science projects, displays, and workshops. Over time, it has expanded to include ten departments focused on various scientific disciplines.
              </p>
              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-400/30 rounded-lg p-6 mt-6">
                <p className="text-cyan-300 text-xl font-bold text-center">
                  Celebrating <span className="text-2xl text-cyan-400">43 years</span> of excellence, Govt. Science College Science Club (GSCSC) has organized <span className="text-cyan-400">11 national science festivals</span> and <span className="text-cyan-400">38 intra-college festivals</span>, inspiring generations of students and nurturing scientific curiosity and creativity.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-black/60 border-cyan-400/30">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Milestone className="w-6 h-6" />
                  Foundation & Name Evolution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-cyan-400 pl-4">
                    <p className="text-cyan-400 font-semibold">December 22, 1981</p>
                    <p className="text-gray-200">Founded as <strong>Intermediate Technical College Science Club</strong> by passionate students from Classes 9 and 10</p>
                  </div>
                  <div className="border-l-4 border-cyan-400 pl-4">
                    <p className="text-cyan-400 font-semibold">1984</p>
                    <p className="text-gray-200">Renamed to <strong>Tejgaon Government Science College Science Club</strong> after college nationalization</p>
                  </div>
                  <div className="border-l-4 border-cyan-400 pl-4">
                    <p className="text-cyan-400 font-semibold">Late 1990s</p>
                    <p className="text-gray-200">Final transformation to <strong>Govt. Science College Science Club (GSCSC)</strong></p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  Growth & Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  In its early years, particularly in the 1980s and 1990s, the club emphasized science projects, displays, and workshops. Over time, it has evolved and expanded significantly.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Established science project exhibitions and displays</li>
                  <li>• Organized educational workshops and seminars</li>
                  <li>• Expanded to include <strong className="text-cyan-400">ten specialized departments</strong></li>
                  <li>• Focused on various scientific disciplines and research areas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Award className="w-6 h-6" />
                  Achievements & Legacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-6">
                  Over four decades of dedication to scientific excellence, GSCSC has made remarkable contributions to the scientific community and education sector.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-900/40 to-cyan-900/40 border border-green-400/30 rounded-lg p-4">
                    <p className="text-green-400 text-3xl font-bold text-center">11</p>
                    <p className="text-gray-200 text-center font-semibold">National Science Festivals</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-400/30 rounded-lg p-4">
                    <p className="text-blue-400 text-3xl font-bold text-center">38</p>
                    <p className="text-gray-200 text-center font-semibold">Intra-College Festivals</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-cyan-300 text-lg">
                    <strong>Inspiring generations of students and nurturing scientific curiosity and creativity</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HistoryPage;
