import React, { useState, useRef } from 'react';
import { ChevronDown, ExternalLink, CheckCircle2, Play, Pause } from 'lucide-react';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem, scrollToSection } from '../components/ui/ScrollReveal';
import bannerVideo from '../assets/gemini_generated_video_7fce563b.mp4';

interface EditorialAndFeaturesProps {
  onBookDemo: () => void;
  onTryFree: () => void;
  onLearnMore?: () => void;
}

export const EditorialAndFeatures: React.FC<EditorialAndFeaturesProps> = ({
  onBookDemo,
  onTryFree,
  onLearnMore = onTryFree,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-14">
        {/* 1. Two-Column Editorial Intro (Exact Match to Screenshot, Mobile Optimized) */}
        <FadeIn delay={0} y={20}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-start mb-8 sm:mb-12">
            {/* Left Column: Heading */}
            <div className="lg:col-span-7">
              <h2 className="font-sans text-[28px] xs:text-[34px] sm:text-[44px] md:text-[52px] leading-[1.12] sm:leading-[1.08] tracking-[-0.035em] font-normal text-[#111215] break-words">
                Social commerce teams build<br className="hidden sm:inline" /> on Midspring.
              </h2>
            </div>

            {/* Right Column: Description + Two Buttons */}
            <div className="lg:col-span-5 flex flex-col justify-start pt-1">
              <p className="text-neutral-500 text-[13px] sm:text-[13.5px] leading-relaxed max-w-[440px] mb-4 font-normal">
                From creator campaigns to AI creative and analytics, Midspring unifies your entire social commerce workflow.
              </p>

              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 w-full xs:w-auto">
                <button
                  onClick={onBookDemo}
                  className="inline-flex items-center justify-center px-4 py-2 sm:py-1.5 rounded-full bg-white text-neutral-800 border border-neutral-300 text-[12.5px] font-medium hover:bg-neutral-50 hover:border-neutral-400 transition-all shadow-2xs active:scale-[0.98]"
                >
                  Book a demo
                </button>
                <button
                  onClick={() => {
                    onTryFree?.();
                    scrollToSection('cta');
                  }}
                  className="inline-flex items-center justify-center px-4 py-2 sm:py-1.5 rounded-full bg-black text-white text-[12.5px] font-medium hover:bg-neutral-800 transition-all shadow-xs active:scale-[0.98] cursor-pointer"
                >
                  Try for free
                </button>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 2. Wide Featured Card: SEEDANCE 2.0 / AI Ads Maker (Responsive) */}
        <ScaleIn delay={0.08} duration={0.75}>
          <div className="relative w-full h-[360px] xs:h-[420px] sm:h-[480px] md:h-[540px] rounded-[18px] sm:rounded-[24px] overflow-hidden mb-6 sm:mb-8 border border-neutral-200/80 shadow-xs group">
            {/* Background Video Banner */}
            <video
              ref={videoRef}
              src={bannerVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center"
            />

            {/* Controlled dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Top-Left Pill Badge: SEEDANCE 2.0 */}
            <div className="absolute top-4 sm:top-7 left-4 sm:left-8 z-10">
              <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-md bg-[#1f375b]/75 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase shadow-xs">
                SEEDANCE 2.0
              </span>
            </div>

            {/* Top-Right Video Control (Play/Pause) */}
            <div className="absolute top-4 sm:top-7 right-4 sm:right-8 z-10">
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/70 transition-all shadow-xs cursor-pointer active:scale-95"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5 fill-current" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                )}
              </button>
            </div>

            {/* Bottom-Left Overlay Content (Constrained width so never overflows on mobile) */}
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-auto max-w-[460px] text-white">
              <h3 className="font-sans text-[22px] xs:text-[26px] sm:text-[34px] leading-tight text-white font-normal mb-1.5 sm:mb-2 tracking-[-0.02em]">
                AI Ads Maker
              </h3>
              <p className="text-white/90 text-[12px] sm:text-[13px] leading-relaxed max-w-[410px] mb-3 sm:mb-4 font-normal line-clamp-3 sm:line-clamp-none">
                Create new ad variations using your products, creative briefs, and top-performing content as context.
              </p>

              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-1.5 text-white text-[12px] sm:text-[12.5px] font-medium hover:text-amber-200 transition-colors group/link"
              >
                <span className="border-b border-white/50 pb-0.5 group-hover/link:border-amber-200 transition-colors">
                  Learn more
                </span>
                <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </ScaleIn>

        {/* 3. Two-Column Feature Cards (Responsive Grid) */}
        <StaggerContainer staggerDelay={0.14} className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Card 1: Give creators one place to work */}
          <StaggerItem>
          <div className="bg-[#f9fafb] rounded-[18px] sm:rounded-[24px] p-4 sm:p-6 md:p-7 border border-neutral-200/70 flex flex-col justify-between hover:border-neutral-300 hover:shadow-md transition-all duration-300 shadow-2xs relative overflow-hidden h-full">
            {/* Top Text Content */}
            <div className="mb-5 sm:mb-6">
              <h4 className="text-[18px] sm:text-[21px] font-normal text-neutral-900 tracking-tight mb-1.5 sm:mb-2">
                Give creators one place to work
              </h4>
              <p className="text-neutral-500 text-[12px] sm:text-[12.5px] leading-relaxed max-w-[420px] mb-3 font-normal">
                Let creators accept campaigns, submit content, receive feedback, track earnings, and manage payouts.
              </p>
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-1 text-[12px] font-medium text-neutral-900 hover:text-black group"
              >
                <span className="border-b border-neutral-400 pb-0.5 group-hover:border-black transition-colors">
                  Learn more
                </span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* Atmospheric Glow Presentation Frame */}
            <div
              className="rounded-2xl p-2 sm:p-3.5 border border-neutral-200/80 shadow-xs relative overflow-hidden"
              style={{
                background:
                  'radial-gradient(circle at 10% 20%, rgba(251, 146, 60, 0.42) 0%, transparent 60%), radial-gradient(circle at 90% 80%, rgba(56, 189, 248, 0.42) 0%, transparent 60%), linear-gradient(135deg, #fef3c7 0%, #e0f2fe 100%)',
              }}
            >
              {/* Inner Realistic Mockup */}
              <div className="bg-white rounded-xl border border-neutral-200/80 p-3.5 sm:p-4.5 shadow-xs overflow-hidden">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                {/* Traffic light dots */}
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-neutral-300">
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </div>
              </div>

              {/* Creator Profile */}
              <div className="flex items-center gap-3 pb-3.5 sm:pb-4 border-b border-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  alt="@KatiePark"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-neutral-200 shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="font-bold text-[13px] sm:text-[14px] text-neutral-900 truncate">@KatiePark</div>
                  <div className="text-[10.5px] sm:text-[11px] text-neutral-400 truncate">katie@midspring.io</div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1 text-[10px] sm:text-[10.5px] text-neutral-500">
                    <span className="flex items-center gap-1 text-emerald-600 font-medium">
                      ● 15.2K Followers
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-600 text-[9.5px]">Instagram +2</span>
                    <span className="hidden xs:inline">Female, 23 yr</span>
                    <span>🇨🇦 Canada</span>
                  </div>
                </div>
              </div>

              {/* 4 Stats Boxes (2x2 on Mobile, 4x1 on Tablet/Desktop) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 sm:py-4 border-b border-neutral-100 text-left">
                <div className="p-1.5 sm:p-0">
                  <div className="text-[9.5px] text-neutral-400 font-medium flex items-center gap-0.5 truncate">
                    <span>Total Impressions</span> <ChevronDown className="w-2.5 h-2.5 text-neutral-400 shrink-0" />
                  </div>
                  <div className="text-[13.5px] sm:text-[15px] font-bold text-neutral-900 mt-0.5">4.85M</div>
                </div>
                <div className="p-1.5 sm:p-0">
                  <div className="text-[9.5px] text-neutral-400 font-medium flex items-center gap-0.5 truncate">
                    <span>Total Views</span> <ChevronDown className="w-2.5 h-2.5 text-neutral-400 shrink-0" />
                  </div>
                  <div className="text-[13.5px] sm:text-[15px] font-bold text-neutral-900 mt-0.5">3.62M</div>
                </div>
                <div className="p-1.5 sm:p-0">
                  <div className="text-[9.5px] text-neutral-400 font-medium flex items-center gap-0.5 truncate">
                    <span>Total Engagements</span> <ChevronDown className="w-2.5 h-2.5 text-neutral-400 shrink-0" />
                  </div>
                  <div className="text-[13.5px] sm:text-[15px] font-bold text-neutral-900 mt-0.5">245,000</div>
                </div>
                <div className="p-1.5 sm:p-0">
                  <div className="text-[9.5px] text-neutral-400 font-medium flex items-center gap-0.5 truncate">
                    <span>Total Clicks</span> <ChevronDown className="w-2.5 h-2.5 text-neutral-400 shrink-0" />
                  </div>
                  <div className="text-[13.5px] sm:text-[15px] font-bold text-neutral-900 mt-0.5">38,500</div>
                </div>
              </div>

              {/* Trend Line Chart with Y-axis grid */}
              <div className="pt-3 sm:pt-4 flex items-center gap-2 sm:gap-3">
                {/* Y-axis labels */}
                <div className="flex flex-col justify-between h-16 sm:h-20 text-[8.5px] sm:text-[9px] font-mono text-neutral-400 text-right pr-0.5 shrink-0">
                  <span>150</span>
                  <span>100</span>
                  <span>50</span>
                  <span>0</span>
                </div>
                {/* SVG Chart */}
                <div className="flex-1 h-16 sm:h-20 relative">
                  <div className="absolute inset-x-0 top-0 border-b border-neutral-100" />
                  <div className="absolute inset-x-0 top-1/3 border-b border-neutral-100" />
                  <div className="absolute inset-x-0 top-2/3 border-b border-neutral-100" />
                  <div className="absolute inset-x-0 bottom-0 border-b border-neutral-100" />
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 320 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartCoralGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f87171" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#f87171" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,65 Q20,67 40,60 T80,62 T120,54 T160,45 T200,48 T240,32 T280,24 L320,16 L320,80 L0,80 Z"
                      fill="url(#chartCoralGrad)"
                    />
                    <path
                      d="M0,65 Q20,67 40,60 T80,62 T120,54 T160,45 T200,48 T240,32 T280,24 L320,16"
                      fill="none"
                      stroke="#f87171"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            </div>
          </div>
          </StaggerItem>

          {/* Card 2: Give every creator a storefront */}
          <StaggerItem>
          <div className="bg-[#f9fafb] rounded-[18px] sm:rounded-[24px] p-4 sm:p-6 md:p-7 border border-neutral-200/70 flex flex-col justify-between hover:border-neutral-300 hover:shadow-md transition-all duration-300 shadow-2xs relative overflow-hidden h-full">
            {/* Top Text Content */}
            <div className="mb-5 sm:mb-6">
              <h4 className="text-[18px] sm:text-[21px] font-normal text-neutral-900 tracking-tight mb-1.5 sm:mb-2">
                Give every creator a storefront
              </h4>
              <p className="text-neutral-500 text-[12px] sm:text-[12.5px] leading-relaxed max-w-[420px] mb-3 font-normal">
                Create personalized, shoppable storefronts where creators can recommend products, earn commissions, and drive sales.
              </p>
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-1 text-[12px] font-medium text-neutral-900 hover:text-black group"
              >
                <span className="border-b border-neutral-400 pb-0.5 group-hover:border-black transition-colors">
                  Learn more
                </span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* Atmospheric Glow Presentation Frame */}
            <div
              className="rounded-2xl p-2 sm:p-3.5 border border-neutral-200/80 shadow-xs relative overflow-hidden"
              style={{
                background:
                  'radial-gradient(circle at 85% 20%, rgba(251, 146, 60, 0.42) 0%, transparent 60%), radial-gradient(circle at 15% 85%, rgba(56, 189, 248, 0.42) 0%, transparent 60%), linear-gradient(135deg, #e0f2fe 0%, #fef3c7 100%)',
              }}
            >
              {/* Inner Realistic Mockup: Storefront Card */}
              <div className="bg-white rounded-xl border border-neutral-200/80 p-3.5 sm:p-4.5 shadow-xs overflow-hidden">
              {/* Creator Header with Verified Badge */}
              <div className="flex items-center gap-3 pb-3.5 sm:pb-4 border-b border-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
                  alt="Minji Choi"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-neutral-200 shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-[13px] sm:text-[14px] text-neutral-900 truncate">Minji Choi</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 fill-neutral-900 shrink-0" />
                  </div>
                  <div className="text-[10.5px] sm:text-[11px] text-neutral-400 truncate">@minji.choi</div>
                  <div className="flex items-center gap-2 sm:gap-3 mt-0.5 sm:mt-1 text-[10px] sm:text-[10.5px] text-neutral-500 truncate">
                    <span>15.2K Followers</span>
                    <span>• Fashion</span>
                    <span className="hidden xs:inline">• South Korea</span>
                  </div>
                </div>
              </div>

              {/* Two Product Cards Side by Side */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-3 sm:pt-4">
                {/* Product 1: White Sunscreen Tube */}
                <div className="rounded-xl border border-neutral-200/70 p-2 sm:p-2.5 bg-[#f8fafc]">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden bg-white mb-1.5 sm:mb-2 flex items-center justify-center p-1.5 sm:p-2">
                    <img
                      src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80"
                      alt="Sunscreen"
                      className="w-full h-full object-cover rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] font-medium text-neutral-900 truncate">Sunscreen</div>
                  <div className="text-[10.5px] sm:text-[11px] text-neutral-500 font-mono mt-0.5">$25.00</div>
                </div>

                {/* Product 2: Yellow Sunscreen Bottle on Water */}
                <div className="rounded-xl border border-neutral-200/70 p-2 sm:p-2.5 bg-[#fffbeb]">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden bg-white mb-1.5 sm:mb-2 flex items-center justify-center p-1.5 sm:p-2">
                    <img
                      src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80"
                      alt="Sunscreen"
                      className="w-full h-full object-cover rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] font-medium text-neutral-900 truncate">Sunscreen</div>
                  <div className="text-[10.5px] sm:text-[11px] text-neutral-500 font-mono mt-0.5">$28.00</div>
                </div>
              </div>

              {/* Peeking 3rd card below */}
              <div className="mt-2.5 sm:mt-3 h-4 sm:h-5 rounded-t-lg bg-neutral-100 overflow-hidden opacity-60 border-t border-neutral-200" />
            </div>
            </div>
          </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
