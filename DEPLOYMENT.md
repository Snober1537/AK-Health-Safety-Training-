# 🚀 Deployment Checklist

## Before Deployment

### 1. Backend Preparation
- [ ] Update MongoDB connection string in Render environment variables
- [ ] Set strong JWT_SECRET in Render environment variables
- [ ] Verify all environment variables are set correctly
- [ ] Test API endpoints locally one more time

### 2. Frontend Preparation
- [ ] Update API_BASE_URL in index.html after backend deployment
- [ ] Verify all links work correctly
- [ ] Test responsive design on different devices
- [ ] Check all forms and interactions

## Deployment Steps

### Backend (Render)
1. Sign up at [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Configure:
   - Name: `ak-health-safety-api`
   - Root Directory: `backend`
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm run start`
5. Add Environment Variables:
   ```
   MONGODB_URI=your_production_mongodb_uri
   JWT_SECRET=your_strong_secret_key
   PORT=10000
   NODE_ENV=production
   ```
6. Deploy and note the URL (e.g., `https://ak-health-safety-api.onrender.com`)

### Frontend (Vercel)
1. Sign up at [vercel.com](https://vercel.com)
2. Create new project
3. Import your GitHub repository or upload files
4. Configure:
   - Framework: Other
   - Root Directory: `frontend`
5. Deploy and note the URL

### Final Configuration
1. Update API_BASE_URL in frontend index.html with your Render backend URL
2. Redeploy frontend

## Post-Deployment Testing

### API Endpoints
- [ ] `GET /` - Should return API info
- [ ] `GET /health` - Should return health status
- [ ] `GET /api/certificates/AKHS-001` - Should return certificate data
- [ ] `POST /api/certificates` - Should require authentication

### Frontend Pages
- [ ] Home page loads correctly
- [ ] Certificate verification works
- [ ] About page displays properly
- [ ] Courses page displays properly
- [ ] Contact page form works
- [ ] Admin login page accessible
- [ ] Admin dashboard accessible (with credentials)

## Environment Variables

### Render (Backend)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
JWT_SECRET=your_very_strong_secret_key_here_change_this_before_production
PORT=10000
NODE_ENV=production
```

### Frontend
No environment variables needed for static deployment.

## Common Issues & Solutions

### CORS Errors
If you encounter CORS errors after deployment:
1. Ensure your Render environment includes your frontend URL in CORS origins
2. Check that your frontend is using the correct API URL

### Database Connection Issues
1. Verify MongoDB Atlas IP whitelist includes Render's IP addresses
2. Check that your connection string is correct

### Slow First Requests
Render free tier may have cold starts. This is normal for free tier deployments.

## Maintenance

### Monitoring
- Set up uptime monitoring with services like UptimeRobot
- Monitor Render logs for errors
- Check MongoDB Atlas performance

### Updates
1. Make changes to your code
2. Push to GitHub
3. Vercel/Render will automatically redeploy (if auto-deploy is enabled)
4. Or manually trigger deployment from dashboard

## Support Contacts

### Technical Support
- Render Support: https://render.com/help
- Vercel Support: https://vercel.com/support
- MongoDB Atlas Support: https://www.mongodb.com/support

### Developer Contacts
- For issues with this application, contact the development team