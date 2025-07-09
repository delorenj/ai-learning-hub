#!/bin/bash
# deploy-content.sh - Quick content deployment without rebuilding

set -e

DROPLET_IP="104.248.3.174"
REMOTE_USER="delorenj"
REMOTE_PATH="/home/delorenj/docker/stacks/ai/ai-learning-hub"

echo "📚 Deploying content updates to production..."

# Sync content directory
echo "📤 Syncing content files..."
rsync -avz --delete ./content/ ${REMOTE_USER}@${DROPLET_IP}:${REMOTE_PATH}/content/

echo "✅ Content deployed successfully!"
echo "🌐 Changes are live at: https://hub.triumphbox.dev"
echo "📝 Note: Pages are now dynamically rendered, so changes appear immediately!"