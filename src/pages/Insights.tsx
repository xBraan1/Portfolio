import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { insights } from '../data/content';
import { Clock, Tag, FileText, ArrowLeft } from 'lucide-react';

function InsightsIndex() {
  return (
    <>
      <SEO
        title="Insights — Brian Kibet | AI Evaluation Articles"
        description="Professional articles and insights on LLM evaluation, RLHF, prompt quality, hallucination detection, and AI safety."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Insights' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-midnight dark:text-offwhite mb-4">
              Insights & Articles
            </h1>
            <p className="text-xl text-slate-muted leading-relaxed">
              Professional writing on AI evaluation methodology, quality assurance, and the practice of making language models more reliable.
            </p>
          </header>

          <div className="space-y-6">
            {insights.map(article => (
              <Link
                key={article.id}
                to={`/insights/${article.id}`}
                className="block p-6 rounded-xl border border-border-light dark:border-border-dark hover:border-teal-accent/30 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center gap-1 text-xs text-slate-muted">
                    <Clock size={12} /> {article.readTime}
                  </span>
                  <span className="text-xs text-slate-muted">·</span>
                  <span className="text-xs text-slate-muted">{article.date}</span>
                  {article.draft && (
                    <>
                      <span className="text-xs text-slate-muted">·</span>
                      <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium rounded">
                        Draft
                      </span>
                    </>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-midnight dark:text-offwhite mb-2 group-hover:text-teal-accent transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-muted leading-relaxed mb-3">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 bg-teal-accent/10 text-teal-accent text-xs font-medium rounded">
                      <Tag size={10} /> {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {insights.length === 0 && (
            <div className="text-center py-12">
              <FileText size={48} className="text-slate-muted/30 mx-auto mb-4" />
              <p className="text-slate-muted">No articles published yet. Check back soon.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

function ArticleDetail() {
  const { id } = useParams();
  const article = insights.find(a => a.id === id);

  if (!article) {
    return (
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-midnight dark:text-offwhite mb-4">Article Not Found</h1>
          <Link to="/insights" className="text-teal-accent hover:underline">← Back to Insights</Link>
        </div>
      </main>
    );
  }

  const relatedArticles = insights.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <>
      <SEO
        title={`${article.title} — Insights | Brian Kibet`}
        description={article.excerpt}
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Insights', path: '/insights' }, { label: article.title }]} />

          <Link to="/insights" className="inline-flex items-center gap-2 text-teal-accent hover:text-teal-dark text-sm font-medium mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to all articles
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center gap-1 text-sm text-slate-muted">
                  <Clock size={14} /> {article.readTime}
                </span>
                <span className="text-sm text-slate-muted">·</span>
                <span className="text-sm text-slate-muted">{article.date}</span>
                {article.draft && (
                  <>
                    <span className="text-sm text-slate-muted">·</span>
                    <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium rounded">
                      Draft
                    </span>
                  </>
                )}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-midnight dark:text-offwhite mb-4">
                {article.title}
              </h1>
              <p className="text-lg text-slate-muted leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {article.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 bg-teal-accent/10 text-teal-accent text-xs font-medium rounded-md">
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="prose dark:prose-invert max-w-none">
              {article.content.split('\n\n').map((block, i) => {
                if (block.startsWith('## ')) {
                  return <h2 key={i}>{block.replace('## ', '')}</h2>;
                }
                if (block.startsWith('### ')) {
                  return <h3 key={i}>{block.replace('### ', '')}</h3>;
                }
                if (block.startsWith('- **')) {
                  const items = block.split('\n').filter(l => l.startsWith('- '));
                  return (
                    <ul key={i}>
                      {items.map((item, j) => (
                        <li key={j} dangerouslySetInnerHTML={{
                          __html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        }} />
                      ))}
                    </ul>
                  );
                }
                if (block.match(/^\d+\./)) {
                  const items = block.split('\n').filter(l => l.match(/^\d+\./));
                  return (
                    <ol key={i}>
                      {items.map((item, j) => (
                        <li key={j}>{item.replace(/^\d+\.\s*/, '')}</li>
                      ))}
                    </ol>
                  );
                }
                return <p key={i}>{block}</p>;
              })}
            </div>
          </article>

          {/* Related */}
          {relatedArticles.length > 0 && (
            <section className="mt-16 pt-8 border-t border-border-light dark:border-border-dark">
              <h2 className="text-xl font-bold text-midnight dark:text-offwhite mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedArticles.map(a => (
                  <Link
                    key={a.id}
                    to={`/insights/${a.id}`}
                    className="p-4 rounded-lg border border-border-light dark:border-border-dark hover:border-teal-accent/30 transition-colors"
                  >
                    <h3 className="font-semibold text-midnight dark:text-offwhite text-sm mb-1">{a.title}</h3>
                    <p className="text-xs text-slate-muted">{a.readTime}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}

export default function Insights() {
  const { id } = useParams();
  if (id) return <ArticleDetail />;
  return <InsightsIndex />;
}
