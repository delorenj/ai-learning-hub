## Current Architecture

### Framework & Runtime
- Next.js 14.0.3 with App Router
- React 18.2.0
- Node.js 18 Alpine (Docker)
- Standalone output configuration

### File Structure
```
src/
  app/
    layout.js - Main layout with chatbot script integration
    page.js - Homepage with grid cards
  components/
    Navbar.js - Client-side navigation component
  styles/
    globals.css - Global styles
    Home.module.css - Homepage styles
    Navbar.module.css - Navigation styles
```

### Deployment
- DigitalOcean droplet (104.248.3.174)
- Docker container "ai-hub-app" on port 3000
- Network: web-proxy (needs Traefik labels)

### External Integrations
- Chatbot widget from agents.do-ai.run
- Agent ID: ad4a5991-3637-11f0-bf8f-4e013e2ddde4

## Planned Technology Stack

### Core Technologies
- TypeScript 5.x
- TailwindCSS 3.x (package shows 4.1.7 - needs investigation)
- shadcn-ui components
- MDX 3.x for content

### Development Tools
- mise task runner (.mise.toml)
- ESLint with Next.js config
- Git with conventional commits

### Build & Deploy
- Multi-stage Docker build
- Traefik reverse proxy labels
- Standalone Next.js output