#!/bin/bash
# This script will check for the hooks/redeploy file
# and if it exists, it will pull the latest changes
# from the git repository by calling redeploy.sh.

cd /home/skwal/skwal-net-v3/

while true; do
  if [ -f hooks/redeploy ]; then
    echo Redeploying...
    rm -f hooks/redeploy
    ./scripts/redeploy.sh
  fi
  sleep 5
done
