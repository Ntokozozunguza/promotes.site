import React, { useState } from 'react';
import { X, Wallet, CheckCircle2, ArrowRight, ShieldCheck, Building2, Smartphone, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Currency } from '../types';
import { CURRENCY_CONFIGS } from '../data/mockData';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  promoterBalance: number;
  currentCurrency: Currency;
  onWithdrawSuccess: (amountZar: number) => void;
}

export const WithdrawModal: React.FC<WithdrawModalProps> = ({
  isOpen,
  onClose,
  promoterBalance,
  currentCurrency,
  onWithdrawSuccess,
}) => {
  const [bankName, setBankName] = useState('Capitec Bank');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState<number>(promoterBalance);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const formatMoney = (val: number) => CURRENCY_CONFIGS[currentCurrency].format(val);

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    if (withdrawAmount <= 0 || withdrawAmount > promoterBalance) {
      setErrorMsg('Invalid withdrawal amount. Must be between R10 and your available balance.');
      return;
    }

    if (!accountNumber || accountNumber.length < 6) {
      setErrorMsg('Please enter a valid bank account or phone number.');
      return;
    }

    setIsProcessing(true);
    setErrorMsg('');

    setTimeout(() => {
      setIsProcessing(false);
      onWithdrawSuccess(withdrawAmount);

      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.5 },
      });

      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
            <Wallet className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Promoter Wallet Cashout</h2>
            <span className="text-xs text-neutral-400">Instant payout gateway</span>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 mb-6">
          <span className="text-xs text-neutral-400 block">Available Balance</span>
          <div className="text-3xl font-black text-emerald-400 mt-0.5">
            {formatMoney(promoterBalance)}
          </div>
          <span className="text-[11px] text-neutral-500 mt-1 block">
            Minimum threshold: {formatMoney(50)} (Active)
          </span>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-rose-950/50 border border-rose-800/50 text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleWithdraw} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
              Select Payout Method / Bank
            </label>
            <select
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors"
            >
              <option>Capitec Bank (Instant Pay)</option>
              <option>FNB (First National Bank)</option>
              <option>Standard Bank</option>
              <option>Nedbank</option>
              <option>TymeBank</option>
              <option>PayPal International</option>
              <option>Vodacom / MTN Airtime Voucher</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
              Account Holder Full Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sindi Ndlovu"
              value={accountHolder}
              onChange={(e) => setAccountHolder(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
              Account Number / Phone Number
            </label>
            <input
              type="text"
              required
              placeholder="Account or mobile number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                Withdrawal Amount
              </label>
              <button
                type="button"
                onClick={() => setWithdrawAmount(promoterBalance)}
                className="text-xs text-emerald-400 font-bold hover:underline"
              >
                Max ({formatMoney(promoterBalance)})
              </button>
            </div>
            <input
              type="number"
              step="0.10"
              max={promoterBalance}
              min={1}
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(Number(e.target.value))}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isProcessing || promoterBalance <= 0}
            className="w-full py-4 rounded-xl font-bold text-sm text-neutral-950 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-emerald-400/20 transition-all flex items-center justify-center gap-2 mt-4"
          >
            {isProcessing ? (
              <span>Initiating Instant Transfer...</span>
            ) : (
              <>
                <span>Confirm Cashout ({formatMoney(withdrawAmount)})</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
};
