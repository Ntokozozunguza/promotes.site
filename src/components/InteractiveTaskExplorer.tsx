import React, { useState } from 'react';
import { Search, Filter, CheckCircle2, RefreshCw, Flame, ExternalLink, Clock, Sparkles, Trophy, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PromotionTask, Platform, Currency } from '../types';
import { CURRENCY_CONFIGS, PLATFORM_INFO } from '../data/mockData';

interface InteractiveTaskExplorerProps {
  tasks: PromotionTask[];
  currentCurrency: Currency;
  claimedTaskIds: Set<string>;
  onClaimReward: (taskId: string, amountZar: number, handle: string) => void;
  onOpenEarnModal: () => void;
}

export const InteractiveTaskExplorer: React.FC<InteractiveTaskExplorerProps> = ({
  tasks,
  currentCurrency,
  claimedTaskIds,
  onClaimReward,
  onOpenEarnModal,
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [verifyingId, setVerifyingId] = useState<string | null>(null);

  const formatMoney = (val: number) => CURRENCY_CONFIGS[currentCurrency].format(val);

  const filteredTasks = tasks.filter((t) => {
    const matchesPlatform = selectedPlatform === 'all' || t.platform === selectedPlatform;
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPlatform && matchesSearch;
  });

  const handleClaim = (task: PromotionTask) => {
    if (claimedTaskIds.has(task.id) || verifyingId === task.id) return;

    setVerifyingId(task.id);
    setTimeout(() => {
      onClaimReward(task.id, task.rewardZar, task.handle);
      setVerifyingId(null);

      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7, x: 0.5 },
        colors: ['#10b981', '#8b5cf6', '#38bdf8'],
      });
    }, 800);
  };

  return (
    <section id="campaigns-explorer" className="py-24 bg-neutral-900/40 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Flame className="w-3.5 h-3.5 text-amber-400" /> Live Task Market
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Explore Active Campaigns
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Test-drive actual promoter tasks. Click any campaign below to test our instant verification and add money to your demo wallet.
            </p>
          </div>

          <button
            onClick={onOpenEarnModal}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-violet-500 text-neutral-200 text-sm font-semibold flex items-center gap-2 transition-all hover:bg-neutral-800"
          >
            <span>Full Task Feed Access</span>
            <ArrowRight className="w-4 h-4 text-violet-400" />
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Platform Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedPlatform('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedPlatform === 'all'
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              All Platforms
            </button>

            {(['instagram', 'tiktok', 'youtube', 'x', 'spotify'] as Platform[]).map((plat) => (
              <button
                key={plat}
                onClick={() => setSelectedPlatform(plat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap capitalize ${
                  selectedPlatform === plat
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {PLATFORM_INFO[plat]?.name || plat}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              placeholder="Search handle, niche, or task..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>

        </div>

        {/* Task Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task) => {
            const isClaimed = claimedTaskIds.has(task.id);
            const isVerifying = verifyingId === task.id;
            const progressPercent = Math.round((task.completedSlots / task.totalSlots) * 100);

            return (
              <div
                key={task.id}
                className="bg-neutral-950 border border-neutral-800/90 rounded-2xl p-5 hover:border-neutral-700 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                {/* Hot Badge */}
                {task.isHot && (
                  <div className="absolute top-0 right-0">
                    <span className="bg-gradient-to-l from-amber-500 to-rose-500 text-neutral-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-bl-lg tracking-wider flex items-center gap-1 shadow-md">
                      <Flame className="w-2.5 h-2.5 fill-neutral-950" /> Hot Campaign
                    </span>
                  </div>
                )}

                <div>
                  {/* Task Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${task.avatarGradient} flex items-center justify-center text-white font-black text-sm shrink-0 shadow-md`}>
                      {task.handle.substring(1, 3).toUpperCase()}
                    </div>
                    <div className="pr-12">
                      <h3 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors line-clamp-1">
                        {task.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-neutral-400 mt-0.5">
                        <span className="font-semibold text-neutral-300">{task.handle}</span>
                        <span>•</span>
                        <span className="capitalize text-violet-400 font-medium">{task.platform}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                    {task.description}
                  </p>

                  {/* Task Tags & Time */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-neutral-900 border border-neutral-800 text-neutral-400 px-2 py-0.5 rounded-md">
                      <Clock className="w-3 h-3 text-neutral-500" />
                      {task.timeEstimate}
                    </span>
                    {task.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium bg-neutral-900 text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1 mb-5">
                    <div className="flex justify-between text-[10px] text-neutral-500">
                      <span>{task.completedSlots} / {task.totalSlots} slots claimed</span>
                      <span className="font-bold text-neutral-400">{progressPercent}% filled</span>
                    </div>
                    <div className="w-full bg-neutral-900 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-violet-500 to-emerald-400 h-1.5 rounded-full"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="pt-3 border-t border-neutral-900 flex items-center justify-between gap-3">
                  <div className="leading-none">
                    <span className="text-[10px] text-neutral-500 block">Reward</span>
                    <span className="text-base font-black text-emerald-400">
                      +{formatMoney(task.rewardZar)}
                    </span>
                  </div>

                  <button
                    onClick={() => handleClaim(task)}
                    disabled={isClaimed || isVerifying}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isClaimed
                        ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60 cursor-default'
                        : isVerifying
                        ? 'bg-violet-700 text-white animate-pulse'
                        : 'bg-white text-neutral-950 hover:bg-violet-400 hover:text-white shadow-md'
                    }`}
                  >
                    {isClaimed ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Completed!</span>
                      </>
                    ) : isVerifying ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Verifying...</span>
                      </>
                    ) : (
                      <>
                        <span>Complete Task</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {filteredTasks.length === 0 && (
          <div className="text-center py-16 bg-neutral-950 border border-neutral-800 rounded-2xl">
            <p className="text-neutral-400 text-sm">No active campaigns match your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedPlatform('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-violet-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
