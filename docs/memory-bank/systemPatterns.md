## Component Architecture Patterns

### Current Patterns
- Function components with CSS Modules
- Client-side components marked with "use client"
- Module-based styling isolation

### Target Patterns
- TypeScript function components with interfaces
- shadcn component composition
- TailwindCSS utility-first styling
- MDX content components

## Content Management Patterns

### Current State
- Static content in page components
- TODO comment indicates missing dynamic content

### Target State
- MDX files in content directories
- Dynamic content loading with frontmatter
- Reusable ContentCard component
- Grid layouts for content display

## Routing Patterns

### Current Routes
- / (homepage)
- /howto (workflows)
- /tipsnips (resources - note naming mismatch)
- /resources (community)

### Planned Dynamic Routes
- /howto/[slug] - Individual how-to guides
- /tipsnips/[slug] - Individual tip snippets

## Development Workflow Patterns

### Current
- npm scripts for dev/build/start
- Manual deployment via shell scripts

### Target
- mise tasks for all operations
- Automated type checking
- Consistent code formatting
- Documented workflows