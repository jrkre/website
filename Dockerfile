# Use official Node.js image for build step
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY react-site/package*.json ./
RUN npm install

# Copy the rest of the source code and build
COPY react-site ./
RUN npm run build

# Use official Nginx image for serving static files
FROM nginx:alpine

# Copy built files from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config if needed (optional)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]