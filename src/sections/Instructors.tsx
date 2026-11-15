import React from 'react';
import { motion } from 'framer-motion';
import { INSTRUCTORS } from '../data/content';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface InstructorsProps {
  onExplorePrograms: () => void;
}

export const Instructors: React.FC<InstructorsProps> = ({ onExplorePrograms }) => {
  return (
    <section id="instructors-section" className="py-20 sm:py-28 md:py-32 bg-[#fafafa]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-400 mb-3 block">
              FACULTY & ADVISORY
            </span>
            <h2 className="font-sans text-[36px] sm:text-[46px] md:text-[52px] leading-[1.1] tracking-[-0.03em] text-[#0f1115]">
              Learn from people who know the way.
            </h2>
            <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
              Distinguished practitioners, former technology fellows, and venture partners who guide our cohorts with direct industry insight.
            </p>
          </div>

          <button
            onClick={onExplorePrograms}
            className="inline-flex items-center gap-2 text-[14px] font-medium text-neutral-900 hover:text-black group shrink-0"
          >
            <span className="border-b border-neutral-300 pb-0.5 group-hover:border-black transition-colors">
              Explore Faculty Directory
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Instructor Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {INSTRUCTORS.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white rounded-[24px] border border-neutral-200/80 hover:border-neutral-300 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-lg shadow-xs"
            >
              {/* High-res Portrait */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-100">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <h3 className="font-sans text-[22px] text-neutral-900 font-semibold">
                      {instructor.name}
                    </h3>
                    <ShieldCheck className="w-4 h-4 text-neutral-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="text-[12px] font-medium text-neutral-800 mb-0.5">
                    {instructor.role}
                  </div>
                  <div className="text-[11px] text-neutral-500 mb-3 line-clamp-1">
                    {instructor.institution}
                  </div>
                  <p className="text-[13px] text-neutral-600 leading-relaxed mb-4">
                    {instructor.bio}
                  </p>
                </div>

                {/* Areas of Expertise Chips */}
                <div className="pt-4 border-t border-neutral-100">
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold mb-2">
                    Key Domains
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {instructor.expertise.map((exp) => (
                      <span
                        key={exp}
                        className="px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 text-[10px] font-medium"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-[12px] text-neutral-500">
            * Demonstration faculty profiles highlighting Midspring's academic standard.
          </p>
        </div>
      </div>
    </section>
  );
};
