# Troubleshooting Guide

## Node.js Version Issue

The project requires **Node.js 18+** (we've downgraded dependencies to be compatible). However, if you encounter version issues:

### Option 1: Use Node Version Manager (nvm) - Recommended

```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js 20
nvm install 20
nvm use 20

# Then install dependencies
npm install
```

### Option 2: Fix npm Cache Permissions

If you're getting permission errors with npm cache:

```bash
# Fix npm cache permissions
sudo chown -R $(whoami) ~/.npm

# Or clean the cache
npm cache clean --force
```

### Option 3: Fix node_modules Permissions

If `node_modules` has permission issues:

```bash
# Remove node_modules with sudo (if needed)
sudo rm -rf node_modules package-lock.json

# Then reinstall
npm install
```

## Installation Issues

If you encounter permission errors during installation:

1. **Fix npm cache permissions:**
   ```bash
   sudo chown -R $(whoami) ~/.npm
   ```

2. **Clean and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
   ```

3. **If still having issues, use sudo (not recommended but works):**
   ```bash
   sudo npm install --legacy-peer-deps
   ```

## Running the Development Server

Once dependencies are installed:

```bash
npm run dev
```

The site should be available at `http://localhost:5173`

## Build Issues

If you encounter build errors:

1. Make sure all dependencies are installed
2. Check Node.js version: `node --version` (should be 18+)
3. Try cleaning and rebuilding:
   ```bash
   rm -rf node_modules package-lock.json dist
   npm install
   npm run build
   ```

