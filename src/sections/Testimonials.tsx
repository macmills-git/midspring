import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/content';
import { Quote, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials-section" className="py-20 sm:py-28 md:py-32 bg-white border-t border-neutral-100">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-400 mb-3 block">
            LEARNER OUTCOMES & IMPACT
          </span>
          <h2 className="font-sans text-[36px] sm:text-[46px] md:text-[52px] leading-[1.1] tracking-[-0.03em] text-[#0f1115]">
            Growth worth sharing.
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Tangible career progression and verified capabilities developed through Midspring's structured executive curricula.
          </p>
        </div>

        {/* 3 Outcome Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#fcfcfd] rounded-[24px] p-6 sm:p-8 border border-neutral-200/80 hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
            >
              <div>
                <Quote className="w-8 h-8 text-neutral-300 mb-4" />
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>

                {/* Outcome Highlight Box */}
                <div className="p-3 bg-neutral-100/70 rounded-xl border border-neutral-200/60 mb-6 flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                  <div className="text-[12px] text-neutral-800 font-medium">
                    {item.outcome}
                  </div>
                </div>
              </div>

              {/* Author & Credential Profile */}
              <div className="pt-4 border-t border-neutral-200/70 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                />
                <div>
                  <div className="text-[13px] font-semibold text-neutral-900">
                    {item.author}
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    {item.role} • {item.organization}
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono mt-0.5">
                    Alum: {item.program}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Identification Note */}
        <div className="mt-10 text-center">
          <p className="text-[12px] text-neutral-400">
            * Demonstration learner case studies illustrating prospective outcomes and alumni trajectories.
          </p>
        </div>
      </div>
    </section>
  );
};
