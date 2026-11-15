import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import type { Program } from '../../data/content';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onApply: (programId: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  onClose,
  onApply,
}) => {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'instructor' | 'admissions'>('syllabus');
  const [enrolled, setEnrolled] = useState(false);

  if (!program) return null;

  const handleEnrollClick = () => {
    setEnrolled(true);
    onApply(program.id);
    setTimeout(() => {
      setEnrolled(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-[22px] sm:rounded-[28px] shadow-2xl border border-neutral-200 overflow-hidden my-4 sm:my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 text-neutral-600 hover:text-black flex items-center justify-center transition-colors shadow-sm"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header Cover */}
        <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-16 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider">
                {program.academy}
              </span>
              <span className="text-white/60 text-xs">•</span>
              <span className="text-white/80 text-xs font-mono">{program.duration}</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl text-white font-normal leading-tight">
              {program.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* Metadata quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-neutral-50 rounded-2xl border border-neutral-200/80 mb-6 text-[12px]">
            <div>
              <span className="text-neutral-400 block text-[10px] uppercase font-semibold">Format</span>
              <span className="font-medium text-neutral-900">{program.format}</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[10px] uppercase font-semibold">Level</span>
              <span className="font-medium text-neutral-900">{program.difficulty}</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[10px] uppercase font-semibold">Tuition</span>
              <span className="font-mono font-semibold text-neutral-900">{program.tuition}</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[10px] uppercase font-semibold">Next Cohort</span>
              <span className="font-medium text-emerald-700">Enrolling Now</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
            {program.description}
          </p>

          {/* Interactive Tabs */}
          <div className="flex border-b border-neutral-200 mb-5 text-[13px] font-medium gap-6">
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`pb-2.5 transition-colors relative ${
                activeTab === 'syllabus' ? 'text-neutral-900 font-semibold' : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              Curriculum Architecture
              {activeTab === 'syllabus' && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-neutral-900" />}
            </button>
            <button
              onClick={() => setActiveTab('instructor')}
              className={`pb-2.5 transition-colors relative ${
                activeTab === 'instructor' ? 'text-neutral-900 font-semibold' : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              Lead Educator
              {activeTab === 'instructor' && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-neutral-900" />}
            </button>
            <button
              onClick={() => setActiveTab('admissions')}
              className={`pb-2.5 transition-colors relative ${
                activeTab === 'admissions' ? 'text-neutral-900 font-semibold' : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              Admissions Criteria
              {activeTab === 'admissions' && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-neutral-900" />}
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'syllabus' && (
            <div className="space-y-2.5">
              {program.curriculumHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200/60 text-[13px] text-neutral-800"
                >
                  <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center font-mono text-[10px] font-semibold">
                    {idx + 1}
                  </span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'instructor' && (
            <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-2xl border border-neutral-200/80">
              <img
                src={program.instructor.avatar}
                alt={program.instructor.name}
                className="w-14 h-14 rounded-full object-cover border border-neutral-200 shrink-0"
              />
              <div>
                <h4 className="font-sans text-lg text-neutral-900 font-semibold">{program.instructor.name}</h4>
                <p className="text-xs text-neutral-500 mb-2">{program.instructor.title}</p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Actively leading real-world programs with weekly live office hours, unsparing project critique, and strategic mentorship.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'admissions' && (
            <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200/80 text-xs text-neutral-700 space-y-2">
              <p>• Cohorts are capped at 24 fellows to preserve deep peer critique and 1:1 mentorship access.</p>
              <p>• Admissions decisions are released on a rolling basis following diagnostic application review.</p>
              <p>• Verified Midspring alumni receive ongoing membership in the Global Fellows Syndicate.</p>
            </div>
          )}

          {/* Action Footer */}
          <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-neutral-500 hover:text-neutral-900 text-[13px] font-medium"
            >
              Back to Catalog
            </button>

            <button
              onClick={handleEnrollClick}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0f1115] text-white text-[13px] font-medium hover:bg-neutral-800 transition-all active:scale-95 shadow-sm"
            >
              {enrolled ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Application Submitted!</span>
                </>
              ) : (
                <>
                  <span>Apply for Next Cohort</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
