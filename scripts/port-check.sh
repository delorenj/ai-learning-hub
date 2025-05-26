#!/bin/bash

# Port availability check script
# Checks if the configured port is available before starting containers

set -e

# Source environment variables
if [ -f .env ]; then
    source .env
fi

# Default port if not set
PORT=${AI_HUB_PORT:-3001}

echo "Checking if port $PORT is available..."

# Check if port is in use
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "❌ ERROR: Port $PORT is already in use!"
    echo ""
    echo "To fix this:"
    echo "1. Stop the service using port $PORT"
    echo "2. Or change AI_HUB_PORT in your .env file"
    echo "3. Or kill the process: sudo kill \$(lsof -t -i:$PORT)"
    echo ""
    echo "Current processes using port $PORT:"
    lsof -Pi :$PORT -sTCP:LISTEN
    exit 1
else
    echo "✅ Port $PORT is available!"
    exit 0
fi