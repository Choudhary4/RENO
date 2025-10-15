# Quick Fix for Vercel Image Upload Error

## 🚨 Error You're Seeing:
```
EROFS: read-only file system
```

## ⚡ Quick Fix (3 Steps):

### 1. Install Cloudinary
```bash
npm install cloudinary
```

### 2. Get Free Cloudinary Account
- Go to: https://cloudinary.com
- Sign up (FREE - 25GB storage)
- Copy your credentials from dashboard

### 3. Add to Vercel
Vercel Dashboard → Settings → Environment Variables:
```
CLOUDINARY_CLOUD_NAME = [your_cloud_name]
CLOUDINARY_API_KEY = [your_api_key]  
CLOUDINARY_API_SECRET = [your_api_secret]
```

### 4. Deploy
```bash
git add .
git commit -m "Fix image uploads with Cloudinary"
git push
```

## ✅ Done!
Images now upload to Cloudinary instead of local filesystem.

**Full guide:** See `CLOUDINARY-SETUP.md`
