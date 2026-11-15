export interface AcademicDivision {
  id: string;
  name: string;
  tagline: string;
  description: string;
  programsCount: number;
  image: string;
  slug: string;
}

export interface Program {
  id: string;
  title: string;
  category: string;
  academy: string;
  instructor: {
    name: string;
    title: string;
    avatar: string;
  };
  duration: string;
  difficulty: 'Foundational' | 'Intermediate' | 'Advanced' | 'Executive';
  format: 'Cohort-Based' | 'Intensive Studio' | 'Hybrid Mentorship';
  tuition: string;
  description: string;
  curriculumHighlights: string[];
  image: string;
  badge?: string;
}

export interface ApproachStage {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  institution: string;
  expertise: string[];
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  organization: string;
  program: string;
  quote: string;
  outcome: string;
  avatar: string;
}

export const ACADEMIC_DIVISIONS: AcademicDivision[] = [
  {
    id: 'tech',
    name: 'Technology Academy',
    tagline: 'Engineering the Next Paradigm',
    description: 'Master enterprise AI architecture, high-scale distributed systems, and real-time machine intelligence.',
    programsCount: 8,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    slug: 'technology',
  },
  {
    id: 'business',
    name: 'Business Academy',
    tagline: 'Venture Strategy & Capital',
    description: 'Rigorous training in modern venture capital, economic modeling, organizational scaling, and strategic M&A.',
    programsCount: 6,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    slug: 'business',
  },
  {
    id: 'creative',
    name: 'Creative Academy',
    tagline: 'Spatial Design & Art Direction',
    description: 'Pioneering design direction, brand system architectures, interactive spatial computing, and computational aesthetics.',
    programsCount: 7,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    slug: 'creative',
  },
  {
    id: 'professional',
    name: 'Professional Academy',
    tagline: 'Executive Leadership & Influence',
    description: 'Elevate board-level presence, strategic crisis management, and cross-cultural executive negotiation.',
    programsCount: 5,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    slug: 'professional',
  },
  {
    id: 'career',
    name: 'Career Development',
    tagline: 'Strategic Trajectory Architecture',
    description: 'Targeted career acceleration, executive sponsorship mapping, portfolio critique, and senior role placements.',
    programsCount: 4,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    slug: 'career',
  },
  {
    id: 'mentorship',
    name: 'Mentorship',
    tagline: 'Direct Advisory from Industry Chiefs',
    description: 'One-on-one biweekly private advisory sessions with globally distinguished operators and industry pioneers.',
    programsCount: 12,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    slug: 'mentorship',
  },
];

