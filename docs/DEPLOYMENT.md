# AI Hub - Deployment Guide

## 🚀 Deployed Application

The AI Hub is now successfully deployed and running on DigitalOcean!

**Live URL**: http://104.248.3.174:3000

## 📊 Deployment Details

- **Server**: trinote-proxy (104.248.3.174)
- **Domain**: triumphbox.dev
- **Port**: 3000
- **Container**: ai-hub-app
- **Technology**: Next.js 14 with Docker
- **Features**: RAG-powered "Jarad, kinda Chatbot" integration

## 🛠️ Deployment Scripts

### Available Scripts

1. **`./scripts/deploy-simple.sh`** - Main deployment script using Docker
2. **`./scripts/health-check.sh`** - Health check and status verification
3. **`./scripts/deploy.sh`** - Alternative deployment using docker-compose (requires docker-compose on server)

### Manual Deployment Steps

```bash
# 1. Build and deploy
./deploy-simple.sh

# 2. Verify deployment
./health-check.sh
```

## 🐳 Docker Configuration

### Dockerfile Features

- Multi-stage build for optimization
- Node.js 18 Alpine base image
- Production-ready Next.js standalone output
- Non-root user for security
- Optimized layer caching

### Container Management

```bash
# SSH into droplet
ssh root@104.248.3.174

# Check container status
docker ps | grep ai-hub

# View container logs
docker logs ai-hub-app

# Restart container
docker restart ai-hub-app

# Stop container
docker stop ai-hub-app

# Remove container
docker rm ai-hub-app
```

## 🔧 Configuration

### Environment Variables

- `NODE_ENV=production`
- `PORT=3000`
- `HOSTNAME=0.0.0.0`

### Security Headers

- Content Security Policy configured for chatbot widget
- Secure script loading from `avmcqr47sbsqzweusz6e2iji.agents.do-ai.run`

## 📝 Chatbot Integration

The application includes the "Jarad, kinda Chatbot" widget with:

- Agent ID: `ad4a5991-3637-11f0-bf8f-4e013e2ddde4`
- Primary Color: `#031B4E`
- Secondary Color: `#E5E8ED`
- Button Background: `#0061EB`
- Starting Message: "Hello! How can I help you today?"

## 🔄 Updates and Maintenance

To update the application:

1. Make changes to the code
2. Run `./deploy-simple.sh` to rebuild and redeploy
3. Run `./health-check.sh` to verify the deployment

## 📊 Monitoring

The health check script verifies:

- HTTP response (200 OK)
- Correct page title
- Chatbot integration presence
- Container status

## 🆘 Troubleshooting

### Common Issues

1. **Container not starting**: Check logs with `docker logs ai-hub-app`
2. **Port conflicts**: Ensure port 3000 is available
3. **Build failures**: Check Docker build output for errors

### Logs and Debugging

```bash
# View application logs
ssh root@104.248.3.174 "docker logs ai-hub-app -f"

# Check container resource usage
ssh root@104.248.3.174 "docker stats ai-hub-app"
```

## 🎉 Success!

The AI Hub is now live and accessible at http://104.248.3.174:3000 with the integrated Jarad chatbot ready to assist users!
