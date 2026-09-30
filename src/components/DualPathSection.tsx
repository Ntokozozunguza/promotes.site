import React from 'react';
import { TrendingUp, DollarSign, CheckCircle, ArrowRight, ShieldCheck, Smartphone, Target, Award, Sparkles } from 'lucide-react';

interface DualPathSectionProps {
  onOpenGrowModal: () => void;
  onOpenEarnModal: () => void;
}

export const DualPathSection: React.FC<DualPathSectionProps> = ({ onOpenGrowModal, onOpenEarnModal }) => {
  return (
    <section id="how-it-works-choice" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/40 text-violet-400 text-xs font-bold uppercase tracking-widest">
          Two Sides, One Marketplace
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Choose your side on <span className="text-violet-400">promotes.site</span>
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          Whether you need explosive social attention for your personal brand or business, or want to make real extra income from your phone — we've built the frictionless ecosystem for you.
        </p>
      </div>

      {/* Two High-Contrast Pathway Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Creator / Growth Card */}
        <div className="relative group rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 hover:border-violet-500/50 p-8 sm:p-10 shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
          {/* Subtle Top Glow */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-violet-600/10 rounded-full blur-3xl group-hover:bg-violet-600/20 transition-all pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shadow-inner">
                <TrendingUp className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-violet-400 bg-violet-950/80 px-3 py-1 rounded-full border border-violet-800/60">
                For Creators & Brands
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                I Want to Grow My Audience
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Launch targeted social campaigns for Instagram, TikTok, YouTube, X, or Spotify. Set custom budgets, specify target niches, and receive high-retention human engagement.
              </p>
            </div>

            {/* Benefit Checkpoints */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% human followers & engagement, zero bot risks</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>30-day automated anti-drop escrow refill guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live dashboard with real-time completion tracking</span>
              </div>
            </div>
          </div>

          <div className="pt-8 relative z-10">
            <button
              onClick={onOpenGrowModal}
              className="w-full py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.01]"
            >
              <span>Create a Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Promoter / Earning Card */}
        <div className="relative group rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 hover:border-emerald-500/50 p-8 sm:p-10 shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
          {/* Subtle Top Glow */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-600/10 rounded-full blur-3xl group-hover:bg-emerald-600/20 transition-all pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
                <DollarSign className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60">
                For Promoters & Earners
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                I Want to Earn Money
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Browse our open campaign feed on your phone. Follow accounts, like videos, stream songs, and watch your promotes.site wallet balance grow with instant payouts.
              </p>
            </div>

            {/* Benefit Checkpoints */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Earn R0.20 to R0.75+ per quick social interaction</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No initial fees, no equipment — just your mobile phone</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fast withdrawals via Capitec/Bank EFT, PayPal & Airtime</span>
              </div>
            </div>
          </div>

          <div className="pt-8 relative z-10">
            <button
              onClick={onOpenEarnModal}
              className="w-full py-4 rounded-xl font-bold text-sm sm:text-base text-neutral-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-400/20 hover:shadow-emerald-400/40 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.01]"
            >
              <span>Become a Promoter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
