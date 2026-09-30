import React, { useState } from 'react';
import { X, Sparkles, DollarSign, Wallet, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Platform } from '../types';

interface PromoterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegistered: (name: string) => void;
  onSwitchToGrow: () => void;
}

export const PromoterModal: React.FC<PromoterModalProps> = ({
  isOpen,
  onClose,
  onRegistered,
  onSwitchToGrow,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState<Platform>('tiktok');
  const [payoutMethod, setPayoutMethod] = useState('Instant Bank EFT (Capitec, FNB, etc.)');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onRegistered(name || 'New Promoter');

      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.5 },
      });

      onClose();
    }, 800);
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
            onClick={onSwitchToGrow}
            className="flex-1 py-2 rounded-lg text-xs font-semibold text-neutral-400 hover:text-white transition-all"
          >
            🚀 Grow My Account
          </button>
          <button
            type="button"
            className="flex-1 py-2 rounded-lg text-xs font-bold bg-emerald-500 text-neutral-950 shadow-md transition-all"
          >
            💰 Earn Money
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-black text-white tracking-tight">Become a Verified Promoter</h2>
          <p className="text-xs text-neutral-400 mt-1">
            Earn money on your mobile phone by completing 15-second social campaigns on <span className="text-emerald-400">promotes.site</span>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sindi Ndlovu"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
              Primary Social Platform
            </label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value as Platform)}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors"
            >
              <option value="tiktok">TikTok</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">YouTube</option>
              <option value="x">X (Twitter)</option>
              <option value="spotify">Spotify</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
              Preferred Payout Destination
            </label>
            <select
              value={payoutMethod}
              onChange={(e) => setPayoutMethod(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors"
            >
              <option>Instant Bank EFT (Capitec, FNB, Standard Bank, Nedbank)</option>
              <option>PayPal</option>
              <option>Mobile Airtime & Data Vouchers</option>
              <option>USDT / Crypto Wallet</option>
            </select>
          </div>

          {/* Guarantee Pill */}
          <div className="p-3.5 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-[11px] text-neutral-400 leading-tight">
              100% free forever. No registration costs, no minimum tasks required.
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl font-bold text-sm text-neutral-950 bg-emerald-400 hover:bg-emerald-300 shadow-xl shadow-emerald-400/20 transition-all flex items-center justify-center gap-2 mt-2"
          >
            {isSubmitting ? (
              <span>Activating Promoter Hub...</span>
            ) : (
              <>
                <span>Join & Start Earning</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
};
