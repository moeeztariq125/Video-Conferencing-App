# Use an appropriate Node.js base image (e.g., node:14 if it's available, as Node 18 might not exist at the time of writing)
FROM node:18

# Update and upgrade packages
RUN apt-get update -y && apt-get upgrade -y

# Create a directory for your app and set it as the working directory
WORKDIR /app

# Clone the GitHub repository (assuming it's public)
RUN git clone https://github.com/moeeztariq125/Video-Conferencing-App.git .

# Switch to the 'development' branch (assuming 'config' is a typo)
RUN git checkout development

# Check if package.json exists and run npm install if it does
RUN [ -e package.json ] && npm install || :

# Expose the port that your Node.js app will listen on
EXPOSE 3000

# Start a bash shell when the container starts
CMD ["/bin/bash"]
