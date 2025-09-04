import React from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, BookOpen, Lightbulb } from 'lucide-react';

const MissionPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Our Mission</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <Target className="w-8 h-8" />
                Mission Statement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                The mission of My Government Science College Science Club is to foster a stimulating environment for scientific inquiry beyond the classroom. We organize interactive workshops, seminars, and projects that enhance understanding of various scientific fields. By promoting collaboration among students, faculty, and industry experts, we support academic growth and career development. Our focus is on nurturing critical thinking, problem-solving skills, and innovation through hands-on experiments, competitions, and research activities, while upholding integrity and ethical practices in science.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  Community Building
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  We foster a supportive community where students can collaborate, share knowledge, 
                  and build lasting professional relationships that extend beyond their academic journey.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <BookOpen className="w-6 h-6" />
                  Academic Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  We provide resources, workshops, and mentorship opportunities to help students 
                  achieve academic excellence and make meaningful contributions to computer science research.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Lightbulb className="w-6 h-6" />
                  Innovation & Research
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  We encourage innovative thinking and provide platforms for students to present 
                  their research, receive feedback, and collaborate on groundbreaking projects.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Target className="w-6 h-6" />
                  Professional Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  We organize workshops, seminars, and networking events to help students develop 
                  professional skills and prepare for successful careers in academia or industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default MissionPage;
