import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onExplorePrograms: () => void;
  onOpenSignIn: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onExplorePrograms,
  onOpenSignIn,
}) => {
  return (
    <section className="py-24 sm:py-32 md:py-40 bg-[#ffffff] relative overflow-hidden">
      {/* Delicate background ambient blur */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[600px] h-[350px] bg-gradient-to-tr from-amber-100 via-sky-100 to-violet-100 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
            ADMISSIONS & FELLOWSHIPS
          </span>

          <h2 className="font-sans text-[42px] sm:text-[56px] md:text-[66px] leading-[1.08] tracking-[-0.035em] text-[#0f1115] mb-6 font-normal">
            Your next chapter starts here.
          </h2>

          <p className="text-neutral-600 text-base sm:text-xl font-normal max-w-xl mx-auto mb-10 leading-relaxed">
            Discover what you're capable of becoming.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <button
              onClick={onExplorePrograms}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0f1115] text-white text-[14px] font-medium tracking-tight hover:bg-neutral-800 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenSignIn}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white text-neutral-800 border border-neutral-300 text-[14px] font-medium tracking-tight hover:bg-neutral-50 transition-all duration-200 active:scale-[0.98]"
            >
              Learner Portal Sign In
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
