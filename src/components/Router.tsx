import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

const Router = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <Home />
      <About />
      <Contact />
      <Resume />
    </div>
  );
};

export default Router;