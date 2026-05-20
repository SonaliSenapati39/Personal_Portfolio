import React from 'react';

const Skills = () => {
  const skillsList = [
    'React.js', 'Node.js', 'Express.js', 'MongoDB', 
    'Tailwind CSS', 'AWS', 'Docker', 'GitHub', 
    'JavaScript', 'Python', 'REST APIs'
  ];

  return (
    <section className="py-20 overflow-hidden relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">
          Skills <span className="text-primary text-glow">Galaxy</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {skillsList.map((skill, index) => (
            <div 
              key={index}
              className="glass-panel px-6 py-3 rounded-full border border-primary/20 hover:border-primary/80 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
