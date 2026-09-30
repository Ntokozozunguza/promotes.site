import React, { useState } from 'react';
import { Target, Rocket, Users, BarChart3, Search, Smartphone, CheckCircle, Wallet, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenGrowModal: () => void;
  onOpenEarnModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenGrowModal, onOpenEarnModal }) => {
  const [activeWorkflow, setActiveWorkflow] = useState<'creators' | 'promoters'>('creators');

  return (
    <section id="how-it-works" className="py-24 bg-neutral-950 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/40 text-violet-400 text-xs font-bold uppercase tracking-widest">
          Seamless Workflow
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          How <span className="text-violet-400">promotes.site</span> Works
        </h2>
        <p className="text-neutral-400 text-base">
          A high-velocity micro-marketplace engineered for crystal-clear execution and transparency.
        </p>

        {/* Workflow Toggle */}
        <div className="inline-flex bg-neutral-900 p-1.5 rounded-2xl border border-neutral-800 mt-4">
          <button
            onClick={() => setActiveWorkflow('creators')}
            className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeWorkflow === 'creators'
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            📈 For Creators & Brands
          </button>
          <button
            onClick={() => setActiveWorkflow('promoters')}
            className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeWorkflow === 'promoters'
                ? 'bg-emerald-500 text-neutral-950 shadow-lg shadow-emerald-500/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            💰 For Promoters (Earners)
          </button>
        </div>
      </div>

      {/* 4 Sequential Steps */}
      {activeWorkflow === 'creators' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 hover:border-violet-500/40 transition-all relative group">
            <span className="text-3xl font-black text-violet-500/20 group-hover:text-violet-500/40 transition-colors block mb-4">
              01
            </span>
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-400 flex items-center justify-center mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">1. Specify Target</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Paste your Instagram, TikTok, YouTube, or Spotify link. Select the promotion type: followers, likes, comments, or views.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 hover:border-violet-500/40 transition-all relative group">
            <span className="text-3xl font-black text-violet-500/20 group-hover:text-violet-500/40 transition-colors block mb-4">
              02
            </span>
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-400 flex items-center justify-center mb-4">
              <Rocket className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">2. Fund Campaign</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Set your target quantity and budget. Funds are safely held in escrow until each promotion is verified.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 hover:border-violet-500/40 transition-all relative group">
            <span className="text-3xl font-black text-violet-500/20 group-hover:text-violet-500/40 transition-colors block mb-4">
              03
            </span>
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-400 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">3. Real Human Delivery</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Thousands of verified mobile promoters discover your campaign and complete the action directly in their native social apps.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 hover:border-violet-500/40 transition-all relative group">
            <span className="text-3xl font-black text-violet-500/20 group-hover:text-violet-500/40 transition-colors block mb-4">
              04
            </span>
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-400 flex items-center justify-center mb-4">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">4. Track & Retain</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Watch real-time delivery graphs on your dashboard, backed by our 30-day automated refill and anti-drop guarantee.
            </p>
          </div>

        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-all relative group">
            <span className="text-3xl font-black text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors block mb-4">
              01
            </span>
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">1. Open Free Account</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Sign up in 30 seconds with your email. No fees, no setup costs, and no special hardware needed.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-all relative group">
            <span className="text-3xl font-black text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors block mb-4">
              02
            </span>
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">2. Pick Live Tasks</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Filter campaigns by TikTok, Instagram, YouTube, and X. Choose micro-tasks that pay between R0.20 to R0.75+ each.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-all relative group">
            <span className="text-3xl font-black text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors block mb-4">
              03
            </span>
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">3. Complete & Verify</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Follow, like, or watch in 15 seconds. Tap "Complete" to verify your action and immediately credit your wallet.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-all relative group">
            <span className="text-3xl font-black text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors block mb-4">
              04
            </span>
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
              <Wallet className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">4. Withdraw Cash</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Cash out to your local South African bank account (Capitec, FNB, etc.), PayPal, or Mobile Airtime once you hit R50.
            </p>
          </div>

        </div>
      )}

      {/* Action Footer */}
      <div className="text-center mt-12">
        {activeWorkflow === 'creators' ? (
          <button
            onClick={onOpenGrowModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-600/30 transition-all"
          >
            <span>Launch Your First Campaign Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onOpenEarnModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-neutral-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-400/30 transition-all"
          >
            <span>Join 3,400+ Active Promoters</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

    </section>
  );
};
