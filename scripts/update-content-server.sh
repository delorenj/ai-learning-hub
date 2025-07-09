#!/bin/bash
# update-content-server.sh - Update content when already on the server

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📚 Updating content from git...${NC}"

# Store current directory
ORIGINAL_DIR=$(pwd)

# Navigate to the project directory
cd /home/delorenj/docker/stacks/ai/ai-learning-hub

# Pull latest changes from git
echo -e "${BLUE}📥 Pulling latest changes...${NC}"
git pull

echo -e "${GREEN}✅ Content updated successfully!${NC}"
echo -e "${GREEN}🌐 Changes are live at: https://hub.triumphbox.dev${NC}"
echo -e "${BLUE}📝 Note: Pages are dynamically rendered, so changes appear immediately!${NC}"

# Return to original directory
cd "$ORIGINAL_DIR"