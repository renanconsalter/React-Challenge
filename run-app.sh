#!/bin/bash

if [ $1 == "--dev" ]; then
    echo "Starting development environment..."
    echo "Removing old containers..."
    docker-compose down
    echo "Building containers in development environment..."
    docker-compose up -d --build
fi

if [ $1 == "--prod" ]; then
    echo "Starting deploy to production environment..."
    echo "Removing old containers..."
    docker-compose -f docker-compose-prod.yml down
    echo "Building containers in production environment..."
    docker-compose -f docker-compose-prod.yml up -d --build
fi