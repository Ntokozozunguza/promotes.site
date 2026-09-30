import React from 'react';
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { Currency, CampaignPlan } from '../types';
import { CAMPAIGN_PRESETS, CURRENCY_CONFIGS } from '../data/mockData';

interface PricingSectionProps {
  currentCurrency: Currency;
  onSelectPlan: (plan: CampaignPlan) => void;
  onOpenCustomModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  currentCurrency,
  onSelectPlan,
  onOpenCustomModal,
}) => {
  const formatMoney = (val: number) => CURRENCY_CONFIGS[currentCurrency].format(val);

  return (
    <section id="pricing" className="py-24 bg-neutral-900/30 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/40 text-violet-400 text-xs font-bold uppercase tracking-widest">
            Transparent MVP Packages
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Start Small. Scale When It Works.
          </h2>
          <p className="text-neutral-400 text-base">
            No hidden fees, subscriptions, or contracts. Pay only for verified human promotions delivered to your social media accounts.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {CAMPAIGN_PRESETS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-gradient-to-b from-neutral-900 via-neutral-900 to-violet-950/40 border-2 border-violet-500 shadow-2xl shadow-violet-950/50 scale-105 z-10'
                  : 'bg-neutral-950 border border-neutral-800 hover:border-neutral-700 shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-violet-600/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Most Popular Choice
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <span className="text-xs text-violet-400 font-semibold">{plan.goalType}</span>
                  </div>
                  <span className="text-xs font-bold bg-neutral-900 border border-neutral-800 text-neutral-300 px-2.5 py-1 rounded-lg">
                    {plan.deliveryTime}
                  </span>
                </div>

                {/* Price Display */}
                <div className="my-6 pb-6 border-b border-neutral-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {formatMoney(plan.priceZar)}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">/ campaign</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-2">
                    Includes <strong>{plan.quantity.toLocaleString()} verified promotions</strong> ({formatMoney(plan.perActionZar)} per action).
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <div className="w-4 h-4 rounded-full bg-violet-600/20 text-violet-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlan(plan)}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/30'
                    : 'bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white'
                }`}
              >
                <span>Launch {plan.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Customization Banner */}
        <div className="mt-12 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" /> Need a tailored custom budget or specific country targeting?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Configure any custom volume from 100 to 50,000+ promotions with country-level filters.
            </p>
          </div>
          <button
            onClick={onOpenCustomModal}
            className="px-6 py-3 rounded-xl bg-violet-950/60 border border-violet-700/50 hover:border-violet-500 text-violet-300 hover:text-white text-xs sm:text-sm font-bold transition-all whitespace-nowrap shadow-md"
          >
            Custom Campaign Creator →
          </button>
        </div>

      </div>
    </section>
  );
};
