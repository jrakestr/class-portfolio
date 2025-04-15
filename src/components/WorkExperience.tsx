import { Briefcase } from 'lucide-react';

interface Job {
  company: string;
  title: string;
  logo: string;
  startYear: string;
  endYear: string;
}

const WorkExperience = () => {
  const jobs: Job[] = [
    {
      company: 'Transit Trends, Inc.',
      title: 'CEO',
      logo: '/images/companies/transittrends.png',
      startYear: '2024',
      endYear: 'Present'
    },
    {
      company: 'Beacon Mobility',
      title: 'Vice President of Commercial Development, Transit',
      logo: '/images/companies/beacon.png',
      startYear: '2022',
      endYear: '2024'
    },
    {
      company: 'SCR Medical Transportation, LLC.',
      title: 'Vice President Of Operations',
      logo: '/images/companies/scr.png',
      startYear: '2021',
      endYear: '2022'
    },
    {
      company: 'SCR Medical Transportation, Inc.',
      title: 'Various Roles',
      logo: '/images/companies/scr.png',
      startYear: '2004',
      endYear: '2021'
    }
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="w-6 h-6 text-gray-400" />
        <h2 className="text-2xl font-semibold text-white">Work</h2>
      </div>

      <div className="space-y-8">
        {jobs.map((job, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="relative flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-slate-800 flex items-center justify-center">
              <img 
                src={job.logo} 
                alt={`${job.company} logo`} 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/companies/placeholder.png';
                }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-white">{job.company}</h3>
              <p className="text-gray-400 mt-1">{job.title}</p>
            </div>
            <div className="text-gray-500 text-sm whitespace-nowrap">
              {job.startYear} — {job.endYear}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
