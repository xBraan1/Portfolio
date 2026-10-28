import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { profile, experience, education } from '../data/content';
import { ArrowRight, Award, BookOpen, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO
        title="About — Brian Kibet | AI Trainer & LLM Evaluation Specialist"
        description="Learn about Brian Kibet's background, approach to AI evaluation, and professional philosophy."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-midnight dark:text-offwhite mb-4">
              About Me
            </h1>
            <p className="text-xl text-slate-muted leading-relaxed">
              AI evaluation specialist with a focus on making language models more helpful, honest, and harmless.
            </p>
          </header>

          {/* Introduction */}
          <section className="prose dark:prose-invert max-w-none mb-16">
            <div className="bg-white dark:bg-charcoal/50 rounded-xl p-6 lg:p-8 border border-border-light dark:border-border-dark">
              <p className="text-lg leading-relaxed text-midnight dark:text-offwhite">
                I'm Brian Kibet, an AI Trainer and LLM Evaluation Specialist with over three years of experience in remote AI training and evaluation. My work focuses on providing the structured human feedback that helps language models become more aligned with human values and expectations.
              </p>
              <p className="text-lg leading-relaxed text-midnight dark:text-offwhite mt-4">
                Through platforms like Scale AI, I evaluate model outputs across text, image, and audio modalities — performing pairwise preference ranking, rubric-based scoring, safety labeling, and detailed quality assessment. I've annotated and quality-checked over 10,000 data points while maintaining quality scores consistently above 95%.
              </p>
            </div>
          </section>

          {/* Approach */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-midnight dark:text-offwhite mb-8">
              My Approach to AI Evaluation
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Precision & Thoroughness',
                  description: 'Every evaluation follows a structured methodology. I decompose complex judgments into measurable dimensions, verify claims against reliable sources, and document reasoning clearly.',
                },
                {
                  icon: Award,
                  title: 'Quality Standards',
                  description: 'I maintain quality through regular calibration exercises, systematic self-review, and careful attention to guideline updates. Consistency and reliability are non-negotiable.',
                },
                {
                  icon: BookOpen,
                  title: 'Continuous Learning',
                  description: 'AI evaluation is a rapidly evolving field. I stay current with emerging evaluation methodologies, new model capabilities, and evolving safety standards.',
                },
                {
                  icon: Users,
                  title: 'Collaborative Excellence',
                  description: 'I thrive in distributed teams, contributing to inter-annotator agreement, sharing insights with peers, and maintaining productive async workflows across time zones.',
                },
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="p-6 rounded-xl border border-border-light dark:border-border-dark hover:border-teal-accent/30 transition-colors">
                  <Icon size={24} className="text-teal-accent mb-3" />
                  <h3 className="font-semibold text-midnight dark:text-offwhite mb-2">{title}</h3>
                  <p className="text-sm text-slate-muted leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Philosophy */}
          <section className="mb-16">
            <div className="bg-teal-accent/5 dark:bg-teal-accent/10 rounded-xl p-6 lg:p-8 border border-teal-accent/20">
              <h2 className="text-2xl font-bold text-midnight dark:text-offwhite mb-4">
                Quality & Accuracy Philosophy
              </h2>
              <p className="text-slate-muted leading-relaxed mb-4">
                I believe that AI evaluation is fundamentally about protecting the integrity of the feedback signal. Every preference ranking, every quality score, and every safety label directly shapes how models learn to behave. Inaccurate or inconsistent evaluation doesn't just produce bad data — it actively misaligns models.
              </p>
              <p className="text-slate-muted leading-relaxed mb-4">
                This is why I approach every evaluation task with the same rigor I'd apply to any high-stakes analytical work: verify before asserting, document before concluding, and calibrate before committing.
              </p>
              <p className="text-slate-muted leading-relaxed">
                My goal is to produce evaluation work that AI research teams can trust completely — work where the reasoning is transparent, the standards are consistent, and the quality speaks for itself.
              </p>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-midnight dark:text-offwhite mb-8">
              Professional Timeline
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-teal-accent/30">
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-teal-accent rounded-full" />
                  <div className="pb-2">
                    <span className="text-sm font-medium text-teal-accent">{exp.period}</span>
                    <h3 className="text-lg font-semibold text-midnight dark:text-offwhite mt-1">
                      {exp.role}
                    </h3>
                    <p className="text-slate-muted">{exp.company} · {exp.type}</p>
                  </div>
                </div>
              ))}
              <div className="relative pl-8 border-l-2 border-teal-accent/30">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-teal-accent rounded-full" />
                <div className="pb-2">
                  <span className="text-sm font-medium text-teal-accent">Education</span>
                  <h3 className="text-lg font-semibold text-midnight dark:text-offwhite mt-1">
                    {education.degree}
                  </h3>
                  <p className="text-slate-muted text-sm mt-1">
                    Relevant coursework: {education.relevantCoursework.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-12">
            <h2 className="text-2xl font-bold text-midnight dark:text-offwhite mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-slate-muted mb-6">
              I'm available for remote AI evaluation engagements and contract opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-accent hover:bg-teal-dark text-white rounded-lg font-semibold transition-all"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
