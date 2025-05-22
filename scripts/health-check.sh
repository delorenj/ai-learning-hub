#!/bin/bash

# Health check script for AI Hub

DROPLET_IP="104.248.3.174"
PORT="3000"
URL="http://$DROPLET_IP:$PORT"

echo "🏥 Health check for AI Hub..."
echo "🌐 URL: $URL"

# Check if the application is responding
response=$(curl -s -o /dev/null -w "%{http_code}" "$URL")

if [ "$response" = "200" ]; then
    echo "✅ Application is healthy (HTTP $response)"

    # Check if the title is correct
    if curl -s "$URL" | grep -q "AI Hub"; then
        echo "✅ Title is correct"
    else
        echo "⚠️  Title check failed"
    fi

    # Check if chatbot script is loaded
    if curl -s "$URL" | grep -q "Jarad, kinda Chatbot"; then
        echo "✅ Chatbot integration detected"
    else
        echo "⚠️  Chatbot integration not found"
    fi

else
    echo "❌ Application is not responding (HTTP $response)"
    exit 1
fi

# Check container status
echo ""
echo "🐳 Container status:"
ssh -o StrictHostKeyChecking=no root@$DROPLET_IP "docker ps | grep ai-hub || echo 'Container not found'"

echo ""
echo "🎉 Health check completed!"
