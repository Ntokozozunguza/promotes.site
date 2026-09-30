import React, { useState, useEffect } from 'react';
import { X, Sparkles, Rocket, ShieldCheck, CheckCircle2, Globe, AlertCircle, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Platform, TaskType, Currency, CampaignPlan } from '../types';
import { CURRENCY_CONFIGS, PLATFORM_INFO } from '../data/mockData';

interface CreateCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCurrency: Currency;
  onCampaignCreated: (campaign: any) => void;
  initialPreset?: CampaignPlan | null;
  onSwitchToEarn: () => void;
}

export const CreateCampaignModal: React.FC<CreateCampaignModalProps> = ({
  isOpen,
  onClose,
  currentCurrency,
  onCampaignCreated,
  initialPreset,
  onSwitchToEarn,
}) => {
  const [platform, setPlatform] = useState<Platform>('instagram');
  const [targetUrl, setTargetUrl] = useState('');
  const [actionType, setActionType] = useState<TaskType>('follow');
  const [quantity, setQuantity] = useState<number>(500);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialPreset) {
      setPlatform(initialPreset.platform);
      setQuantity(initialPreset.quantity);
    }
  }, [initialPreset]);

  if (!isOpen) return null;

  const formatMoney = (val: number) => CURRENCY_CONFIGS[currentCurrency].format(val);

  const unitRateZar =
    actionType === 'follow' ? 0.50 :
    actionType === 'subscribe' ? 0.75 :
    actionType === 'comment' ? 0.60 :
    actionType === 'like' ? 0.35 : 0.45;

  const subtotalZar = quantity * unitRateZar;
  const discountPercent =
    quantity >= 5000 ? 15 :
    quantity >= 2500 ? 10 :
    quantity >= 1000 ? 5 : 0;
  const totalBudgetZar = subtotalZar * (1 - discountPercent / 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetUrl || targetUrl.trim().length < 5) {
      setErrorMsg('Please enter a valid social account or post link (e.g. instagram.com/yourhandle)');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    setTimeout(() => {
      setIsSubmitting(false);
      onCampaignCreated({
        id: 'camp-' + Date.now(),
        platform,
        targetUrl,
        actionType,
        quantity,
        totalZar: totalBudgetZar,
        createdAt: new Date().toISOString(),
      });

      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.5 },
      });

      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Dual Switcher Tabs */}
        <div className="flex bg-neutral-900 p-1 rounded-xl border border-neutral-800 mb-6">
          <button
            type="button"
            className="flex-1 py-2 rounded-lg text-xs font-bold bg-violet-600 text-white shadow-md transition-all"
          >
            🚀 Grow My Account
          </button>
          <button
            type="button"
            onClick={onSwitchToEarn}
            className="flex-1 py-2 rounded-lg text-xs font-semibold text-neutral-400 hover:text-white transition-all"
          >
            💰 Earn Money
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-black text-white tracking-tight">Create Promotion Campaign</h2>
          <p className="text-xs text-neutral-400 mt-1">
            Fill in your target details below to deploy your campaign to thousands of active mobile promoters on <span className="text-violet-400">promotes.site</span>.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-rose-950/50 border border-rose-800/50 text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Platform Choice */}
          <div>
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
              1. Select Platform
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['instagram', 'tiktok', 'youtube', 'x', 'spotify', 'facebook'] as Platform[]).map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setPlatform(p)}
                  className={`py-2 px-2 rounded-xl text-xs font-bold capitalize transition-all border ${
                    platform === p
                      ? 'bg-violet-600/20 border-violet-500 text-violet-300 shadow-sm'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  {PLATFORM_INFO[p]?.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Target URL */}
          <div>
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
              2. Account or Post URL / Handle
            </label>
            <input
              type="text"
              required
              placeholder="https://instagram.com/yourhandle or @yourhandle"
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>

          {/* Goal Type */}
          <div>
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
              3. Promotion Action Goal
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'follow', label: 'Followers / Subs' },
                { id: 'like', label: 'Likes & Reactions' },
                { id: 'comment', label: 'Custom Comments' },
                { id: 'repost', label: 'Shares / Reposts' },
              ].map((act) => (
                <button
                  type="button"
                  key={act.id}
                  onClick={() => setActionType(act.id as TaskType)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    actionType === act.id
                      ? 'bg-violet-600/20 border-violet-500 text-violet-300'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  {act.label}
                </button>
              ))}
            </div>
          </div>

          {/* Number of Promotions */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                4. Number of Promotions
              </label>
              <span className="text-xs font-extrabold text-violet-400">{quantity} Promoters</span>
            </div>
            <div className="flex gap-2">
              {[250, 500, 1000, 2500, 5000].map((q) => (
                <button
                  type="button"
                  key={q}
                  onClick={() => setQuantity(q)}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-all ${
                    quantity === q
                      ? 'bg-violet-600 text-white border-violet-500'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  {q >= 1000 ? `${q / 1000}k` : q}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Box Summary */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 space-y-2 mt-4">
            <div className="flex justify-between text-xs text-neutral-400">
              <span>Estimated Delivery:</span>
              <span className="font-semibold text-white">Within 24–48 Hours</span>
            </div>
            <div className="flex justify-between text-xs text-neutral-400">
              <span>Anti-Drop Guarantee:</span>
              <span className="font-semibold text-emerald-400">30 Days Included</span>
            </div>
            <div className="pt-2 border-t border-neutral-800 flex justify-between items-baseline">
              <span className="text-xs font-bold text-neutral-300">Total Campaign Budget:</span>
              <span className="text-2xl font-black text-white">{formatMoney(totalBudgetZar)}</span>
            </div>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-600/30 transition-all flex items-center justify-center gap-2 mt-2"
          >
            {isSubmitting ? (
              <span>Provisioning Campaign Nodes...</span>
            ) : (
              <>
                <span>Launch Campaign ({formatMoney(totalBudgetZar)})</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
};
