#!/bin/bash

echo "🚀 Starting KyszTech Site..."
echo ""

cd "$(dirname "$0")"

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node.js 20
echo "📦 Switching to Node.js 20..."
nvm use 20

# Check if node_modules exists and has permission issues
if [ -d "node_modules" ] && [ ! -w "node_modules" ]; then
    echo "🔧 Fixing permissions (requires sudo password)..."
    sudo rm -rf node_modules package-lock.json
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start dev server
echo ""
echo "✅ Starting development server..."
echo "   The site will be available at http://localhost:5173"
echo ""
npm run dev

