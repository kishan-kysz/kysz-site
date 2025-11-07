#!/bin/bash

echo "🧹 Cleaning up old installation..."
echo ""

# Change to project directory
cd "$(dirname "$0")"

# Remove node_modules with sudo (if it exists and is owned by root)
if [ -d "node_modules" ]; then
    echo "Removing node_modules (requires sudo password)..."
    sudo rm -rf node_modules
fi

# Remove package-lock.json
if [ -f "package-lock.json" ]; then
    echo "Removing package-lock.json..."
    rm -f package-lock.json
fi

# Clear npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Install with exact versions
echo ""
echo "📦 Installing dependencies with correct versions..."
npm install --legacy-peer-deps --no-save

echo ""
echo "✅ Done! Now try: npm run dev"

