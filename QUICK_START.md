# 🚀 Quick Start Guide

## Run the Project

You need to fix permissions first, then run the project. Here are two options:

### Option 1: Run the Script (Easiest)

```bash
cd /Users/kishan/Documents/kysz.tech/kysztech-site
./run-project.sh
```

When it asks for sudo password, enter it to remove the old node_modules.

### Option 2: Manual Steps

Run these commands one by one:

```bash
cd /Users/kishan/Documents/kysz.tech/kysztech-site

# Load nvm and switch to Node.js 20
source ~/.nvm/nvm.sh
nvm use 20

# Remove old node_modules (requires sudo password)
sudo rm -rf node_modules package-lock.json

# Install dependencies
npm install

# Start dev server
npm run dev
```

## After Running

The development server will start at:
**http://localhost:5173**

Open this URL in your browser to see the site!

## Troubleshooting

If you see permission errors:
1. Run: `sudo rm -rf node_modules package-lock.json`
2. Then: `npm install`
3. Then: `npm run dev`

If you see Node.js version errors:
1. Make sure nvm is loaded: `source ~/.nvm/nvm.sh`
2. Switch to Node 20: `nvm use 20`
3. Verify: `node --version` (should show v20.x.x)

