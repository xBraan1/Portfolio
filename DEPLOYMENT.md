# Cloudflare Deployment Guide

## ⚠️ IMPORTANT: Fix Your Cloudflare Dashboard Settings

Your repository is correctly configured, but your **Cloudflare Pages dashboard has incorrect settings** that prevent deployment.

### The Problem

Your Cloudflare Pages project is configured with:
- **Build command:** (empty)
- **Build output directory:** (empty)  
- **Deploy command:** `npx wrangler deploy` (WRONG)

This causes Cloudflare to skip the build step entirely, resulting in a missing `dist/` directory.

---

## ✅ Solution: Update Cloudflare Dashboard Settings

### Step 1: Go to Cloudflare Dashboard

1. Visit [https://dash.cloudflare.com](https://dash.cloudflare.com)
2. Click on your Pages project
3. Go to **Settings** → **Builds & deployments**

### Step 2: Update Build Settings

Configure these settings:

| Setting | Value |
|---------|-------|
| **Framework preset** | `Vite` (or "None") |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Deploy command** | *(leave empty)* |

### Step 3: Save and Deploy

1. Click **Save**
2. Trigger a new deployment (push to GitHub or manually trigger)

---

## 🔧 Alternative: Use GitHub Actions

Your repository includes a GitHub Actions workflow that can deploy automatically.

### Setup Steps

1. **Add GitHub Secrets:**
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add these secrets:
     - `CLOUDFLARE_API_TOKEN`: Get from [Cloudflare Dashboard](https://dash.cloudflare.com) → My Profile → API Tokens
     - `CLOUDFLARE_ACCOUNT_ID`: Get from Cloudflare Dashboard → right sidebar of any zone

2. **Disable Cloudflare Pages Automatic Deployments:**
   - In Cloudflare Pages dashboard → Settings → Builds & deployments
   - Turn off "Automatic deployments" OR delete the project

3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Configure GitHub Actions deployment"
   git push origin main
   ```

The GitHub Actions workflow will automatically build and deploy on every push.

---

## 📋 Repository Configuration (Already Correct)

Your repository is properly configured:

### wrangler.toml
```toml
name = "brian-kibet-portfolio"
compatibility_date = "2024-01-01"

[assets]
directory = "./dist"
not_found_handling = "single-page-application"
```

### package.json Scripts
```json
{
  "build": "vite build",
  "deploy": "npm run build && wrangler pages deploy dist"
}
```

### Build Output
- ✅ Build produces `dist/` directory with 25 files
- ✅ Includes `index.html`, CSS, JavaScript, and all assets
- ✅ Ready for deployment

---

## 🧪 Local Testing

To test the build locally:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Verify output
ls -la dist/

# Test deployment (requires Cloudflare credentials)
npm run deploy
```

---

## ❓ Troubleshooting

### "Could not detect a directory containing static files"

This error means the build didn't run before deployment.

**Fix:** Update your Cloudflare Pages dashboard settings as shown above.

### Build succeeds but deployment fails

Check that:
1. `dist/` directory exists and contains files
2. Cloudflare credentials are correct
3. Project name matches your Cloudflare Pages project

### GitHub Actions workflow doesn't run

Verify:
1. Secrets are added to GitHub repository
2. Workflow file is in `.github/workflows/deploy.yml`
3. Push is to `main` or `master` branch

---

## 📞 Support

If you continue to have issues:

1. Verify Cloudflare dashboard settings match the table above
2. Check GitHub Actions logs for detailed error messages
3. Ensure all required secrets are configured
4. Confirm the build completes successfully before deployment

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Homepage loads at your Cloudflare URL
- [ ] All pages navigate correctly
- [ ] Direct URL access works (e.g., `/about`, `/services`)
- [ ] Page refresh works on any route
- [ ] Mobile responsive design works
- [ ] No console errors in browser dev tools

---

**Remember:** The repository is correct. The issue is in your Cloudflare Pages dashboard settings. Update those settings and deployment will work.
