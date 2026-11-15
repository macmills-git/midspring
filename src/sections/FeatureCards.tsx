import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Star,
  Video,
  ExternalLink,
  ShieldCheck,
  Code2,
  Award,
} from 'lucide-react';

interface FeatureCardsProps {
  onMeetEducators: () => void;
  onExploreApproach: () => void;
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({
  onMeetEducators,
  onExploreApproach,
}) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Learn from those who know */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-[#f8f9fa] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 border border-neutral-200/80 flex flex-col justify-between hover:border-neutral-300 transition-all duration-300 shadow-xs"
          >
            {/* Top Content */}
            <div className="mb-8">
              <h3 className="font-sans text-[28px] sm:text-[34px] leading-tight text-neutral-900 font-normal mb-3 tracking-[-0.03em]">
                Learn from those who know.
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-4 max-w-[440px]">
                Gain knowledge through expert-led programs and carefully structured learning experiences.
              </p>
              <button
                onClick={onMeetEducators}
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-neutral-900 group-hover:text-black"
              >
                <span className="border-b border-neutral-400 pb-0.5 group-hover:border-black transition-colors">
                  Meet our educators
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Realistic Interface Visual: Instructor Profile & Academy Dashboard */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-5 sm:p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] transition-transform duration-300 group-hover:-translate-y-1">
              {/* Profile Header */}
              <div className="flex items-start justify-between pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                      alt="Dr. Marcus Vance"
                      className="w-12 h-12 rounded-full object-cover border border-neutral-200"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircle className="w-2.5 h-2.5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium text-[15px] text-neutral-900">Dr. Marcus Vance</span>
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-[12px] text-neutral-500">
                      Head of Faculty • Ex-DeepMind Fellow
                    </div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 text-[11px] font-medium text-neutral-700">
                  <Video className="w-3 h-3 text-emerald-600" />
                  <span>Office Hours Live</span>
                </span>
              </div>

              {/* Metric Statistics Strip */}
              <div className="grid grid-cols-4 gap-2 py-4 border-b border-neutral-100 text-center">
                <div className="p-2 rounded-lg bg-neutral-50">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Rating</div>
                  <div className="text-[14px] font-semibold text-neutral-900 mt-0.5 flex items-center justify-center gap-0.5">
                    <span>4.98</span>
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-neutral-50">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Fellows</div>
                  <div className="text-[14px] font-semibold text-neutral-900 mt-0.5">1,480+</div>
                </div>
                <div className="p-2 rounded-lg bg-neutral-50">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Lectures</div>
                  <div className="text-[14px] font-semibold text-neutral-900 mt-0.5">48 hrs</div>
                </div>
                <div className="p-2 rounded-lg bg-neutral-50">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Cohorts</div>
                  <div className="text-[14px] font-semibold text-neutral-900 mt-0.5">12</div>
                </div>
              </div>

              {/* Active Curriculum Modules Preview */}
              <div className="pt-4 space-y-2">
                <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                  Active Instruction Modules
                </div>
                <div className="flex items-center justify-between p-2.5 bg-neutral-50 rounded-xl text-[12px]">
                  <span className="font-medium text-neutral-800">Advanced Neural Latent Orchestration</span>
                  <span className="text-[11px] font-mono text-neutral-500">Live Today</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-neutral-50 rounded-xl text-[12px]">
                  <span className="font-medium text-neutral-800">Enterprise High-Scale Inference Harness</span>
                  <span className="text-[11px] font-mono text-neutral-500">Thu 16:00 EST</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Turn knowledge into capability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group bg-[#f8f9fa] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 border border-neutral-200/80 flex flex-col justify-between hover:border-neutral-300 transition-all duration-300 shadow-xs"
          >
            {/* Top Content */}
            <div className="mb-8">
              <h3 className="font-sans text-[28px] sm:text-[34px] leading-tight text-neutral-900 font-normal mb-3 tracking-[-0.03em]">
                Turn knowledge into capability.
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-4 max-w-[440px]">
                Build practical experience through projects, assessments and real-world challenges.
              </p>
              <button
                onClick={onExploreApproach}
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-neutral-900 group-hover:text-black"
              >
                <span className="border-b border-neutral-400 pb-0.5 group-hover:border-black transition-colors">
                  Explore our approach
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Realistic Interface Visual: Learner Portfolio & Progress Dashboard */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-5 sm:p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] transition-transform duration-300 group-hover:-translate-y-1">
              {/* Learner Profile Header */}
              <div className="flex items-start justify-between pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-3.5">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                    alt="Sophia Chen"
                    className="w-12 h-12 rounded-full object-cover border border-neutral-200"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium text-[15px] text-neutral-900">Sophia Chen</span>
                      <span className="text-[11px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-mono font-medium">
                        Verified
                      </span>
                    </div>
                    <div className="text-[12px] text-neutral-500">
                      Cohort Fellow • VP AI Systems Track
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-neutral-400 uppercase tracking-wider">Capstone Score</div>
                  <div className="text-[16px] font-semibold text-neutral-900 font-mono">98 / 100</div>
                </div>
              </div>

              {/* Progress Milestones & Deliverables */}
              <div className="py-4 border-b border-neutral-100 space-y-3">
                <div>
                  <div className="flex items-center justify-between text-[12px] mb-1">
                    <span className="font-medium text-neutral-700">Capstone: Autonomous Neural Router</span>
                    <span className="text-emerald-600 font-medium font-mono text-[11px]">Approved by Advisory Board</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[100%]" />
                  </div>
                </div>

                {/* Verified Artifact Card */}
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Code2 className="w-4 h-4 text-neutral-700" />
                    <div>
                      <div className="text-[12px] font-medium text-neutral-900">
                        Production Architecture Artifact v3.4
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        Code Review Passed • Latency benchmark p99: 18ms
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </div>
              </div>

              {/* Footer Capability Verification */}
              <div className="pt-3 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>Credential ID: MS-2026-9041A</span>
                </span>
                <span className="font-semibold text-neutral-900">Peer Syndicate Endorsed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
