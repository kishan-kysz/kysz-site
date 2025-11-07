# Quick Fix Instructions

Your `node_modules` directory has permission issues (owned by root). Here's how to fix it:

## Option 1: Run the Setup Script (Easiest)

```bash
cd kysztech-site
chmod +x setup.sh
./setup.sh
```

This will:
1. Fix npm cache permissions
2. Remove old node_modules (with sudo)
3. Reinstall dependencies with correct versions

## Option 2: Manual Steps

Run these commands one by one:

```bash
cd kysztech-site

# 1. Fix npm cache permissions
sudo chown -R $(whoami) ~/.npm

# 2. Remove old node_modules (requires sudo password)
sudo rm -rf node_modules package-lock.json

# 3. Install dependencies
npm install --legacy-peer-deps

# 4. Start dev server
npm run dev
```

## Option 3: If You Have Node Version Manager (nvm)

If you want to upgrade to Node.js 20 (recommended):

```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or run:
source ~/.zshrc

# Install and use Node.js 20
nvm install 20
nvm use 20

# Then install dependencies
cd kysztech-site
npm install
npm run dev
```

## What Changed?

- **Vite**: Downgraded from 7.x to 5.4.11 (compatible with Node 18)
- **React Router**: Downgraded from 7.x to 6.28.0 (compatible with Node 18)
- **Vite React Plugin**: Downgraded to 4.3.1

These versions work with Node.js 18.20.8, but upgrading to Node 20+ is recommended for better compatibility.

