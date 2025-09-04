
import React from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Globe, Rocket, Star, Users, Lightbulb } from 'lucide-react';

const VisionPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Our Vision</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <Eye className="w-8 h-8" />
                Vision Statement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                The Government Science College Science Club aims to create a vibrant community of passionate students and faculty dedicated to science and discovery. We strive to be a hub of knowledge and innovation, promoting curiosity, critical thinking, and ethical values. Our mission is to empower members to become future leaders and innovators who contribute to scientific progress and societal development. Through collaboration and outreach, we aim to connect science with society, fostering a culture that prioritizes research, creativity, and responsible scientific practice for the greater good.
              </p>
              
              {/* Vision Image */}
              <div className="mt-8 relative overflow-hidden rounded-xl">
                <img 
                  src="/lovable-uploads/06ebd8c1-ec21-45ca-8361-a0d29ceb552b.png" 
                  alt="Science and Innovation" 
                  className="w-full h-64 object-cover rounded-xl opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-cyan-400" />
                    <p className="text-white font-medium">
                      "Fostering Innovation and Scientific Excellence"
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  Community Building
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  We envision a vibrant community where students and faculty collaborate, 
                  sharing knowledge and passion for scientific discovery and innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Rocket className="w-6 h-6" />
                  Innovation Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  We strive to be recognized as a leading innovation hub where groundbreaking research 
                  is conducted and future technologies are conceived and developed.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border-cyan-400/50">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-2xl flex items-center gap-3">
                <Star className="w-7 h-7" />
                Our Core Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3"></div>
                  <p className="text-gray-200">
                    <strong className="text-white">Creating Vibrant Community:</strong> Building a passionate community of students and faculty dedicated to science and discovery through collaborative learning and shared enthusiasm.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3"></div>
                  <p className="text-gray-200">
                    <strong className="text-white">Hub of Innovation:</strong> Serving as a center for knowledge and innovation that promotes curiosity, critical thinking, and ethical values in scientific practice.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3"></div>
                  <p className="text-gray-200">
                    <strong className="text-white">Future Leadership:</strong> Empowering members to become future leaders and innovators who contribute meaningfully to scientific progress and societal development.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3"></div>
                  <p className="text-gray-200">
                    <strong className="text-white">Science-Society Connection:</strong> Connecting science with society through collaboration and outreach, fostering responsible scientific practice for the greater good.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default VisionPage;
