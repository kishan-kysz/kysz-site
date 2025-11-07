#!/bin/bash

echo "🔧 Fixing permissions for node_modules..."
echo ""

cd "$(dirname "$0")"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "❌ node_modules directory not found. Run 'npm install' first."
    exit 1
fi

# Fix ownership of node_modules
echo "📝 Changing ownership of node_modules to current user..."
echo "   (This requires sudo password)"
sudo chown -R $(whoami) node_modules

# Fix permissions
echo "🔐 Setting write permissions..."
chmod -R u+w node_modules

echo ""
echo "✅ Permissions fixed!"
echo ""
echo "🚀 You can now run: npm run dev"

