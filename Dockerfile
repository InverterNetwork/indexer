FROM node:22.23.5-trixie-slim AS builder

RUN npm install --global pnpm@10.34.9 && \
    apt-get update && \
    apt-get install -y --no-install-recommends git python3 make g++ && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
ENV CI=true
ENV npm_config_store_dir=/pnpm/store

COPY . .
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile && \
    pnpm codegen

# Install the production workspace from the checked-in lockfile after codegen
# has created the generated workspace package.
COPY pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    rm -rf node_modules generated/node_modules && \
    pnpm install --prod --frozen-lockfile

FROM debian:trixie-slim

# The ECS health check uses bash and curl.
RUN apt-get update && \
    apt-get install -y --no-install-recommends bash ca-certificates curl libstdc++6 && \
    rm -rf /var/lib/apt/lists/*

COPY --from=builder /usr/local/bin/node /usr/local/bin/node
COPY --from=builder /usr/local/lib/node_modules/pnpm /usr/local/lib/node_modules/pnpm
RUN ln -s ../lib/node_modules/pnpm/bin/pnpm.cjs /usr/local/bin/pnpm

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/generated ./generated
COPY --from=builder /app/src ./src
COPY --from=builder /app/scripts/grant-aggregate-permissions.ts ./scripts/
COPY --from=builder /app/config.ts /app/package.json /app/tsconfig.json ./

ARG COMMAND_TYPE=SETUP
ENV COMMAND_TYPE=${COMMAND_TYPE}

CMD ["sh", "-c", "echo 'Waiting for command from task definition...' && sleep infinity"]
