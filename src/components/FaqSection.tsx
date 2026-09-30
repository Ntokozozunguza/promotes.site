import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-bold uppercase tracking-widest">
          <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Everything You Need to Know
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base">
          Got questions about campaigns, promoter rewards, anti-drop policies, or payouts? We've got answers.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {[
          { id: 'all', label: 'All Questions' },
          { id: 'creators', label: 'For Creators / Brands' },
          { id: 'promoters', label: 'For Promoters / Earners' },
          { id: 'payouts', label: 'Payouts & Banking' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === cat.id
                ? 'bg-violet-600 text-white shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-neutral-950 border border-neutral-800/80 rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-sm sm:text-base font-bold text-white pr-4">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center shrink-0 text-neutral-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-violet-400' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-5 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-neutral-900 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct Contact Prompt */}
      <div className="mt-12 text-center text-xs text-neutral-500">
        Still have questions? Our support team is online 24/7 at{' '}
        <a href="mailto:support@promotes.site" className="text-violet-400 hover:underline font-semibold">
          support@promotes.site
        </a>
      </div>

    </section>
  );
};
