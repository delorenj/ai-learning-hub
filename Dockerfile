# Use BuildKit for better caching
# syntax=docker/dockerfile:1

FROM node:18-alpine AS base
# Install pnpm globally in base image
RUN corepack enable && corepack prepare pnpm@latest --activate

# Dependencies stage - only rebuilds when package files change
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy only package files first (better cache utilization)
COPY package.json pnpm-lock.yaml ./
# Use cache mount for pnpm store
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Builder stage
FROM base AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy source files
COPY . .

# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Build with cache mount for Next.js
RUN --mount=type=cache,target=/app/.next/cache \
    pnpm run build

# Runner stage - minimal production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Create content directory structure
RUN mkdir -p ./content/howto ./content/tipsnips ./content/resources && \
    chown -R nextjs:nodejs ./content

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]