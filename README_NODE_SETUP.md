# Node.js Version Setup (Project-Only)

This project uses **Node.js 20** (via nvm) for this project only. Your global Node.js version remains unchanged.

## Quick Setup

Run this command:

```bash
cd kysztech-site
./setup-with-nvm.sh
```

This will:
1. Install Node.js 20 (if not already installed)
2. Switch to Node.js 20 for this project
3. Remove old node_modules
4. Install all dependencies

## Manual Setup

If you prefer to do it manually:

```bash
cd kysztech-site

# Install Node.js 20 (if not installed)
nvm install 20

# Use Node.js 20 for this project
nvm use 20

# Remove old node_modules
sudo rm -rf node_modules package-lock.json

# Install dependencies
npm install
```

## Using the Project

Every time you work on this project:

```bash
cd kysztech-site
nvm use
npm run dev
```

The `.nvmrc` file tells nvm which version to use. Just run `nvm use` and it will automatically switch to Node.js 20.

## Auto-Switch (Optional)

To automatically switch Node.js versions when you `cd` into this directory, add this to your `~/.zshrc`:

```bash
# Auto-switch Node.js version when entering directory with .nvmrc
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

## Verify

Check that you're using the correct version:

```bash
node --version  # Should show v20.x.x
npm run dev    # Should work without version errors
```

## What Changed?

- **Created `.nvmrc`**: Specifies Node.js 20 for this project
- **Updated `package.json`**: Now uses Vite 7 (requires Node 20+)
- **Project-only**: Your global Node.js version is unchanged

