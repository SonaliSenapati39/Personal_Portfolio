import React from 'react';

const About = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="glass-panel p-1 rounded-2xl border-glow">
              <div className="bg-secondary/50 rounded-xl p-8 backdrop-blur-sm">
                <h2 className="text-4xl font-bold mb-6">About <span className="text-primary">Me</span></h2>
                <p className="text-gray-300 mb-4">
                  BCA student at Centurion University, deeply passionate about Cloud Computing and scalable architecture.
                </p>
                <p className="text-gray-400 mb-8">
                  I love exploring futuristic technologies, building robust backend systems, and crafting cinematic digital experiences that leave a lasting impression.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-3xl font-bold text-primary">15+</h4>
                    <p className="text-sm text-gray-400">Projects Completed</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-primary">1000+</h4>
                    <p className="text-sm text-gray-400">Hours of Coding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Holographic profile visual placeholder */}
            <div className="w-64 h-64 rounded-full border border-primary/30 relative">
              <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-20"></div>
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary/20 to-transparent flex items-center justify-center text-4xl font-mono text-primary text-glow">
                SS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
