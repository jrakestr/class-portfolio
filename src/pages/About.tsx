import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ComingSoonPopup from '../components/ComingSoonPopup';

const projects = [
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking and forecasting application with detailed analytics',
    image: '/images/portfolio/weather.png',
    technologies: [
      { name: 'React', type: 'frontend' },
      { name: 'OpenWeather API', type: 'api' },
      { name: 'Vite', type: 'tooling' },
      { name: 'Node.js', type: 'backend' }
    ],
    github: 'https://github.com/jrakestr/weather-dashboard',
    demo: '#',
  },
  {
    title: 'README.md Generator',
    description: 'The Bootcamp README Generator creates README.md files for GitHub, with easy installation and public use, licensed under MIT.',
    image: '/images/portfolio/readme.png',
    technologies: [
      { name: 'React', type: 'frontend' },
      { name: 'OpenAI API', type: 'api' },
      { name: 'Node.js', type: 'backend' }
    ],
    github: 'https://github.com/jrakestr/ai-notes',
    demo: '#',
  },
  {
    title: 'Vehicle Builder',
    description: 'Interactive vehicle configuration system with real-time 3D visualization',
    image: '/images/portfolio/vehicle.png',
    technologies: [
      { name: 'JavaScript', type: 'frontend' },
      { name: 'CLI interface', type: 'tooling' }
    ],
    github: 'https://github.com/jrakestr/vehicle-builder',
    demo: '#',
  },
  {
    title: 'NFL Prediction App',
    description: 'AI-powered NFL game prediction platform using historical data analysis',
    image: '/images/portfolio/sports.png',
    technologies: [
      { name: 'JavaScript', type: 'frontend' },
      { name: 'OpenAPI', type: 'api' },
      { name: 'Akkio.com', type: 'external' }
    ],
    github: 'https://github.com/jrakestr/nfl-prediction-app',
    demo: '#',
  },
  {
    title: 'TransitTrends Analytics',
    description: 'Real-time transit data analytics platform for smart cities',
    image: '/images/portfolio/driverapp.png',
    technologies: [
      { name: 'React', type: 'frontend' },
      { name: 'Node.js', type: 'backend' },
      { name: 'Supabase', type: 'database' }
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'Pastey',
    description: 'Copy and Paste tool with AI organization/tagging support',
    image: '/images/portfolio/pastey.png',
    technologies: [
      { name: 'React', type: 'frontend' },
      { name: 'Node.js', type: 'backend' },
      { name: 'Socket.io', type: 'api' }
    ],
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
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                  <p className="text-gray-600">React, TypeScript, Tailwind CSS, Vite, JavaScript</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                  <p className="text-gray-600">Node.js, RESTful APIs, Supabase, PostgreSQL, Express.js</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">DevOps & Tools</h3>
                  <p className="text-gray-600">Git, CI/CD, System Architecture, API Development</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Data & Analytics</h3>
                  <p className="text-gray-600">Data Aggregation, Predictive Analytics, Machine Learning APIs</p>
                </div>
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
                      <span 
                        key={tech.name} 
                        className={`text-xs px-2 py-1 rounded ${
                          tech.type === 'frontend' ? 'bg-blue-400/10 text-blue-400' :
                          tech.type === 'backend' ? 'bg-green-400/10 text-green-400' :
                          tech.type === 'api' ? 'bg-purple-400/10 text-purple-400' :
                          tech.type === 'database' ? 'bg-yellow-400/10 text-yellow-400' :
                          tech.type === 'tooling' ? 'bg-pink-400/10 text-pink-400' :
                          'bg-gray-400/10 text-gray-400'
                        }`}
                      >
                        {tech.name}
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