# Use the official Node.js 18 image as the base image
FROM node:20.10-slim

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .
COPY yarn.lock .

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Start the application
CMD ["yarn", "start"]
