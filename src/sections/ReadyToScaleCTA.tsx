import React from 'react';
import { FadeIn } from '../components/ui/ScrollReveal';

interface ReadyToScaleCTAProps {
  onTryFree: () => void;
}

export const ReadyToScaleCTA: React.FC<ReadyToScaleCTAProps> = ({
  onTryFree,
}) => {
  return (
    <section className="py-20 sm:py-28 md:py-36 bg-white relative overflow-hidden text-center">
      {/* Signature Atmospheric Diffused Gradient Glow - Expanded width & height to match longer section */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
        <div
          className="w-[820px] sm:w-[1050px] md:w-[1240px] h-[360px] sm:h-[440px] md:h-[480px] rounded-full blur-[110px]"
          style={{
            background:
              'radial-gradient(circle at 26% 45%, rgba(251, 146, 60, 0.45) 0%, transparent 65%), radial-gradient(circle at 74% 45%, rgba(56, 189, 248, 0.45) 0%, transparent 65%), radial-gradient(circle at 50% 50%, rgba(254, 215, 170, 0.22) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        <FadeIn delay={0.05} y={24} className="max-w-2xl mx-auto">
          {/* Main Headline - Using App Font & Size (Manrope font-normal with tight tracking) */}
          <h2 className="font-sans text-[30px] xs:text-[36px] sm:text-[44px] md:text-[52px] leading-[1.08] tracking-[-0.03em] font-normal text-[#111215]">
            Ready to scale your<br />social commerce?
          </h2>

          {/* Subtitle - Using App Body Font & Size with generous reading room */}
          <p className="mt-4 sm:mt-5 text-neutral-500 text-[14px] sm:text-[15.5px] leading-relaxed font-normal max-w-lg mx-auto">
            Start generating high-converting video ads and managing creator campaigns in minutes.
          </p>

          {/* Single Primary CTA Button */}
          <div className="mt-7 sm:mt-8 flex items-center justify-center">
            <button
              onClick={onTryFree}
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-black text-white text-[13.5px] font-medium hover:bg-neutral-800 transition-all shadow-xs hover:shadow-md active:scale-[0.98] cursor-pointer"
            >
              Try for free
            </button>
          </div>

          {/* Microcopy disclaimer */}
          <div className="mt-4 text-[11.5px] text-neutral-400 font-normal">
            No credit card required. Cancel anytime.
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
