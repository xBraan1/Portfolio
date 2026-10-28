import React, { useState } from 'react';
import { SEO, Breadcrumbs } from '../components/Layout';
import { caseStudies } from '../data/content';
import { Search, Tag, AlertTriangle } from 'lucide-react';

const allTags = Array.from(new Set(caseStudies.flatMap(s => s.tags)));

export default function Work() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = caseStudies.filter(study => {
    const matchesSearch = search === '' ||
      study.title.toLowerCase().includes(search.toLowerCase()) ||
      study.context.toLowerCase().includes(search.toLowerCase());
    const matchesTag = !activeTag || study.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  return (
    <>
      <SEO
        title="Selected Work — Brian Kibet | AI Evaluation Case Studies"
        description="Illustrative case studies demonstrating AI evaluation methodology, approach, and quality standards."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Selected Work' }]} />

          <header className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-midnight dark:text-offwhite mb-4">
              Selected Work
            </h1>
            <p className="text-xl text-slate-muted leading-relaxed max-w-3xl">
              Illustrative case studies demonstrating evaluation methodology and approach. These exercises showcase how I structure evaluation work — they are not representations of confidential client projects.
            </p>
          </header>

          {/* Important notice */}
          <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 mb-8">
            <AlertTriangle size={20} className="text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-amber-800 dark:text-amber-300">Transparency Notice</p>
              <p className="text-sm text-amber-700 dark:text-amber-400 mt-1">
                These case studies are illustrative exercises designed to demonstrate methodology. They do not represent specific confidential client projects or proprietary datasets.
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-muted" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-charcoal text-midnight dark:text-offwhite placeholder:text-slate-muted focus:border-teal-accent focus:ring-1 focus:ring-teal-accent outline-none transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setActiveTag(null)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  !activeTag ? 'bg-teal-accent text-white' : 'bg-offwhite dark:bg-charcoal text-slate-muted border border-border-light dark:border-border-dark'
                }`}
              >
                All
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTag === tag ? 'bg-teal-accent text-white' : 'bg-offwhite dark:bg-charcoal text-slate-muted border border-border-light dark:border-border-dark'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="space-y-8">
            {filtered.map(study => (
              <article key={study.id} id={study.id} className="bg-white dark:bg-charcoal/50 rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {study.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 bg-teal-accent/10 text-teal-accent text-xs font-medium rounded-md">
                        <Tag size={10} /> {tag}
                      </span>
                    ))}
                    <span className="px-2.5 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium rounded-md">
                      Illustrative
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-midnight dark:text-offwhite mb-4">
                    {study.title}
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-muted uppercase tracking-wider mb-2">Context</h3>
                      <p className="text-slate-muted leading-relaxed">{study.context}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-muted uppercase tracking-wider mb-2">Problem / Objective</h3>
                      <p className="text-slate-muted leading-relaxed">{study.problem}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-muted uppercase tracking-wider mb-2">Methodology</h3>
                      <p className="text-slate-muted leading-relaxed">{study.methodology}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-muted uppercase tracking-wider mb-2">Evaluation Criteria</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.criteria.map(c => (
                          <span key={c} className="px-2.5 py-1 bg-offwhite dark:bg-midnight/50 text-slate-muted text-xs rounded-md border border-border-light dark:border-border-dark">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-muted uppercase tracking-wider mb-2">Quality Control</h3>
                      <p className="text-slate-muted leading-relaxed">{study.qualityControl}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-muted uppercase tracking-wider mb-2">Findings</h3>
                      <p className="text-slate-muted leading-relaxed">{study.findings}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-muted uppercase tracking-wider mb-2">Relevant Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.skills.map(s => (
                          <span key={s} className="px-2.5 py-1 bg-teal-accent/10 text-teal-accent text-xs font-medium rounded-md">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-muted">No case studies match your current filters.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
