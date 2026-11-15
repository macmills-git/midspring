import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, BarChart2, Layers } from 'lucide-react';
import { FEATURED_PROGRAMS } from '../data/content';

interface FeaturedProgramsProps {
  onSelectProgram: (programId: string) => void;
  onExploreAll: () => void;
}

export const FeaturedPrograms: React.FC<FeaturedProgramsProps> = ({
  onSelectProgram,
  onExploreAll,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Technology', 'Business', 'Creative', 'Professional'];

  const filteredPrograms =
    activeCategory === 'All'
      ? FEATURED_PROGRAMS
      : FEATURED_PROGRAMS.filter((p) => p.category === activeCategory);

  return (
    <section id="programs-section" className="py-20 sm:py-28 md:py-32 bg-[#fafafa]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-400 mb-3 block">
              CURATED CURRICULA
            </span>
            <h2 className="font-sans text-[36px] sm:text-[46px] md:text-[52px] leading-[1.1] tracking-[-0.03em] text-[#0f1115]">
              Programs designed for what's next.
            </h2>
            <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
              Carefully structured learning cohorts led by world-class practitioners. Demonstration curricula designed for modern capability.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-200/60 p-1.5 rounded-full text-[13px] font-medium shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white rounded-[24px] border border-neutral-200/80 hover:border-neutral-300 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-xl shadow-xs"
            >
              {/* Image & Category Tag */}
              <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-neutral-900 text-[10px] font-semibold tracking-wide uppercase shadow-xs">
                    {program.category}
                  </span>
                  {program.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-neutral-900 text-white text-[10px] font-semibold tracking-wide uppercase shadow-xs">
                      {program.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans text-[20px] sm:text-[22px] leading-tight text-neutral-900 font-semibold mb-2.5 group-hover:text-black">
                    {program.title}
                  </h3>

                  {/* Instructor Pill */}
                  <div className="flex items-center gap-2.5 mb-4 pb-4 border-b border-neutral-100">
                    <img
                      src={program.instructor.avatar}
                      alt={program.instructor.name}
                      className="w-7 h-7 rounded-full object-cover border border-neutral-200"
                    />
                    <div className="min-w-0">
                      <div className="text-[12px] font-medium text-neutral-900 truncate">
                        {program.instructor.name}
                      </div>
                      <div className="text-[11px] text-neutral-500 truncate">
                        {program.instructor.title}
                      </div>
                    </div>
                  </div>

                  {/* Metadata Chips */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-600 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BarChart2 className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{program.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-1.5 col-span-2">
                      <Layers className="w-3.5 h-3.5 text-neutral-400" />
                      <span className="truncate">{program.format}</span>
                    </div>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Tuition</div>
                    <div className="text-[14px] font-mono font-semibold text-neutral-900">
                      {program.tuition}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProgram(program.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0f1115] text-white text-[12px] font-medium hover:bg-neutral-800 transition-all active:scale-95 shadow-xs"
                  >
                    <span>View Program</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Demonstration Note & Explore Button */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-200/60">
          <p className="text-[12px] text-neutral-500">
            * Demonstration curricula designed for Midspring academy preview. Open enrollment cohorts begin bi-monthly.
          </p>
          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 hover:text-black"
          >
            <span>Browse Complete Curriculum Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
