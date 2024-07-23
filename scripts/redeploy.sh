#!/bin/bash
cd /home/skwal/skwal-net-v3
git pull origin main
pnpm install
pnpm run build
pm2 restart skwal-net-v3
