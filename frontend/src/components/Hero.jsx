import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* 3D Canvas will go here */}
        <div className="w-full h-full bg-gradient-to-b from-black via-black/90 to-[#050505]"></div>
      </div>
      
      <div className="z-10 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hello, I'm <span className="text-primary text-glow">Swagatika Sahoo</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8 tracking-widest uppercase">
          Cloud Computing Enthusiast
        </h2>
        <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl text-center">
          Building the Future Through Cloud Infrastructure
        </p>
        
        <div className="flex gap-6">
          <button className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 border-glow shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            Explore Journey
          </button>
          <button className="px-8 py-3 rounded-full border border-white/20 hover:border-white/60 transition-all duration-300">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
