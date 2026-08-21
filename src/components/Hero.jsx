import React from 'react';
import { ArrowDown, Code, Sparkles, FolderGit2, Mail, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border border-[#6366F1]/30 text-xs sm:text-sm font-medium text-[#818CF8]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute"></span>
              <span className="pl-3">{personalData.availability}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Crafting Digital <br className="hidden sm:inline" />
              <span className="text-gradient">Masterpieces</span> & <br />
              <span className="text-gradient-purple">Glassmorphism UI</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {personalData.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#818CF8] hover:from-[#4F46E5] hover:to-[#6366F1] shadow-xl shadow-[#6366F1]/30 hover:shadow-[#6366F1]/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <FolderGit2 className="w-5 h-5" />
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl text-base font-semibold text-white glass-panel-interactive hover:border-[#818CF8]/50"
              >
                <Mail className="w-5 h-5 text-[#818CF8]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Tech Stack Icons */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-center lg:justify-start space-x-4 text-xs text-gray-400">
              <span className="uppercase tracking-wider font-semibold text-gray-400">Specialized In:</span>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200">React</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200">Next.js</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200">Node.js</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200">Tailwind</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#4F46E5] opacity-50 blur-xl animate-pulse-slow"></div>

              {/* Glass Hero Visual Card */}
              <div className="relative glass-panel rounded-3xl p-8 border border-white/15 shadow-2xl backdrop-blur-2xl text-center space-y-6">
                
                {/* Logo Mark Avatar */}
                <div className="mx-auto w-28 h-28 rounded-2xl p-3 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-inner flex items-center justify-center">
                  <img
                    src="/assets/logo/Artboard 3.svg"
                    alt="MO-CODES Mark"
                    className="w-full h-full object-contain filter drop-shadow-md"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/logo/Artboard 3@300x.png";
                    }}
                  />
                </div>

                {/* Vertical Logo Brand */}
                <div className="h-12 flex items-center justify-center">
                  <img
                    src="/assets/logo/Artboard 5.svg"
                    alt="MO-CODES Branding"
                    className="h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/logo/Artboard 5@300x.png";
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Full-Stack & Graphic Specialist</h3>
                  <p className="text-xs text-gray-300">Transforming ideas into high-converting digital products.</p>
                </div>

                {/* Floating Feature Tags */}
                <div className="grid grid-cols-2 gap-2 text-left pt-2">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#818CF8]" />
                    <span className="text-xs text-gray-200 font-medium">Pixel Perfect</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#818CF8]" />
                    <span className="text-xs text-gray-200 font-medium">Fast Performance</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#818CF8]" />
                    <span className="text-xs text-gray-200 font-medium">Clean Code</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#818CF8]" />
                    <span className="text-xs text-gray-200 font-medium">SEO Optimized</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Stats Counter Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalData.stats.map((stat, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-6 text-center border border-white/10 hover:border-[#818CF8]/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-purple mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