export const FEATURED_PROGRAMS: Program[] = [
  {
    id: 'ai-arch',
    title: 'AI Systems & Strategic Product Architecture',
    category: 'Technology',
    academy: 'Technology Academy',
    instructor: {
      name: 'Dr. Marcus Vance',
      title: 'Former Principal AI Architect, DeepMind Fellow',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    duration: '10 Weeks',
    difficulty: 'Advanced',
    format: 'Cohort-Based',
    tuition: '$3,800 USD',
    description: 'Design and deploy robust neural inference pipelines, multi-agent frameworks, and resilient enterprise-grade foundation models.',
    curriculumHighlights: [
      'Distributed Fine-Tuning & Quantization',
      'Autonomous Multi-Agent Orchestration',
      'Inference Latency Optimization (<35ms)',
      'Enterprise Safety, Eval & Compliance Harness',
    ],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    badge: 'Cohort Enrolling',
  },
  {
    id: 'venture-strat',
    title: 'Venture Strategy & Capital Architecture',
    category: 'Business',
    academy: 'Business Academy',
    instructor: {
      name: 'Elena Rostova',
      title: 'Managing Partner, Horizon Equity Capital',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    },
    duration: '8 Weeks',
    difficulty: 'Executive',
    format: 'Hybrid Mentorship',
    tuition: '$4,200 USD',
    description: 'Master term sheet structuring, late-stage venture mechanics, cap table governance, and global liquidity strategies.',
    curriculumHighlights: [
      'Complex Cap-Table & Liquidation Modeling',
      'Syndicate Assembly & Cross-Border Deals',
      'Growth-Stage Unit Economics & Runway Defense',
      'Board Formation & Shareholder Governance',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    badge: 'Popular',
  },
  {
    id: 'design-dir',
    title: 'Digital Design Direction & Spatial Computing',
    category: 'Creative',
    academy: 'Creative Academy',
    instructor: {
      name: 'Julian Montgomery',
      title: 'Founding Partner, Studio Form & Code',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    },
    duration: '12 Weeks',
    difficulty: 'Intermediate',
    format: 'Intensive Studio',
    tuition: '$3,400 USD',
    description: 'Transition from conventional web design to three-dimensional interaction models, spatial computing shaders, and generative aesthetics.',
    curriculumHighlights: [
      'Spatial UI Hierarchy & Depth Perception',
      'Real-Time WebGL & Shader Choreography',
      'Systemic Design Tokens across Viewports',
      'Physical Computing & Haptic Feedback Loop',
    ],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'exec-influence',
    title: 'Executive Communication & Strategic Influence',
    category: 'Professional',
    academy: 'Professional Academy',
    instructor: {
      name: 'Maya Sterling',
      title: 'Global Senior Advisor, Ex-McKinsey Partner',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80',
    },
    duration: '6 Weeks',
    difficulty: 'Executive',
    format: 'Cohort-Based',
    tuition: '$2,900 USD',
    description: 'The definitive masterclass on high-stakes communication, investor persuasion, executive presence, and organizational alignment.',
    curriculumHighlights: [
      'Pyramid Principle in High-Pressure Briefings',
      'Boardroom Crisis Narrative Engineering',
      'Non-Defensive Persuasion Under Duress',
      'Media Handling & Public Stature Management',
    ],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
  },
];

export const APPROACH_STAGES: ApproachStage[] = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Framing Ambition & Diagnostic Review',
    description: 'Establish baseline capability through rigorous self-assessment, cohort benchmarking, and individual roadmap alignment.',
    deliverable: 'Personal Capability Audit & Strategic Milestone Blueprint',
  },
  {
    step: '02',
    title: 'Learn',
    tagline: 'Deep Conceptual & Systematic Grounding',
    description: 'Immerse in comprehensive masterclasses taught directly by elite practitioners actively leading industry breakthroughs.',
    deliverable: 'Theoretical Models & Annotated Architectural Schema',
  },
  {
    step: '03',
    title: 'Practice',
    tagline: 'Real-World Production Scenarios',
    description: 'Engage with simulated enterprise scenarios, ambiguous briefs, and live technical constraints alongside peers.',
    deliverable: 'Production-Grade Artifacts & Interactive Prototypes',
  },
  {
    step: '04',
    title: 'Demonstrate',
    tagline: 'Rigorous Peer & Advisory Critique',
    description: 'Defend completed capstone work in front of an expert advisory board, receiving unsparing, high-value qualitative feedback.',
    deliverable: 'Published Portfolio Piece & Board-Reviewed Case Study',
  },
  {
    step: '05',
    title: 'Advance',
    tagline: 'Verified Outcomes & Career Escalation',
    description: 'Convert validated competence into senior career progression, board appointments, institutional capital, or new ventures.',
    deliverable: 'Midspring Verified Credential & Alumni Syndicate Access',
  },
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'marcus-vance',
    name: 'Dr. Marcus Vance',
    role: 'Head of Technology Academy',
    institution: 'Former Principal AI Architect, DeepMind Fellow',
    expertise: ['Distributed Inference', 'Neural Systems', 'AI Safety & Scale'],
    bio: 'Pioneered low-latency reasoning engines and multi-agent infrastructure. Advisor to Fortune 50 cloud providers and research labs.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Chair of Venture & Strategy',
    institution: 'Managing Partner, Horizon Equity Capital',
    expertise: ['Late-Stage Venture', 'M&A Deal Architecture', 'Cap Table Governance'],
    bio: 'Guided over $1.4B in private placements and seed-to-IPO transitions across European and North American enterprise SaaS companies.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'julian-montgomery',
    name: 'Julian Montgomery',
    role: 'Creative Director in Residence',
    institution: 'Founding Partner, Studio Form & Code',
    expertise: ['Spatial Computing', 'Generative Aesthetics', 'Brand Architecture'],
    bio: 'Award-winning creative director behind seminal digital identities for pioneering hardware, automotive, and spatial software brands.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'maya-sterling',
    name: 'Maya Sterling',
    role: 'Dean of Executive Leadership',
    institution: 'Global Senior Advisor, Ex-McKinsey Partner',
    expertise: ['Board Communications', 'Crisis Governance', 'Negotiation Dynamics'],
    bio: 'Trusted counsel to CEOs and executive committees across FTSE 100 corporations on organizational restructuring and strategic communications.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Sophia Chen',
    role: 'VP of AI Engineering',
    organization: 'Synthetix Cloud',
    program: 'AI Systems & Strategic Product Architecture',
    quote: 'Midspring reframed how I approach technical architecture at scale. The caliber of instruction and the rigor of peer critique surpassed my graduate studies.',
    outcome: 'Promoted to VP within 6 months of program completion',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't2',
    author: 'David Thorne',
    role: 'Co-Founder & CEO',
    organization: 'Kinetix Robotics',
    program: 'Venture Strategy & Capital Architecture',
    quote: 'The cap table and venture negotiation simulations gave us the exact playbook we needed to close our $18M Series A on terms we were proud of.',
    outcome: 'Closed $18M Series A lead syndicate',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't3',
    author: 'Amara Okafor',
    role: 'Staff Product Designer',
    organization: 'Loom Spatial Lab',
    program: 'Digital Design Direction & Spatial Computing',
    quote: 'Every session pushed our creative discipline far beyond typical web heuristics. It gave me the technical vocabulary and shader confidence I needed to lead spatial projects.',
    outcome: 'Lead designer on premier spatial product launch',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
];

export const CREDIBILITY_PRINCIPLES = [
  {
    title: 'Industry-Relevant',
    subtitle: 'Curricula continually synchronized with real market dynamics and technical breakthroughs.',
  },
  {
    title: 'Expert-Led',
    subtitle: 'Taught exclusively by active leaders with proven mastery in premier global enterprises.',
  },
  {
    title: 'Practical Learning',
    subtitle: 'Moving beyond passive consumption into high-fidelity production artifacts and critiques.',
  },
  {
    title: 'Global Perspective',
    subtitle: 'A worldwide community of fellows spanning 40+ countries and premier tech hubs.',
  },
];
