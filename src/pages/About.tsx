import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ComingSoonPopup from '../components/ComingSoonPopup';
import { theme } from '../styles/theme';

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
    title: 'TransitCentral.io',
    description: 'The first platform built specifically for transit technology professionals, delivering actionable data through smart analytics and detailed agency insights.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
    github: '#',
    demo: 'https://www.transitcentral.io',
    image: '/images/portfolio/transitcentral.png'
  },
  {
    title: 'Revamp of DemandTrans.com Landing Page',
    description: 'DemandTrans Solutions is a technology solutions provider, in business for 30 years, with a distinctive blend of technology platform development and transportation planning/consulting capabilities.',
    tags: ['MongoDB', 'Express', 'React', 'Next.js', 'Payload CMS'],
    github: '#',
    demo: '#',
    image: '/images/portfolio/demandtrans-logo.png'
  },
  {
    title: 'Vehicle Builder',
    description: 'Command-line interface for customizing vehicle configurations. Built with modern JavaScript and clean architecture.',
    tags: ['JavaScript', 'Node.js', 'CLI', 'Clean Architecture'],
    github: 'https://github.com/yourusername/vehicle-builder',
    image: '/images/portfolio/vehicle.png'
  },
  {
    title: 'Canban Board',
    description: 'A full-stack Kanban board application built with React, TypeScript, and Express. Features include user authentication, ticket management, and real-time updates.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/jrakestr/canban_board',
    demo: 'https://canban-board-4f2z.onrender.com/',
    image: '/images/portfolio/weather.png'
  },
  {
    title: 'Bootstacks',
    description: 'The NFL Game Day Weather Tracker allows a user to see the weather forecast for a given NFL game. When a user logs in, the NFL season schedule is shown with the details for each game including date, teams playing, location, and weather data if available.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'JWT', 'Rapid API'],
    github: 'https://github.com/kagreene/bootstacks',
    image: '/images/portfolio/bootstacks.jpg'
  },
  {
    title: 'Propfolio - Real Estate Portfolio Manager',
    description: 'Propfolio is a web application designed for independent property owners who need an intuitive and efficient tool to track and manage their real estate investments.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/realejandro/propfolio',
    demo: 'https://real-state-portfolio.onrender.com',
    image: '/images/portfolio/propfolio.png'
  }
]

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
      <section id="about" className={`${theme.components.section} ${theme.colors.sectionBg.about}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className={theme.components.gradientText}>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className={`${theme.components.card} p-4`}>
                  <h3 className="font-semibold mb-2 text-emerald-400">AI & Machine Learning</h3>
                  <p className="text-sm text-gray-400">TensorFlow, PyTorch, Natural Language Processing</p>
                </div>
                <div className={`${theme.components.card} p-4`}>
                  <h3 className="font-semibold mb-2 text-emerald-400">IoT Development</h3>
                  <p className="text-sm text-gray-400">Sensor Integration, Real-time Data Processing, Edge Computing</p>
                </div>
                <div className={`${theme.components.card} p-4`}>
                  <h3 className="font-semibold mb-2 text-emerald-400">Full Stack Development</h3>
                  <p className="text-sm text-gray-400">React, Node.js, Python, Cloud Architecture</p>
                </div>
                <div className={`${theme.components.card} p-4`}>
                  <h3 className="font-semibold mb-2 text-emerald-400">Data Engineering</h3>
                  <p className="text-sm text-gray-400">Big Data Analytics, ETL Pipelines, Data Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className={`${theme.components.section} ${theme.colors.sectionBg.portfolio}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className={theme.components.gradientText}>
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className={`${theme.components.card} overflow-hidden hover:transform hover:scale-105 transition-transform`}>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className={`text-xs px-2 py-1 rounded ${
                          tag.includes('React') || tag.includes('JavaScript') ? 'bg-blue-400/10 text-blue-400' :
                          tag.includes('TypeScript') ? 'bg-blue-600/10 text-blue-500' :
                          tag.includes('Node') || tag.includes('Express') ? 'bg-green-400/10 text-green-400' :
                          tag.includes('API') ? 'bg-purple-400/10 text-purple-400' :
                          tag.includes('Tailwind') ? 'bg-sky-400/10 text-sky-400' :
                          tag.includes('MongoDB') ? 'bg-emerald-400/10 text-emerald-400' :
                          tag.includes('Payload') ? 'bg-indigo-400/10 text-indigo-400' :
                          tag.includes('Next') ? 'bg-slate-400/10 text-white' :
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