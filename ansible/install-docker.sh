#!/bin/bash

set -e

CALLBACK_URL=$1

docker-compose pull
docker-compose up -d --remove-orphans
docker image prune -f

curl -X POST -H "Content-Type: application/json" -d '{"state": "success"}' "$CALLBACK_URL"
