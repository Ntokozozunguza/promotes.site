import React, { useState, useEffect } from 'react';
import { Users, CheckCircle2, Coins, Zap, Shield, ArrowUpRight } from 'lucide-react';
import { Currency } from '../types';
import { CURRENCY_CONFIGS, LIVE_ACTIVITY_STREAM } from '../data/mockData';

interface LiveStatsBarProps {
  currentCurrency: Currency;
  totalCompletedCount: number;
}

export const LiveStatsBar: React.FC<LiveStatsBarProps> = ({ currentCurrency, totalCompletedCount }) => {
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEventIndex((prev) => (prev + 1) % LIVE_ACTIVITY_STREAM.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const formatMoney = (val: number) => CURRENCY_CONFIGS[currentCurrency].format(val);
  const currentEvent = LIVE_ACTIVITY_STREAM[activeEventIndex];

  return (
    <section className="border-y border-neutral-800 bg-neutral-900/60 backdrop-blur-sm py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Live Activity Marquee Ticker */}
        <div className="mb-6 flex items-center justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs text-neutral-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-neutral-400 font-semibold">Live Pulse:</span>
            <span className="text-white font-medium">
              <strong className="text-violet-300">{currentEvent.user}</strong> {currentEvent.action}
            </span>
            {currentEvent.amountZar && (
              <span className="text-emerald-400 font-bold bg-emerald-950/60 px-1.5 py-0.5 rounded text-[11px] border border-emerald-800/40">
                +{formatMoney(currentEvent.amountZar)}
              </span>
            )}
            <span className="text-neutral-500 text-[10px]">({currentEvent.timestamp})</span>
          </div>
        </div>

        {/* 4 Core Marketplace Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          
          <div className="pt-3 md:pt-0">
            <div className="flex items-center justify-center gap-1.5 text-violet-400 mb-1">
              <Users className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Active Promoters</span>
            </div>
            <div className="text-3xl lg:text-4xl font-black text-white tracking-tight">3,420+</div>
            <span className="text-xs text-neutral-500 mt-1 block">Verified mobile creators</span>
          </div>

          <div className="pt-3 md:pt-0">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Completed Tasks</span>
            </div>
            <div className="text-3xl lg:text-4xl font-black text-white tracking-tight">
              {(8940 + totalCompletedCount).toLocaleString()}
            </div>
            <span className="text-xs text-neutral-500 mt-1 block">Promotions delivered</span>
          </div>

          <div className="pt-3 md:pt-0">
            <div className="flex items-center justify-center gap-1.5 text-cyan-400 mb-1">
              <Coins className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Average Micro-Reward</span>
            </div>
            <div className="text-3xl lg:text-4xl font-black text-white tracking-tight">
              {formatMoney(0.30)}–{formatMoney(0.75)}
            </div>
            <span className="text-xs text-neutral-500 mt-1 block">Per 10–30s social action</span>
          </div>

          <div className="pt-3 md:pt-0">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Avg. Payout Speed</span>
            </div>
            <div className="text-3xl lg:text-4xl font-black text-white tracking-tight">&lt; 15 mins</div>
            <span className="text-xs text-neutral-500 mt-1 block">Instant Bank EFT & PayPal</span>
          </div>

        </div>

      </div>
    </section>
  );
};
