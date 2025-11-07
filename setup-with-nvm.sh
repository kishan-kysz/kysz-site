#!/bin/bash

echo "🚀 Setting up KyszTech Site with Node.js 20 (project-only)"
echo ""

# Change to project directory
cd "$(dirname "$0")"

# Check if nvm is available
if ! command -v nvm &> /dev/null; then
    echo "❌ nvm is not installed or not loaded."
    echo "   Please install nvm first: https://github.com/nvm-sh/nvm"
    exit 1
fi

# Load nvm (in case it's not loaded in this shell)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install Node.js 20 if not already installed
echo "📦 Checking for Node.js 20..."
if ! nvm list 20 &> /dev/null | grep -q "v20"; then
    echo "   Installing Node.js 20..."
    nvm install 20
else
    echo "   Node.js 20 already installed"
fi

# Use Node.js 20 for this project
echo "🔄 Switching to Node.js 20 for this project..."
nvm use 20

# Verify Node version
NODE_VERSION=$(node --version)
echo "✅ Using Node.js $NODE_VERSION"

# Remove old node_modules if it exists
if [ -d "node_modules" ]; then
    echo "🧹 Removing old node_modules..."
    sudo rm -rf node_modules package-lock.json 2>/dev/null || rm -rf node_modules package-lock.json
fi

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 To use Node.js 20 in this project, run:"
echo "   nvm use"
echo ""
echo "   Or it will auto-switch when you cd into this directory (if you have auto-switch enabled)"
echo ""
echo "🚀 Now you can run: npm run dev"

