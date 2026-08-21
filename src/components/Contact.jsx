import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Web Development',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please write your project message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        service: 'Full-Stack Web Development',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-[#6366F1]/30 text-xs font-semibold text-[#818CF8] uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Let's Build Something <span className="text-gradient">Extraordinary Together</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Have a new project, course inquiry, or freelance contract? Send me a message and I'll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">

            {/* Primary Contact Info Glass Card */}
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-[#818CF8]" />
                <span>Contact Details</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="p-3 rounded-xl bg-[#6366F1]/20 text-[#818CF8]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400">Direct Email</h4>
                    <a href={`mailto:${personalData.email}`} className="text-sm font-bold text-white hover:text-[#818CF8]">
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="p-3 rounded-xl bg-[#6366F1]/20 text-[#818CF8]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400">Location</h4>
                    <p className="text-sm font-bold text-white">{personalData.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="p-3 rounded-xl bg-[#6366F1]/20 text-[#818CF8]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400">Response Time</h4>
                    <p className="text-sm font-bold text-white">Under 24 Hours (Mon - Sat)</p>
                  </div>
                </div>
              </div>

              {/* Status Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#6366F1]/20 to-transparent border border-[#6366F1]/40 flex items-center space-x-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-gray-200">
                  Currently accepting new projects for Q3/Q4.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Glassmorphism Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl relative">

              {isSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center space-x-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Your message has been sent successfully! MO-CODES will get back to you shortly.</span>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/20 border border-red-500/40 text-red-300 text-sm">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Hassan Mohamed"
                      className="w-full px-4 py-3 rounded-2xl glass-input text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. hassan@example.com"
                      className="w-full px-4 py-3 rounded-2xl glass-input text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Interested Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl glass-input text-sm text-white bg-[#111827]"
                    >
                      <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                      <option value="UI/UX & Brand Design">UI/UX & Brand Design</option>
                      <option value="Course Enrollment">Course Enrollment</option>
                      <option value="Code Audit & Consulting">Code Audit & Consulting</option>
                      <option value="Other Inquiry">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      id="contact-subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. New E-Commerce Web App"
                      className="w-full px-4 py-3 rounded-2xl glass-input text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">Message & Details *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project goals, estimated timeline, or course questions..."
                    className="w-full px-4 py-3 rounded-2xl glass-input text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#818CF8] hover:from-[#4F46E5] hover:to-[#6366F1] shadow-xl shadow-[#6366F1]/30 hover:shadow-[#6366F1]/50 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
