#!/bin/bash
# Script to build Docker images with BuildKit enabled

# Enable BuildKit
export DOCKER_BUILDKIT=1
export COMPOSE_DOCKER_CLI_BUILD=1

# Build the Docker image
echo "Building with BuildKit enabled..."
docker compose build "$@"

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "✅ Build completed successfully!"
else
  echo "❌ Build failed!"
  exit 1
fi

# Optionally start the containers
if [[ "$1" == "--up" ]]; then
  echo "Starting containers..."
  docker compose up -d
  echo "✅ Containers started!"
fi
