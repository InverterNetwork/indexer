#! /bin/bash

# Get current working directory
source "${PWD}/.env"

docker build -t indexer-dev --build-arg COMMAND_TYPE=SETUP .

# Stop and remove existing container if running
docker stop indexer-dev 2>/dev/null || true
docker rm indexer-dev 2>/dev/null || true

docker run -d --name indexer-dev \
    --network local_test_network \
    -e ENVIO_POSTGRES_PASSWORD="${ENVIO_POSTGRES_PASSWORD}" \
    -e ENVIO_PG_PORT=5432 \
    -e HASURA_GRAPHQL_ADMIN_SECRET="${HASURA_GRAPHQL_ADMIN_SECRET}" \
    -e ENVIO_PG_DATABASE=envio-dev \
    -e ENVIO_PG_USER=postgres \
    -e ENVIO_PG_HOST=envio-postgres \
    indexer-dev
