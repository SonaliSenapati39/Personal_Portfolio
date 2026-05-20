import React from 'react';

const StoryMode = () => {
  return (
    <section className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          The <span className="text-primary text-glow">Journey</span>
        </h2>
        {/* Placeholder for scroll-based storytelling */}
        <div className="flex flex-col gap-32">
          <div className="glass-panel p-10 rounded-2xl w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-primary">Chapter 1 — Beginning</h3>
            <p className="text-gray-400">A curious mind exploring the vastness of cloud technologies.</p>
          </div>
          <div className="glass-panel p-10 rounded-2xl w-full md:w-1/2 self-end">
            <h3 className="text-2xl font-bold mb-4 text-primary">Chapter 2 — Learning Cloud</h3>
            <p className="text-gray-400">Diving into networking, deployment, and scalable systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryMode;
