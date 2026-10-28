# Cloudflare Deployment Fix - Complete Solution

## Root Cause

Your Cloudflare Pages project is configured with:
- **Deploy command:** `npx wrangler deploy`
- **Build command:** (empty or not configured)
- **Output directory:** (empty or not configured)

When Cloudflare runs `npx wrangler deploy`, it expects the `dist/` directory to already exist. However, since no build step runs before deployment, the `dist/` directory doesn't exist in the cloned repository, causing the error:

```
[ERROR] Could not detect a directory containing static files
```

## Solution

The repository has been updated with the correct configuration. You need to update your Cloudflare Pages dashboard settings.

### Repository Changes Made

1. **package.json** - Fixed deployment scripts:
   - Moved `wrangler` from dependencies to devDependencies (correct location)
   - Added `predeploy` script that automatically runs build before deploy
   - Updated `deploy` script to use `wrangler pages deploy dist` (correct for Pages)
   - Added `deploy:workers` script for Workers deployment (alternative)

2. **wrangler.jsonc** - Created modern configuration file:
   - Specifies `dist/` as the assets directory
   - Enables SPA routing with `not_found_handling: "single-page-application"`

3. **wrangler.toml** - Existing configuration (kept for compatibility)

4. **.nvmrc** - Specifies Node.js 20 for consistent environment

## Required Action: Update Cloudflare Dashboard

You must update your Cloudflare Pages project settings:

### Step 1: Go to Cloudflare Dashboard
1. Visit [dash.cloudflare.com](https://dash.cloudflare.com)
2. Navigate to your Pages project
3. Go to **Settings** → **Builds & deployments**

### Step 2: Update Build Configuration

**Option A: Use npm scripts (Recommended)**
```
Build command: npm run deploy
Output directory: dist
```

This will:
1. Run `npm run build` (via predeploy hook)
2. Run `wrangler pages deploy dist`

**Option B: Separate build and deploy**
```
Build command: npm run build
Output directory: dist
Deploy command: (leave empty)
```

This lets Cloudflare Pages handle deployment automatically after building.

### Step 3: Save and Redeploy

1. Click **Save**
2. Trigger a new deployment (or push to GitHub)

## Verification

After deployment, verify:
- ✅ Homepage loads at your Cloudflare URL
- ✅ All navigation works
- ✅ Direct URL access works (e.g., `/about`, `/services/llm-evaluation`)
- ✅ Page refresh works on any route
- ✅ No console errors

## Alternative: Manual Deployment

If you prefer to deploy manually from your local machine:

```bash
# Install dependencies
npm install

# Build and deploy
npm run deploy
```

This runs the build automatically (via predeploy) and deploys to Cloudflare Pages.

## Why This Fix Works

1. **predeploy hook** ensures the build runs before deployment
2. **wrangler pages deploy** is the correct command for Pages (not `wrangler deploy`)
3. **dist/ directory** is created by the build step
4. **SPA routing** is configured in wrangler.jsonc for proper client-side routing

## Troubleshooting

### "dist/ directory not found"
- Ensure build command runs successfully
- Check that `npm run build` completes without errors
- Verify `dist/` exists after build

### "Wrangler not found"
- Run `npm install` to install devDependencies
- Wrangler is now in devDependencies (correct location)

### Routing issues after deployment
- Verify `wrangler.jsonc` has `not_found_handling: "single-page-application"`
- Check that `_redirects` file exists in `dist/`

## Files Modified

- `package.json` - Fixed scripts and dependency locations
- `wrangler.jsonc` - Created (modern config format)
- `.nvmrc` - Created (Node.js version specification)

## Deployment Architecture

- **Platform:** Cloudflare Pages
- **Framework:** Vite + React + TypeScript
- **Build output:** `dist/`
- **Deployment method:** `wrangler pages deploy`
- **Routing:** SPA with client-side routing

## Next Steps

1. Update Cloudflare Pages dashboard settings (see Step 2 above)
2. Push changes to GitHub
3. Trigger new deployment
4. Verify site functionality
