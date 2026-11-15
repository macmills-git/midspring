import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ACADEMIC_DIVISIONS } from '../data/content';

interface AcademiesProps {
  onSelectDivision: (divisionId: string) => void;
  onExploreAll: () => void;
}

export const Academies: React.FC<AcademiesProps> = ({
  onSelectDivision,
  onExploreAll,
}) => {
  return (
    <section id="academies-section" className="py-20 sm:py-28 md:py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-400 mb-3 block">
              ACADEMIC DIVISIONS
            </span>
            <h2 className="font-sans text-[36px] sm:text-[46px] md:text-[52px] leading-[1.1] tracking-[-0.03em] text-[#0f1115]">
              Find your field. Build your future.
            </h2>
            <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
              Six dedicated academies offering immersive, rigorous educational pathways designed for real-world mastery.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-2 text-[14px] font-medium text-neutral-900 hover:text-black group shrink-0"
          >
            <span className="border-b border-neutral-300 pb-0.5 group-hover:border-black transition-colors">
              Explore All Programs
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 6 Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ACADEMIC_DIVISIONS.map((division, index) => (
            <motion.div
              key={division.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => onSelectDivision(division.id)}
              className="group bg-[#fcfcfd] rounded-[24px] overflow-hidden border border-neutral-200/80 hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between hover:shadow-lg cursor-pointer"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-neutral-100">
                <img
                  src={division.image}
                  alt={division.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-neutral-800 text-[11px] font-mono font-medium shadow-xs">
                    {division.programsCount} Programs
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-1">
                    {division.tagline}
                  </div>
                  <h3 className="font-sans text-[24px] sm:text-[26px] text-neutral-900 font-semibold mb-3 group-hover:text-black transition-colors">
                    {division.name}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    {division.description}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-[13px] font-medium text-neutral-900 group-hover:text-black">
                  <span>Explore division</span>
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center transition-all duration-200 group-hover:bg-[#0f1115] group-hover:text-white">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
