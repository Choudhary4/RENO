# School Management System - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Step 1: Prepare Your Code

1. Make sure all changes are committed:
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `school-management` repository
4. Vercel will auto-detect Next.js settings
5. Add Environment Variables (see below)
6. Click **Deploy**

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts, then deploy to production
vercel --prod
```

### Step 3: Set Up Database

You need a cloud-hosted MySQL database. Here are the best options:

#### 🌟 PlanetScale (Recommended - Free Tier)

1. Go to [planetscale.com](https://planetscale.com)
2. Sign up and create a new database
3. Name it `school_db`
4. Go to **"Connect"** → Choose **"Connect with MySQL2"**
5. Copy the connection details
6. Run the schema:
   ```sql
   CREATE TABLE schools (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name TEXT NOT NULL,
     address TEXT NOT NULL,
     city TEXT NOT NULL,
     state TEXT NOT NULL,
     contact VARCHAR(15) NOT NULL,
     image TEXT,
     email_id VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
   ```

#### Railway (Alternative)

1. Go to [railway.app](https://railway.app)
2. Create new project → Add MySQL
3. Copy connection details
4. Use the provided credentials

### Step 4: Configure Environment Variables in Vercel

Go to your Vercel project → **Settings** → **Environment Variables**

Add these variables:

```
DB_HOST=your-database-host.com
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=school_db
```

**Important:** Add these for all environments (Production, Preview, Development)

### Step 5: Redeploy

After adding environment variables:
1. Go to **Deployments** tab
2. Click the three dots on the latest deployment
3. Click **Redeploy**

## ⚠️ Important: Image Storage

**Problem:** Vercel's serverless environment doesn't support persistent file storage.

**Solution:** Use cloud storage for images. Choose one:

### Option 1: Cloudinary (Recommended for Images)

Free tier: 25GB storage, 25GB bandwidth

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get your Cloud Name, API Key, and API Secret
3. Install package:
   ```bash
   npm install cloudinary
   ```
4. Update image upload code (I can help with this if needed)

### Option 2: Vercel Blob Storage

1. Enable in Vercel dashboard
2. Install package:
   ```bash
   npm install @vercel/blob
   ```

### Option 3: AWS S3

Best for large scale applications

## 📋 Pre-Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Database created (PlanetScale/Railway)
- [ ] Database schema/table created
- [ ] Environment variables added in Vercel
- [ ] Consider cloud storage for images (optional but recommended)

## 🧪 Testing Your Deployment

After deployment:
1. Visit your Vercel URL
2. Try adding a school (without image first)
3. Check if data saves to database
4. View schools list

## 🔧 Troubleshooting

**Build fails:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json

**Database connection fails:**
- Verify environment variables are correct
- Check database allows external connections
- Ensure database is running

**Images not uploading:**
- This is expected on Vercel
- Implement cloud storage solution

## 📞 Need Help?

If you encounter issues:
1. Check Vercel deployment logs
2. Check function logs in Vercel dashboard
3. Verify database connection string

---

**Your app will be live at:** `https://your-project-name.vercel.app`
