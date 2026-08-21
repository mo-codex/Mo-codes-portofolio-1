import React from 'react';
import { X, ExternalLink, Github, CheckCircle, Cpu, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/20 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#6366F1]/20 text-[#818CF8] border border-[#6366F1]/30">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar flex-1">
          
          {/* Image Banner */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent"></div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Project Overview</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-[#818CF8]" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Features List */}
          {project.features && (
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#818CF8]" />
                <span>Key Features</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start space-x-2 text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8] mt-1.5 shrink-0"></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Notes */}
          {project.architecture && (
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Layers className="w-5 h-5 text-[#818CF8]" />
                <span>System Architecture</span>
              </h4>
              <p className="text-xs text-gray-400 bg-white/5 p-4 rounded-xl border border-white/10">
                {project.architecture}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3 bg-[#111827]/90">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-medium text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#818CF8] hover:from-[#4F46E5] hover:to-[#6366F1] shadow-lg shadow-[#6366F1]/20 transition-all"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
