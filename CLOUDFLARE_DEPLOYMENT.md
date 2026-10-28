# Cloudflare Deployment Guide

## Project Type

This is a **Vite + React + TypeScript SPA** that builds to the `dist/` directory and deploys as a Cloudflare Worker with static assets.

## Deployment Method

The project uses **Wrangler CLI** with the `[assets]` binding to serve static files from a Worker.

### Build Command
```bash
npm run build
```
Output: `dist/` directory containing `index.html`, CSS, JS, and assets.

### Deploy Command
```bash
npx wrangler deploy
```

## Configuration

### wrangler.toml
```toml
name = "brian-kibet-portfolio"
compatibility_date = "2024-01-01"

[assets]
directory = "./dist"
not_found_handling = "single-page-application"
```

- `[assets]` tells Wrangler to serve static files from `./dist`
- `not_found_handling = "single-page-application"` enables SPA routing (all unknown routes serve `index.html`)

## Cloudflare Pages GitHub Integration

If deploying via Cloudflare Pages dashboard with GitHub integration:

### Option A: Let Pages Handle Build (Recommended)
In Cloudflare Pages settings:
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Deploy command**: *(leave empty — let Pages handle it)*

### Option B: Keep Custom Deploy Command
If you must use a custom deploy command:
- **Deploy command**: `npx wrangler deploy`
- The `wrangler.toml` in the repo will be used

## SPA Routing

The React Router handles client-side routing. The `not_found_handling = "single-page-application"` setting in `wrangler.toml` ensures that:
- Direct URL access to any route works (e.g., `/about`, `/services/llm-evaluation`)
- Browser refresh on any page works correctly
- All unknown routes fall back to `index.html`

## Files in dist/

After build, `dist/` contains:
- `index.html` — Entry point
- `assets/` — JS and CSS bundles (code-split)
- `robots.txt` — SEO configuration
- `sitemap.xml` — Sitemap
- `llms.txt` — AI/LLM guidance
- `_redirects` — Fallback SPA routing (for Pages compatibility)
- `_routes.json` — Cloudflare Pages routing rules

## Troubleshooting

### "Could not detect a directory containing static files"
This error means Wrangler cannot find the `dist/` directory. Ensure:
1. `npm run build` has been run successfully
2. `dist/` directory exists and contains `index.html`
3. `wrangler.toml` has `[assets]` with `directory = "./dist"`

### Pages not loading after refresh
If refreshing shows a 404:
1. Verify `not_found_handling = "single-page-application"` is in `wrangler.toml`
2. Redeploy

### Build fails
1. Check Node.js version (18+)
2. Run `npm install` first
3. Run `npm run build` locally to verify

## Performance

- Bundle size: ~75KB gzipped
- Code splitting: 10 lazy-loaded page chunks
- Fonts: Preconnected Google Fonts (Inter, Alex Brush)
