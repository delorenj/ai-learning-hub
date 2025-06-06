#!/bin/bash

# Simple deployment script for AI Hub to DigitalOcean using Docker only

set -e

DROPLET_NAME="trinote-proxy"
DROPLET_IP="104.248.3.174"
APP_NAME="ai-hub"
CONTAINER_NAME="ai-hub-app"
PORT="3000"

echo "🚀 Starting deployment of AI Hub..."

# Check if doctl is installed
if ! command -v doctl &>/dev/null; then
    echo "❌ doctl is not installed. Please install it first."
    exit 1
fi

# Check if we can connect to the droplet
echo "🔍 Checking connection to droplet..."
if ! doctl compute droplet list | grep -q "$DROPLET_NAME"; then
    echo "❌ Cannot find droplet: $DROPLET_NAME"
    exit 1
fi

echo "📦 Building Docker image locally..."
docker build -t $APP_NAME .

echo "💾 Saving Docker image..."
docker save $APP_NAME | gzip >${APP_NAME}.tar.gz

echo "📤 Uploading image to droplet..."
scp -i ~/.ssh/my-ssh-key -o StrictHostKeyChecking=no ${APP_NAME}.tar.gz root@$DROPLET_IP:/tmp/

echo "🚀 Deploying on droplet..."
ssh -i ~/.ssh/my-ssh-key -o StrictHostKeyChecking=no root@$DROPLET_IP <<EOF
    echo "🛑 Stopping existing container if running..."
    docker stop $CONTAINER_NAME 2>/dev/null || true
    docker rm $CONTAINER_NAME 2>/dev/null || true

    echo "📦 Loading new image..."
    docker load < /tmp/${APP_NAME}.tar.gz

    echo "🚀 Starting new container..."
    docker run -d \
        --name $CONTAINER_NAME \
        --restart unless-stopped \
        -p $PORT:3000 \
        -e NODE_ENV=production \
        $APP_NAME

    echo "🧹 Cleaning up old images..."
    docker image prune -f

    echo "🗑️ Cleaning up uploaded file..."
    rm /tmp/${APP_NAME}.tar.gz

    echo "✅ Deployment completed!"
    echo "🌐 Application should be available at: http://$DROPLET_IP:$PORT"

    echo "📊 Container status:"
    docker ps | grep $CONTAINER_NAME || echo "Container not found"
EOF

# Clean up local files
rm ${APP_NAME}.tar.gz

echo "🎉 Deployment completed successfully!"
echo "🌐 The AI Hub is now running at: http://$DROPLET_IP:$PORT"
