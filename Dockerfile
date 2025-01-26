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

# Copy all files except node_modules
COPY . .
# Remove node_modules if they were copied
RUN rm -rf node_modules ref tests graphql .github .env Dockerfile build

# Install dependencies using BuildKit cache for pnpm store
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile

# Generate the schema ( codegen )
RUN pnpm codegen

# Stage 2: Final Production Image
FROM base

# Set working directory
WORKDIR /app

# Set up PNPM global directory
ENV SHELL=/bin/sh
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"

# Copy only necessary files and production dependencies
COPY --from=builder /app .

# Define default values for arguments
ARG COMMAND_TYPE=SETUP
# Transfer build arg to env var so it's available at runtime
ENV COMMAND_TYPE=${COMMAND_TYPE}

# Define the commands as environment variables for better readability and maintenance
ENV SETUP_COMMANDS="node -e \"require('./generated/src/db/Migrations.bs.js').setupDb()\" && pnpm ts-node scripts/grant-aggregate-permissions.ts && TUI_OFF=true pnpm ts-node generated/src/Index.bs.js"
ENV MIGRATE_COMMANDS="node -e \"require('./generated/src/db/Migrations.bs.js').runUpMigrations(true)\" && pnpm ts-node scripts/grant-aggregate-permissions.ts && TUI_OFF=true pnpm ts-node generated/src/Index.bs.js"
ENV UPDATE_COMMANDS="TUI_OFF=true pnpm ts-node generated/src/Index.bs.js"

# Use case statement for cleaner conditional execution
CMD case "$COMMAND_TYPE" in \
    "SETUP") \
    sh -c "$SETUP_COMMANDS" \
    ;; \
    "MIGRATE") \
    sh -c "$MIGRATE_COMMANDS" \
    ;; \
    "UPDATE") \
    sh -c "$UPDATE_COMMANDS" \
    ;; \
    *) \
    echo "Invalid COMMAND_TYPE: $COMMAND_TYPE" && exit 1 \
    ;; \
    esac
