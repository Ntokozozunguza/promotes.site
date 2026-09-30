import React from 'react';
import { ShieldCheck, Lock, Star, CheckCircle, Smartphone, Award, ThumbsUp, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TrustAndSecurity: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Guarantees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        
        <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-400 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">30-Day Anti-Drop Escrow</h3>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            Promoter rewards are held in escrow for 30 days. If an unfollow or un-like is detected by our verification bot, your slot is instantly and automatically refilled.
          </p>
        </div>

        <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
            <Smartphone className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">100% Real Mobile Devices</h3>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            No headless browsers or datacenter proxies. Every promoter verifies via SMS and device biometric hardware, keeping your social profiles algorithm-safe.
          </p>
        </div>

        <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">No Passwords Ever Required</h3>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            We will never ask for your Instagram, TikTok, or YouTube passwords. You only provide public profile links or post URLs to be promoted.
          </p>
        </div>

      </div>

      {/* Community Testimonials */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-bold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Community Reviews
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Loved by Creators & Promoters Alike
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-6">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-neutral-800"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">{test.name}</div>
                    <div className="text-[11px] text-neutral-500">{test.handle}</div>
                  </div>
                </div>

                <span className="text-[11px] font-bold text-violet-400 bg-violet-950/60 border border-violet-800/40 px-2 py-0.5 rounded-md">
                  {test.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
