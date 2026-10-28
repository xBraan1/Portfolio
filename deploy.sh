#!/bin/bash

# Direct Deployment Script for Cloudflare Workers
# This bypasses Cloudflare's build system and deploys directly from your local machine

set -e  # Exit on error

echo "🚀 Starting direct deployment to Cloudflare Workers..."
echo ""

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler is not installed. Installing now..."
    npm install -g wrangler
fi

# Check if logged in
echo "🔐 Checking Wrangler authentication..."
if ! wrangler whoami &> /dev/null; then
    echo "❌ Not logged in to Wrangler. Please run: wrangler login"
    exit 1
fi

echo "✅ Authenticated"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building project..."
npm run build

# Verify dist exists
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

echo "✅ Build successful"
echo ""

# Deploy to Cloudflare
echo "🚀 Deploying to Cloudflare Workers..."
wrangler deploy

echo ""
echo "✅ Deployment successful!"
echo ""
echo "🌐 Your site should now be live at:"
echo "   https://portfolio.[your-subdomain].workers.dev"
echo ""
echo "Check your Cloudflare dashboard for the exact URL."
