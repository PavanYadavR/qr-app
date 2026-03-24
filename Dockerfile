# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of files
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "server.js"]