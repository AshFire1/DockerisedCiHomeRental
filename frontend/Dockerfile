FROM node:18

# Set working directory
WORKDIR /app

# Copy package files FIRST
COPY package*.json ./

# Configure npm registry (if needed)
RUN npm config set registry http://registry.npmjs.org

# Install dependencies
RUN npm install

# Reset registry if required
RUN npm config set registry https://registry.npmjs.org

# Copy remaining source files
COPY . .

# Add your startup command
CMD ["npm", "run", "start"]
