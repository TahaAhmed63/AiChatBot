FROM nginx
# Create a working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Set the environment variable for the API key
ENV API_KEY=apiKey

# Start the application
CMD ["npm", "start"]