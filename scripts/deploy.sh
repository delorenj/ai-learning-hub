#!/bin/bash

# Deployment script for AI Hub to DigitalOcean

set -e

DROPLET_NAME="trinote-proxy"
DROPLET_IP="104.248.3.174"
APP_NAME="ai-hub"
DEPLOY_PATH="/opt/ai-hub"

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

echo "📤 Uploading files to droplet..."
scp -o StrictHostKeyChecking=no ${APP_NAME}.tar.gz root@$DROPLET_IP:/tmp/
scp -o StrictHostKeyChecking=no docker-compose.yml root@$DROPLET_IP:/tmp/

echo "🚀 Deploying on droplet..."
ssh -o StrictHostKeyChecking=no root@$DROPLET_IP <<EOF
    # Create deployment directory
    mkdir -p $DEPLOY_PATH
    cd $DEPLOY_PATH

    # Stop existing containers
    if [ -f docker-compose.yml ]; then
        docker-compose down || true
    fi

    # Load new image
    docker load < /tmp/${APP_NAME}.tar.gz

    # Copy new docker-compose file
    cp /tmp/docker-compose.yml .

    # Start new containers
    docker-compose up -d

    # Clean up
    rm /tmp/${APP_NAME}.tar.gz /tmp/docker-compose.yml

    echo "✅ Deployment completed!"
    echo "🌐 Application should be available at: http://$DROPLET_IP:3000"
EOF

# Clean up local files
rm ${APP_NAME}.tar.gz

echo "🎉 Deployment completed successfully!"
echo "🌐 The AI Hub is now running at: http://$DROPLET_IP:3000"
