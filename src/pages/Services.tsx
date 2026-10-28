import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { services } from '../data/content';
import { ArrowRight, CheckCircle, FileText, HelpCircle } from 'lucide-react';

function ServicesIndex() {
  return (
    <>
      <SEO
        title="Services — Brian Kibet | AI Evaluation Services"
        description="Professional AI evaluation services including LLM evaluation, RLHF preference ranking, SFT data creation, prompt evaluation, and quality assurance."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-midnight dark:text-offwhite mb-4">
              Professional Services
            </h1>
            <p className="text-xl text-slate-muted leading-relaxed max-w-3xl">
              Comprehensive AI evaluation and training services grounded in verified professional experience. Each service addresses specific challenges in the AI development pipeline.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group p-6 rounded-xl border border-border-light dark:border-border-dark hover:border-teal-accent/30 hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-semibold text-midnight dark:text-offwhite mb-3 group-hover:text-teal-accent transition-colors">
                  {service.title}
                </h2>
                <p className="text-sm text-slate-muted leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-teal-accent text-sm font-medium">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <section className="mt-16 text-center">
            <div className="bg-teal-accent/5 dark:bg-teal-accent/10 rounded-xl p-8 border border-teal-accent/20">
              <h2 className="text-2xl font-bold text-midnight dark:text-offwhite mb-4">
                Ready to Discuss Your Project?
              </h2>
              <p className="text-slate-muted mb-6 max-w-xl mx-auto">
                Every project is unique. Let's discuss your specific requirements and how I can help.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-accent hover:bg-teal-dark text-white rounded-lg font-semibold transition-all"
              >
                Request a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-midnight dark:text-offwhite mb-4">Service Not Found</h1>
          <Link to="/services" className="text-teal-accent hover:underline">← Back to Services</Link>
        </div>
      </main>
    );
  }

  const faqs = [
    { q: `What does ${service.title} involve?`, a: service.shortDescription },
    { q: 'How do you ensure quality?', a: service.quality },
    { q: 'Can we discuss scope before committing?', a: 'Absolutely. I encourage initial discussions to understand your specific requirements, timeline, and quality expectations before any engagement begins.' },
  ];

  return (
    <>
      <SEO
        title={`${service.title} — Services | Brian Kibet`}
        description={service.shortDescription}
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: service.title }]} />

          <header className="mb-12">
            <h1 className="text-4xl font-bold text-midnight dark:text-offwhite mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-slate-muted leading-relaxed">
              {service.shortDescription}
            </p>
          </header>

          {/* Problem */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-midnight dark:text-offwhite mb-4">
              The Problem This Addresses
            </h2>
            <p className="text-slate-muted leading-relaxed">{service.problem}</p>
          </section>

          {/* Methods */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-midnight dark:text-offwhite mb-4">
              Methods & Workflows
            </h2>
            <ul className="space-y-3">
              {service.methods.map(method => (
                <li key={method} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-teal-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-muted">{method}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Deliverables */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-midnight dark:text-offwhite mb-4">
              Expected Deliverables
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.deliverables.map(item => (
                <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-offwhite dark:bg-charcoal/50">
                  <FileText size={16} className="text-teal-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-muted">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Quality */}
          <section className="mb-10">
            <div className="p-6 rounded-xl bg-teal-accent/5 dark:bg-teal-accent/10 border border-teal-accent/20">
              <h2 className="text-xl font-bold text-midnight dark:text-offwhite mb-3">
                Quality Considerations
              </h2>
              <p className="text-slate-muted leading-relaxed">{service.quality}</p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-midnight dark:text-offwhite mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group rounded-lg border border-border-light dark:border-border-dark">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-midnight dark:text-offwhite">
                    {faq.q}
                    <HelpCircle size={18} className="text-slate-muted group-open:rotate-45 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 text-slate-muted text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-accent hover:bg-teal-dark text-white rounded-lg font-semibold transition-all"
            >
              Discuss Scope <ArrowRight size={18} />
            </Link>
          </section>

          {/* Other services */}
          <section className="mt-12 pt-8 border-t border-border-light dark:border-border-dark">
            <h3 className="text-lg font-semibold text-midnight dark:text-offwhite mb-4">Other Services</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.filter(s => s.slug !== slug).slice(0, 4).map(s => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="p-3 rounded-lg border border-border-light dark:border-border-dark hover:border-teal-accent/30 transition-colors text-sm"
                >
                  <span className="font-medium text-midnight dark:text-offwhite">{s.title}</span>
                  <p className="text-xs text-slate-muted mt-1">{s.shortDescription}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default function Services() {
  const { slug } = useParams();
  if (slug) return <ServiceDetail />;
  return <ServicesIndex />;
}
