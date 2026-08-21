import React, { useState, useEffect } from 'react';
import { MessageSquare, Star, ChevronLeft, ChevronRight, PlusCircle, Quote, ShieldCheck } from 'lucide-react';
import { initialTestimonials } from '../data/portfolioData';
import ReviewModal from './ReviewModal';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleAddReview = (newReview) => {
    setTestimonials([newReview, ...testimonials]);
    setCurrentIndex(0);
  };

  return (
    <section id="reviews" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-[#6366F1]/30 text-xs font-semibold text-[#818CF8] uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            What Clients & Students <span className="text-gradient">Say About MO-CODES</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Real feedback from hiring partners, freelance clients, and enrolled students.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white glass-panel-interactive border border-white/15 hover:border-[#818CF8]"
            >
              <PlusCircle className="w-4 h-4 text-[#818CF8]" />
              <span>Leave a Review</span>
            </button>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Glass Review Card */}
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl relative overflow-hidden min-h-[280px] flex flex-col justify-between">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5 pointer-events-none" />

            <div className="space-y-6">
              {/* Star Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg sm:text-xl text-gray-200 font-normal leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>
            </div>

            {/* Reviewer Details */}
            <div className="pt-8 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#818CF8]/40 shadow-md"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/logo/Artboard 3@300x.png";
                  }}
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-base font-bold text-white">{testimonials[currentIndex].name}</h4>
                    {testimonials[currentIndex].verified && (
                      <ShieldCheck className="w-4 h-4 text-emerald-400" title="Verified Client" />
                    )}
                  </div>
                  <p className="text-xs text-[#818CF8]">
                    {testimonials[currentIndex].role} &bull; <span className="text-gray-400">{testimonials[currentIndex].company}</span>
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center space-x-3 self-end sm:self-auto">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full glass-panel hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold text-gray-400 px-1">
                  {currentIndex + 1} / {testimonials.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full glass-panel hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-[#818CF8]'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Review Modal */}
      {isModalOpen && (
        <ReviewModal
          onClose={() => setIsModalOpen(false)}
          onSubmitReview={handleAddReview}
        />
      )}
    </section>
  );
}
