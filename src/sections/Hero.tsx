import React, { useState } from 'react';
import { FadeIn, ScaleIn, scrollToSection } from '../components/ui/ScrollReveal';
import {
  CheckSquare,
  Sparkles,
  Paperclip,
  ArrowRight,
  ChevronDown,
  LayoutGrid,
  Library,
  Layers,
  Users,
  Video,
  ShoppingBag,
  Globe,
  UserPlus,
  CreditCard,
  Loader2,
} from 'lucide-react';

interface HeroProps {
  onExplorePrograms: () => void;
  onDiscoverMidspring: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplorePrograms,
  onDiscoverMidspring,
}) => {
  const [prompt, setPrompt] = useState(
    'Generate premium eyewear ad concept using @Swims product shots and creator content'
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeNav, setActiveNav] = useState('AI Video Studio');

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <section className="pt-8 sm:pt-14 md:pt-16 pb-12 sm:pb-16 bg-white overflow-hidden">
      {/* Centered Top Badge & Headline */}
      <div className="max-w-[1340px] mx-auto px-4 sm:px-8 lg:px-14 text-center">
        {/* Pill Badge */}
        <FadeIn delay={0} y={15}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100/90 border border-neutral-200/80 text-[10.5px] sm:text-[11px] font-semibold tracking-wider text-neutral-600 mb-5 sm:mb-6 shadow-2xs">
            <span className="text-[10px] text-neutral-500">▲</span>
            <span>AI VIDEO STUDIO</span>
          </div>
        </FadeIn>

        {/* Main Headline (Responsive Fluid Typography) */}
        <FadeIn delay={0.06} y={18}>
          <h1 className="font-sans text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] leading-[1.12] sm:leading-[1.08] tracking-[-0.03em] font-normal text-[#0f1115] max-w-4xl mx-auto break-words">
            Scale your ads from a few to thousands in weeks, on autopilot.
          </h1>
        </FadeIn>

        {/* Supporting Subtitle */}
        <FadeIn delay={0.12} y={18}>
          <p className="mt-4 sm:mt-5 text-neutral-500 text-[13.5px] sm:text-[15.5px] max-w-[620px] mx-auto leading-relaxed font-normal px-2 sm:px-0">
            Never be short on creatives. AI Video Studio uses your products, your briefs, and your top-performing content as context. You generate variants. You still review them. This burns credits. The list, the storefronts, and the campaigns do not.
          </p>
        </FadeIn>

        {/* Action Buttons (Stacked on Mobile, Horizontal on Tablet/Desktop) */}
        <FadeIn delay={0.18} y={18}>
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <button
              onClick={() => {
                onExplorePrograms?.();
                scrollToSection('platform');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-neutral-800 border border-neutral-300 text-[13px] font-medium tracking-tight hover:bg-neutral-50 hover:border-neutral-400 transition-all shadow-2xs active:scale-[0.98] cursor-pointer"
            >
              Get started
            </button>
            <button
              onClick={onDiscoverMidspring}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0f1115] text-white text-[13px] font-medium tracking-tight hover:bg-neutral-800 transition-all shadow-xs active:scale-[0.98]"
            >
              Talk to sales
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Hero Product Showcase (Atmospheric Gradient Frame + Multi-Column Platform UI) */}
      <div className="max-w-[1340px] mx-auto px-3 sm:px-6 lg:px-12 mt-10 sm:mt-16">
        <ScaleIn delay={0.15} duration={0.8}>
          <div
            className="relative rounded-[20px] sm:rounded-[36px] p-2.5 sm:p-6 md:p-8 border border-neutral-200/70 shadow-xl overflow-hidden"
            style={{
              background:
                'radial-gradient(circle at 12% 35%, rgba(251, 146, 60, 0.45) 0%, rgba(253, 186, 116, 0.25) 40%, transparent 70%), radial-gradient(circle at 88% 30%, rgba(56, 189, 248, 0.5) 0%, rgba(186, 230, 253, 0.25) 45%, transparent 70%), radial-gradient(circle at 50% 15%, rgba(252, 211, 77, 0.3) 0%, transparent 50%), linear-gradient(135deg, #fef3c7 0%, #e0f2fe 55%, #ede9fe 100%)',
            }}
          >
            {/* Internal Browser Window Mockup */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-neutral-200/90 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] overflow-hidden">
            {/* Top Browser Bar */}
            <div className="h-9 sm:h-11 bg-[#fafafa] border-b border-neutral-200/80 px-3 sm:px-4 flex items-center justify-between">
              {/* Left traffic lights */}
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* Center Breadcrumbs */}
              <div className="text-[10px] sm:text-[11.5px] text-neutral-400 font-mono flex items-center gap-1 truncate max-w-[200px] sm:max-w-none">
                <span>Generations</span>
                <span>/</span>
                <span className="text-neutral-700 font-medium truncate">AI Video Studio</span>
              </div>

              {/* Right Avatar */}
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center text-[10px] sm:text-[11px] font-semibold text-neutral-700 shrink-0">
                S
              </div>
            </div>

            {/* Platform Workspace (Responsive Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px] sm:min-h-[580px] bg-white text-left text-neutral-700">
              {/* Column 1: Left Navigation Sidebar (Desktop/Tablet) */}
              <div className="hidden md:flex md:col-span-3 lg:col-span-2 border-r border-neutral-100 p-3.5 flex-col justify-between bg-white text-[12px]">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 px-2 py-1 font-bold text-neutral-900 tracking-tight text-[14px]">
                    <span className="w-4 h-4 rounded bg-black flex items-center justify-center text-white text-[9px]">M</span>
                    <span>midspring</span>
                  </div>

                  <div className="space-y-0.5">
                    {[
                      { name: 'Get Started', icon: Sparkles },
                      { name: 'Dashboard', icon: LayoutGrid },
                      { name: 'Content Library', icon: Library },
                      { name: 'Campaigns', icon: Layers },
                      { name: 'My Creators', icon: Users },
                      { name: 'AI Video Studio', icon: Video, active: true },
                      { name: 'Product Center', icon: ShoppingBag },
                      { name: 'Website Widget', icon: Globe },
                      { name: 'Creator Recruitment', icon: UserPlus },
                    ].map((item) => (
                      <button
                        key={item.name}
                        onClick={() => setActiveNav(item.name)}
                        className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
                          activeNav === item.name
                            ? 'bg-neutral-100 text-neutral-900 font-semibold'
                            : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
                        }`}
                      >
                        <item.icon className="w-3.5 h-3.5" />
                        <span className="truncate">{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-100 space-y-1">
                  <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider px-2 mb-1">
                    Settings
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 text-neutral-500 hover:text-neutral-900 cursor-pointer">
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Billing</span>
                  </div>
                </div>
              </div>

              {/* Column 2: Middle Sub-list (Desktop only) */}
              <div className="hidden lg:flex lg:col-span-2 border-r border-neutral-100 p-3 flex-col bg-[#fdfdfd] text-[11.5px]">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-100">
                  <span className="font-semibold text-neutral-500 text-[10.5px] uppercase tracking-wider">
                    Order
                  </span>
                  <div className="w-4 h-4 rounded bg-neutral-100 flex items-center justify-center text-neutral-400">
                    +
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="p-2 rounded-lg bg-neutral-100 text-neutral-900 font-medium flex items-center gap-2">
                    <CheckSquare className="w-3.5 h-3.5 text-neutral-700" />
                    <span className="truncate">Top maturity curri...</span>
                  </div>
                  <div className="p-2 rounded-lg text-neutral-600 hover:bg-neutral-50 flex items-center gap-2 cursor-pointer">
                    <CheckSquare className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="truncate">Winning UGC scri...</span>
                  </div>
                  <div className="p-2 rounded-lg text-neutral-600 hover:bg-neutral-50 flex items-center gap-2 cursor-pointer">
                    <CheckSquare className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="truncate">Top performing ad...</span>
                  </div>
                </div>
              </div>

              {/* Column 3: Main Studio Chat & Generation Canvas (Fully Adaptive) */}
              <div className="md:col-span-9 lg:col-span-8 p-3.5 sm:p-6 flex flex-col justify-between bg-white">
                <div className="space-y-4 sm:space-y-6">
                  {/* User Prompt Message Bubble (Right Aligned) */}
                  <div className="flex items-start justify-end gap-2">
                    <div className="bg-[#f4f4f5] text-neutral-800 text-[11.5px] sm:text-[12.5px] px-3.5 py-2.5 rounded-2xl rounded-tr-xs max-w-[90%] sm:max-w-md leading-relaxed">
                      Generate 3 premium sunglasses ad concepts using product shots and brand inputs.
                    </div>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-neutral-200 border border-neutral-300 flex items-center justify-center text-[10px] font-semibold text-neutral-700 shrink-0">
                      S
                    </div>
                  </div>

                  {/* AI Generating Response Header */}
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-center gap-2 text-neutral-800 text-[11.5px] sm:text-[12px]">
                      <span className="w-5 h-5 rounded-md bg-neutral-900 text-white flex items-center justify-center text-[10px]">
                        ✦
                      </span>
                      <span className="font-semibold text-neutral-900">Generating...</span>
                    </div>
                    <p className="text-[11.5px] sm:text-[12px] text-neutral-500 pl-0 sm:pl-7">
                      Here are your first AI-generated sunglasses ad concepts:
                    </p>

                    {/* 3 Generated Media Cards (1-col on mobile, 3-col on tablet/desktop) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pl-0 sm:pl-7 pt-1">
                      {/* Card 1: Woman holding sunglasses */}
                      <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/80 group shadow-xs">
                        <img
                          src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80"
                          alt="AI generated sunglasses ad concept 1"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                        <div className="absolute bottom-2 left-2 text-[10px] text-white font-mono bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
                          Concept 01 • 9:16
                        </div>
                      </div>

                      {/* Card 2: Close up face portrait wearing sunglasses */}
                      <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/80 group shadow-xs">
                        <img
                          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80"
                          alt="AI generated sunglasses ad concept 2"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                        <div className="absolute bottom-2 left-2 text-[10px] text-white font-mono bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
                          Concept 02 • 9:16
                        </div>
                      </div>

                      {/* Card 3: Creating... Placeholder Card */}
                      <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-xl overflow-hidden bg-[#fafafa] border border-dashed border-neutral-300 flex flex-col items-center justify-center text-center p-3">
                        <Loader2 className="w-5 h-5 text-neutral-400 animate-spin mb-2" />
                        <span className="text-[12px] font-medium text-neutral-500">Creating...</span>
                        <span className="text-[10px] text-neutral-400 mt-1">Rendering shaders</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Prompt Box (Responsive Flexwrap) */}
                <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-neutral-100">
                  <div className="bg-[#fafafa] rounded-2xl p-2.5 sm:p-3 border border-neutral-200/90 shadow-2xs focus-within:border-neutral-400 transition-colors">
                    <input
                      type="text"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Generate premium eyewear ad concept..."
                      className="w-full bg-transparent text-[12px] sm:text-[13px] text-neutral-800 placeholder-neutral-400 focus:outline-none px-1"
                    />

                    <div className="mt-2.5 pt-2 border-t border-neutral-200/60 flex flex-wrap items-center justify-between gap-2 text-[10.5px] sm:text-[11px] text-neutral-500">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <button className="p-1 hover:text-black">
                          <Paperclip className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 py-0.5 rounded bg-white border border-neutral-200 font-mono text-[10px]">
                          9:16
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white border border-neutral-200 font-mono text-[10px]">
                          720p
                        </span>
                        <span className="hidden xs:inline-block px-2 py-0.5 rounded bg-white border border-neutral-200 font-mono text-[10px]">
                          4K Ready
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 ml-auto">
                        <div className="flex items-center gap-1 text-[10.5px] sm:text-[11px] font-medium text-neutral-700 bg-white border border-neutral-200 px-2 py-1 rounded-md cursor-pointer hover:border-neutral-300">
                          <span>Seedance 2.0</span>
                          <ChevronDown className="w-3 h-3 text-neutral-400" />
                        </div>
                        <button
                          onClick={handleGenerate}
                          disabled={isGenerating}
                          className="w-7 h-7 rounded-full bg-black hover:bg-neutral-800 text-white flex items-center justify-center transition-all active:scale-95 shadow-xs"
                          aria-label="Send prompt"
                        >
                          {isGenerating ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ScaleIn>
      </div>

      {/* Credibility Strip Below Showcase (Grid on Mobile, Row on Desktop) */}
      <FadeIn delay={0.1} y={20}>
        <div className="max-w-[1340px] mx-auto px-4 sm:px-8 lg:px-14 mt-12 sm:mt-20 text-center">
          <p className="text-[12px] sm:text-[13px] text-neutral-500 mb-6 sm:mb-8 font-normal max-w-xl mx-auto px-2">
            Enriching billions of transactions for category-defining fintechs & Fortune 500 banks every month
          </p>

          {/* Clean Monochrome Partner Logos Grid / Wrap */}
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:flex sm:flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 opacity-80 grayscale">
            <span className="font-sans italic text-lg sm:text-xl font-bold tracking-tight text-neutral-800">
              Relay
            </span>
            <span className="font-sans text-lg sm:text-xl font-black tracking-tight text-neutral-800">
              stripe
            </span>
            <span className="font-sans tracking-[0.16em] uppercase text-xs sm:text-sm font-bold text-neutral-800 flex items-center justify-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full border-2 border-neutral-800" />
              MERCURY
            </span>
            <span className="font-sans text-sm sm:text-base font-bold text-neutral-800">
              Corpay^
            </span>
            <span className="font-sans text-base sm:text-lg font-bold text-neutral-800">
              unit
            </span>
            <span className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-neutral-800 flex items-center justify-center gap-1">
              <span>⟡</span> Sardine
            </span>
            <span className="col-span-2 xs:col-span-1 font-sans text-sm sm:text-base font-bold text-neutral-800">
              Method
            </span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
