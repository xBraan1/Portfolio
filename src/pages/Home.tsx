import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/Layout';
import { profile, expertiseAreas, caseStudies } from '../data/content';
import { ArrowRight, Shield, Brain, Target, CheckCircle, Code, MessageSquare } from 'lucide-react';

export default function Home() {
  const keyExpertise = expertiseAreas.slice(0, 6);
  const featuredWork = caseStudies.slice(0, 2);

  return (
    <>
      <SEO
        title="Brian Kibet — AI Trainer & LLM Evaluation Specialist"
        description="AI Trainer & LLM Evaluation Specialist with expertise in RLHF, SFT, Prompt Engineering, and Model Quality. 3+ years of remote experience."
      />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-accent/5 via-transparent to-teal-accent/3 dark:from-teal-accent/10 dark:to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-accent/10 border border-teal-accent/20 rounded-full text-teal-accent text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-teal-accent rounded-full animate-pulse" />
                Available for remote engagements
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-midnight dark:text-offwhite leading-tight mb-6">
                {profile.name}
              </h1>

              <p className="text-xl sm:text-2xl text-teal-accent font-semibold mb-4">
                {profile.title}
              </p>

              <p className="text-lg text-slate-muted mb-8 leading-relaxed max-w-xl">
                {profile.summary}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-accent hover:bg-teal-dark text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-teal-accent/25"
                >
                  Discuss an Opportunity
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/expertise"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-midnight/20 dark:border-offwhite/20 text-midnight dark:text-offwhite rounded-lg font-semibold hover:border-teal-accent hover:text-teal-accent transition-all"
                >
                  Explore My Expertise
                </Link>
              </div>
            </div>

            {/* Professional Identity Card */}
            <div className="relative">
              <div className="relative bg-white dark:bg-charcoal rounded-2xl p-8 shadow-xl border border-border-light dark:border-border-dark">
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-teal-accent/10 rounded-full blur-xl" />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-teal-accent/10 rounded-full blur-xl" />
                
                <div className="relative space-y-6">
                  {/* Identity */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-accent to-teal-dark rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      BK
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-midnight dark:text-offwhite">{profile.name}</h2>
                      <p className="text-sm text-slate-muted">{profile.tagline}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-offwhite dark:bg-midnight/50 rounded-lg p-4">
                      <p className="text-2xl font-bold text-teal-accent">{profile.stats.yearsExperience}</p>
                      <p className="text-xs text-slate-muted mt-1">Years Experience</p>
                    </div>
                    <div className="bg-offwhite dark:bg-midnight/50 rounded-lg p-4">
                      <p className="text-2xl font-bold text-teal-accent">{profile.stats.dataPointsAnnotated}</p>
                      <p className="text-xs text-slate-muted mt-1">Data Points</p>
                    </div>
                    <div className="bg-offwhite dark:bg-midnight/50 rounded-lg p-4">
                      <p className="text-2xl font-bold text-teal-accent">{profile.stats.qualityScore}</p>
                      <p className="text-xs text-slate-muted mt-1">Quality Score</p>
                    </div>
                    <div className="bg-offwhite dark:bg-midnight/50 rounded-lg p-4">
                      <p className="text-lg font-bold text-teal-accent">{profile.stats.modalitiesEvaluated}</p>
                      <p className="text-xs text-slate-muted mt-1">Modalities</p>
                    </div>
                  </div>

                  {/* Core Focus */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-muted">Core Focus</p>
                    <div className="flex flex-wrap gap-2">
                      {['RLHF', 'SFT', 'Prompt Engineering', 'Model Quality', 'AI Safety'].map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-teal-accent/10 text-teal-accent text-xs font-medium rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="py-16 lg:py-24 bg-white dark:bg-charcoal/50 border-y border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-midnight dark:text-offwhite mb-4">
              What I Bring to AI Evaluation
            </h2>
            <p className="text-slate-muted max-w-2xl mx-auto">
              Rigorous, systematic evaluation grounded in deep understanding of model behavior, quality standards, and safety requirements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: 'Deep Evaluation', desc: 'Multi-dimensional assessment across helpfulness, accuracy, safety, and instruction following.' },
              { icon: Shield, title: 'Safety Focus', desc: 'Systematic identification of harmful, biased, or policy-violating content.' },
              { icon: Target, title: 'Quality Driven', desc: 'Consistent quality scores above 95% through rigorous self-review and calibration.' },
              { icon: CheckCircle, title: 'Reliable Delivery', desc: '3+ years of dependable remote work with structured async collaboration.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl bg-offwhite dark:bg-midnight/50 border border-border-light dark:border-border-dark hover:border-teal-accent/30 transition-colors group">
                <div className="w-12 h-12 bg-teal-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-accent/20 transition-colors">
                  <Icon size={24} className="text-teal-accent" />
                </div>
                <h3 className="font-semibold text-midnight dark:text-offwhite mb-2">{title}</h3>
                <p className="text-sm text-slate-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-midnight dark:text-offwhite mb-4">
                Core Expertise
              </h2>
              <p className="text-slate-muted max-w-xl">
                Comprehensive capabilities across the AI evaluation and training pipeline.
              </p>
            </div>
            <Link
              to="/expertise"
              className="hidden sm:inline-flex items-center gap-2 text-teal-accent hover:text-teal-dark font-medium transition-colors"
            >
              View all <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyExpertise.map(area => (
              <div
                key={area.id}
                className="p-5 rounded-xl border border-border-light dark:border-border-dark hover:border-teal-accent/30 hover:shadow-md transition-all group"
              >
                <span className="text-xs font-medium text-teal-accent uppercase tracking-wider">{area.category}</span>
                <h3 className="font-semibold text-midnight dark:text-offwhite mt-2 mb-2 group-hover:text-teal-accent transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-slate-muted leading-relaxed line-clamp-3">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:text-left">
            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 text-teal-accent hover:text-teal-dark font-medium transition-colors sm:hidden"
            >
              View all expertise <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Work Preview */}
      <section className="py-16 lg:py-24 bg-white dark:bg-charcoal/50 border-y border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-midnight dark:text-offwhite mb-4">
                Selected Work
              </h2>
              <p className="text-slate-muted max-w-xl">
                Illustrative case studies demonstrating evaluation methodology and approach.
              </p>
            </div>
            <Link
              to="/work"
              className="hidden sm:inline-flex items-center gap-2 text-teal-accent hover:text-teal-dark font-medium transition-colors"
            >
              View all <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredWork.map(study => (
              <Link
                key={study.id}
                to={`/work#${study.id}`}
                className="block p-6 rounded-xl border border-border-light dark:border-border-dark hover:border-teal-accent/30 hover:shadow-lg transition-all group"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-teal-accent/10 text-teal-accent text-xs font-medium rounded">
                      {tag}
                    </span>
                  ))}
                  <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium rounded">
                    Illustrative
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-midnight dark:text-offwhite mb-3 group-hover:text-teal-accent transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-slate-muted leading-relaxed mb-4">
                  {study.context}
                </p>
                <span className="inline-flex items-center gap-1 text-teal-accent text-sm font-medium">
                  Read more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-teal-accent/10 to-teal-accent/5 dark:from-teal-accent/20 dark:to-teal-accent/5 rounded-2xl p-8 lg:p-12 border border-teal-accent/20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-teal-accent/20 rounded-full flex items-center justify-center">
                <MessageSquare size={28} className="text-teal-accent" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-midnight dark:text-offwhite mb-4">
              Let's Discuss Your AI Evaluation Needs
            </h2>
            <p className="text-slate-muted mb-8 max-w-xl mx-auto">
              Whether you need LLM evaluation, RLHF annotation, SFT data creation, or quality assurance — I'm available for remote engagements and contract opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-accent hover:bg-teal-dark text-white rounded-lg font-semibold transition-all hover:shadow-lg"
              >
                Discuss an Opportunity
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-teal-accent/30 text-teal-accent rounded-lg font-semibold hover:bg-teal-accent/5 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
