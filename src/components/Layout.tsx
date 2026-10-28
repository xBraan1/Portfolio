import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { navItems, profile } from '../data/content';
import { Menu, X, Sun, Moon, ExternalLink } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-midnight/90 backdrop-blur-md shadow-sm border-b border-border-light dark:border-border-dark'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-lg text-midnight dark:text-offwhite hover:text-teal-accent transition-colors"
          >
            <span className="w-8 h-8 bg-teal-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">
              BK
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-teal-accent bg-teal-accent/10'
                    : 'text-slate-muted hover:text-midnight dark:hover:text-offwhite hover:bg-slate-muted/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-muted hover:text-midnight dark:hover:text-offwhite hover:bg-slate-muted/10 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-teal-accent hover:bg-teal-dark text-white rounded-lg text-sm font-medium transition-colors"
            >
              Get in Touch
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-muted hover:text-midnight dark:hover:text-offwhite hover:bg-slate-muted/10 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-midnight border-b border-border-light dark:border-border-dark shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-teal-accent bg-teal-accent/10'
                      : 'text-slate-muted hover:text-midnight dark:hover:text-offwhite hover:bg-slate-muted/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-4 py-3 mt-4 bg-teal-accent text-white rounded-lg text-center font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal dark:bg-surface-dark border-t border-border-light dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg text-offwhite mb-4">
              <span className="w-8 h-8 bg-teal-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">
                BK
              </span>
              {profile.name}
            </Link>
            <p className="text-slate-muted text-sm leading-relaxed">
              {profile.title}. Focused on making AI systems more helpful, honest, and harmless through rigorous evaluation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-offwhite font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.slice(0, 6).map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-muted hover:text-teal-light text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-offwhite font-semibold text-sm uppercase tracking-wider mb-4">More</h3>
            <ul className="space-y-2">
              {navItems.slice(6).map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-muted hover:text-teal-light text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="text-slate-muted hover:text-teal-light text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-muted hover:text-teal-light text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-offwhite font-semibold text-sm uppercase tracking-wider mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-muted hover:text-teal-light text-sm transition-colors"
                >
                  LinkedIn <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={profile.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-muted hover:text-teal-light text-sm transition-colors"
                >
                  X (Twitter) <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={profile.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-muted hover:text-teal-light text-sm transition-colors"
                >
                  Telegram <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={profile.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-muted hover:text-teal-light text-sm transition-colors"
                >
                  Instagram <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={profile.social.reddit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-muted hover:text-teal-light text-sm transition-colors"
                >
                  Reddit <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-dark">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-muted text-sm">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="text-slate-muted text-xs">
              Built with care and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; path?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-slate-muted flex-wrap">
        <li>
          <Link to="/" className="hover:text-teal-accent transition-colors">Home</Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-slate-muted/50">/</span>
            {item.path ? (
              <Link to={item.path} className="hover:text-teal-accent transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-midnight dark:text-offwhite font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SEO({ title, description, canonical, ogImage }: {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink && canonical) canonicalLink.setAttribute('href', canonical);
  }, [title, description, canonical]);

  return null;
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
