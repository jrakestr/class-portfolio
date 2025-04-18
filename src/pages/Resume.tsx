import { FileText, Contact } from 'lucide-react';
import WorkExperience from '../components/WorkExperience';
import { theme } from '../styles/theme';

const Resume = () => {
  const proficiencies = {
    'Frontend Development': [
      'React/Next.js',
      'TypeScript',
      'Tailwind CSS',
      'JavaScript',
      'Vite',
      'Responsive Design',
    ],
    'Backend Development': [
      'Node.js',
      'RESTful APIs',
      'Supabase',
      'PostgreSQL',
      'Express.js',
      'API Design',
    ],
    'AI & Machine Learning': [
      'Machine Learning APIs',
      'Predictive Analytics',
      'Data Aggregation',
      'Analytics Integration',
    ],
    'DevOps & Tools': [
      'Git/GitHub',
      'CI/CD',
      'System Architecture',
      'Netlify',
      'Version Control',
    ],
  };

  return (
    <section id="resume" className={theme.components.section}>
      <div className="max-w-4xl mx-auto">
        <h2 className={theme.components.heading}>
          <span className={theme.components.gradientText}>
            Resume
          </span>
        </h2>
        
        <div className="mb-12 text-center space-y-4">
          <div className="flex justify-center gap-4">
            <a
              href="/documents/resume.pdf"
              download
              className={`${theme.components.button} hover:opacity-90`}
            >
              <FileText className="mr-2 w-5 h-5" />
              Download Resume
            </a>
            <a
              href="/documents/contactinfo.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-medium rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              <Contact className="mr-2 w-5 h-5" />
              Business Card
            </a>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className={theme.components.gradientText}>
              Technical Skills
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(proficiencies).map(([category, skills]) => (
              <div key={category} className={`${theme.components.card} p-6`}>
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">{category}</h3>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li key={skill} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className={theme.components.gradientText}>
              Professional Experience
            </span>
          </h3>
          <div className="w-full max-w-3xl mx-auto">
            <WorkExperience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;