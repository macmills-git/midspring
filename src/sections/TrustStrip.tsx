import React from 'react';
import { motion } from 'framer-motion';
import { CREDIBILITY_PRINCIPLES } from '../data/content';
import { Award, Globe, BookOpen, Briefcase } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const icons = [
    <Briefcase className="w-4 h-4 text-neutral-800" key="1" />,
    <Award className="w-4 h-4 text-neutral-800" key="2" />,
    <BookOpen className="w-4 h-4 text-neutral-800" key="3" />,
    <Globe className="w-4 h-4 text-neutral-800" key="4" />,
  ];

  return (
    <section id="trust-strip" className="border-y border-neutral-100 bg-[#fafafa]/80 py-10 sm:py-14">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="text-center mb-8">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-neutral-400 uppercase">
            Four Foundational Educational Principles
          </p>
        </div>

        {/* 4 Educational Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-neutral-200/80">
          {CREDIBILITY_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex flex-col items-center text-center px-4 ${index > 0 ? 'pt-6 sm:pt-0' : ''}`}
            >
              <div className="w-9 h-9 rounded-full bg-white border border-neutral-200/90 flex items-center justify-center mb-3 shadow-2xs">
                {icons[index]}
              </div>
              <h3 className="font-sans text-[19px] sm:text-[20px] text-neutral-900 font-semibold">
                {principle.title}
              </h3>
              <p className="mt-2 text-[13px] text-neutral-500 leading-relaxed max-w-[240px]">
                {principle.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
