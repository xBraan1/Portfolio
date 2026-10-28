#!/bin/bash

# Cloudflare Deployment Script
# This script handles the complete build and deploy process

set -e  # Exit on error

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building project..."
npm run build

echo "🚀 Deploying to Cloudflare..."
npx wrangler deploy

echo "✅ Deployment complete!"
