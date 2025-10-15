# School Management System

A clean and efficient web application for managing school information built with Next.js, React Hook Form, and MySQL.

## Features

- Add schools with complete information and images
- View all schools in a responsive grid layout
- Form validation for all inputs
- Image upload and storage
- Mobile-friendly design

## Prerequisites

- Node.js (v18 or higher)
- MySQL database

## Setup Instructions

### 1. Database Setup

First, set up your MySQL database:

```sql
CREATE DATABASE school_db;
```

Then run the schema file:

```bash
mysql -u root -p school_db < database/schema.sql
```

Or manually create the table using the SQL in `database/schema.sql`.

### 2. Environment Configuration

Update the `.env.local` file in the root directory with your MySQL credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_db
```

Replace `your_password` with your actual MySQL password.

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
school-management/
├── app/
│   ├── addSchool/          # Add school form page
│   ├── showSchools/        # Display schools page
│   ├── api/
│   │   └── schools/        # API routes for CRUD operations
│   └── page.tsx            # Home page
├── database/
│   └── schema.sql          # Database schema
├── lib/
│   └── db.ts               # Database connection
├── public/
│   └── schoolImages/       # Uploaded school images
└── .env.local              # Environment variables
```

## Pages

### Home Page (`/`)
Landing page with navigation to add and view schools.

### Add School (`/addSchool`)
Form to add new schools with:
- School name
- Address
- City and State
- Contact number (10 digits)
- Email (validated)
- School image upload

### Show Schools (`/showSchools`)
Displays all schools in a responsive grid showing:
- School image
- School name
- Address
- City

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hook Form** - Form management
- **MySQL2** - Database
- **Node.js** - Backend runtime

## API Endpoints

- `POST /api/schools` - Add a new school
- `GET /api/schools` - Get all schools

## Notes

- Images are stored in the `public/schoolImages` folder
- The application is fully responsive and works on mobile and desktop
- Form validation ensures data quality before submission

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click **"Import Project"**
4. Select your GitHub repository
5. Configure environment variables:
   - `DB_HOST` - Your MySQL host (e.g., from PlanetScale, Railway, or AWS RDS)
   - `DB_USER` - Your database username
   - `DB_PASSWORD` - Your database password
   - `DB_NAME` - `school_db`
6. Click **Deploy**

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables
vercel env add DB_HOST
vercel env add DB_USER
vercel env add DB_PASSWORD
vercel env add DB_NAME

# Deploy to production
vercel --prod
```

### Database Hosting Options for Production

Since Vercel is serverless, you'll need a cloud-hosted MySQL database:

1. **PlanetScale** (Recommended - Free tier available)
   - MySQL-compatible
   - Easy integration with Vercel
   - Sign up at [planetscale.com](https://planetscale.com)

2. **Railway**
   - Simple MySQL hosting
   - Free tier available
   - Sign up at [railway.app](https://railway.app)

3. **AWS RDS**
   - Enterprise-grade MySQL
   - Pay as you go

4. **DigitalOcean Managed Database**
   - Reliable MySQL hosting
   - Starting at $15/month

### Important Notes for Vercel Deployment

- ⚠️ Local file uploads won't persist on Vercel (serverless environment)
- Consider using cloud storage for images:
  - **Cloudinary** (Recommended for images)
  - **AWS S3**
  - **Vercel Blob Storage**
- Update the image upload logic to use cloud storage instead of local filesystem
