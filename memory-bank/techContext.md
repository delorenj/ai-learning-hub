# Technical Context Update

## Current Technology Stack

### Frontend Framework
- **Next.js 15.1.8** with App Router (`/src/app` directory structure)
- **React 19** with TypeScript
- **Tailwind CSS 3.4.17** for styling
- **shadcn/ui** component system fully integrated

### UI Component System (NEW - Task #7 Complete)
**shadcn/ui Integration:**
- **Component Library**: shadcn/ui with "new-york" style, slate base color
- **Icon System**: Lucide React icons throughout the application
- **Design Tokens**: CSS variables for consistent theming
- **Accessibility**: Built on Radix UI primitives for WCAG compliance

**Current Components:**
- `Button` - Multiple variants (default, outline, ghost, destructive, secondary, link)
- `Card` - Enhanced with proper CardHeader, CardContent, CardTitle, CardDescription
- `NavigationMenu` - Professional navbar with proper accessibility
- `Badge` - Status indicators and labels
- `ContentCard` - Custom component for content grid displays

**Dependencies Added:**
- `@radix-ui/react-slot` - Composition utilities
- `@radix-ui/react-navigation-menu` - Navigation primitives
- `class-variance-authority` - Component variant management
- `lucide-react` - Icon system

### Development Tools
- **Package Manager**: npm with mise task runner integration
- **Task Runner**: mise with comprehensive task definitions
- **TypeScript**: Full migration complete, zero type errors
- **Linting**: ESLint with Next.js configuration

### Docker & Deployment
**Container Setup:**
- **Multi-stage Dockerfile** optimized for production
- **Port Configuration**: Environment variable based (AI_HUB_PORT, AI_HUB_INTERNAL_PORT)
- **Internal Port**: 3000 (corrected from previous 3001 mismatch)
- **External Port**: 3001 (configurable via .env)
- **Traefik Integration**: Labels configured for reverse proxy

**Environment Variables:**
```env
AI_HUB_PORT=3001                    # External port
AI_HUB_INTERNAL_PORT=3000          # Internal container port
TRAEFIK_HOST=ai-learning-hub.localhost
NODE_ENV=development               # Development setting
```

### Build & Performance
- **Build Time**: ~55 seconds in Docker
- **Bundle Analysis**:
  - Main page: 13.7 kB (127 kB First Load JS)
  - How-to page: 1.7 kB (115 kB First Load JS)
  - Shared chunks: 105 kB total
- **Static Generation**: All pages pre-rendered successfully

### Code Organization
```
src/
├── app/
│   ├── globals.css          # Tailwind + shadcn CSS variables
│   ├── layout.tsx           # Root layout with chatbot integration
│   ├── page.tsx             # Home page with enhanced cards
│   └── howto/
│       └── page.tsx         # How-to page with Lucide icons
├── components/
│   ├── Navbar.tsx           # shadcn NavigationMenu integration
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx       # Button component with variants
│       ├── card.tsx         # Enhanced card components
│       ├── content-card.tsx # Custom content display card
│       ├── navigation-menu.tsx # Navigation menu component
│       └── badge.tsx        # Badge component
└── lib/
    └── utils.ts             # Tailwind merge utilities
```

### Configuration Files
- **components.json**: shadcn/ui configuration with aliases
- **mise.toml**: Task runner with development, build, docker, and deployment tasks
- **tailwind.config.ts**: Tailwind configuration with shadcn integration
- **.env.example**: Environment variable templates for port configuration

### Quality & Standards
- **TypeScript**: Strict mode, zero errors
- **Accessibility**: Radix UI primitives ensure WCAG compliance
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Performance**: Optimized bundle splitting and static generation
- **Developer Experience**: Hot reload, fast builds, comprehensive tooling

### Recent Technical Achievements
1. **Complete shadcn/ui Integration**: Modern, accessible component system
2. **Icon System Standardization**: Replaced all inline SVG with Lucide icons
3. **Docker Port Resolution**: Fixed internal/external port configuration
4. **Build Optimization**: Resolved NODE_ENV conflicts for clean builds
5. **Component Architecture**: Established consistent patterns for future development

### Ready for Next Phase
The technical foundation is now solid for implementing:
- Dynamic content loading from markdown files
- MDX rendering for interactive content
- File-based content management system
- Advanced routing and navigation features