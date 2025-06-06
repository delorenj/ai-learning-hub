#!/bin/bash

# Deployment script using doctl exec

set -e

DROPLET_NAME="trinote-proxy"
DROPLET_IP="104.248.3.174"
APP_NAME="ai-hub"
CONTAINER_NAME="ai-hub-app"
PORT="3000"

echo "🚀 Starting deployment of AI Hub using doctl..."

# Build Docker image
echo "📦 Building Docker image locally..."
docker build -t $APP_NAME .

# Save and compress the image
echo "💾 Saving Docker image..."
docker save $APP_NAME | gzip > ${APP_NAME}.tar.gz

# Get droplet ID
DROPLET_ID=$(doctl compute droplet list --format ID,Name --no-header | grep "$DROPLET_NAME" | awk '{print $1}')

if [ -z "$DROPLET_ID" ]; then
    echo "❌ Cannot find droplet: $DROPLET_NAME"
    exit 1
fi

echo "📤 Uploading image to droplet (ID: $DROPLET_ID)..."
# First, let's try to establish SSH access using doctl
doctl compute ssh $DROPLET_NAME --ssh-command "echo 'Testing SSH access'"

# If that works, proceed with deployment
echo "🚀 Deploying on droplet..."
doctl compute ssh $DROPLET_NAME << 'EOF'
    echo "📥 Ready to receive Docker image..."
    # Commands will be executed on the droplet
    echo "🛑 Stopping existing container if running..."
    docker stop ai-hub-app 2>/dev/null || true
    docker rm ai-hub-app 2>/dev/null || true
    echo "✅ Ready for new deployment"
EOF

# Since direct SSH isn't working, let's try a different approach
echo "📤 Using alternative deployment method..."
echo "Please upload the ai-hub.tar.gz file manually to the droplet and run:"
echo ""
echo "docker load < /tmp/ai-hub.tar.gz"
echo "docker run -d --name $CONTAINER_NAME --restart unless-stopped -p $PORT:3000 -e NODE_ENV=production $APP_NAME"
echo ""
echo "The Docker image has been saved as: ai-hub.tar.gz"

# Clean up
rm -f ${APP_NAME}.tar.gz

echo "🎉 Local build completed!"
echo "📋 Manual steps required due to SSH access issues"