
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Users, Lightbulb, Heart } from 'lucide-react';

const VisionSection = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-16">
          Our Vision
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Vision Content */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:border-cyan-400/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 mr-4">
                    <Eye className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Vision Statement</h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg">
                  The Government Science College Science Club aims to create a vibrant community of passionate students and faculty dedicated to science and discovery. We strive to be a hub of knowledge and innovation, promoting curiosity, critical thinking, and ethical values.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:border-cyan-400/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-cyan-400 mr-3" />
                    <h4 className="text-lg font-semibold text-white">Community Building</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Empowering members to become future leaders and innovators who contribute to scientific progress.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:border-cyan-400/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="w-6 h-6 text-cyan-400 mr-3" />
                    <h4 className="text-lg font-semibold text-white">Innovation Hub</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Connecting science with society, fostering research, creativity, and responsible scientific practice.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Vision Image/Animation */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-lg border border-white/20">
              <img 
                src="/lovable-uploads/06ebd8c1-ec21-45ca-8361-a0d29ceb552b.png" 
                alt="Science Vision" 
                className="w-full h-96 object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating particles animation */}
              <div className="absolute inset-0">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-cyan-400 mr-3" />
                  <p className="text-white font-medium">
                    "Fostering a culture for the greater good"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #ffffff, #00bcd4);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .particle-1 {
          top: 20%;
          left: 15%;
          animation-delay: 0s;
        }

        .particle-2 {
          top: 60%;
          right: 20%;
          animation-delay: 2s;
        }

        .particle-3 {
          bottom: 30%;
          left: 70%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          25% { transform: translateY(-15px) rotate(90deg); opacity: 1; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 0.8; }
          75% { transform: translateY(-20px) rotate(270deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default VisionSection;
