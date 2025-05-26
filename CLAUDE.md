# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `mise port-check` - Check if configured port is available
- Mise file is NOT HIDDEN. Should be `mise.toml`

### Port Configuration
- Default external port: 3001 (configurable via AI_HUB_PORT in .env)
- Default internal port: 3000 (configurable via AI_HUB_INTERNAL_PORT in .env)
- Traefik host: ai-learning-hub.localhost (configurable via TRAEFIK_HOST in .env)

### Deployment
- `./scripts/deploy-simple.sh` - Deploy to DigitalOcean droplet (104.248.3.174)
- `./scripts/health-check.sh` - Verify deployment health

## Architecture

This is a Next.js 14 application that serves as a web platform for an AI Development Workshop. Key architectural decisions:

1. **Next.js App Router**: Uses the `/src/app` directory structure with `layout.js` and `page.js`
2. **Standalone Output**: Configured for Docker deployment with `output: 'standalone'` in next.config.js
3. **Chatbot Integration**: Embeds "Jarad, kinda Chatbot" widget via external script from DigitalOcean AI agents
4. **Content Security Policy**: Configured to allow chatbot widget from `avmcqr47sbsqzweusz6e2iji.agents.do-ai.run`

## Deployment Environment

- **Server**: DigitalOcean droplet at 104.248.3.174 (trinote-proxy)
- **Container**: Runs as `ai-hub-app` Docker container on port 3000
- **Docker**: Multi-stage Dockerfile with Node.js 18 Alpine, optimized for production

## Chatbot Configuration

The platform integrates a RAG-powered chatbot with:
- Agent ID: `ad4a5991-3637-11f0-bf8f-4e013e2ddde4`
- Custom color scheme configured for brand consistency
- Loaded via script tag in the application layout

## Conventions

### Docker
- **NEVER** include the `version: 3.x` line at the top of the `docker-compose.yml`- We are using `docker compose v2`

### Front-end Stack
- Use shadcn to design and implement components
- Use tailwindcss for styling
- Use vite + typescript

### Task Runner
- Use `mise tasks` to wrap scripts and surface commonly executed dev-related tasks
- Ensure all tasks are up-to-date and surfaced in the developer's guide

### Project Lifecycle
- Use `task-master-ai` tool plan, track, and communicate intentions.
- Always ensure the task master list is up-to-date
- The top-level tasks shall all be customer/feature-driven milestones to ensure progressive delivery of value
- Always mark a task complete when done
- Every task **MUST** have at least one measurable acceptance criteria that determines a task's completeness
- **NEVER** mark a task complete unless the acceptance criteria is shown to pass in a unit test, or I grant you explicit approval to override and mark complete

### Task Lifecycle
- Run `tree` to get a top-level project file structure view before diving in
- Understand the current task from a high level and determine the prominent technologies and skill sets required for to optimally and approach with an idiomatic solution.
    - i.e. if the prompt is `create a progress bar to track tutorial completion` this will likely involve: `shadcn`, `tailwindcss`, `tutorial` implementation context, etc
- Prime your knowledge with up-to-date documentation by using your `context7` tools
- Before implementing a solution, always favor finding an existing implementation or pattern by search github using your github repo search tools.
- **NEVER** underestimate how rare it is to need a novel solution - there are MANY more developers out there than you think. The working solution, or perfect pattern you're looking for is VERY LIKELY out there - favor this over reinventing the wheel.
- Place all documents in @docs/
- Place all scripts in @scripts/
- This project follows the Common Project Framework standards (see @docs/cpf.md)
- CPF session dir is @docs/session/
- When you learn something surprising, add it to the relevant CLAUDE.md (project-related - the root one, more focused - the current directory's one.

## Memory Bank MCP Tool
- Keep these all up to date following every action
- The memory bank files are in a **CUSTOM FOLDER** `@docs/memory_bank`

## My Personal Architecture North Star
@docs/northstar.md

## Your persona
@docs/persona.md

## CRITICAL RULE: Working Code Preservation
**If something was previously working and now isn't, the problem is ALWAYS my misunderstanding, NOT a code issue.**

- NEVER modify working code when encountering unexpected behavior
- ALWAYS assume my mental model is wrong before assuming the code is broken
- When build/runtime errors occur after I make changes, revert FIRST, understand SECOND
- "It was just working" means I broke it, not that it was fragile
- Debugging starts with "what did I misunderstand?" not "what's wrong with the code?"

