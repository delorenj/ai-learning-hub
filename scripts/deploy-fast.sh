#!/bin/bash
# Fast deployment with Docker BuildKit and caching

set -e

DROPLET_IP="104.248.3.174"
REMOTE_USER="delorenj"
REMOTE_PATH="/home/delorenj/docker/stacks/ai/ai-learning-hub"

echo "🚀 Fast deployment with BuildKit..."

# Enable BuildKit
export DOCKER_BUILDKIT=1
export COMPOSE_DOCKER_CLI_BUILD=1

# Check if we need to push files
echo "📤 Syncing files to server..."
rsync -avz --exclude='.git' --exclude='node_modules' --exclude='.next' \
    ./ ${REMOTE_USER}@${DROPLET_IP}:${REMOTE_PATH}/

# SSH and build with BuildKit
ssh ${REMOTE_USER}@${DROPLET_IP} << 'EOF'
cd /home/delorenj/docker/stacks/ai/ai-learning-hub

echo "🏗️ Building with BuildKit caching..."
export DOCKER_BUILDKIT=1
export COMPOSE_DOCKER_CLI_BUILD=1

# Stop existing container
cd /home/delorenj/docker/stacks/ai
docker compose down ai-hub || true

# Build with the fast Dockerfile
cd /home/delorenj/docker/stacks/ai/ai-learning-hub
docker build -f Dockerfile.fast -t ai-hub:latest .

# Start with the regular compose file
cd /home/delorenj/docker/stacks/ai
docker compose up -d ai-hub

echo "✅ Deployment complete!"
EOF

echo "🎉 Fast deployment finished!"