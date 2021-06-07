#!/bin/bash

set -e

CALLBACK_URL=$1
TAG=$2

if [ "$TAG" == "stable" ]; then
  FILE="docker-compose.yml"
elif [ "$TAG" == "latest" ]; then
  FILE="docker-compose-staging.yml"
else
  echo "Unknown tag $TAG"
  exit 1
fi

docker-compose -f "$FILE" pull
docker-compose -f "$FILE" up -d --remove-orphans
docker image prune -f

curl -X POST -H "Content-Type: application/json" -d '{"state": "success"}' "$CALLBACK_URL"
