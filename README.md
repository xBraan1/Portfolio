# Brian Kibet — AI Trainer & LLM Evaluation Specialist

Professional portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## 🏗️ Build

```bash
npm run build
```

Production build outputs to `dist/` directory.

## 🌐 Deployment

**⚠️ IMPORTANT:** See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions.

### Quick Fix for Cloudflare Pages

If you're seeing "Could not detect a directory containing static files" error:

1. Go to **Cloudflare Dashboard → Your Pages Project → Settings → Builds & deployments**
2. Set **Build command** to: `npm run build`
3. Set **Build output directory** to: `dist`
4. **Remove** the deploy command (leave it empty)
5. Save and redeploy

### GitHub Actions (Recommended)

The repository includes automated deployment via GitHub Actions:

1. Add secrets to GitHub:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
2. Push to `main` or `master` branch
3. Deployment happens automatically

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed setup instructions.

## 📁 Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React contexts (theme, language)
│   ├── data/          # Content data
│   ├── pages/         # Page components
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── public/            # Static assets
├── dist/              # Build output (generated)
└── package.json       # Dependencies and scripts
```

## 🎨 Features

- Multi-page SPA with React Router
- Dark theme with xBraan1 signature branding
- Responsive design for all devices
- SEO optimized with metadata
- Accessible (WCAG 2.2 AA targets)
- Internationalization-ready
- Contact form with validation
- Case studies and portfolio
- Professional services pages

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Lucide React** - Icons

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run typecheck    # Run TypeScript checks
npm run deploy       # Build and deploy to Cloudflare
```

## 📄 License

© 2024 Brian Kibet. All rights reserved.
