import React from 'react';

const Experience = () => {
  const timeline = [
    { title: 'Exploring Cloud Infrastructure', date: 'Present' },
    { title: 'Built Full-Stack Projects', date: '2025' },
    { title: 'Started Backend Development', date: '2024' },
    { title: 'Learned Frontend Development', date: '2024' },
    { title: 'Entered Cloud Computing Domain', date: '2023' },
    { title: 'Started BCA at Centurion University', date: '2023' },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Experience <span className="text-primary text-glow">Timeline</span>
        </h2>
        
        <div className="relative border-l border-primary/30 ml-4 md:ml-0 md:pl-0 pl-8 space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative md:flex items-center justify-between w-full">
              <div className="absolute -left-10 md:left-1/2 md:-ml-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
              
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2 md:text-left'}`}>
                <div className="glass-panel p-4 rounded-lg inline-block w-full">
                  <h3 className="font-bold text-lg text-white">{item.title}</h3>
                  <p className="text-primary text-sm mt-1">{item.date}</p>
                </div>
              </div>
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
