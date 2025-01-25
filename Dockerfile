# Stage 1: Build Stage
FROM node:23.3.0-slim AS base

# Install pnpm globally and install necessary build tools
RUN npm install -g pnpm@9.4.0 && \
    apt-get update && \
    apt-get install -y git python3 make g++ && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

FROM base AS builder

# Set working directory
WORKDIR /app

# Copy dependency-related files to leverage caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc turbo.json ./

COPY

# Install dependencies using BuildKit cache for pnpm store
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile

# Build the project and prune dev dependencies
RUN pnpm build-docker && \
    pnpm prune --prod

# Stage 2: Final Production Image
FROM base

# Set working directory
WORKDIR /app

# Copy only necessary files and production dependencies
COPY --from=builder /app/package.json /app/pnpm-workspace.yaml /app/.npmrc /app/turbo.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/agent ./agent
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/scripts ./scripts
COPY --from=builder /app/characters ./characters
COPY --from=builder /app/client ./client

# Default command
CMD ["sh", "-c", "pnpm start --character=characters/${CHARACTER_NAME:-samantha}.character.json & pnpm start:client"]
