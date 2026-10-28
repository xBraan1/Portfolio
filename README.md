# Brian Kibet — AI Trainer & LLM Evaluation Specialist

## Personal Portfolio Website

A professional, multi-page portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Multi-page SPA** with proper client-side routing
- **Dark/Light mode** with persistent theme preference
- **Responsive design** — mobile-first, works on all devices
- **Accessible** — WCAG 2.2 AA targets, keyboard navigation, screen reader support
- **SEO optimized** — unique metadata, structured data, sitemap, robots.txt
- **Internationalization-ready** — i18n architecture with English as default
- **Contact form** with validation and honest submission states
- **Lazy-loaded pages** for optimal performance
- **Reduced motion support** for accessibility

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Professional identity and overview |
| `/about` | About — Background, approach, philosophy |
| `/expertise` | Expertise — Detailed capabilities with search/filter |
| `/services` | Services — Professional service offerings |
| `/services/:slug` | Individual service pages |
| `/experience` | Experience — Work history and education |
| `/work` | Selected Work — Illustrative case studies |
| `/skills` | Skills — Tools and technical proficiencies |
| `/insights` | Insights — Articles and professional writing |
| `/insights/:id` | Individual article pages |
| `/faq` | FAQ — Searchable, filterable accordion |
| `/contact` | Contact — Professional inquiry form |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/cookies` | Cookie Preferences |
| `/thank-you` | Form submission confirmation |
| `*` | 404 Not Found |

## Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool and dev server
- **Tailwind CSS v4** — Utility-first styling
- **React Router v6** — Client-side routing
- **Lucide React** — Icon library
- **react-helmet-async** — SEO metadata management

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

### Build

```bash
npm run build
```

Output will be in the `dist/` directory.

### Type Check

```bash
npm run typecheck
```

## Deployment

### SPA Routing Configuration

This is a Single Page Application. Your hosting platform must redirect all routes to `index.html`.

**Netlify:** The `public/_redirects` file handles this automatically.

**Vercel:** Add a `vercel.json` at the project root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Cloudflare Pages:** The `public/_redirects` file handles this.

**Other platforms:** Configure a catch-all route to serve `index.html` for all paths.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID | No |
| `VITE_API_BASE_URL` | Backend API base URL for contact form | No |

Without these, analytics is disabled and the contact form operates in demonstration mode.

## Remaining Dependencies / Configuration

### Required for Full Production

1. **Backend API** — Contact form requires a server endpoint for actual message delivery
2. **Google Analytics** — Set `VITE_GA_MEASUREMENT_ID` to enable analytics
3. **Legal Review** — Privacy Policy and Terms of Service are framework templates requiring legal review
4. **Domain Configuration** — Update canonical URLs and sitemap with actual domain
5. **CV Download** — Generate and place a PDF version of the CV in `public/` directory
6. **Social Profile Verification** — Verify that all social profile URLs resolve correctly

### Optional Enhancements

- Add real portrait photography when available
- Integrate CMS for insights/articles management
- Add analytics event tracking for conversion optimization
- Implement server-side rendering for improved SEO
- Add multi-language translations beyond English

## Content Integrity

All professional content is based on verified source material:
- Employment history, dates, and responsibilities from CV
- Skills and tools from documented professional experience
- Case studies are clearly labeled as illustrative exercises
- No university name is displayed (privacy requirement)
- No fabricated metrics, testimonials, or client information

## Browser Support

- Chrome/Edge 90+
- Firefox 90+
- Safari 15+
- Mobile browsers (iOS Safari, Chrome for Android)

## License

© 2024 Brian Kibet. All rights reserved.
