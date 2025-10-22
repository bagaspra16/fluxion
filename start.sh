#!/bin/bash

# Get local IP address
LOCAL_IP=$(ipconfig getifaddr en0)

# Export LOCAL_IP as environment variable for docker-compose
export LOCAL_IP

echo "🚀 Starting Docker container for you Dexter..."
echo "📍 Using local IP: $LOCAL_IP"
docker-compose up -d --build

# Wait a moment for container to start
sleep 3

echo "✅ Hurry up!, your website is running at:"
echo "   🌐 Local: http://localhost:8006"
echo "   🌍 Network: http://$LOCAL_IP:8006"
echo ""
echo "📱 You can access this website from other devices on your network using:"
echo "   http://$LOCAL_IP:8006"

