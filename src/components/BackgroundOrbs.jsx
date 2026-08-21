import React from 'react';

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      {/* Top Left Primary Glowing Orb */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#6366F1] opacity-25 blur-[120px] animate-float"></div>

      {/* Top Right Accent Glowing Orb */}
      <div className="absolute top-1/4 -right-20 w-[30rem] h-[30rem] rounded-full bg-[#818CF8] opacity-20 blur-[140px] animate-float-reverse"></div>

      {/* Center Deep Purple Orb */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-[#4F46E5] opacity-15 blur-[160px] animate-pulse-slow"></div>

      {/* Bottom Left Accent Orb */}
      <div className="absolute bottom-20 -left-20 w-[28rem] h-[28rem] rounded-full bg-[#6366F1] opacity-20 blur-[130px] animate-float"></div>

      {/* Bottom Right Glowing Orb */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#818CF8] opacity-25 blur-[120px] animate-float-reverse"></div>
    </div>
  );
}
