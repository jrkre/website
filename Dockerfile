# Stage 1: Build React frontend
FROM node:20-alpine AS react-build
WORKDIR /app/react-site

COPY react-site/package*.json ./
RUN npm install

COPY react-site ./
RUN npm run build

# Stage 2: Production image with Node + Nginx
FROM node:20-alpine

# Install nginx
RUN apk add --no-cache nginx

# Setup backend
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install --production
COPY server ./

# Copy React build from stage 1
COPY --from=react-build /app/react-site/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Create nginx pid directory
RUN mkdir -p /run/nginx

# Copy startup script
COPY server/start.sh /start.sh
RUN chmod +x /start.sh

# Expose HTTP port
EXPOSE 80
# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/health || exit 1

CMD ["/start.sh"]