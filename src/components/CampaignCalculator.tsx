import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, ShieldCheck, Zap, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';
import { Platform, TaskType, Currency } from '../types';
import { CURRENCY_CONFIGS, PLATFORM_INFO } from '../data/mockData';

interface CampaignCalculatorProps {
  currentCurrency: Currency;
  onLaunchCampaignWithConfig: (config: {
    platform: Platform;
    actionType: TaskType;
    quantity: number;
    totalZar: number;
  }) => void;
}

export const CampaignCalculator: React.FC<CampaignCalculatorProps> = ({
  currentCurrency,
  onLaunchCampaignWithConfig,
}) => {
  const [platform, setPlatform] = useState<Platform>('instagram');
  const [actionType, setActionType] = useState<TaskType>('follow');
  const [quantity, setQuantity] = useState<number>(500);

  const formatMoney = (val: number) => CURRENCY_CONFIGS[currentCurrency].format(val);

  // Rate calculations
  const unitRateZar =
    actionType === 'follow' ? 0.50 :
    actionType === 'subscribe' ? 0.75 :
    actionType === 'comment' ? 0.60 :
    actionType === 'like' ? 0.35 : 0.45;

  const subtotalZar = quantity * unitRateZar;
  
  // Volume discount calculation (5% for >1000, 10% for >2500, 15% for >5000)
  const discountPercent =
    quantity >= 5000 ? 15 :
    quantity >= 2500 ? 10 :
    quantity >= 1000 ? 5 : 0;

  const totalBudgetZar = subtotalZar * (1 - discountPercent / 100);

  const estimatedHours = Math.max(4, Math.round(quantity / 50));
  const estimatedDays = estimatedHours > 24 ? `${Math.ceil(estimatedHours / 24)} days` : `${estimatedHours} hours`;

  const handleLaunch = () => {
    onLaunchCampaignWithConfig({
      platform,
      actionType,
      quantity,
      totalZar: totalBudgetZar,
    });
  };

  return (
    <section id="calculator" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/40 text-violet-400 text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" /> Interactive ROI Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculate Your Campaign Budget & Reach
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Adjust the sliders below to see live pricing, delivery turnaround, and real human promoter allocation for your brand on <span className="text-white font-medium">promotes.site</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Platform Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                1. Select Target Platform
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                {(['instagram', 'tiktok', 'youtube', 'x', 'spotify', 'facebook'] as Platform[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlatform(p)}
                    className={`py-3 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                      platform === p
                        ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30 scale-[1.03]'
                        : 'bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <span className="capitalize">{PLATFORM_INFO[p]?.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Action Goal */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                2. Promotion Goal
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'follow', label: 'Followers / Subs' },
                  { id: 'like', label: 'Post / Video Likes' },
                  { id: 'comment', label: 'Custom Comments' },
                  { id: 'repost', label: 'Shares / Reposts' },
                ].map((act) => (
                  <button
                    key={act.id}
                    onClick={() => setActionType(act.id as TaskType)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                      actionType === act.id
                        ? 'bg-violet-950/80 border border-violet-500 text-violet-300 shadow-md'
                        : 'bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {act.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Quantity Slider */}
            <div className="space-y-3 bg-neutral-950 border border-neutral-800/80 p-5 rounded-2xl">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                  3. Number of Promotions / Promoters
                </label>
                <div className="text-xl font-black text-white bg-neutral-900 px-3 py-1 rounded-lg border border-neutral-700">
                  {quantity.toLocaleString()}{' '}
                  <span className="text-xs font-semibold text-violet-400">actions</span>
                </div>
              </div>

              <input
                type="range"
                min="100"
                max="10000"
                step="50"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-violet-500"
              />

              <div className="flex justify-between text-[11px] text-neutral-500 font-medium">
                <span>100 (Starter)</span>
                <span>1,000 (Recommended)</span>
                <span>5,000 (Viral Scale)</span>
                <span>10,000 (Enterprise)</span>
              </div>

              {discountPercent > 0 && (
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-md">
                    🎉 Volume Tier Discount: {discountPercent}% OFF Applied
                  </span>
                </div>
              )}
            </div>

          </div>

          {/* Real-time Summary Card Column */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-950 border border-violet-800/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                  Campaign Estimate
                </span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Instant Allocation
                </span>
              </div>

              {/* Big Price Display */}
              <div>
                <span className="text-xs text-neutral-500 block">Total Campaign Budget</span>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-1 flex items-baseline gap-2">
                  {formatMoney(totalBudgetZar)}
                  <span className="text-xs font-semibold text-neutral-400">
                    (~{formatMoney(totalBudgetZar / quantity)} / promoter)
                  </span>
                </div>
              </div>

              {/* Key Deliverables Breakdown */}
              <div className="space-y-3 text-xs text-neutral-300">
                <div className="flex justify-between py-1.5 border-b border-neutral-900">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-violet-400" /> Promoters Assigned:
                  </span>
                  <span className="font-bold text-white">{quantity.toLocaleString()} Humans</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-900">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" /> Estimated Turnaround:
                  </span>
                  <span className="font-bold text-white">{estimatedDays}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-900">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Anti-Drop Protection:
                  </span>
                  <span className="font-bold text-emerald-400">30 Days Included</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Delivery Pacing:
                  </span>
                  <span className="font-bold text-neutral-200">Organic Algorithm Safe</span>
                </div>
              </div>

              {/* Launch CTA */}
              <button
                onClick={handleLaunch}
                className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 transition-all flex items-center justify-center gap-2"
              >
                <span>Launch This Campaign ({formatMoney(totalBudgetZar)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
