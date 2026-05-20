import React from 'react';

const Services = () => {
  const services = [
    'Web Development', 'Cloud Deployment', 'UI/UX Design', 'Full Stack Development', 'API Integration'
  ];

  return (
    <section className="py-20 bg-[#030303]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-primary text-glow">Services</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-panel px-8 py-6 rounded-xl text-center group hover:border-primary/50 transition-all duration-300 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)]"
            >
              <h3 className="text-xl font-bold text-gray-200 group-hover:text-white group-hover:text-glow transition-all">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
