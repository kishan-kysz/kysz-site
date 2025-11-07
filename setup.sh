#!/bin/bash

echo "🔧 Fixing KyszTech Site Setup..."
echo ""

# Fix npm cache permissions
echo "1. Fixing npm cache permissions..."
sudo chown -R $(whoami) ~/.npm 2>/dev/null || echo "   (Skipping if already fixed)"

# Remove old node_modules and package-lock.json
echo "2. Removing old node_modules and package-lock.json..."
sudo rm -rf node_modules package-lock.json

# Install dependencies
echo "3. Installing dependencies (this may take a few minutes)..."
npm install --legacy-peer-deps

echo ""
echo "✅ Setup complete! You can now run: npm run dev"

