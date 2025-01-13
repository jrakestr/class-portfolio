import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ComingSoonPopup from '../components/ComingSoonPopup';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather visualization app using modern React and Vite. Features real-time weather data and responsive design.',
    tags: ['React', 'Vite', 'Node.js', 'OpenWeather API', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/weather-dashboard',
    demo: 'https://weather-dashboard.netlify.app',
    image: '/images/portfolio/weather.png'
  },
  {
    title: 'README Generator',
    description: 'CLI tool that generates professional README files using AI. Streamlines documentation process for developers.',
    tags: ['Node.js', 'OpenAI API', 'CLI', 'JavaScript'],
    github: 'https://github.com/yourusername/readme-generator',
    image: '/images/portfolio/readme.png'
  },
  {
    title: 'Vehicle Builder',
    description: 'Command-line interface for customizing vehicle configurations. Built with modern JavaScript and clean architecture.',
    tags: ['JavaScript', 'Node.js', 'CLI', 'Clean Architecture'],
    github: 'https://github.com/yourusername/vehicle-builder',
    image: '/images/portfolio/vehicle.png'
  },
  {
    title: 'NFL Prediction App',
    description: 'Web application for predicting NFL game outcomes using historical data and analytics.',
    tags: ['React', 'Node.js', 'Supabase', 'Analytics API'],
    github: 'https://github.com/yourusername/nfl-predictions',
    demo: 'https://nfl-predictions.netlify.app',
    image: '/images/portfolio/sports.png'
  },
  {
    title: 'Pastey',
    description: 'Modern code sharing platform with syntax highlighting and real-time collaboration features.',
    tags: ['React', 'Node.js', 'Socket.io', 'Express'],
    github: 'https://github.com/yourusername/pastey',
    demo: 'https://pastey.netlify.app',
    image: '/images/portfolio/pastey.png'
  },
  {
    title: 'TransitTrends Analytics',
    description: 'Real-time transit data analytics platform for smart cities',
    tags: ['React', 'Node.js', 'Supabase'],
    github: '#',
    demo: '#',
    image: '/images/portfolio/driverapp.png'
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
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className={`text-xs px-2 py-1 rounded ${
                          tag.includes('React') || tag.includes('JavaScript') || tag.includes('TypeScript') ? 'bg-blue-400/10 text-blue-400' :
                          tag.includes('Node') || tag.includes('Express') ? 'bg-green-400/10 text-green-400' :
                          tag.includes('API') ? 'bg-purple-400/10 text-purple-400' :
                          tag.includes('Supabase') || tag.includes('PostgreSQL') ? 'bg-yellow-400/10 text-yellow-400' :
                          tag.includes('Vite') || tag.includes('CLI') ? 'bg-pink-400/10 text-pink-400' :
                          'bg-gray-400/10 text-gray-400'
                        }`}
                      >
                        {tag}
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
                      href={project.demo || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => handleDemoClick(e, project.demo || '#')}
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