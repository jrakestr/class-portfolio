import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ComingSoonPopup from '../components/ComingSoonPopup';

const skills = [
  {
    name: 'AI & Machine Learning',
    description: 'TensorFlow, PyTorch, Natural Language Processing',
  },
  {
    name: 'IoT Development',
    description: 'Sensor Integration, Real-time Data Processing, Edge Computing',
  },
  {
    name: 'Full Stack Development',
    description: 'React, Node.js, Python, Cloud Architecture',
  },
  {
    name: 'Data Engineering',
    description: 'Big Data Analytics, ETL Pipelines, Data Visualization',
  },
];

const projects = [
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking and forecasting application with detailed analytics',
    image: '/images/portfolio/weather.png',
    technologies: ['React', 'OpenWeather API', 'D3.js'],
    github: 'https://github.com/jrakestr/weather-dashboard',
    demo: '#',
  },
  {
    title: 'AI Notes',
    description: 'Smart note-taking application powered by AI for enhanced productivity',
    image: '/images/portfolio/readme.png',
    technologies: ['React', 'OpenAI API', 'Node.js'],
    github: 'https://github.com/jrakestr/ai-notes',
    demo: '#',
  },
  {
    title: 'Vehicle Builder',
    description: 'Interactive vehicle configuration system with real-time 3D visualization',
    image: '/images/portfolio/vehicle.png',
    technologies: ['Three.js', 'React', 'WebGL'],
    github: 'https://github.com/jrakestr/vehicle-builder',
    demo: '#',
  },
  {
    title: 'NFL Prediction App',
    description: 'AI-powered NFL game prediction platform using historical data analysis',
    image: '/images/portfolio/sports.png',
    technologies: ['Python', 'TensorFlow', 'React'],
    github: 'https://github.com/jrakestr/nfl-prediction-app',
    demo: '#',
  },
  {
    title: 'TransitTrends Analytics',
    description: 'Real-time transit data analytics platform for smart cities',
    image: '/images/portfolio/driverapp.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Code Pastey',
    description: 'Collaborative code sharing and debugging platform',
    image: '/images/portfolio/pastey.png',
    technologies: ['React', 'Node.js', 'Socket.io'],
    github: '#',
    demo: '#',
  },
];

const About = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>, demo: string) => {
    if (demo === '#') {
      e.preventDefault();
      setIsPopupOpen(true);
    }
  };

  return (
    <>
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/images/profile/headshot.jpg"
              alt="Justin Rakestraw"
              className="rounded-lg shadow-xl"
            />
            <div>
              <p className="text-lg text-gray-300 mb-6">
                As the founder and CEO of TransitTrends, Inc., I'm passionate about revolutionizing ground transportation 
                through innovative AI and IoT solutions. My expertise in data aggregation and real-time tracking systems 
                helps create more efficient and accessible transportation networks.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="bg-slate-800/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-emerald-400">{skill.name}</h3>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-slate-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-emerald-400/10 text-emerald-400 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                         className="text-gray-300 hover:text-emerald-400 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => handleDemoClick(e, project.demo)}
                      className="text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComingSoonPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default About;