import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Wallet, Globe, Menu, X, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Currency } from '../types';
import { CURRENCY_CONFIGS } from '../data/mockData';

interface NavbarProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
  promoterBalance: number;
  onOpenGrowModal: () => void;
  onOpenEarnModal: () => void;
  onOpenWithdrawModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  promoterBalance,
  onOpenGrowModal,
  onOpenEarnModal,
  onOpenWithdrawModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatMoney = (val: number) => CURRENCY_CONFIGS[currentCurrency].format(val);

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl shadow-black/40'
          : 'bg-neutral-950/50 backdrop-blur-sm border-b border-neutral-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Domain Tag */}
        <div className="flex items-center gap-3">
          <a href="#" className="group flex items-center gap-2.5 focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-violet-600/25 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white flex items-center">
                promotes<span className="text-violet-400">.site</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 -mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Growth Marketplace
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a href="#how-it-works" className="hover:text-violet-400 transition-colors">
            How It Works
          </a>
          <a href="#campaigns-explorer" className="hover:text-violet-400 transition-colors">
            Explore Campaigns
          </a>
          <a href="#calculator" className="hover:text-violet-400 transition-colors">
            Calculator
          </a>
          <a href="#pricing" className="hover:text-violet-400 transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-violet-400 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action Controls & Balance Display */}
        <div className="hidden md:flex items-center gap-3">
          {/* Currency Selector */}
          <div className="relative">
            <button
              id="currency-selector-btn"
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all"
              title="Switch Currency"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-400" />
              <span>{currentCurrency}</span>
              <ChevronDown className="w-3 h-3 text-neutral-500" />
            </button>

            {currencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-neutral-900 border border-neutral-800 rounded-xl shadow-xl py-1 z-50 animate-in fade-in slide-in-from-top-2">
                {Object.keys(CURRENCY_CONFIGS).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      onCurrencyChange(curr as Currency);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                      currentCurrency === curr
                        ? 'bg-violet-600/20 text-violet-300 font-semibold'
                        : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                    }`}
                  >
                    <span>
                      {CURRENCY_CONFIGS[curr].symbol} {curr}
                    </span>
                    {currentCurrency === curr && <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Promoter Demo Balance Pill */}
          <button
            id="wallet-balance-pill"
            onClick={onOpenWithdrawModal}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-violet-950/40 border border-violet-800/40 text-violet-300 hover:bg-violet-900/40 hover:border-violet-700 transition-all"
          >
            <Wallet className="w-4 h-4 text-violet-400" />
            <div className="text-left leading-none">
              <span className="text-[10px] text-violet-400 font-medium block">Earnings</span>
              <span className="text-xs font-bold text-white">{formatMoney(promoterBalance)}</span>
            </div>
          </button>

          {/* Earn Money Button */}
          <button
            id="btn-earn-nav"
            onClick={onOpenEarnModal}
            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all"
          >
            Earn Money
          </button>

          {/* Grow Account Button */}
          <button
            id="btn-grow-nav"
            onClick={onOpenGrowModal}
            className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-600/20 hover:shadow-violet-600/40 transition-all flex items-center gap-1.5"
          >
            <span>Grow Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenWithdrawModal}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-violet-950/40 border border-violet-800/40 text-xs font-bold text-violet-300"
          >
            <Wallet className="w-3.5 h-3.5 text-violet-400" />
            <span>{formatMoney(promoterBalance)}</span>
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-5 py-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <span className="text-xs text-neutral-400 font-medium">Currency Display</span>
            <div className="flex gap-1.5">
              {Object.keys(CURRENCY_CONFIGS).map((curr) => (
                <button
                  key={curr}
                  onClick={() => onCurrencyChange(curr as Currency)}
                  className={`px-2 py-1 rounded-md text-xs font-semibold ${
                    currentCurrency === curr
                      ? 'bg-violet-600 text-white'
                      : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          <nav className="flex flex-col space-y-3 text-base font-medium text-neutral-300">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-violet-400"
            >
              How It Works
            </a>
            <a
              href="#campaigns-explorer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-violet-400"
            >
              Live Campaign Feed
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-violet-400"
            >
              ROI Calculator
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-violet-400"
            >
              Pricing & Packages
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-violet-400"
            >
              Help & FAQ
            </a>
          </nav>

          <div className="pt-4 border-t border-neutral-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGrowModal();
              }}
              className="w-full py-3 rounded-xl font-bold text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2"
            >
              <span>🚀 Launch a Campaign</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEarnModal();
              }}
              className="w-full py-3 rounded-xl font-semibold text-neutral-200 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 flex items-center justify-center gap-2"
            >
              <span>💰 Become a Promoter</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
