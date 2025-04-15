import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Navigation from './Navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase().replace(' ', '-'));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center group">
            {isScrolled || isMobile ? (
              <img 
                src="/images/portfolio/favicon.png" 
                alt="Justin Rakestraw" 
                className="h-10 w-10 transition-all duration-300 group-hover:opacity-90" 
              />
            ) : (
              <img 
                src="/images/portfolio/logo.png" 
                alt="Justin Rakestraw" 
                className="h-12 sm:h-14 w-auto transition-all duration-300 group-hover:opacity-90" 
                style={{ maxWidth: '180px', objectFit: 'contain' }}
              />
            )}
          </a>

          <Navigation />

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              <a href="https://github.com/jrakestr" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/justin-rakestraw/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:justin@transittrends.ai"
                 className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <button 
              className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-slate-900/95 backdrop-blur-sm`}>
        <div className="px-4 py-4 space-y-4">
          {['About Me', 'Transport Tech', 'Contact', 'Resume'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left text-gray-300 hover:text-emerald-400 transition-colors py-2"
            >
              {section}
            </button>
          ))}
          <div className="flex gap-6 pt-4 border-t border-gray-700">
            <a href="https://github.com/jrakestr" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-emerald-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/justin-rakestraw/" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-emerald-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:justin@transittrends.ai"
               className="text-gray-300 hover:text-emerald-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;