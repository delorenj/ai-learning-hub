#!/bin/bash

# Enhanced deployment script for AI Hub
# Supports content-only or full deployment

set -e

DROPLET_IP="104.248.3.174"
REMOTE_USER="delorenj"
REMOTE_PATH="/home/delorenj/docker/stacks/ai/ai-learning-hub"
CONTENT_PATH="./content"
REMOTE_CONTENT_PATH="${REMOTE_PATH}/content"

# Parse command line arguments
CONTENT_ONLY=false
FORCE_REBUILD=false

while [[ "$#" -gt 0 ]]; do
    case $1 in
        --content-only) CONTENT_ONLY=true ;;
        --force-rebuild) FORCE_REBUILD=true ;;
        *) echo "Unknown parameter: $1"; exit 1 ;;
    esac
    shift
done

echo "🚀 Starting deployment of AI Hub..."

# Check connection to droplet
echo "🔍 Checking connection to droplet..."
if ! ssh -q ${REMOTE_USER}@${DROPLET_IP} exit; then
    echo "❌ Cannot connect to droplet at ${DROPLET_IP}"
    exit 1
fi

if [ "$CONTENT_ONLY" = true ]; then
    echo "📚 Deploying content updates only..."
    
    # Sync content directory to remote
    echo "📤 Syncing content to droplet..."
    rsync -avz --delete ${CONTENT_PATH}/ ${REMOTE_USER}@${DROPLET_IP}:${REMOTE_CONTENT_PATH}/
    
    echo "✅ Content deployment completed!"
else
    echo "🔄 Performing full deployment with git pull and rebuild..."
    
    # SSH to server and perform deployment
    ssh ${REMOTE_USER}@${DROPLET_IP} <<EOF
        cd ${REMOTE_PATH}
        
        echo "📥 Pulling latest changes..."
        git pull
        
        # Check if we need to rebuild
        NEEDS_REBUILD=false
        if [ "$FORCE_REBUILD" = true ]; then
            NEEDS_REBUILD=true
        else
            # Check if package.json or Dockerfile changed
            if git diff --name-only HEAD@{1} HEAD | grep -q -E 'package.json|Dockerfile|next.config.js|tailwind.config.ts'; then
                NEEDS_REBUILD=true
            fi
        fi
        
        if [ "\$NEEDS_REBUILD" = true ]; then
            echo "🏗️ Rebuilding application..."
            cd /home/delorenj/docker/stacks/ai
            docker compose down ai-hub
            docker compose build ai-hub
            docker compose up -d ai-hub
            echo "✅ Rebuild completed!"
        else
            echo "🔄 Restarting container to apply changes..."
            cd /home/delorenj/docker/stacks/ai
            docker compose restart ai-hub
        fi
        
        echo "🔍 Checking container status..."
        docker ps | grep ai-hub
EOF
fi

echo "🎉 Deployment completed successfully!"
echo "🌐 The AI Hub is now running at: http://${DROPLET_IP}:3000"
