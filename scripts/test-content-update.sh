#!/bin/bash
# Test script to verify content updates work without rebuild

set -e

echo "🧪 Testing content update functionality..."

# 1. Build and start container
echo "📦 Building Docker image..."
docker compose build

echo "🚀 Starting container..."
docker compose up -d

# Wait for container to be ready
echo "⏳ Waiting for container to start..."
sleep 5

# 2. Check initial content
echo "📖 Checking initial content..."
curl -s http://localhost:3001/api/debug-content | jq .

# 3. Create a test content file
echo "✏️ Creating test content file..."
cat > content/howto/test-dynamic-content.mdx << 'EOF'
---
title: "Test Dynamic Content"
description: "This is a test to verify dynamic content loading"
date: "2025-01-09"
tags: ["test"]
---

# Test Dynamic Content

This content was created at: $(date)

If you can see this without rebuilding the Docker image, dynamic content is working!
EOF

# 4. Check if new content appears
echo "🔍 Checking if new content appears..."
sleep 2
curl -s http://localhost:3001/api/debug-content | jq .

# 5. Try to access the new content
echo "🌐 Trying to access new content page..."
curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/howto/test-dynamic-content

# 6. Clean up
echo "🧹 Cleaning up..."
rm -f content/howto/test-dynamic-content.mdx
docker compose down

echo "✅ Test complete!"