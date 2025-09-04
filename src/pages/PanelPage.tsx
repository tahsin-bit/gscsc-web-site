
import React from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Users, Calendar, MessageCircle, Award, Crown, Shield, GraduationCap } from 'lucide-react';

const PanelPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Expert Panel</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl">Panel Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed">
                Our expert panel brings together distinguished faculty members, industry professionals, 
                and research leaders to guide and mentor our graduate student community. They provide 
                valuable insights, research direction, and career guidance.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Button 
              onClick={() => navigate('/panel/executive')}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-8 text-lg flex flex-col items-center gap-3"
            >
              <Crown className="w-8 h-8" />
              Executive Committee
            </Button>
            <Button 
              onClick={() => navigate('/panel/advisory')}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-8 text-lg flex flex-col items-center gap-3"
            >
              <Shield className="w-8 h-8" />
              Advisory Board
            </Button>
            <Button 
              onClick={() => navigate('/panel/faculty')}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-8 text-lg flex flex-col items-center gap-3"
            >
              <GraduationCap className="w-8 h-8" />
              Faculty Members
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  Panel Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Our panel consists of renowned experts from academia and industry, each bringing 
                  unique perspectives and extensive experience in computer science research and development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Panel Discussions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Regular panel discussions cover cutting-edge research topics, industry trends, 
                  and emerging technologies, providing students with insights into the future of computing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Join our upcoming panel sessions featuring discussions on AI ethics, quantum computing, 
                  cybersecurity trends, and the future of software engineering.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Award className="w-6 h-6" />
                  Recognition Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Our panel recognizes outstanding research contributions, innovative projects, 
                  and exceptional academic achievements by graduate students in our community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PanelPage;
