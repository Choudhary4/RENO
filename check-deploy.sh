#!/bin/bash
# Pre-deployment check script

echo "🔍 Checking deployment readiness..."
echo ""

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✅ .env.local exists"
else
    echo "❌ .env.local not found"
fi

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "✅ Dependencies installed"
else
    echo "⚠️  Dependencies not installed. Run: npm install"
fi

# Check if build works
echo ""
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
    echo "📋 Deployment Checklist:"
    echo "  1. Push code to GitHub"
    echo "  2. Set up cloud MySQL database (PlanetScale/Railway)"
    echo "  3. Create schools table using database/schema.sql"
    echo "  4. Add environment variables in Vercel:"
    echo "     - DB_HOST"
    echo "     - DB_USER"
    echo "     - DB_PASSWORD"
    echo "     - DB_NAME"
    echo "  5. Deploy to Vercel"
    echo ""
    echo "🎉 You're ready to deploy!"
else
    echo ""
    echo "❌ Build failed. Fix errors before deploying."
fi
