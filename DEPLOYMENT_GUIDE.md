# 🧺 Kit Laundry Shop - Deployment Guide

This guide helps you deploy the Kit Laundry Shop reservation system to a live server.

## 📋 Prerequisites

Before deploying, you'll need:

1. **Domain name** (e.g., kitlaundryshop.com)
2. **Hosting provider** with Node.js support
3. **SSL Certificate** (HTTPS)
4. **Twilio Account** (for Philippines SMS: +63)

## 🚀 Popular Hosting Options for Node.js

### Option 1: Heroku (Easiest - FREE TIER AVAILABLE)

**Pros:** Simple deployment, free tier, automatic HTTPS  
**Cons:** Sleepy dynos on free tier

**Steps:**

1. **Install Heroku CLI**
   ```bash
   # Download from https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku app**
   ```bash
   heroku create kit-laundry-shop
   ```

4. **Set environment variables**
   ```bash
   heroku config:set TWILIO_ACCOUNT_SID=your_sid
   heroku config:set TWILIO_AUTH_TOKEN=your_token
   heroku config:set TWILIO_PHONE_NUMBER=+63XXXXXXXXXX
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

6. **View live**
   ```bash
   heroku open
   ```

---

### Option 2: Railway (RECOMMENDED - Easy + Fast)

**Pros:** Modern, simple, good free tier, fast deployment  
**Cons:** Free tier may have limitations

**Steps:**

1. **Go to** https://railway.app

2. **Sign up** with GitHub

3. **Create new project**

4. **Connect your GitHub repository**
   - Push your code to GitHub first:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/kit-laundry-shop.git
   git push -u origin main
   ```

5. **Add environment variables in Railway dashboard:**
   - TWILIO_ACCOUNT_SID
   - TWILIO_AUTH_TOKEN
   - TWILIO_PHONE_NUMBER
   - PORT

6. **Railway will auto-deploy!**

---

### Option 3: DigitalOcean (PROFESSIONAL)

**Pros:** Reliable, affordable, full control  
**Cons:** Requires more setup

**Steps:**

1. **Create Droplet** ($4-6/month)

2. **SSH into server**
   ```bash
   ssh root@your_ip_address
   ```

3. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Clone your repo**
   ```bash
   git clone https://github.com/YOUR_USERNAME/kit-laundry-shop.git
   cd kit-laundry-shop
   ```

5. **Install dependencies**
   ```bash
   npm install
   ```

6. **Create .env file**
   ```bash
   nano .env
   ```
   Add your Twilio credentials

7. **Use PM2 to keep it running**
   ```bash
   sudo npm install -g pm2
   pm2 start server.js
   pm2 startup
   pm2 save
   ```

8. **Install Nginx as reverse proxy**
   ```bash
   sudo apt-get install nginx
   ```

---

### Option 4: Vercel (For Static + Serverless)

**Pros:** Super fast, global CDN, free tier

**Steps:**

1. **Go to** https://vercel.com

2. **Import your GitHub repo**

3. **Set environment variables**

4. **Deploy!** (Automatic on every push)

---

## 🌐 Setting Up Custom Domain

**For Heroku:**
```bash
heroku domains:add kitlaundryshop.com
```
Then update your domain registrar DNS to Heroku's nameservers.

**For Railway:**
- Railway dashboard → Settings → Domains → Add Domain

**For DigitalOcean:**
- Add A record pointing to your Droplet IP
- Install Certbot for free SSL:
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d kitlaundryshop.com
```

---

## 📱 Twilio Setup for Philippines

1. **Sign up** at https://www.twilio.com
2. **Buy a Philippine phone number** (+63)
3. **Get credentials:**
   - Account SID
   - Auth Token
   - Phone Number

4. **Add to .env:**
   ```
   TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   TWILIO_AUTH_TOKEN=your_auth_token_here
   TWILIO_PHONE_NUMBER=+63XXXXXXXXXX
   ```

---

## 🔒 Security Checklist

Before going live:

- [ ] Create .env file with real credentials
- [ ] Add .env to .gitignore
- [ ] Use HTTPS only
- [ ] Validate all inputs server-side
- [ ] Rate limit API endpoints
- [ ] Remove console.log from production code
- [ ] Set NODE_ENV=production
- [ ] Use strong database passwords

---

## 📊 Monitoring & Logs

**Heroku:**
```bash
heroku logs --tail
```

**Railway:**
- Dashboard → Logs tab

**DigitalOcean:**
```bash
pm2 logs
```

---

## 💡 Next Steps

1. **Database:** Add MongoDB/PostgreSQL for persistent bookings
2. **Admin Panel:** Dashboard to view all bookings
3. **Email Notifications:** Send confirmation emails too
4. **Analytics:** Track booking trends
5. **Payment Integration:** Accept online payments

---

**Questions?** Check the README.md or contact support!

Good luck! 🚀
