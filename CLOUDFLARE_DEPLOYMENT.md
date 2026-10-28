# Cloudflare Pages Deployment Guide

## Deployment Configuration

When deploying to Cloudflare Pages via GitHub integration, use these settings in your Cloudflare Pages dashboard:

### Build Settings

- **Framework preset**: `Vite` (or "None")
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave as default)
- **Node.js version**: `18` or higher

### Environment Variables (Optional)

No environment variables are required for basic deployment.

## Files Included for Deployment

The following files ensure proper deployment and SPA routing:

1. **`wrangler.toml`** - Wrangler configuration (for CLI deployments)
   - Specifies `dist` as the build output directory
   - Defines build command

2. **`public/_redirects`** - SPA routing fallback
   - Redirects all routes to `index.html` for client-side routing

3. **`public/_routes.json`** - Cloudflare Pages routing rules
   - Tells Cloudflare which routes to handle as SPA vs static assets

4. **`public/robots.txt`** - SEO robots configuration
5. **`public/sitemap.xml`** - Sitemap for search engines
6. **`public/llms.txt`** - AI/LLM guidance file

## Deployment Methods

### Method 1: Cloudflare Pages GitHub Integration (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Create**
3. Select **Pages** → **Connect to Git**
4. Choose your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**

Cloudflare will automatically build and deploy on every push to your repository.

### Method 2: Wrangler CLI

If you prefer using Wrangler CLI:

```bash
# Install Wrangler globally (if not already installed)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist
```

## SPA Routing

The site uses React Router for client-side routing. The `_redirects` and `_routes.json` files ensure that:

- Direct URL access to any route works (e.g., `/about`, `/services/llm-evaluation`)
- Browser refresh on any page works correctly
- Static assets (CSS, JS, images) are served directly
- All other routes fall back to `index.html` for client-side routing

## Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] Navigation works on all pages
- [ ] Direct URL access works (e.g., `yoursite.com/about`)
- [ ] Mobile responsive design works
- [ ] Dark theme displays correctly
- [ ] Contact form loads (backend integration required for actual submission)
- [ ] Social links open in new tabs
- [ ] No console errors in browser dev tools

## Custom Domain (Optional)

To add a custom domain:

1. Go to your Cloudflare Pages project
2. Navigate to **Custom domains**
3. Click **Set up a custom domain**
4. Follow the instructions to add your domain
5. Configure DNS records as instructed

## Troubleshooting

### "Could not detect a directory containing static files"

This error means Wrangler can't find the built files. Ensure:

1. The build command completed successfully
2. The `dist` directory exists after build
3. `wrangler.toml` has `pages_build_output_dir = "dist"`

### Pages not loading after refresh

If refreshing a page shows a 404:

1. Verify `public/_redirects` exists with content: `/*  /index.html  200`
2. Verify `public/_routes.json` exists with proper routing rules
3. Redeploy the site

### Build fails on Cloudflare

If the build fails:

1. Check the build logs in Cloudflare dashboard
2. Verify Node.js version is 18 or higher
3. Ensure all dependencies are in `package.json`
4. Try building locally first: `npm run build`

## Performance Optimization

The site is already optimized with:

- Code splitting (lazy-loaded pages)
- Gzip compression (handled by Cloudflare)
- Optimized images (no large images included)
- Minimal JavaScript bundle (~75KB gzipped)
- Preconnected fonts for faster loading

## Analytics (Optional)

To enable Google Analytics:

1. Add your GA4 measurement ID to environment variables:
   - Variable: `VITE_GA_MEASUREMENT_ID`
   - Value: Your GA4 measurement ID (e.g., `G-XXXXXXXXXX`)
2. Redeploy the site

## Support

For Cloudflare Pages support:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)
