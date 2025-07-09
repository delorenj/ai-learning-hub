#!/bin/bash
# update-content.sh - Smart content update script that works locally or on server

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Server details
DROPLET_IP="104.248.3.174"
REMOTE_USER="delorenj"
REMOTE_PATH="/home/delorenj/code/ai-learning-hub"

# Function to check if we're on the server
is_on_server() {
  # Check if we're in the expected server directory
  if [[ "$PWD" == *"/home/delorenj/code/ai-learning-hub"* ]]; then
    return 0
  fi

  # Check hostname or IP
  if [[ "$(hostname -I 2>/dev/null | awk '{print $1}')" == "$DROPLET_IP" ]]; then
    return 0
  fi

  return 1
}

# Detect environment and run appropriate update
if is_on_server; then
  echo -e "${YELLOW}🖥️  Running on server - using git pull${NC}"
  echo -e "${BLUE}📚 Updating content from git...${NC}"

  # Navigate to project directory if not already there
  if [[ ! "$PWD" == "$REMOTE_PATH" ]]; then
    cd "$REMOTE_PATH"
  fi

  # Pull latest changes
  echo -e "${BLUE}📥 Pulling latest changes...${NC}"
  git pull

  echo -e "${GREEN}✅ Content updated successfully!${NC}"
  echo -e "${GREEN}🌐 Changes are live at: https://hub.triumphbox.dev${NC}"
else
  echo -e "${YELLOW}💻 Running locally - using rsync${NC}"
  echo -e "${BLUE}📚 Deploying content updates to production...${NC}"

  # Check if we can connect to server
  if ! ssh -q ${REMOTE_USER}@${DROPLET_IP} exit; then
    echo -e "${RED}❌ Cannot connect to server at ${DROPLET_IP}${NC}"
    exit 1
  fi

  # Sync content directory
  echo -e "${BLUE}📤 Syncing content files...${NC}"
  rsync -avz --delete ./content/ ${REMOTE_USER}@${DROPLET_IP}:${REMOTE_PATH}/content/

  echo -e "${GREEN}✅ Content deployed successfully!${NC}"
  echo -e "${GREEN}🌐 Changes are live at: https://hub.triumphbox.dev${NC}"
fi

echo -e "${BLUE}📝 Note: Pages are dynamically rendered, so changes appear immediately!${NC}"

