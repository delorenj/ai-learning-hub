#!/bin/bash
# content-deploy.sh - One-command content deployment for both dev and prod

set -e

# Parse arguments
MODE="dev"  # Default to dev mode

while [[ "$#" -gt 0 ]]; do
    case $1 in
        --prod) MODE="prod" ;;
        --dev) MODE="dev" ;;
        *) echo "Unknown parameter: $1"; exit 1 ;;
    esac
    shift
done

echo "Deploying content in ${MODE} mode..."

# Handle deployment based on mode
if [ "$MODE" == "dev" ]; then
  echo "🔧 Starting DEVELOPMENT environment..."
  
  # Stop any running Docker container
  docker compose down
  
  # Start Next.js in development mode
  echo "Starting Next.js development server..."
  npm run dev
  
elif [ "$MODE" == "prod" ]; then
  echo "🚀 Deploying to PRODUCTION environment..."
  
  # Rebuild and restart Docker container
  echo "Rebuilding and restarting Docker container..."
  docker compose down
  docker compose build
  docker compose up -d
  
  # If deploy.sh exists, use it for production deployment
  if [ -f "./scripts/deploy.sh" ]; then
    echo "Deploying to production server..."
    ./scripts/deploy.sh --content-only
  fi
  
  echo "✅ Content deployed in production mode!"
  echo "Your content is now available at http://localhost:3001"
  echo "and will be deployed to production if deploy.sh was executed."
fi
