import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/Layout';
import { Home, Search, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <>
      <SEO title="Page Not Found — Brian Kibet" description="The page you're looking for doesn't exist." />
      <main className="pt-24 lg:pt-32 pb-16 min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-8xl font-bold text-teal-accent/20 mb-4">404</div>
          <h1 className="text-3xl font-bold text-midnight dark:text-offwhite mb-4">
            Page Not Found
          </h1>
          <p className="text-slate-muted mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-accent hover:bg-teal-dark text-white rounded-lg font-semibold transition-all"
            >
              <Home size={18} /> Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-border-light dark:border-border-dark text-midnight dark:text-offwhite rounded-lg font-semibold hover:border-teal-accent hover:text-teal-accent transition-all"
            >
              <ArrowLeft size={18} /> Go Back
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-border-light dark:border-border-dark">
            <h2 className="text-lg font-semibold text-midnight dark:text-offwhite mb-4">
              Popular Pages
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'About', path: '/about' },
                { label: 'Expertise', path: '/expertise' },
                { label: 'Services', path: '/services' },
                { label: 'Contact', path: '/contact' },
              ].map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="p-3 rounded-lg border border-border-light dark:border-border-dark hover:border-teal-accent/30 text-sm font-medium text-slate-muted hover:text-teal-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export function ThankYou() {
  return (
    <>
      <SEO title="Thank You — Brian Kibet" description="Thank you for your inquiry." />
      <main className="pt-24 lg:pt-32 pb-16 min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-teal-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-teal-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-midnight dark:text-offwhite mb-4">
            Thank You
          </h1>
          <p className="text-slate-muted mb-4 max-w-md mx-auto">
            Your inquiry has been received. Please note that this is a frontend demonstration — in production, your message would be delivered through a configured backend service.
          </p>
          <p className="text-sm text-slate-muted mb-8">
            For urgent matters, you can also connect through LinkedIn or Telegram.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-accent hover:bg-teal-dark text-white rounded-lg font-semibold transition-all"
          >
            <Home size={18} /> Return Home
          </Link>
        </div>
      </main>
    </>
  );
}
