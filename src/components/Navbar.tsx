
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [{
    label: 'Home',
    path: '/'
  }, {
    label: 'About us',
    path: '/about',
    subItems: [{
      label: 'Our Mission',
      path: '/about/mission'
    }, {
      label: 'Our Vision',
      path: '/about/vision'
    }, {
      label: 'History',
      path: '/about/history'
    }]
  }, {
    label: 'Panel',
    path: '/panel',
    subItems: [{
      label: 'Executive Committee',
      path: '/panel/executive',
      role: 'President',
      description: 'Leading the organization'
    }, {
      label: 'Sub-Executive',
      path: '/panel/advisory',
      role: 'Vice President',
      description: 'Strategic guidance and support'
    }, {
      label: 'Alumni',
      path: '/panel/faculty',
      role: 'Secretary',
      description: 'Academic excellence and research'
    }]
  }, {
    label: 'Team',
    path: '/team'
  }, {
    label: 'Event',
    path: '/events'
  }, {
    label: 'Projects',
    path: '/projects'
  }, {
    label: 'Publications',
    path: '/publications'
  }, {
    label: 'Leader Board',
    path: '/leaderboard',
    subItems: [{
      label: 'Club Partner',
      path: '/leaderboard/club-partner'
    }, {
      label: 'Campus Ambassador',
      path: '/leaderboard/campus-ambassador'
    }]
  }, {
    label: 'Join us',
    path: '/join-us'
  }, {
    label: 'Contact us',
    path: '/contact'
  }];

  const handleNavClick = (path: string, hasSubItems: boolean = false) => {
    if (!hasSubItems) {
      navigate(path);
      setMobileMenuOpen(false);
      setHoveredItem(null);
    }
  };

  const toggleMobileDropdown = (path: string) => {
    setMobileExpandedItems(prev => 
      prev.includes(path) 
        ? prev.filter(item => item !== path)
        : [...prev, path]
    );
  };

  const handleMobileNavClick = (path: string, hasSubItems: boolean = false) => {
    if (hasSubItems) {
      toggleMobileDropdown(path);
    } else {
      navigate(path);
      setMobileMenuOpen(false);
      setMobileExpandedItems([]);
    }
  };

  const isCurrentPath = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/lovable-uploads/21bfb84d-772c-4f21-9778-19f828f7fce1.png" 
              alt="GSCSC Logo" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-bold text-xl text-cyan-400">GSCSC</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <div className="bg-black/40 backdrop-blur-md rounded-full px-8 py-3 xl:px-10 xl:py-4">
              <div className="flex items-center space-x-8 xl:space-x-10">
                {navItems.map(item => (
                  <div 
                    key={item.path} 
                    className="relative" 
                    onMouseEnter={() => item.subItems && setHoveredItem(item.path)} 
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <button 
                      onClick={() => handleNavClick(item.path, !!item.subItems)} 
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                        isCurrentPath(item.path) ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.subItems && <ChevronDown className="w-4 h-4" />}
                    </button>
                    
                    {/* Dropdown Menu */}
                    {item.subItems && hoveredItem === item.path && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-md rounded-lg shadow-lg border border-gray-700">
                        <div className="py-2">
                          {item.subItems.map(subItem => (
                            <button 
                              key={subItem.path} 
                              onClick={() => handleNavClick(subItem.path)} 
                              className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                                isCurrentPath(subItem.path) ? 'text-cyan-400 bg-white/10' : 'text-white hover:text-cyan-400 hover:bg-white/10'
                              }`}
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-white hover:bg-white/20"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/80 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="space-y-2">
              {navItems.map(item => (
                <div key={item.path}>
                  <button 
                    onClick={() => handleMobileNavClick(item.path, !!item.subItems)} 
                    className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isCurrentPath(item.path) ? 'text-cyan-400 bg-cyan-400/20' : 'text-white hover:text-cyan-400 hover:bg-white/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.subItems && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          mobileExpandedItems.includes(item.path) ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>
                  {/* Mobile Sub-items */}
                  {item.subItems && mobileExpandedItems.includes(item.path) && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subItems.map(subItem => (
                        <button 
                          key={subItem.path} 
                          onClick={() => handleMobileNavClick(subItem.path)} 
                          className={`block w-full text-left px-3 py-2 text-xs rounded transition-colors ${
                            isCurrentPath(subItem.path) ? 'text-cyan-400 bg-white/5' : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                          }`}
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
