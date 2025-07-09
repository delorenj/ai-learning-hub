#!/bin/bash
# Smart deployment - only rebuilds when necessary

set -e

DROPLET_IP="104.248.3.174"
REMOTE_USER="delorenj"
REMOTE_PATH="/home/delorenj/docker/stacks/ai/ai-learning-hub"

echo "🧠 Smart Deployment Starting..."

# Check what changed
CHANGED_FILES=$(git diff --name-only HEAD~1 HEAD 2>/dev/null || echo "")

# Determine if we need to rebuild
NEEDS_REBUILD=false
REBUILD_REASON=""

if echo "$CHANGED_FILES" | grep -qE "(package\.json|pnpm-lock\.yaml|Dockerfile|next\.config\.js|tsconfig\.json)"; then
    NEEDS_REBUILD=true
    REBUILD_REASON="Dependencies or config changed"
elif echo "$CHANGED_FILES" | grep -qE "(src/|components/|app/|pages/|lib/|utils/)"; then
    NEEDS_REBUILD=true
    REBUILD_REASON="Source code changed"
elif [ -z "$CHANGED_FILES" ]; then
    # No git changes, check if forced
    if [ "$1" == "--force" ]; then
        NEEDS_REBUILD=true
        REBUILD_REASON="Forced rebuild"
    fi
fi

if [ "$NEEDS_REBUILD" = true ]; then
    echo "🏗️ Rebuild needed: $REBUILD_REASON"
    echo "📤 Syncing all files..."
    rsync -avz --exclude='.git' --exclude='node_modules' --exclude='.next' \
        ./ ${REMOTE_USER}@${DROPLET_IP}:${REMOTE_PATH}/
    
    ssh ${REMOTE_USER}@${DROPLET_IP} << 'EOF'
        cd /home/delorenj/docker/stacks/ai
        echo "🐳 Rebuilding Docker image..."
        docker compose down ai-hub
        docker compose build ai-hub
        docker compose up -d ai-hub
        echo "✅ Rebuild complete!"
EOF
else
    echo "📚 Only content changed - using fast sync..."
    rsync -avz ./content/ ${REMOTE_USER}@${DROPLET_IP}:${REMOTE_PATH}/content/
    echo "✅ Content updated - no rebuild needed!"
fi

echo "🎉 Deployment complete!"