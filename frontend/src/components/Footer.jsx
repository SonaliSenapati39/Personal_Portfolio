import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Swagatika Sahoo. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-300">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-300">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-300">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
