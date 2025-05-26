## Technical Context

### Current Tech Stack
- **Framework**: Next.js 15.1.8 with App Router
- **Language**: TypeScript 5.x
- **Styling**: TailwindCSS 3.4.17 with shadcn/ui components
- **Content**: MDX support configured (@mdx-js/loader, @next/mdx)
- **Deployment**: Docker + docker-compose, DigitalOcean droplet
- **AI Integration**: DigitalOcean AI chatbot widget

### Dependencies Analysis
```json
{
  "runtime": {
    "@mdx-js/loader": "^3.1.0",
    "@mdx-js/react": "^3.1.0", 
    "@next/mdx": "^15.1.8",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.3.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "missing": {
    "mise": "task runner integration needed",
    "fs-based content loading": "for dynamic content",
    "gray-matter": "for markdown frontmatter parsing"
  }
}
```

### Architecture Patterns
- **Component Structure**: shadcn/ui pattern with forwardRef and cn() utility
- **Content Organization**: File-based routing with /content directories
- **Docker Setup**: Standalone Next.js build with multi-stage Dockerfile
- **Chatbot Integration**: External script injection in layout.tsx

### Infrastructure
- **Development**: localhost:3001 (to avoid conflicts)
- **Production**: DigitalOcean droplet 104.248.3.174:3000
- **Container**: ai-hub-app Docker container
- **Reverse Proxy**: Traefik (labels needed in docker-compose.yml)