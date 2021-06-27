#!/bin/sh
# Author : Christian Balderrama <0christianbalderrama@gmail.com>

case $1 in
  "development")
    echo "Running development pipeline..."
    npm run pipeline-development
  ;;
  "production")
    echo "Running production pipeline..."
    npm run pipeline-production
  ;;
  *)
    echo "Invalid mode"
  ;;
esac