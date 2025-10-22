# Use base image of NGINX template for ARM (automaticly based on MacOS M2 configuration)
FROM nginx:alpine

# Delete default configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom configuration
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template

# Copy all the project files to html folder
COPY . /usr/share/nginx/html

# Expose port 06
EXPOSE 06

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
