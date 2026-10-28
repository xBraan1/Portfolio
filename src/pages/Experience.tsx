import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { experience, education } from '../data/content';
import { ArrowRight, Briefcase, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience — Brian Kibet | Professional History"
        description="Professional experience in AI training, LLM evaluation, and data management. 3+ years of remote AI evaluation work at Scale AI."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Experience' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-midnight dark:text-offwhite mb-4">
              Professional Experience
            </h1>
            <p className="text-xl text-slate-muted leading-relaxed">
              A record of professional roles, responsibilities, and contributions in AI evaluation and data management.
            </p>
          </header>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <article key={exp.id} className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-teal-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase size={22} className="text-teal-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-midnight dark:text-offwhite">
                      {exp.role}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-muted">
                      <span className="font-medium text-midnight dark:text-offwhite">{exp.company}</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {exp.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-muted leading-relaxed mb-6">{exp.description}</p>

                <div className="bg-white dark:bg-charcoal/50 rounded-xl p-6 border border-border-light dark:border-border-dark">
                  <h3 className="font-semibold text-midnight dark:text-offwhite mb-4">
                    Key Responsibilities & Contributions
                  </h3>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-muted">
                        <span className="w-1.5 h-1.5 bg-teal-accent rounded-full mt-2 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Education */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-midnight dark:text-offwhite mb-8">
              Education
            </h2>
            <div className="bg-white dark:bg-charcoal/50 rounded-xl p-6 border border-border-light dark:border-border-dark">
              <h3 className="text-xl font-semibold text-midnight dark:text-offwhite mb-2">
                {education.degree}
              </h3>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-slate-muted uppercase tracking-wider mb-3">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.relevantCoursework.map(course => (
                    <span key={course} className="px-3 py-1.5 bg-teal-accent/10 text-teal-accent text-sm font-medium rounded-lg">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center">
            <div className="bg-teal-accent/5 dark:bg-teal-accent/10 rounded-xl p-8 border border-teal-accent/20">
              <h2 className="text-2xl font-bold text-midnight dark:text-offwhite mb-4">
                Interested in My Experience?
              </h2>
              <p className="text-slate-muted mb-6">
                Let's discuss how my background aligns with your team's needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-accent hover:bg-teal-dark text-white rounded-lg font-semibold transition-all"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
