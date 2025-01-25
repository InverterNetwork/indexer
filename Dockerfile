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
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc schema.graphql config.yaml config.ts ./

COPY src ./src
COPY abis ./abis
COPY scripts ./scripts

# Install dependencies using BuildKit cache for pnpm store
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile

# Generate the schema ( codegen )
RUN pnpm codegen

# Stage 2: Final Production Image
FROM base

# Set working directory
WORKDIR /app

# Copy only necessary files and production dependencies
COPY --from=builder /app/package.json /app/pnpm-workspace.yaml /app/.npmrc /app/config.ts ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/generated ./generated
COPY --from=builder /app/scripts ./scripts

# Define default values for arguments
ARG COMMAND_TYPE=SETUP
# Transfer build arg to env var so it's available at runtime
ENV COMMAND_TYPE=${COMMAND_TYPE}

# Define the commands as environment variables for better readability and maintenance
ENV SETUP_COMMANDS="pnpm -C generated run db-setup && pnpm ts-node scripts/grant-aggregate-permissions.ts && TUI_OFF=true pnpm -C generated run start"
ENV MIGRATE_COMMANDS="pnpm -C generated run db-up && pnpm ts-node scripts/grant-aggregate-permissions.ts && TUI_OFF=true pnpm -C generated run start"
ENV UPDATE_COMMANDS="TUI_OFF=true pnpm -C generated run start"

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
