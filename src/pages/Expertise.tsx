import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { expertiseAreas } from '../data/content';
import { Search, ArrowRight } from 'lucide-react';

const categories = ['All', ...Array.from(new Set(expertiseAreas.map(e => e.category)))];

export default function Expertise() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = expertiseAreas.filter(area => {
    const matchesSearch = search === '' || 
      area.title.toLowerCase().includes(search.toLowerCase()) ||
      area.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || area.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Expertise — Brian Kibet | AI Evaluation Capabilities"
        description="Comprehensive overview of AI evaluation capabilities including RLHF, SFT, prompt evaluation, safety assessment, and quality assurance."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Expertise' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-midnight dark:text-offwhite mb-4">
              My Expertise
            </h1>
            <p className="text-xl text-slate-muted leading-relaxed max-w-3xl">
              A comprehensive overview of my capabilities across the AI evaluation and training pipeline. Each area is grounded in verified professional experience.
            </p>
          </header>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-muted" />
              <input
                type="text"
                placeholder="Search expertise areas..."
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
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
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

          {/* Results count */}
          <p className="text-sm text-slate-muted mb-6">
            Showing {filtered.length} of {expertiseAreas.length} expertise areas
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map(area => (
              <article
                key={area.id}
                className="p-6 rounded-xl border border-border-light dark:border-border-dark hover:border-teal-accent/30 hover:shadow-md transition-all"
              >
                <span className="text-xs font-medium text-teal-accent uppercase tracking-wider">
                  {area.category}
                </span>
                <h2 className="text-xl font-semibold text-midnight dark:text-offwhite mt-2 mb-3">
                  {area.title}
                </h2>
                <p className="text-slate-muted text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="pt-4 border-t border-border-light dark:border-border-dark">
                  <p className="text-sm text-slate-muted">
                    <span className="font-medium text-midnight dark:text-offwhite">Relevance: </span>
                    {area.relevance}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-muted">No expertise areas match your search criteria.</p>
            </div>
          )}

          {/* CTA */}
          <section className="mt-16 text-center">
            <div className="bg-white dark:bg-charcoal/50 rounded-xl p-8 border border-border-light dark:border-border-dark">
              <h2 className="text-2xl font-bold text-midnight dark:text-offwhite mb-4">
                Need These Capabilities?
              </h2>
              <p className="text-slate-muted mb-6 max-w-xl mx-auto">
                If your team needs expertise in any of these areas, I'm available for remote engagements and contract opportunities.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-accent hover:bg-teal-dark text-white rounded-lg font-semibold transition-all"
              >
                Discuss Your Needs <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
