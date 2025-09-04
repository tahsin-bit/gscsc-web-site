
import React from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">About GSCSC</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-2xl">Who We Are</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 leading-relaxed">
                  The Graduate Student Computer Science Club (GSCSC) is a dynamic community of graduate students 
                  passionate about advancing computer science research and education. We foster collaboration, 
                  innovation, and knowledge sharing among our members.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-2xl">What We Do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 leading-relaxed">
                  We organize workshops, research seminars, networking events, and collaborative projects. 
                  Our activities are designed to enhance the academic and professional development of 
                  computer science graduate students.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Learn More About Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Button 
                onClick={() => navigate('/about/mission')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white py-6 text-lg"
              >
                Our Mission
              </Button>
              <Button 
                onClick={() => navigate('/about/vision')}
                className="bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
              >
                Our Vision
              </Button>
              <Button 
                onClick={() => navigate('/about/history')}
                className="bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg"
              >
                Our History
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
