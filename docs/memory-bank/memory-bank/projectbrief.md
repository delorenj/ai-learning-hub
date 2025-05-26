## AI Learning Hub - Project Brief

### Current State
- Next.js 15 application with TypeScript support
- Basic UI components using shadcn/ui and TailwindCSS
- Chatbot integration with DigitalOcean AI agents
- Docker deployment setup for DigitalOcean droplet
- Static content cards for how-to guides (hardcoded)
- Content directory structure planned but not implemented

### Core Requirements (from codebase analysis)
1. **Content Management System**: Dynamic loading of how-to guides and tip-snips from markdown/MDX files
2. **UI Enhancement**: Full TypeScript migration, shadcn component integration
3. **Infrastructure**: mise task runner, Traefik labels for docker-compose
4. **Content Structure**: 
   - /content/howto/ for how-to guides
   - /content/tipsnips/ for tip snippets
   - /content/resources/ for resources
   - MDX support with executable code blocks and GIFs

### Key Files Identified
- Main layout: src/app/layout.tsx (TypeScript ✓)
- Homepage: src/app/page.tsx (TypeScript ✓, has TODO for dynamic content)
- How-to page: src/app/howto/page.tsx (TypeScript ✓, hardcoded content)
- Content card component: src/components/ui/content-card.tsx (shadcn-style ✓)
- Navbar: src/components/Navbar.tsx (TypeScript ✓)

### Migration Status
- ✅ TypeScript support configured
- ✅ TailwindCSS integrated
- ✅ Basic shadcn components
- ❌ Dynamic content loading
- ❌ MDX processing
- ❌ mise integration
- ❌ Traefik docker labels

### Identified TODOs in Code
- src/app/page.tsx:19 "TODO: pull content from HowToGrid.md"
- How-to page needs dynamic content from markdown files
- Docker-compose needs Traefik labels
- Package manager migration to mise