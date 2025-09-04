
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/16o39tqLqv/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/gscsc.official?igsh=MmhsbWZtZndqZ3Rj', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/gscsc/', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@gscsc.official?si=JxF-xuUP6WDxrn-X', label: 'YouTube' },
    { icon: Mail, href: 'mailto:gscsc.official@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="mt-16 py-12 bg-black/40 backdrop-blur-md border-t border-cyan-400/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Side - Organization Info */}
          <div className="text-left">
            <h3 className="text-xl font-bold text-white mb-2">Govt Science College</h3>
            <p className="text-cyan-400 font-medium">Govt. Science College Science Club</p>
          </div>

          {/* Middle - Navigation Links */}
          <div className="text-center">
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onPageChange('contact')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('privacy-policy')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  Privacy & Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('terms-of-services')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  Terms of Services
                </button>
              </li>
            </ul>
          </div>

          {/* Right Side - Social Icons */}
          <div className="text-right">
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-full hover:bg-cyan-400/10"
                    aria-label={social.label}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-cyan-400/20">
          <p className="text-gray-400 text-sm">
            © 2025 GSCSC, All Rights Reserved
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Developed by Tahsin Ibne Ismail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
