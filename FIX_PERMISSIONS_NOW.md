# ⚠️ Permission Fix Required

The `node_modules` directory is owned by root, which prevents Vite from working.

## Quick Fix

Run this command in your terminal:

```bash
cd /Users/kishan/Documents/kysz.tech/kysztech-site
sudo chown -R $(whoami) node_modules
chmod -R u+w node_modules
```

**OR** run the script:

```bash
cd /Users/kishan/Documents/kysz.tech/kysz.tech/kysztech-site
./fix-permissions.sh
```

## Then Start the Server

After fixing permissions:

```bash
source ~/.nvm/nvm.sh
nvm use 20
npm run dev
```

The site will be available at **http://localhost:5173**

