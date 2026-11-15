import React from 'react';
import { FadeIn } from '../components/ui/ScrollReveal';

export const ImpactAndStats: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-neutral-100 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        {/* Quote Testimonial Section with Smooth Scroll Reveal */}
        <FadeIn delay={0.05} y={24} className="max-w-4xl mx-auto text-center">
          <blockquote className="font-sans text-[22px] sm:text-[30px] md:text-[38px] leading-[1.2] tracking-[-0.03em] font-normal text-[#111215] mb-8 sm:mb-10">
            &ldquo;Midspring completely transformed our ad production. We went from struggling to test 5 creative variations a week to launching hundreds in minutes, with better performance than ever.&rdquo;
          </blockquote>

          {/* Author Details */}
          <div className="flex items-center justify-center gap-3.5">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
              alt="Elena Rostova"
              className="w-12 h-12 rounded-full object-cover border border-neutral-200"
              loading="lazy"
            />
            <div className="text-left">
              <div className="font-sans text-[14px] font-bold text-neutral-900 leading-tight">
                Elena Rostova
              </div>
              <div className="text-[12px] text-neutral-500 mt-0.5">
                VP of Growth at Velour
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Subtle Atmospheric Gradient Glow at bottom edge matching reference */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[180px] rounded-full blur-[80px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(251, 146, 60, 0.4) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(56, 189, 248, 0.4) 0%, transparent 60%)'
        }}
      />
    </section>
  );
};
