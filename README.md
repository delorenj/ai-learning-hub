# AI Hub

This project is a web-based platform for the Immersive AI Development Workshop. It provides a hub-like interface for accessing various AI workflows and learning resources, along with a RAG-powered chatbot assistant named "Jarad, kinda Chatbot."

## Prerequisites

- Node.js 18 or higher
- Docker (for containerized deployment)
- [mise](https://mise.jdx.dev/) (recommended for task automation)

## Getting Started

### Using mise (Recommended)

First, install mise if you haven't already:

```bash
curl https://mise.jdx.dev/install.sh | sh
```

Then, install dependencies and start the development server:

```bash
mise install  # Install dependencies
mise dev      # Start development server
```

### Using npm directly

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Tasks

When using mise, you can run `mise tasks` to see all available tasks. Key tasks include:

- `mise dev` - Start development server
- `mise build` - Build for production
- `mise lint` - Run ESLint
- `mise docker-build` - Build Docker image
- `mise deploy` - Deploy to DigitalOcean
- `mise deploy-content` - Deploy content changes without rebuilding (quick)
- `mise info` - Display project information

See `.mise.toml` for the complete list of available tasks.

## Content Deployment

To deploy content changes without rebuilding the Docker image:

```bash
# Quick content-only deployment (recommended)
mise deploy-content
# or
./scripts/deploy-content.sh

# This will:
# 1. Sync your local content/ directory to the server
# 2. Restart the container to pick up changes
# 3. Complete in ~30 seconds vs ~5 minutes for full rebuild
```

The content is mounted as a volume in the Docker container, so changes to MDX files in the `content/` directory can be deployed without rebuilding the entire application.

## Chatbot Integration

The platform includes a chatbot widget powered by Jarad's knowledge base. The widget is loaded via script tag and appears as a floating button on all pages.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── layout.js     # Root layout with chatbot integration
│   └── page.js       # Homepage
├── components/       # Reusable React components
│   └── Navbar.js     # Navigation component
└── styles/          # CSS modules and global styles
    ├── globals.css
    ├── Home.module.css
    └── Navbar.module.css

scripts/             # Deployment and utility scripts
├── deploy-simple.sh # Simple Docker deployment
└── health-check.sh  # Deployment health verification

content/            # Content directories (for future MDX content)
├── howto/         # How-to guides
├── tipsnip/       # Tips and snippets
└── resources/     # Additional resources
```

## Deployment

The application is configured for deployment to DigitalOcean with Traefik reverse proxy.

### Using mise:
```bash
mise deploy
```

### Manual deployment:
```bash
./scripts/deploy-simple.sh
```

The application will be available at https://ai.triumphbox.dev

## License

This project is licensed under the MIT License - see the LICENSE file for details.
