import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Full Stack Personal Portfolio',
      description: 'A cinematic full-stack developer portfolio with immersive storytelling, 3D animations, backend integration, and responsive design.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Framer Motion'],
    },
    {
      title: 'Cloud Deployment Dashboard',
      description: 'A futuristic dashboard for monitoring cloud deployments and infrastructure performance.',
      tech: ['React', 'AWS', 'Docker', 'Chart.js'],
    },
    {
      title: 'AI Cloud Storage System',
      description: 'An AI-powered cloud storage management platform with futuristic UI and smart analytics.',
      tech: ['Python', 'Node.js', 'React', 'MongoDB'],
    }
  ];

  return (
    <section className="py-20 bg-[#020202]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Featured <span className="text-primary text-glow">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-panel rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-500">
              <div className="h-48 bg-secondary/30 border-b border-white/5 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="text-primary/20 font-mono text-6xl group-hover:scale-110 transition-transform duration-700">
                  {`0${index + 1}`}
                </div>
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm text-primary hover:text-white transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </button>
                  <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <Github size={16} /> GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
