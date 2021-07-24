#!/bin/sh
# Author : Christian Balderrama <0christianbalderrama@gmail.com>

echo "NODE_ENV >>> " $1
case $1 in
  "development")
    echo "Running development pipeline..."
    npm run pipeline-development
  ;;
  "production" | "main")
    echo "Running production pipeline..."
    npm run pipeline-production
  ;;
  *)
    echo "Invalid mode"
  ;;
esac