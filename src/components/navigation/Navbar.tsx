import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, User } from 'lucide-react';
import { scrollToSection } from '../ui/ScrollReveal';

interface NavbarProps {
  onOpenExplore: () => void;
  onOpenSignIn: () => void;
  onBookDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenExplore,
  onOpenSignIn,
  onBookDemo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Auto-hiding navbar on scroll down, revealing on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Subtle shadow when scrolled past top
      setIsScrolled(currentScrollY > 10);

      // Keep navbar visible if mobile drawer is open or near the very top of page
      if (mobileMenuOpen || currentScrollY <= 40) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollY;

      // Minimum delta to avoid micro-jitter during smooth deceleration
      if (Math.abs(diff) < 8) return;

      if (diff > 0 && currentScrollY > 90) {
        // Scrolling down -> slide out of view and dismiss open dropdowns
        setIsVisible(false);
        setActiveDropdown(null);
      } else if (diff < 0) {
        // Scrolling up -> slide smoothly back into view
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Platform', targetId: 'platform', hasDropdown: true },
    { label: 'Agents', targetId: 'hero', hasDropdown: true },
    { label: 'Usecases', targetId: 'how-it-works', hasDropdown: true },
    { label: 'Resources', targetId: 'integrations', hasDropdown: true },
    { label: 'Pricing', targetId: 'cta', hasDropdown: false },
  ];

  const handleNavClick = (targetId: string) => {
    scrollToSection(targetId);
    setActiveDropdown(null);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-neutral-100/90 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled ? 'shadow-xs' : ''}`}
      >
        <div className="max-w-[1340px] mx-auto px-4 sm:px-8 lg:px-14 h-15 sm:h-[68px] flex items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection('hero', 0)}
              className="flex items-center gap-2 group cursor-pointer text-left"
            >
              <span className="font-sans text-[19px] sm:text-[22px] font-bold tracking-tight text-[#0f1115]">
                Midspring
              </span>
            </button>
          </div>

          {/* Center Navigation Links with Dropdown Carets (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 text-[13px] font-medium text-neutral-600">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(item.targetId)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:text-black hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-3 h-3 text-neutral-400 group-hover:text-black transition-transform" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 w-56 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-neutral-200/80 p-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150">
                      <button
                        onClick={() => handleNavClick(item.targetId)}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-neutral-700 hover:bg-neutral-100 hover:text-black transition-colors cursor-pointer"
                      >
                        {item.label} Overview
                      </button>
                      <button
                        onClick={onOpenExplore}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-neutral-700 hover:bg-neutral-100 hover:text-black transition-colors cursor-pointer"
                      >
                        Cohorts & Solutions
                      </button>
                      <button
                        onClick={onBookDemo}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-neutral-700 hover:bg-neutral-100 hover:text-black transition-colors cursor-pointer"
                      >
                        Book a Live Walkthrough
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Buttons (Desktop) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenSignIn}
              className="flex items-center gap-1.5 text-[13px] font-medium text-neutral-600 hover:text-black px-3 py-1.5 transition-colors cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-neutral-400" />
              <span>Login</span>
            </button>
            <button
              onClick={onBookDemo}
              className="inline-flex items-center justify-center text-[13px] font-medium text-neutral-800 bg-white border border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400 transition-all px-4 py-2 rounded-full shadow-2xs active:scale-[0.98] cursor-pointer"
            >
              Book a demo
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="inline-flex items-center justify-center text-[13px] font-medium tracking-tight bg-[#0f1115] text-white hover:bg-neutral-800 transition-all px-4 py-2 rounded-full shadow-xs active:scale-[0.98] cursor-pointer"
            >
              Try for free
            </button>
          </div>

          {/* Mobile Navigation Header Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => scrollToSection('cta')}
              className="text-[11.5px] font-medium bg-[#0f1115] text-white px-3 py-1.5 rounded-full active:scale-95 transition-transform cursor-pointer"
            >
              Try free
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-black rounded-lg active:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Full Height Sheet with Safe Backdrop) */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 top-[60px] z-50 bg-black/40 backdrop-blur-xs flex flex-col justify-start">
          <div className="bg-white border-b border-neutral-200 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-1 text-sm font-medium text-neutral-800">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToSection(item.targetId);
                  }}
                  className="text-left py-3 px-2 rounded-lg hover:bg-neutral-50 border-b border-neutral-100/70 flex items-center justify-between active:bg-neutral-100 transition-colors cursor-pointer"
                >
                  <span className="text-[15px]">{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 text-neutral-400" />}
                </button>
              ))}

              <div className="pt-5 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToSection('cta');
                  }}
                  className="w-full py-3 bg-[#0f1115] text-white rounded-full text-center text-sm font-medium shadow-sm active:scale-98 transition-transform cursor-pointer"
                >
                  Try for free
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookDemo();
                  }}
                  className="w-full py-3 bg-white border border-neutral-300 text-neutral-800 rounded-full text-center text-sm font-medium hover:bg-neutral-50 active:scale-98 transition-transform cursor-pointer"
                >
                  Book a demo
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSignIn();
                  }}
                  className="w-full py-2.5 text-neutral-600 text-center text-sm font-medium hover:text-black transition-colors cursor-pointer"
                >
                  Login to Platform
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </>
  );
};
