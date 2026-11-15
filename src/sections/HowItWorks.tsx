import React from 'react';
import { Upload, Play, Edit3 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-neutral-100">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-14">
        {/* Top Header: Badge + Two Columns (Exact match to reference) */}
        <FadeIn delay={0} y={20} className="mb-10 sm:mb-14">
          <div>
            {/* Pill Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#18191b] text-white text-[11px] font-semibold tracking-wider mb-5">
              How it works
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <h2 className="font-sans text-[32px] sm:text-[44px] md:text-[50px] leading-[1.1] tracking-[-0.035em] font-normal text-[#111215] break-words">
                  From brief to high-<br className="hidden sm:inline" />converting ad in minutes.
                </h2>
              </div>
              <div className="lg:col-span-5 pt-1">
                <p className="text-neutral-500 text-[13px] sm:text-[13.5px] leading-relaxed max-w-[440px] font-normal">
                  AI-powered video can you variants of AI - powered products, creating your context & and your briefs. Your context to performing content, and you reframe our the fee and develop publishing.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 3 Step Cards Grid (Staggered Scroll Animation) */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Upload your assets */}
          <StaggerItem>
            <div className="bg-[#fcfcfd] rounded-[22px] p-5 sm:p-6 border border-neutral-200/80 shadow-2xs flex flex-col justify-between hover:border-neutral-300 hover:shadow-md transition-all duration-300 h-full">
              {/* Visual Frame with Pastel Gradient */}
              <div
                className="rounded-2xl p-4 sm:p-5 aspect-[4/3] flex items-center justify-center relative overflow-hidden mb-6"
                style={{
                  background:
                    'radial-gradient(circle at 10% 20%, rgba(251, 146, 60, 0.35) 0%, transparent 60%), radial-gradient(circle at 90% 80%, rgba(56, 189, 248, 0.4) 0%, transparent 60%), linear-gradient(135deg, #fef3c7 0%, #e0f2fe 100%)',
                }}
              >
                {/* Inner Mini Browser Window */}
                <div className="w-full bg-white rounded-xl border border-neutral-200/90 shadow-md p-4 text-center">
                  {/* Traffic dots */}
                  <div className="flex items-center gap-1 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                  </div>
                  {/* File icons dropzone */}
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-8 h-9 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-500">
                      <Upload className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] text-neutral-400">or</span>
                    <div className="w-8 h-9 rounded bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500 text-[10px] font-bold">
                      CSV
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-black text-white text-[9.5px] font-medium shadow-2xs">
                    Upload assets
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div>
                <h3 className="font-sans text-[17px] sm:text-[18px] font-bold text-neutral-900 tracking-tight mb-1.5">
                  1. Upload your assets
                </h3>
                <p className="text-neutral-500 text-[12.5px] leading-relaxed font-normal">
                  Connect your product feed or upload media with or your contexts.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Card 2: Set your goals */}
          <StaggerItem>
            <div className="bg-[#fcfcfd] rounded-[22px] p-5 sm:p-6 border border-neutral-200/80 shadow-2xs flex flex-col justify-between hover:border-neutral-300 hover:shadow-md transition-all duration-300 h-full">
              {/* Visual Frame with Pastel Gradient */}
              <div
                className="rounded-2xl p-4 sm:p-5 aspect-[4/3] flex items-center justify-center relative overflow-hidden mb-6"
                style={{
                  background:
                    'radial-gradient(circle at 15% 30%, rgba(245, 158, 11, 0.4) 0%, transparent 60%), radial-gradient(circle at 85% 70%, rgba(56, 189, 248, 0.4) 0%, transparent 60%), linear-gradient(135deg, #fed7aa 0%, #e0f2fe 100%)',
                }}
              >
                {/* Inner Toggle Mockup Box */}
                <div className="w-full bg-white rounded-xl border border-neutral-200/90 shadow-md p-4 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                    <div className="text-left">
                      <div className="text-[11px] font-bold text-neutral-800">Campaign toggle</div>
                      <div className="text-[9.5px] text-neutral-400">Define target settings settings</div>
                    </div>
                    {/* Active Toggle Switch */}
                    <div className="w-9 h-5 bg-black rounded-full p-0.5 flex items-center justify-end">
                      <div className="w-4 h-4 bg-white rounded-full shadow-xs" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-[11px] font-bold text-neutral-800">Campaign toggle</div>
                      <div className="text-[9.5px] text-neutral-400">Define target audiences and your campaign aims</div>
                    </div>
                    {/* Inactive Toggle Switch */}
                    <div className="w-9 h-5 bg-neutral-200 rounded-full p-0.5 flex items-center justify-start">
                      <div className="w-4 h-4 bg-white rounded-full shadow-xs" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div>
                <h3 className="font-sans text-[17px] sm:text-[18px] font-bold text-neutral-900 tracking-tight mb-1.5">
                  2. Set your goals
                </h3>
                <p className="text-neutral-500 text-[12.5px] leading-relaxed font-normal">
                  Define your target audiences and campaign aims to your products.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Card 3: Auto-generate & launch */}
          <StaggerItem>
            <div className="bg-[#fcfcfd] rounded-[22px] p-5 sm:p-6 border border-neutral-200/80 shadow-2xs flex flex-col justify-between hover:border-neutral-300 hover:shadow-md transition-all duration-300 h-full">
              {/* Visual Frame with Pastel Gradient */}
              <div
                className="rounded-2xl p-4 sm:p-5 aspect-[4/3] flex items-center justify-center relative overflow-hidden mb-6"
                style={{
                  background:
                    'radial-gradient(circle at 10% 20%, rgba(251, 146, 60, 0.4) 0%, transparent 60%), radial-gradient(circle at 85% 30%, rgba(56, 189, 248, 0.5) 0%, transparent 60%), linear-gradient(135deg, #fef3c7 0%, #e0f2fe 100%)',
                }}
              >
                {/* Inner 3 Video Story Previews */}
                <div className="flex items-center justify-center gap-2 w-full">
                  {/* Story 1 */}
                  <div className="w-1/3 aspect-[9/16] rounded-lg overflow-hidden relative shadow-sm border border-neutral-200 bg-neutral-900 group">
                    <img
                      src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=300&q=80"
                      alt="Video 1"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-2.5 h-2.5 fill-black text-black ml-0.5" />
                    </div>
                  </div>

                  {/* Story 2 (Center Active) */}
                  <div className="w-1/3 aspect-[9/16] rounded-lg overflow-hidden relative shadow-md border-2 border-white bg-neutral-900 scale-105">
                    <img
                      src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80"
                      alt="Video 2"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-2.5 h-2.5 fill-black text-black ml-0.5" />
                    </div>
                  </div>

                  {/* Story 3 */}
                  <div className="w-1/3 aspect-[9/16] rounded-lg overflow-hidden relative shadow-sm border border-neutral-200 bg-neutral-900">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                      alt="Video 3"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
                      <Edit3 className="w-2.5 h-2.5 text-black" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div>
                <h3 className="font-sans text-[17px] sm:text-[18px] font-bold text-neutral-900 tracking-tight mb-1.5">
                  3. Auto-generate & launch
                </h3>
                <p className="text-neutral-500 text-[12.5px] leading-relaxed font-normal">
                  AI-powered video variants and one-click publishing for reels.
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
