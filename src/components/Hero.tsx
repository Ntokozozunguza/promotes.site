import React, { useState } from 'react';
import { Sparkles, TrendingUp, DollarSign, CheckCircle2, ShieldCheck, Zap, ArrowRight, Play, Check, ExternalLink, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Currency } from '../types';
import { CURRENCY_CONFIGS } from '../data/mockData';

interface HeroProps {
  currentCurrency: Currency;
  promoterBalance: number;
  onClaimReward: (taskId: string, amountZar: number, handle: string) => void;
  claimedTaskIds: Set<string>;
  onOpenGrowModal: () => void;
  onOpenEarnModal: () => void;
  onOpenWithdrawModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentCurrency,
  promoterBalance,
  onClaimReward,
  claimedTaskIds,
  onOpenGrowModal,
  onOpenEarnModal,
  onOpenWithdrawModal,
}) => {
  const [activeSimulatorTab, setActiveSimulatorTab] = useState<'promoter' | 'creator'>('promoter');
  const [verifyingTaskId, setVerifyingTaskId] = useState<string | null>(null);

  const formatMoney = (val: number) => CURRENCY_CONFIGS[currentCurrency].format(val);

  const handleClaimClick = (taskId: string, amountZar: number, handle: string) => {
    if (claimedTaskIds.has(taskId) || verifyingTaskId === taskId) return;

    setVerifyingTaskId(taskId);
    setTimeout(() => {
      onClaimReward(taskId, amountZar, handle);
      setVerifyingTaskId(null);

      // Trigger celebratory micro-confetti
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6, x: 0.75 },
        colors: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'],
      });
    }, 700);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Headline & Conversion Stack */}
          <div className="lg:col-span-7 space-y-7">
            {/* Live Marketplace Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-violet-950/70 border border-violet-700/40 text-violet-300 text-xs font-semibold shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span>The Social Growth & Micro-Earning Marketplace</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Grow your social. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
                Earn while you scroll.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed font-normal">
              Connect with real people who want to grow their Instagram, TikTok, and YouTube accounts — and earn money anytime by completing simple promotion campaigns on <span className="text-white font-semibold underline decoration-violet-500 underline-offset-4">promotes.site</span>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-grow-cta"
                onClick={onOpenGrowModal}
                className="px-7 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-3 group"
              >
                <span>🚀 Grow my account</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-earn-cta"
                onClick={onOpenEarnModal}
                className="px-7 py-4 rounded-2xl font-bold text-base text-neutral-100 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 hover:border-neutral-600 shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5"
              >
                <span>💰 I want to earn</span>
              </button>
            </div>

            {/* Trust and Key Features Under CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Real Human Promoters</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-violet-400" />
                <span>30-Day Anti-Drop Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Instant Payouts to Bank & PayPal</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Applet / WebApp Live Simulator */}
          <div className="lg:col-span-5 relative">
            {/* Glowing Backdrop Frame */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-violet-600 via-cyan-500 to-indigo-600 rounded-3xl blur-lg opacity-35 group-hover:opacity-60 transition duration-1000"></div>

            <div className="relative bg-neutral-900 border border-neutral-800/90 rounded-2xl shadow-2xl overflow-hidden">
              
              {/* WebApp Frame Header */}
              <div className="bg-neutral-950/90 border-b border-neutral-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono font-medium text-neutral-400 ml-2">promotes.site/app</span>
                </div>

                {/* Simulator Mode Switcher */}
                <div className="flex bg-neutral-900 p-1 rounded-lg border border-neutral-800">
                  <button
                    onClick={() => setActiveSimulatorTab('promoter')}
                    className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all ${
                      activeSimulatorTab === 'promoter'
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Promoter Hub
                  </button>
                  <button
                    onClick={() => setActiveSimulatorTab('creator')}
                    className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all ${
                      activeSimulatorTab === 'creator'
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Creator Cam
                  </button>
                </div>
              </div>

              {/* Interactive Content Area */}
              {activeSimulatorTab === 'promoter' ? (
                <div className="p-4 space-y-4">
                  {/* Earnings Balance Card */}
                  <div className="bg-gradient-to-r from-violet-950/50 via-neutral-900 to-indigo-950/40 border border-violet-800/40 rounded-xl p-3.5 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-violet-300 uppercase tracking-wider">
                        Your Available Earnings
                      </div>
                      <div className="text-2xl font-black text-white tracking-tight flex items-baseline gap-1 mt-0.5">
                        {formatMoney(promoterBalance)}
                        <span className="text-xs font-medium text-emerald-400 ml-1.5 flex items-center gap-0.5">
                          <TrendingUp className="w-3 h-3" /> Ready to withdraw
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={onOpenWithdrawModal}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 text-xs font-bold transition-colors"
                    >
                      Cash Out
                    </button>
                  </div>

                  {/* Micro Task 1: Instagram Follow */}
                  <div className="bg-neutral-950/60 border border-neutral-800 rounded-xl p-3.5 hover:border-violet-500/40 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                          UT
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1">
                            @urbanthreads.sa
                            <span className="text-[10px] bg-rose-950/60 text-rose-300 border border-rose-800/50 px-1.5 py-0.2 rounded font-semibold">
                              IG Follow
                            </span>
                          </div>
                          <span className="text-[10px] text-neutral-400">Streetwear & Apparel • Verified</span>
                        </div>
                      </div>
                      <span className="text-sm font-extrabold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-md">
                        +{formatMoney(0.40)}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-300 mb-3 leading-relaxed">
                      Follow this brand on Instagram and stay followed to complete the campaign reward.
                    </p>

                    <button
                      onClick={() => handleClaimClick('task-hero-1', 0.40, '@urbanthreads.sa')}
                      disabled={claimedTaskIds.has('task-hero-1') || verifyingTaskId === 'task-hero-1'}
                      className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        claimedTaskIds.has('task-hero-1')
                          ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-700/50 cursor-default'
                          : verifyingTaskId === 'task-hero-1'
                          ? 'bg-violet-700 text-white animate-pulse'
                          : 'bg-neutral-100 text-neutral-950 hover:bg-violet-400 hover:text-white shadow-md'
                      }`}
                    >
                      {claimedTaskIds.has('task-hero-1') ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Completed • +{formatMoney(0.40)} Added!</span>
                        </>
                      ) : verifyingTaskId === 'task-hero-1' ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Verifying follow on Instagram...</span>
                        </>
                      ) : (
                        <>
                          <span>Follow & Earn {formatMoney(0.40)}</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Micro Task 2: TikTok Follow */}
                  <div className="bg-neutral-950/60 border border-neutral-800 rounded-xl p-3.5 hover:border-cyan-500/40 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                          FK
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1">
                            @fitwithkayla_za
                            <span className="text-[10px] bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 px-1.5 py-0.2 rounded font-semibold">
                              TikTok Follow
                            </span>
                          </div>
                          <span className="text-[10px] text-neutral-400">Fitness Coach • 84K views</span>
                        </div>
                      </div>
                      <span className="text-sm font-extrabold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-md">
                        +{formatMoney(0.30)}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-300 mb-3 leading-relaxed">
                      Follow creator and like the newest workout workout video to claim reward.
                    </p>

                    <button
                      onClick={() => handleClaimClick('task-hero-2', 0.30, '@fitwithkayla_za')}
                      disabled={claimedTaskIds.has('task-hero-2') || verifyingTaskId === 'task-hero-2'}
                      className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        claimedTaskIds.has('task-hero-2')
                          ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-700/50 cursor-default'
                          : verifyingTaskId === 'task-hero-2'
                          ? 'bg-violet-700 text-white animate-pulse'
                          : 'bg-neutral-100 text-neutral-950 hover:bg-cyan-400 hover:text-neutral-950 shadow-md'
                      }`}
                    >
                      {claimedTaskIds.has('task-hero-2') ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Completed • +{formatMoney(0.30)} Added!</span>
                        </>
                      ) : verifyingTaskId === 'task-hero-2' ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Checking TikTok profile action...</span>
                        </>
                      ) : (
                        <>
                          <span>Follow & Earn {formatMoney(0.30)}</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                /* Creator Active Campaign Simulator */
                <div className="p-4 space-y-4">
                  <div className="bg-neutral-950/60 border border-neutral-800 rounded-xl p-3.5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        Active Campaign: Instagram Growth
                      </span>
                      <span className="text-[10px] font-bold text-violet-400 bg-violet-950/60 px-2 py-0.5 rounded">
                        84% DELIVERED
                      </span>
                    </div>

                    <div className="w-full bg-neutral-800 rounded-full h-2.5 mb-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-violet-500 to-cyan-400 h-2.5 rounded-full w-[84%] transition-all duration-1000"></div>
                    </div>

                    <div className="flex justify-between text-[11px] text-neutral-400">
                      <span>421 / 500 Real Followers</span>
                      <span className="text-emerald-400 font-semibold">ETA: ~4 hrs remaining</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-neutral-950/60 border border-neutral-800/80 p-3 rounded-xl">
                      <span className="text-[10px] text-neutral-400 block">Total Budget</span>
                      <span className="text-lg font-black text-white">{formatMoney(250)}</span>
                    </div>
                    <div className="bg-neutral-950/60 border border-neutral-800/80 p-3 rounded-xl">
                      <span className="text-[10px] text-neutral-400 block">Retention Score</span>
                      <span className="text-lg font-black text-emerald-400">99.4%</span>
                    </div>
                  </div>

                  <button
                    onClick={onOpenGrowModal}
                    className="w-full py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2"
                  >
                    <span>Create Your Own Campaign</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Bottom Micro Footer in Simulator */}
              <div className="bg-neutral-950 px-4 py-2 border-t border-neutral-800/60 flex items-center justify-between text-[10px] text-neutral-500">
                <span>Domain: promotes.site</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Live Node Online
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
