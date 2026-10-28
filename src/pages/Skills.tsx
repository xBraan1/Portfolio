import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { skills } from '../data/content';
import { ArrowRight, Wrench } from 'lucide-react';

export default function Skills() {
  return (
    <>
      <SEO
        title="Skills & Tools — Brian Kibet | Technical Proficiencies"
        description="Technical skills and tools used in AI evaluation work including Scale AI, Label Studio, Python, and collaboration platforms."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Skills & Tools' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-midnight dark:text-offwhite mb-4">
              Skills & Tools
            </h1>
            <p className="text-xl text-slate-muted leading-relaxed max-w-3xl">
              The platforms, tools, and technical capabilities I use in my professional AI evaluation workflow.
            </p>
          </header>

          <div className="space-y-12">
            {Object.entries(skills).map(([category, items]) => (
              <section key={category}>
                <h2 className="text-2xl font-bold text-midnight dark:text-offwhite mb-6 flex items-center gap-3">
                  <Wrench size={24} className="text-teal-accent" />
                  {category}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {items.map(skill => (
                    <div
                      key={skill.name}
                      className="p-5 rounded-xl border border-border-light dark:border-border-dark hover:border-teal-accent/30 transition-colors"
                    >
                      <h3 className="font-semibold text-midnight dark:text-offwhite mb-2">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-slate-muted leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA */}
          <section className="mt-16 text-center">
            <div className="bg-teal-accent/5 dark:bg-teal-accent/10 rounded-xl p-8 border border-teal-accent/20">
              <h2 className="text-2xl font-bold text-midnight dark:text-offwhite mb-4">
                Need These Skills on Your Team?
              </h2>
              <p className="text-slate-muted mb-6">
                I'm available for remote engagements requiring these capabilities.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-accent hover:bg-teal-dark text-white rounded-lg font-semibold transition-all"
              >
                Discuss Your Project <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
