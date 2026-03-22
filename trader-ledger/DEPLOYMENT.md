# Deploying Trader Ledger to Railway

This guide will help you deploy the Trader Ledger application to Railway.

## Prerequisites

1. A [Railway](https://railway.app/) account
2. Git installed on your computer
3. Your Trader Ledger project ready

## Deployment Steps

### 1. Prepare Your Repository

First, initialize a git repository if you haven't already:

```bash
cd trader-ledger
git init
git add .
git commit -m "Initial commit - Trader Ledger"
```

### 2. Push to GitHub (Optional but Recommended)

Create a new repository on GitHub and push your code:

```bash
git remote add origin https://github.com/yourusername/trader-ledger.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Railway

#### Option A: Deploy from GitHub

1. Go to [Railway](https://railway.app/)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `trader-ledger` repository
5. Railway will automatically detect the Node.js project and deploy it

#### Option B: Deploy using Railway CLI

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login to Railway:
```bash
railway login
```

3. Initialize and deploy:
```bash
cd trader-ledger
railway init
railway up
```

### 4. Configure Environment Variables (Optional)

In the Railway dashboard:

1. Go to your project
2. Click on "Variables"
3. Add any environment variables if needed:
   - `PORT` (Railway sets this automatically)
   - `NODE_ENV=production`
   - `CORS_ORIGIN=*` (or your specific domain)

### 5. Access Your Application

Once deployed, Railway will provide you with a URL like:
```
https://trader-ledger-production.up.railway.app
```

Your application is now live! 🎉

## Database Persistence

Railway provides persistent storage for your SQLite database. The database file will be stored in the `/database` directory and will persist across deployments.

## Automatic Deployments

If you deployed from GitHub, Railway will automatically redeploy your application whenever you push changes to your repository.

## Custom Domain (Optional)

1. In Railway dashboard, go to your project
2. Click "Settings"
3. Scroll to "Domains"
4. Click "Generate Domain" or add your custom domain

## Monitoring

Railway provides:
- Real-time logs
- Metrics and analytics
- Deployment history
- Resource usage monitoring

Access these from your Railway dashboard.

## Troubleshooting

### Application won't start
- Check the logs in Railway dashboard
- Ensure all dependencies are in `package.json`
- Verify the start command is correct

### Database errors
- Ensure the `database` directory exists
- Check file permissions
- Verify SQLite3 is properly installed

### CORS errors
- Update `CORS_ORIGIN` environment variable
- Check that your frontend is using the correct API URL

## Support

For Railway-specific issues, visit:
- [Railway Documentation](https://docs.railway.app/)
- [Railway Discord](https://discord.gg/railway)

For application issues, check the logs and ensure all environment variables are set correctly.

## Cost

Railway offers:
- Free tier with $5 credit per month
- Pay-as-you-go pricing after free tier
- No credit card required for free tier

Your Trader Ledger app should run comfortably within the free tier for small to medium usage.
