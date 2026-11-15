import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { APPROACH_STAGES } from '../data/content';

export const LearningApproach: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="approach-section" className="py-20 sm:py-28 md:py-32 bg-white border-t border-neutral-100">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-400 mb-3 block">
            PEDAGOGICAL METHODOLOGY
          </span>
          <h2 className="font-sans text-[36px] sm:text-[46px] md:text-[52px] leading-[1.1] tracking-[-0.03em] text-[#0f1115]">
            From curiosity to capability.
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            The five structured stages of the Midspring learning framework designed to build demonstrable mastery.
          </p>
        </div>

        {/* Desktop Horizontal Progression */}
        <div className="hidden lg:grid grid-cols-5 gap-6 relative">
          {/* Subtle connecting line across cards */}
          <div className="absolute top-7 left-8 right-8 h-[1px] bg-neutral-200 -z-0" />

          {APPROACH_STAGES.map((stage, index) => {
            const isSelected = activeStep === index;
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 bg-white p-6 rounded-[22px] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-neutral-900 shadow-xl -translate-y-1'
                    : 'border-neutral-200/90 hover:border-neutral-300 shadow-xs'
                }`}
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-[13px] font-semibold transition-colors ${
                        isSelected
                          ? 'bg-neutral-900 text-white'
                          : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span className="text-[11px] text-neutral-400 font-medium">Stage {index + 1}</span>
                  </div>

                  <h3 className="font-sans text-[22px] text-neutral-900 font-semibold mb-1">
                    {stage.title}
                  </h3>
                  <div className="text-[11px] font-medium text-neutral-500 mb-3 line-clamp-1">
                    {stage.tagline}
                  </div>
                  <p className="text-[13px] text-neutral-600 leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                {/* Concrete Deliverable */}
                <div className="pt-4 border-t border-neutral-100 text-[11px]">
                  <div className="text-neutral-400 font-semibold uppercase tracking-wider mb-1">
                    Deliverable
                  </div>
                  <div className="text-neutral-900 font-medium">
                    {stage.deliverable}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile & Tablet Vertical Progression */}
        <div className="lg:hidden space-y-4">
          {APPROACH_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="bg-[#fafafa] p-6 rounded-2xl border border-neutral-200/80 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-mono text-[12px] font-semibold">
                  {stage.step}
                </span>
                <div>
                  <h3 className="font-sans text-[20px] text-neutral-900 font-semibold">
                    {stage.title}
                  </h3>
                  <span className="text-[11px] text-neutral-500">{stage.tagline}</span>
                </div>
              </div>
              <p className="text-[13px] text-neutral-600 leading-relaxed mb-4">
                {stage.description}
              </p>
              <div className="pt-3 border-t border-neutral-200/60 text-[12px] text-neutral-800">
                <span className="font-semibold text-neutral-500 text-[11px] uppercase mr-2">Deliverable:</span>
                <span>{stage.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
