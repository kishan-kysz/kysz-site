# 🌐 Running with Host Access

The project is now configured to be accessible from other devices on your network.

## Quick Start

Run this command:

```bash
cd /Users/kishan/Documents/kysz.tech/kysztech-site
./run-host.sh
```

## Or Run Manually

```bash
cd /Users/kishan/Documents/kysz.tech/kysztech-site

# Load nvm and use Node.js 20
source ~/.nvm/nvm.sh
nvm use 20

# Start with host access
npm run dev -- --host
```

## Access URLs

After starting, you'll see:

- **Local access**: `http://localhost:5173`
- **Network access**: `http://YOUR_IP:5173` (shown in terminal)

## Finding Your IP Address

To find your IP address manually:

```bash
# On macOS
ipconfig getifaddr en0
# or
ipconfig getifaddr en1
```

## Accessing from Other Devices

1. Make sure your device is on the same Wi-Fi network
2. Open a browser on the other device
3. Navigate to: `http://YOUR_IP:5173`

Replace `YOUR_IP` with the IP address shown in the terminal (e.g., `192.168.1.100:5173`)

## Firewall

If you can't access from other devices, you may need to allow port 5173 in your firewall:

**macOS Firewall:**
- System Settings → Network → Firewall → Options
- Allow incoming connections for Node.js

## Configuration

The Vite config is set to:
- `host: true` - Listen on all network interfaces
- `port: 5173` - Default port (can be changed)

