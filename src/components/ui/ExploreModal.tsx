import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { FEATURED_PROGRAMS } from '../../data/content';

interface ExploreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProgram: (id: string) => void;
}

export const ExploreModal: React.FC<ExploreModalProps> = ({
  isOpen,
  onClose,
  onSelectProgram,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAcademy, setSelectedAcademy] = useState('All');

  if (!isOpen) return null;

  const filtered = FEATURED_PROGRAMS.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.instructor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAcademy =
      selectedAcademy === 'All' || p.category.toLowerCase() === selectedAcademy.toLowerCase();
    return matchesSearch && matchesAcademy;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-[22px] sm:rounded-[28px] shadow-2xl border border-neutral-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-neutral-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-400 block mb-1">
              MIDSPRING ACADEMY DIRECTORY
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl text-neutral-900 font-normal">
              Explore All Programs & Cohorts
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-100 text-neutral-500 hover:text-black flex items-center justify-center transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:px-8 bg-neutral-50 border-b border-neutral-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by topic, keyword, or educator..."
              className="w-full pl-9 pr-4 py-1.5 rounded-xl border border-neutral-200 text-xs sm:text-sm bg-white focus:outline-none focus:border-neutral-900"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs font-medium">
            {['All', 'Technology', 'Business', 'Creative', 'Professional'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedAcademy(cat)}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                  selectedAcademy === cat
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-neutral-500 text-sm">
              No programs found matching "{searchTerm}". Try another search keyword.
            </div>
          ) : (
            filtered.map((program) => (
              <div
                key={program.id}
                onClick={() => {
                  onSelectProgram(program.id);
                  onClose();
                }}
                className="group p-4 sm:p-5 rounded-2xl border border-neutral-200/80 hover:border-neutral-400 bg-white hover:bg-neutral-50 transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-16 h-16 rounded-xl object-cover border border-neutral-200 shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">
                        {program.category}
                      </span>
                      <span className="text-neutral-300">•</span>
                      <span className="text-[11px] font-mono text-neutral-500">{program.duration}</span>
                      <span className="text-neutral-300">•</span>
                      <span className="text-[11px] text-neutral-500">{program.difficulty}</span>
                    </div>
                    <h4 className="font-sans text-lg text-neutral-900 group-hover:text-black">
                      {program.title}
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                      Led by {program.instructor.name} ({program.instructor.title})
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100">
                  <div className="font-mono text-xs font-semibold text-neutral-900 sm:mb-2">
                    {program.tuition}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-900 group-hover:translate-x-0.5 transition-transform">
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
