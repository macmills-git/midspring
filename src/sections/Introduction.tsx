import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

interface IntroductionProps {
  onDiscoverApproach: () => void;
  onExplorePrograms: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({
  onDiscoverApproach,
  onExplorePrograms,
}) => {
  return (
    <section id="introduction-section" className="py-20 sm:py-28 md:py-36 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-4 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-neutral-600" />
              <span>THE MIDSPRING PHILOSOPHY</span>
            </div>
            <h2 className="font-sans text-[38px] sm:text-[48px] md:text-[54px] lg:text-[60px] leading-[1.1] tracking-[-0.03em] text-[#0f1115] font-normal">
              Learning should take you somewhere.
            </h2>
          </motion.div>

          {/* Right Column: Editorial Description & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-between h-full pt-2 lg:pt-8"
          >
            <div className="space-y-5 text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Education should do more than introduce new ideas. It should equip you with the knowledge, practical capabilities and confidence to turn those ideas into something meaningful.
              </p>
              <p className="text-neutral-700 font-medium">
                At Midspring, every learning experience is designed to move you closer to your ambitions.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onDiscoverApproach}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-neutral-900 group hover:text-black transition-colors"
              >
                <span className="border-b border-neutral-300 pb-0.5 group-hover:border-black transition-colors">
                  Discover Our Approach
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExplorePrograms}
                className="text-[13px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors ml-2"
              >
                Browse All Academies →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
