import React, { useState } from 'react';
import { SEO, Breadcrumbs } from '../components/Layout';
import { faqItems } from '../data/content';
import { Search, ChevronDown } from 'lucide-react';

const categories = ['All', ...Array.from(new Set(faqItems.map(f => f.category)))];

export default function FAQ() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const filtered = faqItems.filter(item => {
    const matchesSearch = search === '' ||
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <SEO
        title="FAQ — Brian Kibet | Frequently Asked Questions"
        description="Answers to common questions about AI evaluation services, collaboration, methodologies, and engagement options."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-midnight dark:text-offwhite mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-muted leading-relaxed">
              Answers to common questions about my evaluation work, collaboration approach, and available services.
            </p>
          </header>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-muted" />
              <input
                type="text"
                placeholder="Search questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-charcoal text-midnight dark:text-offwhite placeholder:text-slate-muted focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                    activeCategory === cat
                      ? 'bg-teal-accent text-white'
                      : 'bg-offwhite dark:bg-charcoal text-slate-muted hover:text-midnight dark:hover:text-offwhite border border-border-light dark:border-border-dark'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3" role="list">
            {filtered.map(item => (
              <div
                key={item.id}
                role="listitem"
                className="rounded-xl border border-border-light dark:border-border-dark overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-offwhite dark:hover:bg-charcoal/50 transition-colors"
                  aria-expanded={openItems.has(item.id)}
                >
                  <span className="font-medium text-midnight dark:text-offwhite pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-muted flex-shrink-0 transition-transform ${
                      openItems.has(item.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openItems.has(item.id) && (
                  <div className="px-5 pb-5">
                    <p className="text-slate-muted leading-relaxed">
                      {item.answer}
                    </p>
                    <span className="inline-block mt-3 px-2 py-0.5 bg-teal-accent/10 text-teal-accent text-xs font-medium rounded capitalize">
                      {item.category}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-muted">No questions match your search criteria.</p>
            </div>
          )}

          {/* Still have questions */}
          <section className="mt-12 text-center">
            <div className="bg-teal-accent/5 dark:bg-teal-accent/10 rounded-xl p-8 border border-teal-accent/20">
              <h2 className="text-xl font-bold text-midnight dark:text-offwhite mb-3">
                Still Have Questions?
              </h2>
              <p className="text-slate-muted mb-6">
                Don't see your question here? Feel free to reach out through the contact page.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-accent hover:bg-teal-dark text-white rounded-lg font-semibold transition-all"
              >
                Send a Question
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
