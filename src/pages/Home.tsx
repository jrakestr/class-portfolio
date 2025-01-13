import React from 'react';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="text-center">
        <h1 className="text-6xl sm:text-7xl font-bold mb-6">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Justin Rakestraw
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          A passionate full-stack developer revolutionizing ground transportation with AI and IoT solutions
        </p>
        <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="animate-bounce absolute bottom-8">
          <ChevronDown className="w-8 h-8 text-emerald-400" />
        </button>
      </div>
    </header>
  );
};

export default Home;