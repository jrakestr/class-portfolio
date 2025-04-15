import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import DataFlowAnimation from '../components/DataFlowAnimation';
import { theme } from '../styles/theme';

const Home = () => {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center relative px-4 py-8 md:py-16">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className={`flex flex-col justify-center ${theme.components.card} p-6 md:p-8 relative overflow-hidden`}>
            <DataFlowAnimation />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
              <span className="text-white">Transforming Transit With</span>{' '}
              <span className={theme.components.gradientText}>
                Human-Powered Solutions
              </span>
            </h1>
            <p className="text-lg text-white opacity-90 font-medium mb-3">
              Data Analytics | Commercial Development | Operations
            </p>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl">
              Analytics, solutions, and AI-driven approaches to managing transit that reduce operational costs and improve fleet reliability.
            </p>
            
            <a href="/contact" className={`${theme.components.button} w-full sm:w-auto mb-8 transform hover:scale-105`}>
              Book a Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            
            {/* Social links */}
            <div className="flex gap-4 mb-8">
              <a 
                href="https://github.com/jrakestr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 transition-colors shadow-xl"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/jrakestr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 transition-colors shadow-xl"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://twitter.com/jrakestr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 transition-colors shadow-xl"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
            
            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                {name: 'React', color: 'bg-blue-500/20 text-blue-300'},
                {name: 'TypeScript', color: 'bg-blue-600/20 text-blue-300'},
                {name: 'Node.js', color: 'bg-green-500/20 text-green-300'},
                {name: 'AI', color: 'bg-purple-500/20 text-purple-300'},
                {name: 'IoT', color: 'bg-emerald-500/20 text-emerald-300'}
              ].map((tech) => (
                <span key={tech.name} className={`px-3 py-1 rounded-full text-sm font-medium shadow-xl ${tech.color}`}>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
          
          {/* Hero Image with Data Flow Animation */}
          <div className="flex items-center justify-center mt-4 lg:mt-0">
            <div className={`relative w-full max-w-md h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-xl ${theme.colors.cardBg}`}>
              <img 
                src="/images/portfolio/hero.jpeg" 
                alt="Justin Rakestraw - Transit Technology Innovator" 
                className="w-full h-full object-cover opacity-70"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-sm text-emerald-400 font-semibold">Real-time Transit Intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="animate-bounce absolute bottom-8"
      >
        <ChevronDown className="w-8 h-8 text-emerald-400" />
      </button>
    </header>
  );
};

export default Home;