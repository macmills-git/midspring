import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-white rounded-[24px] sm:rounded-[28px] shadow-2xl border border-neutral-200 p-5 sm:p-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 text-neutral-500 hover:text-black flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#0f1115] text-white flex items-center justify-center font-sans font-bold text-lg mx-auto mb-3">
            M
          </div>
          <h3 className="font-sans text-2xl text-neutral-900 font-normal">
            Learner & Fellow Portal
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            Access your cohort workspaces, live lectures, and 1:1 advisory hours.
          </p>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-2">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-medium text-neutral-900">Sign-in link sent</h4>
            <p className="text-xs text-neutral-500 max-w-xs mx-auto">
              We've dispatched a secure login token to <strong className="text-neutral-700">{email}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                Work Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@enterprise.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-full bg-[#0f1115] text-white text-sm font-medium hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Continue with Magic Link</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="relative py-2 flex items-center justify-center">
              <div className="absolute inset-x-0 h-[1px] bg-neutral-100" />
              <span className="relative bg-white px-2 text-[11px] text-neutral-400 uppercase tracking-wider">
                Or Single Sign-On
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                setSubmitted(true);
                setTimeout(() => {
                  setSubmitted(false);
                  onClose();
                }, 2000);
              }}
              className="w-full py-2.5 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-800 text-sm font-medium hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2"
            >
              <span>Authenticate with Google Workspace</span>
            </button>
          </form>
        )}

        <div className="mt-6 pt-4 border-t border-neutral-100 text-center text-[11px] text-neutral-400 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
          <span>SOC2 Type II Certified • Enterprise SSO Protected</span>
        </div>
      </div>
    </div>
  );
};
