import React from 'react';
import { Sparkles, Heart, Shield, Globe, Lock, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenGrowModal: () => void;
  onOpenEarnModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGrowModal, onOpenEarnModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                promotes<span className="text-violet-400">.site</span>
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              The premier social growth marketplace connecting high-growth creators with real human mobile promoters. Safe, organic, and instantaneous.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>All nodes operational • <strong>promotes.site</strong></span>
            </div>
          </div>

          {/* Creators Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">For Creators</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenGrowModal} className="hover:text-violet-400 transition-colors">
                  Launch Campaign
                </button>
              </li>
              <li>
                <a href="#pricing" className="hover:text-violet-400 transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-violet-400 transition-colors">
                  ROI Reach Calculator
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-violet-400 transition-colors">
                  Anti-Drop Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Promoters Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">For Promoters</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenEarnModal} className="hover:text-emerald-400 transition-colors">
                  Become a Promoter
                </button>
              </li>
              <li>
                <a href="#campaigns-explorer" className="hover:text-emerald-400 transition-colors">
                  Explore Task Feed
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">
                  How Payouts Work
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Earning Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Supported Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Platforms</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-neutral-400">Instagram Growth</span>
              </li>
              <li>
                <span className="text-neutral-400">TikTok Promotion</span>
              </li>
              <li>
                <span className="text-neutral-400">YouTube Engagement</span>
              </li>
              <li>
                <span className="text-neutral-400">Spotify & Audio Streams</span>
              </li>
              <li>
                <span className="text-neutral-400">X (Twitter) Retweets</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} <strong>promotes.site</strong>. All rights reserved. Built for creators & mobile earners worldwide.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
