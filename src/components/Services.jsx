import React, { useState } from 'react';
import { DollarSign, CheckCircle2, Sparkles, BookOpen, Code, ArrowRight } from 'lucide-react';
import { servicesData, coursesData } from '../data/portfolioData';

export default function Services() {
  const [activeTab, setActiveTab] = useState('services'); // 'services' | 'courses'

  const currentItems = activeTab === 'services' ? servicesData : coursesData;

  const handleBooking = (itemTitle) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill subject field if available
      const subjectInput = document.getElementById('contact-subject');
      if (subjectInput) {
        subjectInput.value = `Inquiry regarding: ${itemTitle}`;
      }
    }
  };

  return (
    <section id="services" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-[#6366F1]/30 text-xs font-semibold text-[#818CF8] uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Services & Rates</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Transparent Pricing for <span className="text-gradient">Services & Courses</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Choose between bespoke full-stack web development services or join structured video courses to master modern development.
          </p>

          {/* Toggle Switch */}
          <div className="pt-6 flex items-center justify-center">
            <div className="p-1.5 glass-panel rounded-full border border-white/10 flex items-center space-x-2">
              <button
                onClick={() => setActiveTab('services')}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'services'
                    ? 'bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/30'
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                <Code className="w-4 h-4" />
                <span>Development Services</span>
              </button>

              <button
                onClick={() => setActiveTab('courses')}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'courses'
                    ? 'bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/30'
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Courses & Masterclasses</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className={`relative glass-panel rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 ${item.popular
                  ? 'border-[#818CF8]/60 bg-white/8 shadow-2xl shadow-[#6366F1]/20 scale-102 lg:scale-105 z-20'
                  : 'border-white/10 hover:border-white/20'
                }`}
            >
              {/* Popular Glowing Badge */}
              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center space-x-1.5 px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#6366F1] to-[#818CF8] shadow-lg shadow-[#6366F1]/40 border border-white/20">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>{item.badge}</span>
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-[#818CF8] mt-1 font-medium">{item.subtitle}</p>
                </div>

                {/* Price Display */}
                <div className="py-4 border-y border-white/10 flex items-baseline space-x-2">
                  <span className="text-4xl font-extrabold text-white">{item.price}</span>
                  <span className="text-xs text-gray-400 font-medium">/ {item.billing}</span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-semibold text-white uppercase tracking-wider">What's Included:</p>
                  <ul className="space-y-2.5">
                    {item.inclusions.map((inclusion, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0 mt-0.5" />
                        <span>{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Action Button */}
              <div className="pt-8 mt-4">
                <button
                  onClick={() => handleBooking(item.title)}
                  className={`w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-2xl text-sm font-semibold transition-all duration-300 ${item.popular
                      ? 'text-white bg-gradient-to-r from-[#6366F1] to-[#818CF8] hover:from-[#4F46E5] hover:to-[#6366F1] shadow-lg shadow-[#6366F1]/30 hover:shadow-[#6366F1]/50'
                      : 'text-white glass-panel-interactive border border-white/15 hover:border-[#818CF8]'
                    }`}
                >
                  <span>{activeTab === 'services' ? 'Inquire / Book Service' : 'Enroll in Course'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
