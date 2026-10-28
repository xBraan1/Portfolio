import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';

export function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy — Brian Kibet" description="Privacy policy for briankibet.dev covering data collection, usage, and user rights." />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <article className="prose dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-midnight dark:text-offwhite mb-8">Privacy Policy</h1>
            <p className="text-slate-muted mb-4"><em>Last updated: January 2024. This is an editable framework — review and customize before publishing.</em></p>

            <h2>1. Information We Collect</h2>
            <p>When you use the contact form on this website, we collect:</p>
            <ul>
              <li>Name and email address (provided voluntarily)</li>
              <li>Organization name (optional)</li>
              <li>Message content</li>
              <li>Consent confirmation</li>
            </ul>
            <p>We may also collect technical information automatically, including IP address, browser type, and pages visited, if analytics are enabled with appropriate consent.</p>

            <h2>2. How We Use Information</h2>
            <p>Information collected through the contact form is used solely to respond to your inquiry. We do not sell, share, or use your personal data for marketing purposes without explicit consent.</p>

            <h2>3. Data Retention</h2>
            <p>Contact form submissions are retained only as long as necessary to respond to your inquiry. Analytics data (if enabled) is retained according to the analytics provider's policies.</p>

            <h2>4. Cookies</h2>
            <p>This website uses:</p>
            <ul>
              <li><strong>Necessary cookies:</strong> Theme preference storage (localStorage)</li>
              <li><strong>Analytics cookies:</strong> Only if consent is provided through the cookie preference interface</li>
            </ul>

            <h2>5. Third-Party Services</h2>
            <p>This website may integrate with: analytics platforms (with consent), font hosting services (Google Fonts). These services have their own privacy policies.</p>

            <h2>6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data. Contact us to exercise these rights.</p>

            <h2>7. Security</h2>
            <p>We implement reasonable security measures to protect personal data. However, no method of transmission over the internet is 100% secure.</p>

            <h2>8. Changes to This Policy</h2>
            <p>We may update this policy periodically. Changes will be posted on this page with an updated revision date.</p>

            <h2>9. Contact</h2>
            <p>For privacy-related inquiries, please use the <Link to="/contact" className="text-teal-accent hover:underline">contact form</Link>.</p>

            <div className="mt-8 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <p className="text-sm text-amber-800 dark:text-amber-300">
                <strong>Important:</strong> This privacy policy is a framework template. It should be reviewed by a legal professional and customized to reflect your actual data practices, jurisdiction, and applicable laws before being published as a binding policy.
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

export function Terms() {
  return (
    <>
      <SEO title="Terms of Service — Brian Kibet" description="Terms of service for using briankibet.dev." />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
          <article className="prose dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-midnight dark:text-offwhite mb-8">Terms of Service</h1>
            <p className="text-slate-muted mb-4"><em>Last updated: January 2024. This is an editable framework — review and customize before publishing.</em></p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by these terms of service.</p>

            <h2>2. Use of the Website</h2>
            <p>This website is provided for informational purposes relating to professional AI evaluation services. You may use this website to learn about available services, review professional qualifications, and submit inquiries through the contact form.</p>

            <h2>3. Intellectual Property</h2>
            <p>All content on this website — including text, design, code, and graphics — is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit permission.</p>

            <h2>4. Professional Information</h2>
            <p>Information presented on this website regarding professional capabilities, experience, and services is provided for informational purposes. Specific engagement terms would be established through direct agreement.</p>

            <h2>5. External Links</h2>
            <p>This website contains links to external sites. We are not responsible for the content or privacy practices of external websites.</p>

            <h2>6. Disclaimer</h2>
            <p>This website is provided "as is" without warranties of any kind. We do not guarantee that the website will be uninterrupted, error-free, or completely secure.</p>

            <h2>7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, we shall not be liable for any damages arising from the use of this website.</p>

            <h2>8. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the modified terms.</p>

            <h2>9. Contact</h2>
            <p>For questions about these terms, please use the <Link to="/contact" className="text-teal-accent hover:underline">contact form</Link>.</p>

            <div className="mt-8 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <p className="text-sm text-amber-800 dark:text-amber-300">
                <strong>Important:</strong> These terms of service are a framework template. They should be reviewed by a legal professional and customized to reflect your actual business practices and applicable jurisdiction before being published.
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

export function Cookies() {
  const [preferences, setPreferences] = React.useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const [saved, setSaved] = React.useState(false);

  const handleSave = () => {
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <>
      <SEO title="Cookie Preferences — Brian Kibet" description="Manage your cookie preferences for this website." />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Cookie Preferences' }]} />

          <h1 className="text-4xl font-bold text-midnight dark:text-offwhite mb-4">Cookie Preferences</h1>
          <p className="text-slate-muted mb-8">
            Manage how this website uses cookies and similar technologies. Your preferences are stored locally in your browser.
          </p>

          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border-light dark:border-border-dark">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-midnight dark:text-offwhite">Necessary</h2>
                <span className="px-2 py-1 bg-teal-accent/10 text-teal-accent text-xs font-medium rounded">Always Active</span>
              </div>
              <p className="text-sm text-slate-muted">
                Essential for the website to function properly. Includes theme preference storage and basic site functionality. These cannot be disabled.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border-light dark:border-border-dark">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-midnight dark:text-offwhite">Analytics</h2>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 peer-focus:ring-2 peer-focus:ring-teal-accent rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-accent"></div>
                </label>
              </div>
              <p className="text-sm text-slate-muted">
                Help us understand how visitors interact with the website by collecting anonymous usage data. Only activated with your explicit consent.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border-light dark:border-border-dark">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-midnight dark:text-offwhite">Marketing</h2>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 peer-focus:ring-2 peer-focus:ring-teal-accent rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-accent"></div>
                </label>
              </div>
              <p className="text-sm text-slate-muted">
                Used for advertising and marketing purposes. Currently not in use on this website.
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-teal-accent hover:bg-teal-dark text-white rounded-lg font-semibold transition-all"
            >
              Save Preferences
            </button>
            {saved && (
              <span className="text-sm text-teal-accent font-medium">✓ Preferences saved</span>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
