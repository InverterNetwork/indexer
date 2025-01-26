#! /bin/bash

docker build -t indexer-dev --build-arg COMMAND_TYPE=SETUP .

docker run -d --name indexer-dev \
    --network local_test_network \
    -e ENVIO_POSTGRES_PASSWORD=$(cat .env | grep ENVIO_POSTGRES_PASSWORD | cut -d '=' -f2) \
    -e ENVIO_PG_PORT=5432 \
    -e HASURA_GRAPHQL_ADMIN_SECRET=$(cat .env | grep HASURA_GRAPHQL_ADMIN_SECRET | cut -d '=' -f2) \
    -e ENVIO_PG_DATABASE=envio-dev \
    -e ENVIO_PG_USER=postgres \
    -e ENVIO_PG_HOST=envio-postgres \
    indexer-dev
