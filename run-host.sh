#!/bin/bash

echo "🌐 Starting KyszTech Site with Host Access..."
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
    sudo chown -R $(whoami) node_modules
    chmod -R u+w node_modules
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Get local IP address
LOCAL_IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || hostname -I | awk '{print $1}' 2>/dev/null || echo "localhost")

echo ""
echo "✅ Starting development server with host access..."
echo ""
echo "📍 Access the site from:"
echo "   - Local:    http://localhost:5173"
echo "   - Network:  http://${LOCAL_IP}:5173"
echo ""
echo "   Share the network URL with other devices on the same network"
echo ""

# Start dev server
npm run dev -- --host

