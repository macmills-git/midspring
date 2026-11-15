import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedExperienceProps {
  onExplorePrograms: () => void;
}

export const FeaturedExperience: React.FC<FeaturedExperienceProps> = ({
  onExplorePrograms,
}) => {
  return (
    <section className="py-6 sm:py-10 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onClick={onExplorePrograms}
          className="group relative w-full h-[460px] sm:h-[520px] md:h-[580px] rounded-[24px] sm:rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200/60"
        >
          {/* Editorial Photograph */}
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=85"
            alt="Midspring Fellow in an inspiring environment"
            className="w-full h-full object-cover object-[center_28%] transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Sophisticated Dark Gradient Overlay (Bottom-Left focus like reference) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

          {/* Top-Left Category Tag (Mirroring "SEEDANCE 2.0" from screenshot) */}
          <div className="absolute top-6 sm:top-8 left-6 sm:left-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold tracking-[0.16em] uppercase">
              <Sparkles className="w-3 h-3 text-white" />
              <span>FEATURED LEARNING EXPERIENCE</span>
            </span>
          </div>

          {/* Bottom-Left Editorial Content */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 max-w-[620px] text-white">
            <h3 className="font-sans text-[32px] sm:text-[42px] md:text-[50px] leading-[1.12] tracking-[-0.03em] text-white font-normal mb-3 sm:mb-4">
              Build skills that move you forward.
            </h3>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-[480px] mb-6 font-normal">
              Explore structured programs designed around the capabilities that matter in today's professional world.
            </p>

            <div className="inline-flex items-center gap-2 text-white font-medium text-[14px] group-hover:text-amber-200 transition-colors">
              <span className="border-b border-white/40 pb-0.5 group-hover:border-amber-200 transition-colors">
                Explore our programs
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
