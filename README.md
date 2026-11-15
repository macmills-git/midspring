# Mindspring — Global Learning Academy

A landing page for **Mindspring**, built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion. Inspired by the editorial, minimalist, and atmospheric aesthetics of the Socialscale reference designs.

## Brand Identity
- **Name:** Mindspring
- **Tagline:** *Where Potential Takes Shape.*
- **Category:** Global Learning Academy
- **Positioning:** Premium, practical, and future-focused education across technology, venture strategy, creative direction, and executive leadership.

## Architecture & Structure
```
src/
├── assets/
├── components/
│   ├── navigation/
│   │   └── Navbar.tsx          # Minimal horizontal nav with dropdowns & mobile drawer
│   └── ui/
│       ├── ProgramModal.tsx    # Interactive program syllabus & admissions modal
│       ├── AuthModal.tsx       # Learner & fellow sign-in dialog
│       └── ExploreModal.tsx    # Searchable & filterable academy catalog
├── sections/
│   ├── Hero.tsx                # Hero section with atmospheric browser platform showcase
│   ├── TrustStrip.tsx          # 4 foundational educational principles
│   ├── Introduction.tsx        # Two-column editorial introduction
│   ├── FeaturedExperience.tsx  # Wide cinematic card with natural editorial imagery
│   ├── FeatureCards.tsx        # Two-column cards with realistic interactive dashboards
│   ├── Academies.tsx           # 6 specialized academic faculties
│   ├── FeaturedPrograms.tsx    # Curated cohort cards with difficulty, duration & tuition
│   ├── LearningApproach.tsx    # 5-stage learning progression (Discover to Advance)
│   ├── Instructors.tsx         # Faculty and mentor showcase with domains of expertise
│   ├── Testimonials.tsx        # Learner outcomes, capstone achievements & stories
│   └── FinalCTA.tsx            # Admissions conversion section
├── layouts/
│   ├── MainLayout.tsx          # Page wrapper managing global modal states
│   └── Footer.tsx              # Comprehensive navigation footer
├── data/
│   └── content.ts              # Curated copywriting, faculty data, and course catalogs
├── pages/
│   └── Home.tsx                # Unified homepage orchestrator
├── index.html                  # Google Fonts (DM Serif Display & Manrope)
├── tailwind.config.js          # Extended typography, palettes & atmospheric shadows
└── App.tsx
```

## Running the Project
```bash
# Install dependencies
pnpm install

# Start local development server
pnpm dev

# Build production bundle
pnpm build
```
