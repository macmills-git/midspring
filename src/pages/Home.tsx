import React from 'react';
import { Hero } from '../sections/Hero';
import { EditorialAndFeatures } from '../sections/EditorialAndFeatures';
import { HowItWorks } from '../sections/HowItWorks';
import { ImpactAndStats } from '../sections/ImpactAndStats';
import { IntegrationsAndAnalytics } from '../sections/IntegrationsAndAnalytics';
import { ReadyToScaleCTA } from '../sections/ReadyToScaleCTA';

interface HomeProps {
  onOpenExplore: () => void;
  onOpenSignIn: () => void;
  onBookDemo: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onOpenExplore,
  onOpenSignIn,
  onBookDemo,
}) => {
  return (
    <div className="relative bg-white selection:bg-[#0f1115] selection:text-white">
      {/* 1. Hero Section with Atmospheric Showcase & Credibility Logos */}
      <div id="hero">
        <Hero
          onExplorePrograms={onOpenExplore}
          onDiscoverMidspring={onOpenSignIn}
        />
      </div>

      {/* 2. Editorial Intro, Wide SEEDANCE 2.0 Card, & Creator Dashboard / Storefront Cards */}
      <div id="platform">
        <EditorialAndFeatures
          onBookDemo={onBookDemo}
          onTryFree={onOpenExplore}
          onLearnMore={onOpenExplore}
        />
      </div>

      {/* 3. How It Works: 3-Step Production Workflow */}
      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* 4. Testimonial Quote */}
      <div id="testimonials">
        <ImpactAndStats />
      </div>

      {/* 5. Integrations & Analytics (Real-time ROAS Attribution & One-Click Channel Sync) */}
      <div id="integrations">
        <IntegrationsAndAnalytics />
      </div>

      {/* 6. Final Conversion Section (Ready to scale your social commerce?) */}
      <div id="cta">
        <ReadyToScaleCTA
          onTryFree={onOpenExplore}
        />
      </div>
    </div>
  );
};
