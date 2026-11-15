import React from 'react';
import { FadeIn, scrollToSection } from '../components/ui/ScrollReveal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-100 pt-8 sm:pt-10 pb-6 sm:pb-8 text-[12.5px] text-neutral-500">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-14">
        <FadeIn delay={0.05} y={15}>
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-6 lg:gap-10 pb-6 sm:pb-8 border-b border-neutral-100">
            {/* Brand Col (Span 4) */}
            <div className="col-span-2 md:col-span-4">
              <button
                onClick={() => scrollToSection('hero', 0)}
                className="font-sans font-bold text-neutral-900 text-[20px] tracking-tight block mb-2.5 text-left cursor-pointer hover:text-black transition-colors"
              >
                Midspring
              </button>
              <p className="text-neutral-400 text-xs max-w-xs leading-relaxed font-normal">
                AI-powered video creation and social commerce workflow infrastructure for high-growth brands.
              </p>
            </div>

            {/* Col 1: Platform (Span 2) */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="font-sans font-bold text-neutral-900 text-[12.5px] mb-2.5">
                Platform
              </h4>
              <ul className="space-y-2 text-xs text-neutral-500">
                <li><button onClick={() => scrollToSection('platform')} className="hover:text-black transition-colors cursor-pointer text-left">Features</button></li>
                <li><button onClick={() => scrollToSection('integrations')} className="hover:text-black transition-colors cursor-pointer text-left">Integrations</button></li>
                <li><button onClick={() => scrollToSection('cta')} className="hover:text-black transition-colors cursor-pointer text-left">Pricing</button></li>
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-black transition-colors cursor-pointer text-left">Security</button></li>
              </ul>
            </div>

            {/* Col 2: Use cases (Span 2) */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="font-sans font-bold text-neutral-900 text-[12.5px] mb-2.5">
                Use cases
              </h4>
              <ul className="space-y-2 text-xs text-neutral-500">
                <li><button onClick={() => scrollToSection('platform')} className="hover:text-black transition-colors cursor-pointer text-left">E-commerce</button></li>
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-black transition-colors cursor-pointer text-left">Agencies</button></li>
                <li><button onClick={() => scrollToSection('platform')} className="hover:text-black transition-colors cursor-pointer text-left">Creators</button></li>
                <li><button onClick={() => scrollToSection('cta')} className="hover:text-black transition-colors cursor-pointer text-left">Brands</button></li>
              </ul>
            </div>

            {/* Col 3: Resources (Span 2) */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="font-sans font-bold text-neutral-900 text-[12.5px] mb-2.5">
                Resources
              </h4>
              <ul className="space-y-2 text-xs text-neutral-500">
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-black transition-colors cursor-pointer text-left">Workflow Guide</button></li>
                <li><button onClick={() => scrollToSection('integrations')} className="hover:text-black transition-colors cursor-pointer text-left">Help Center</button></li>
                <li><button onClick={() => scrollToSection('platform')} className="hover:text-black transition-colors cursor-pointer text-left">Guides</button></li>
                <li><button onClick={() => scrollToSection('integrations')} className="hover:text-black transition-colors cursor-pointer text-left">API</button></li>
              </ul>
            </div>

            {/* Col 4: Company (Span 2) */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="font-sans font-bold text-neutral-900 text-[12.5px] mb-2.5">
                Company
              </h4>
              <ul className="space-y-2 text-xs text-neutral-500">
                <li><button onClick={() => scrollToSection('hero', 0)} className="hover:text-black transition-colors cursor-pointer text-left">About</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-black transition-colors cursor-pointer text-left">Stories</button></li>
                <li><button onClick={() => scrollToSection('cta')} className="hover:text-black transition-colors cursor-pointer text-left">Contact</button></li>
                <li><button onClick={() => scrollToSection('cta')} className="hover:text-black transition-colors cursor-pointer text-left">Join Us</button></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Socials */}
          <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
            <div>
              &copy; 2026 Midspring Inc. All rights reserved.
            </div>

            <div className="flex items-center gap-4 text-neutral-500">
              {/* Facebook SVG */}
              <a href="#" className="hover:text-black transition-colors p-1" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Instagram SVG */}
              <a href="#" className="hover:text-black transition-colors p-1" aria-label="Instagram">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* LinkedIn SVG */}
              <a href="#" className="hover:text-black transition-colors p-1" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};
