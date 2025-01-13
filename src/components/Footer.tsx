import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-8">
            <a href="https://github.com/jrakestr" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/justin-rakestraw/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:justin@transittrends.ai"
               className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400 text-center">
            Justin Rakestraw © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;