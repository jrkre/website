#!/bin/sh
set -e

echo "Starting Express API server..."
cd /app/server
node server.js &


echo "Starting Nginx..."
nginx -g 'daemon off;'
