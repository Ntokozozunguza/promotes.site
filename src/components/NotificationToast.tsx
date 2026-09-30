import React from 'react';
import { CheckCircle2, Sparkles, X, TrendingUp, AlertCircle } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'earning' | 'info';
  title: string;
  message: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const NotificationToast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto p-4 rounded-2xl shadow-2xl border flex items-start gap-3 backdrop-blur-md transition-all animate-in slide-in-from-bottom-5 fade-in duration-300 ${
            toast.type === 'earning'
              ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-100'
              : toast.type === 'success'
              ? 'bg-violet-950/90 border-violet-500/50 text-violet-100'
              : 'bg-neutral-900/90 border-neutral-700 text-neutral-100'
          }`}
        >
          <div className="shrink-0 mt-0.5">
            {toast.type === 'earning' ? (
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full bg-violet-500/30 text-violet-300 flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            )}
          </div>

          <div className="flex-1 pr-2">
            <h4 className="text-xs font-bold">{toast.title}</h4>
            <p className="text-[11px] opacity-90 leading-tight mt-0.5">{toast.message}</p>
          </div>

          <button
            onClick={() => onDismiss(toast.id)}
            className="text-neutral-400 hover:text-white shrink-0 p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
