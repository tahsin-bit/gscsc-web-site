import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, BookOpen, Newspaper, Camera, Brain, Trophy, Bot, Users, Monitor, Gamepad2 } from 'lucide-react';
interface HomePageProps {
  onPageChange: (page: string) => void;
}
const HomePage = ({
  onPageChange
}: HomePageProps) => {
  const departments = [{
    name: "Project Display and Research Paper",
    icon: FileText
  }, {
    name: "Wall Magazine and Scrapbook",
    icon: BookOpen
  }, {
    name: "Press and Publications",
    icon: Newspaper
  }, {
    name: "Photography and Media",
    icon: Camera
  }, {
    name: "Quizzing Circuit",
    icon: Brain
  }, {
    name: "Olympiad Circuit",
    icon: Trophy
  }, {
    name: "Robotics and Rocketry",
    icon: Bot
  }, {
    name: "Public Relations",
    icon: Users
  }, {
    name: "IT",
    icon: Monitor
  }, {
    name: "Gaming Affairs",
    icon: Gamepad2
  }];
  return <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat md:bg-cover" style={{
      backgroundImage: `url('/lovable-uploads/06ebd8c1-ec21-45ca-8361-a0d29ceb552b.png')`
    }}>
        {/* Mobile Background with uploaded image */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat md:hidden" style={{
        backgroundImage: `url('/lovable-uploads/1ee7beac-8cf1-46a1-96bf-3915ca7ef2ec.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 75%',
        backgroundRepeat: 'no-repeat'
      }}></div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Realistic Satellite Animation - Multiple Satellites */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="realistic-satellite realistic-satellite-1">
          <img src="/lovable-uploads/e7791ff9-f6eb-495f-a9f4-5baa127c9d44.png" alt="Satellite" className="w-24 h-24 object-contain" />
        </div>
        <div className="realistic-satellite realistic-satellite-2">
          <img src="/lovable-uploads/e7791ff9-f6eb-495f-a9f4-5baa127c9d44.png" alt="Satellite" className="w-20 h-20 object-contain opacity-90" />
        </div>
        <div className="realistic-satellite realistic-satellite-3">
          <img src="/lovable-uploads/e7791ff9-f6eb-495f-a9f4-5baa127c9d44.png" alt="Satellite" className="w-16 h-16 object-contain opacity-80" />
        </div>
        <div className="realistic-satellite realistic-satellite-4">
          <img src="/lovable-uploads/e7791ff9-f6eb-495f-a9f4-5baa127c9d44.png" alt="Satellite" className="w-18 h-18 object-contain opacity-70" />
        </div>
      </div>

      {/* Comet Animations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="comet comet-1"></div>
        <div className="comet comet-2"></div>
        <div className="comet comet-3"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Title */}
            <div className="relative">
              {/* Mobile Stars Background - Only visible on mobile */}
              <div className="absolute inset-0 md:hidden pointer-events-none">
                <div className="mobile-star mobile-star-1">★</div>
                <div className="mobile-star mobile-star-2">★</div>
                <div className="mobile-star mobile-star-3">★</div>
                <div className="mobile-star mobile-star-4">★</div>
                <div className="mobile-star mobile-star-5">★</div>
                <div className="mobile-star mobile-star-6">★</div>
                <div className="mobile-star mobile-star-7">★</div>
                <div className="mobile-star mobile-star-8">★</div>
                <div className="mobile-star mobile-star-9">★</div>
                <div className="mobile-star mobile-star-10">★</div>
              </div>
              <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-cyan-400 mb-6 tracking-wider">GOVT. SCIENCE COLLEGE SCIENCE CLUB</h1>
            </div>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white mb-4 max-w-3xl mx-auto leading-relaxed">
              Welcome to GSCSC - where curiosity meets innovation. Join us on a journey of discovery through space, robotics, and cutting-edge research.
            </p>
            
            {/* Tagline */}
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-12">
              Exploring the Universe Together
            </h2>
            
            {/* CTA Button */}
            <Link to="/join-us">
              <Button size="lg" className="bg-gray-600/80 hover:bg-gray-500/80 text-white px-8 py-4 text-lg font-medium rounded-full backdrop-blur-sm border border-gray-400/30 transition-all duration-300 hover:scale-105">
                Join Our Community
              </Button>
            </Link>
          </div>
        </div>

        {/* Our Department Section */}
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-16">
              Our Department
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {departments.map((dept, index) => {
              const IconComponent = dept.icon;
              return <Card key={index} className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20">
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                        {dept.name}
                      </h3>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .realistic-satellite {
          position: absolute;
          filter: drop-shadow(0 0 15px rgba(0, 188, 212, 0.8));
        }

        .realistic-satellite-1 {
          animation: realistic-orbit-1 45s linear infinite;
        }

        .realistic-satellite-2 {
          animation: realistic-orbit-2 60s linear infinite reverse;
        }

        .realistic-satellite-3 {
          animation: realistic-orbit-3 75s linear infinite;
        }

        .realistic-satellite-4 {
          animation: realistic-orbit-4 90s linear infinite reverse;
        }

        @keyframes realistic-orbit-1 {
          0% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0deg) translateX(280px) rotate(0deg);
          }
          100% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(360deg) translateX(280px) rotate(-360deg);
          }
        }

        @keyframes realistic-orbit-2 {
          0% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0deg) translateX(220px) rotate(0deg);
          }
          100% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(360deg) translateX(220px) rotate(-360deg);
          }
        }

        @keyframes realistic-orbit-3 {
          0% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0deg) translateX(350px) rotate(0deg);
          }
          100% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(360deg) translateX(350px) rotate(-360deg);
          }
        }

        @keyframes realistic-orbit-4 {
          0% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0deg) translateX(400px) rotate(0deg);
          }
          100% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(360deg) translateX(400px) rotate(-360deg);
          }
        }

        .comet {
          position: absolute;
          width: 2px;
          height: 2px;
          background: linear-gradient(45deg, #ffffff, #00bcd4, #ffffff);
          border-radius: 50%;
          box-shadow: 
            0 0 8px #ffffff,
            0 0 16px #00bcd4,
            0 0 24px #00bcd4;
        }

        .comet::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          width: 100px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.8), rgba(0,188,212,0.6), transparent);
          transform-origin: 0 50%;
        }

        .comet-1 {
          top: 10%;
          left: -10px;
          animation: comet-move-1 15s linear infinite;
        }

        .comet-2 {
          top: 30%;
          left: -10px;
          animation: comet-move-2 20s linear infinite 5s;
        }

        .comet-3 {
          top: 60%;
          left: -10px;
          animation: comet-move-3 18s linear infinite 10s;
        }

        @keyframes comet-move-1 {
          0% {
            left: -10px;
            top: 10%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 110%;
            top: 80%;
            opacity: 0;
          }
        }

        @keyframes comet-move-2 {
          0% {
            left: -10px;
            top: 30%;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            left: 110%;
            top: 90%;
            opacity: 0;
          }
        }

        @keyframes comet-move-3 {
          0% {
            left: -10px;
            top: 60%;
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          88% {
            opacity: 1;
          }
          100% {
            left: 110%;
            top: 20%;
            opacity: 0;
          }
        }

        /* Mobile Stars Animation - Only visible on small screens */
        .mobile-star {
          position: absolute;
          font-size: 16px;
          color: #ffffff;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          pointer-events: none;
          text-shadow: 0 0 10px #ffffff, 0 0 20px #00bcd4;
        }

        .mobile-star-1 {
          top: 10%;
          left: 5%;
          animation: star-float-1 3s ease-in-out infinite;
        }

        .mobile-star-2 {
          top: 20%;
          right: 10%;
          animation: star-float-2 4s ease-in-out infinite 0.5s;
        }

        .mobile-star-3 {
          top: 30%;
          left: 15%;
          animation: star-float-3 3.5s ease-in-out infinite 1s;
        }

        .mobile-star-4 {
          top: 40%;
          right: 20%;
          animation: star-float-4 4.5s ease-in-out infinite 1.5s;
        }

        .mobile-star-5 {
          top: 50%;
          left: 8%;
          animation: star-float-5 3.2s ease-in-out infinite 2s;
        }

        .mobile-star-6 {
          top: 60%;
          right: 15%;
          animation: star-float-6 4.2s ease-in-out infinite 0.3s;
        }

        .mobile-star-7 {
          top: 70%;
          left: 25%;
          animation: star-float-7 3.8s ease-in-out infinite 1.2s;
        }

        .mobile-star-8 {
          top: 80%;
          right: 5%;
          animation: star-float-8 4.8s ease-in-out infinite 0.8s;
        }

        .mobile-star-9 {
          top: 15%;
          left: 50%;
          animation: star-float-9 3.6s ease-in-out infinite 2.5s;
        }

        .mobile-star-10 {
          top: 85%;
          left: 45%;
          animation: star-float-10 4.1s ease-in-out infinite 1.8s;
        }

        @keyframes star-float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
          25% { transform: translate(5px, -8px) rotate(90deg); opacity: 1; }
          50% { transform: translate(10px, -15px) rotate(180deg); opacity: 0.3; }
          75% { transform: translate(5px, -8px) rotate(270deg); opacity: 1; }
        }

        @keyframes star-float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
          25% { transform: translate(-4px, 6px) rotate(-90deg); opacity: 1; }
          50% { transform: translate(-8px, 12px) rotate(-180deg); opacity: 0.2; }
          75% { transform: translate(-4px, 6px) rotate(-270deg); opacity: 1; }
        }

        @keyframes star-float-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
          25% { transform: translate(6px, 4px) rotate(180deg); opacity: 1; }
          50% { transform: translate(12px, 8px) rotate(360deg); opacity: 0.2; }
          75% { transform: translate(6px, 4px) rotate(540deg); opacity: 1; }
        }

        @keyframes star-float-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
          25% { transform: translate(-8px, -5px) rotate(135deg); opacity: 1; }
          50% { transform: translate(-15px, -10px) rotate(270deg); opacity: 0.3; }
          75% { transform: translate(-8px, -5px) rotate(405deg); opacity: 1; }
        }

        @keyframes star-float-5 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
          25% { transform: translate(4px, 9px) rotate(45deg); opacity: 1; }
          50% { transform: translate(8px, 18px) rotate(90deg); opacity: 0.2; }
          75% { transform: translate(4px, 9px) rotate(135deg); opacity: 1; }
        }

        @keyframes star-float-6 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
          25% { transform: translate(-6px, -4px) rotate(-45deg); opacity: 1; }
          50% { transform: translate(-12px, -8px) rotate(-90deg); opacity: 0.4; }
          75% { transform: translate(-6px, -4px) rotate(-135deg); opacity: 1; }
        }

        @keyframes star-float-7 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
          25% { transform: translate(8px, -6px) rotate(90deg); opacity: 1; }
          50% { transform: translate(15px, -12px) rotate(180deg); opacity: 0.2; }
          75% { transform: translate(8px, -6px) rotate(270deg); opacity: 1; }
        }

        @keyframes star-float-8 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
          25% { transform: translate(-5px, 8px) rotate(-135deg); opacity: 1; }
          50% { transform: translate(-10px, 15px) rotate(-270deg); opacity: 0.3; }
          75% { transform: translate(-5px, 8px) rotate(-405deg); opacity: 1; }
        }

        @keyframes star-float-9 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
          25% { transform: translate(3px, -10px) rotate(180deg); opacity: 1; }
          50% { transform: translate(6px, -20px) rotate(360deg); opacity: 0.2; }
          75% { transform: translate(3px, -10px) rotate(540deg); opacity: 1; }
        }

        @keyframes star-float-10 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
          25% { transform: translate(-9px, 3px) rotate(-90deg); opacity: 1; }
          50% { transform: translate(-18px, 5px) rotate(-180deg); opacity: 0.4; }
          75% { transform: translate(-9px, 3px) rotate(-270deg); opacity: 1; }
        }
      `}</style>
    </div>;
};
export default HomePage;