import React, { useState } from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

export const IntegrationsAndAnalytics: React.FC = () => {
  const [tiktokConnected, setTiktokConnected] = useState(true);
  const [metaConnected, setMetaConnected] = useState(true);
  const [shopifyConnected, setShopifyConnected] = useState(true);
  const [youtubeConnected, setYoutubeConnected] = useState(true);

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-neutral-100">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-14">
        {/* Top Header: Badge + Two Columns */}
        <FadeIn delay={0} y={20} className="mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#18191b] text-white text-[11px] font-semibold tracking-wider uppercase mb-5">
              INTEGRATIONS & ANALYTICS
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <h2 className="font-sans text-[32px] sm:text-[44px] md:text-[50px] leading-[1.08] tracking-[-0.035em] font-normal text-[#111215] break-words">
                  Connect your stack.<br />Track real revenue.
                </h2>
              </div>
              <div className="lg:col-span-5 pt-1">
                <p className="text-neutral-500 text-[13px] sm:text-[13.5px] leading-relaxed max-w-[440px] font-normal">
                  Connect your tools and trace integrations platforms. Tech your dashboard and trace conversions and teuch as you your conversions to real sales.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Two Showcase Cards Side by Side (Staggered Animation) */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
          {/* Card 1: Real-time ROAS attribution (Left, 7 Cols) */}
          <StaggerItem className="lg:col-span-7">
            <div className="bg-[#fcfcfd] rounded-[24px] p-5 sm:p-7 border border-neutral-200/80 shadow-2xs flex flex-col justify-between hover:border-neutral-300 hover:shadow-md transition-all duration-300 h-full">
            <div className="mb-6">
              <h3 className="font-sans text-[19px] sm:text-[21px] font-bold text-neutral-900 tracking-tight mb-1">
                Real-time ROAS attribution
              </h3>
              <p className="text-neutral-500 text-[13px] leading-relaxed font-normal">
                See exact ROI across your campaigns.
              </p>
            </div>

            {/* Inner Dashboard Mockup Frame */}
            <div
              className="rounded-2xl p-2.5 sm:p-4 border border-neutral-200/80 shadow-md relative overflow-hidden"
              style={{
                background:
                  'radial-gradient(circle at 10% 20%, rgba(251, 146, 60, 0.45) 0%, transparent 60%), radial-gradient(circle at 90% 80%, rgba(56, 189, 248, 0.45) 0%, transparent 60%), linear-gradient(135deg, #fed7aa 0%, #e0f2fe 100%)',
              }}
            >
              {/* White Analytics App Window */}
              <div className="bg-white rounded-xl border border-neutral-200/90 shadow-sm p-4 text-left">
                {/* Traffic dots & header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 text-[10.5px] font-medium text-neutral-400">Analytics</span>
                  </div>
                  <div className="text-[10px] bg-neutral-100 px-2 py-0.5 rounded text-neutral-600 font-mono">
                    Last 30 Days
                  </div>
                </div>

                {/* 3 Metric Stat Tiles */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100/80">
                    <div className="text-[9.5px] text-neutral-500 font-medium">ROAS</div>
                    <div className="text-[14px] sm:text-[16px] font-bold text-neutral-900 mt-0.5 flex items-center gap-1">
                      <span>4.8x</span>
                      <span className="text-[9.5px] font-mono text-emerald-600 font-medium">+120%</span>
                    </div>
                  </div>

                  <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/60">
                    <div className="text-[9.5px] text-neutral-500 font-medium">Purchase Value</div>
                    <div className="text-[14px] sm:text-[16px] font-bold text-neutral-900 mt-0.5">$3.86M</div>
                  </div>

                  <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/60">
                    <div className="text-[9.5px] text-neutral-500 font-medium">Purchase Value</div>
                    <div className="text-[14px] sm:text-[16px] font-bold text-neutral-900 mt-0.5">$2.71M</div>
                  </div>
                </div>

                {/* Multi-Line Analytics Chart */}
                <div className="h-28 sm:h-32 w-full pt-2 border-t border-neutral-100 relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="20" x2="400" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="0" y1="50" x2="400" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="0" y1="80" x2="400" y2="80" stroke="#f1f5f9" strokeWidth="1" />

                    {/* Line 1 (Purple - Meta) */}
                    <path
                      d="M0,80 Q40,65 80,75 T160,50 T240,40 T320,30 L400,20"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                    />
                    {/* Line 2 (Emerald - TikTok) */}
                    <path
                      d="M0,85 Q40,70 80,60 T160,40 T240,30 T320,15 L400,10"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.2"
                    />
                    {/* Line 3 (Coral - YouTube) */}
                    <path
                      d="M0,90 Q40,80 80,70 T160,65 T240,55 T320,45 L400,35"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="1.8"
                    />
                  </svg>

                  {/* X-axis months */}
                  <div className="flex justify-between text-[9px] font-mono text-neutral-400 mt-1 px-1">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>

                {/* Connected Channels Pill Strip */}
                <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px]">
                  <span className="text-neutral-400 font-medium">Connected Channels</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold">Meta</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 text-white text-[10px] font-bold">TikTok</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold">Shopify</span>
                    <span className="px-2 py-0.5 rounded bg-red-50 text-red-700 text-[10px] font-bold">YouTube</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </StaggerItem>

          {/* Card 2: One-click channel sync (Right, 5 Cols) */}
          <StaggerItem className="lg:col-span-5">
            <div className="bg-[#fcfcfd] rounded-[24px] p-5 sm:p-7 border border-neutral-200/80 shadow-2xs flex flex-col justify-between hover:border-neutral-300 hover:shadow-md transition-all duration-300 h-full">
            <div className="mb-6">
              <h3 className="font-sans text-[19px] sm:text-[21px] font-bold text-neutral-900 tracking-tight mb-1">
                One-click channel sync
              </h3>
              <p className="text-neutral-500 text-[13px] leading-relaxed font-normal">
                Connect your favorite platforms instantly.
              </p>
            </div>

            {/* 4 App Connector Tiles (2x2 Grid with real toggle switches) */}
            <div className="grid grid-cols-2 gap-3 pb-2">
              {/* Tile 1: TikTok */}
              <div className="bg-white rounded-xl border border-neutral-200/90 p-4 flex flex-col items-center text-center shadow-xs">
                {/* TikTok Black Icon */}
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white mb-2 shadow-xs">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.11V9.32a6.34 6.34 0 0 0-.84-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.48a8.27 8.27 0 0 0 3.77.91V6.69z" />
                  </svg>
                </div>
                <div className="font-sans text-[13.5px] font-bold text-neutral-900">TikTok</div>
                {/* Switch */}
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="text-[10px] text-neutral-400">Connected</span>
                  <button
                    onClick={() => setTiktokConnected(!tiktokConnected)}
                    className={`w-7 h-4 rounded-full p-0.5 transition-colors ${
                      tiktokConnected ? 'bg-black' : 'bg-neutral-300'
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full bg-white transition-transform ${
                        tiktokConnected ? 'translate-x-3' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Tile 2: Meta */}
              <div className="bg-white rounded-xl border border-neutral-200/90 p-4 flex flex-col items-center text-center shadow-xs">
                {/* Meta Blue Infinity Icon */}
                <div className="w-10 h-10 rounded-full bg-[#0081fb]/10 flex items-center justify-center text-[#0081fb] mb-2 shadow-xs">
                  <span className="text-xl font-black">∞</span >
                </div>
                <div className="font-sans text-[13.5px] font-bold text-neutral-900">Meta</div>
                {/* Switch */}
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="text-[10px] text-neutral-400">Connected</span>
                  <button
                    onClick={() => setMetaConnected(!metaConnected)}
                    className={`w-7 h-4 rounded-full p-0.5 transition-colors ${
                      metaConnected ? 'bg-black' : 'bg-neutral-300'
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full bg-white transition-transform ${
                        metaConnected ? 'translate-x-3' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Tile 3: Shopify */}
              <div className="bg-white rounded-xl border border-neutral-200/90 p-4 flex flex-col items-center text-center shadow-xs">
                {/* Shopify Green Bag Icon */}
                <div className="w-10 h-10 rounded-full bg-[#95bf47]/15 flex items-center justify-center text-[#95bf47] mb-2 shadow-xs">
                  <span className="font-black text-sm font-serif">S</span>
                </div>
                <div className="font-sans text-[13.5px] font-bold text-neutral-900">Shopify</div>
                {/* Switch */}
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="text-[10px] text-neutral-400">Connected</span>
                  <button
                    onClick={() => setShopifyConnected(!shopifyConnected)}
                    className={`w-7 h-4 rounded-full p-0.5 transition-colors ${
                      shopifyConnected ? 'bg-black' : 'bg-neutral-300'
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full bg-white transition-transform ${
                        shopifyConnected ? 'translate-x-3' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Tile 4: YouTube */}
              <div className="bg-white rounded-xl border border-neutral-200/90 p-4 flex flex-col items-center text-center shadow-xs">
                {/* YouTube Red Icon */}
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 mb-2 shadow-xs">
                  <div className="w-5 h-3.5 bg-red-600 rounded-xs flex items-center justify-center">
                    <div className="w-0 h-0 border-t-2 border-t-transparent border-b-2 border-b-transparent border-l-3 border-l-white" />
                  </div>
                </div>
                <div className="font-sans text-[13.5px] font-bold text-neutral-900">YouTube</div>
                {/* Switch */}
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="text-[10px] text-neutral-400">Connected</span>
                  <button
                    onClick={() => setYoutubeConnected(!youtubeConnected)}
                    className={`w-7 h-4 rounded-full p-0.5 transition-colors ${
                      youtubeConnected ? 'bg-black' : 'bg-neutral-300'
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full bg-white transition-transform ${
                        youtubeConnected ? 'translate-x-3' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Peeking bottom connectors */}
            <div className="h-4 rounded-t-lg bg-neutral-100/70 border-t border-neutral-200/60 opacity-60" />
          </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
