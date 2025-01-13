import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'portfolio', 'contact', 'resume'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase().replace(' ', '-'));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <div className="hidden md:flex items-center space-x-8">
      {sections.map((section) => {
        const sectionId = section.toLowerCase().replace(' ', '-');
        const isActive = activeSection === sectionId;
        
        return (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`relative group ${isActive ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'} transition-colors`}
          >
            <span className="relative">
              {section}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-400 transition-all ${
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Navigation;