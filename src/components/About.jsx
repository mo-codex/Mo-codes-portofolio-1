import React, { useState } from 'react';
import { Download, User, Code2, Sparkles, FileText, CheckCircle } from 'lucide-react';
import { personalData, skillCategories, skillsData } from '../data/portfolioData';

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === selectedCategory);

  const handleDownloadCV = () => {
    // Generate dummy downloadable resume blob
    const resumeContent = `
MO-CODES - Full-Stack Web Developer & Designer
Email: ${personalData.email}
Location: ${personalData.location}

SUMMARY:
${personalData.bio}

SKILLS & EXPERTISE:
- Frontend: React.js, Next.js, TypeScript, Tailwind CSS, Glassmorphism UI
- Backend: Node.js, Express, PostgreSQL, Prisma, GraphQL, REST APIs
- Design: Figma, Graphic Design, Brand Vector Systems, Prototyping
- Tools: Docker, Git, CI/CD, Vite, Vercel

PROJECT HIGHLIGHTS:
- Somali Live Election Dashboard
- Google Stitch MCP Component Specs
- Apex Crypto Analytics SaaS
    `;
    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'MO-CODES_Developer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-[#6366F1]/30 text-xs font-semibold text-[#818CF8] uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About & Skills</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Engineering Code with <span className="text-gradient">Artistic Precision</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Dedicated to crafting pixel-perfect web interfaces, scalable backend infrastructure, and engaging user experiences.
          </p>
        </div>

        {/* Top Bio & Profile Glass Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Profile Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#6366F1] to-[#818CF8] opacity-30 blur-lg"></div>
              <div className="relative glass-panel rounded-3xl p-6 border border-white/15 shadow-xl text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-2xl p-2 bg-gradient-to-b from-[#6366F1]/20 to-white/5 border border-[#818CF8]/30 flex items-center justify-center">
                  <img
                    src="/assets/logo/Artboard 3.svg"
                    alt="MO-CODES Avatar"
                    className="w-24 h-24 object-contain filter drop-shadow-lg"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/logo/Artboard 3@300x.png";
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">{personalData.name}</h3>
                <p className="text-sm text-[#818CF8] font-medium">{personalData.title}</p>
                <div className="pt-2 flex flex-col space-y-2 text-xs text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>{personalData.location}</span>
                  </div>
                  <div className="text-gray-400">{personalData.email}</div>
                </div>

                <button
                  onClick={handleDownloadCV}
                  className="w-full mt-4 inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-[#6366F1] border border-white/15 hover:border-[#6366F1] transition-all duration-300 shadow-md"
                >
                  <Download className="w-4 h-4 text-[#818CF8]" />
                  <span>Download Resume / CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Biography Text */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-[#818CF8]" />
                <span>My Journey & Philosophy</span>
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                As a passionate full-stack web developer and designer, I specialize in building sleek modern applications that bridge the gap between design aesthetic and backend architecture. My design philosophy revolves around clean layout hierarchy, fluid animations, and high-contrast glassmorphism.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Whether creating live election tracking systems, developer tools like Google Stitch MCP integrations, or full-scale SaaS platforms, I ensure every single pixel serves a purpose and every endpoint scales under load.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#818CF8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Full-Stack Capability</h4>
                    <p className="text-xs text-gray-400">From React frontends to Node & PostgreSQL backends.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#818CF8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Glassmorphism Design</h4>
                    <p className="text-xs text-gray-400">Expertise in dark mode frosted glass UI and animations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Skills Matrix Section */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
              <Code2 className="w-6 h-6 text-[#818CF8]" />
              <span>Technical Skills & Tools</span>
            </h3>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 glass-panel rounded-2xl border border-white/10">
              {skillCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-[#6366F1] text-white shadow-md shadow-[#6366F1]/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="glass-panel-interactive rounded-2xl p-6 border border-white/10 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-white">{skill.name}</h4>
                  <span className="text-xs font-bold text-[#818CF8] bg-[#6366F1]/20 px-2.5 py-1 rounded-md border border-[#6366F1]/30">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#6366F1] to-[#818CF8] h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <p className="text-xs text-gray-400 leading-normal">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
