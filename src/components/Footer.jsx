import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Dribbble, Heart } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 pt-16 pb-12 border-t border-white/10 bg-[#0B0F17]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <a href="#home" className="inline-block">
              <img
                src="/assets/logo/Artboard 4.svg"
                alt="MO-CODES Logo"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/logo/Artboard 4@300x.png";
                }}
              />
            </a>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Full-Stack Web Developer & Designer crafting modern dark-mode glassmorphic digital experiences and technical courses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About & Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Portfolio Projects</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services & Rates</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Connect</h4>
            <div className="flex items-center space-x-3">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl glass-panel hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl glass-panel hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalData.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl glass-panel hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={personalData.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl glass-panel hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} MO-CODES. All rights reserved. Crafted with Glassmorphism.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#818CF8]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
