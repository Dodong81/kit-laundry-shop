# 🚀 QUICK START - Deploy Kit Laundry Shop in 5 Minutes

## Step 1: Create GitHub Account (2 minutes)
1. Go to https://github.com
2. Sign up (free)
3. Create new repository: `kit-laundry-shop`

## Step 2: Push Your Code (2 minutes)
Open PowerShell in your project folder and run:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git init
git add .
git commit -m "Kit Laundry Shop - Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/kit-laundry-shop.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Railway (1 minute)

### **THE EASIEST METHOD:**

1. Go to https://railway.app
2. Click **"New Project"**
3. Select **"Deploy from GitHub"**
4. Click **"Authorize with GitHub"**
5. Select your **`kit-laundry-shop`** repo
6. Click **Deploy** 🚀

That's it! Your site is live in seconds!

---

## Step 4: Configure Twilio (Optional - For SMS)

If you want SMS notifications to work:

1. Sign up at https://www.twilio.com (free $15 trial)
2. Get a Philippine phone number (+63)
3. Go back to Railway Dashboard
4. Click your project → **Variables**
5. Add 3 variables:
   ```
   TWILIO_ACCOUNT_SID = ACxxxxxxxxx...
   TWILIO_AUTH_TOKEN = xxxxxxxxxxxxxxxx...
   TWILIO_PHONE_NUMBER = +63XXXXXXXXXX
   ```
6. Click **Deploy** again

---

## Step 5: Set Up Custom Domain (5 minutes)

### **Add Your Domain**
In Railway:
1. Project → **Settings** → **Domains**
2. Click **+ Add Domain**
3. Enter your domain: `kitlaundryshop.com`
4. Copy the CNAME record

In your Domain Registrar (GoDaddy, Namecheap, etc.):
1. Go to DNS settings
2. Add CNAME record pointing to Railway's domain
3. Wait 5-30 minutes for DNS to update

---

## ✅ Done! Your Site Is Live!

Visit: **https://kitlaundryshop.com** 🎉

### What users will see:
- **Beautiful laundry booking form**
- **Kit Laundry Shop** branding
- **Address input** instead of predefined locations
- **Philippines phone numbers** (+63)
- **SMS confirmations** (if Twilio configured)

---

## 🆘 Need Help?

If something goes wrong:

### Server not starting?
```bash
npm install
npm start
```

### Port 3000 in use?
```bash
$port = Get-Process | Where-Object {$_.ProcessName -eq 'node'} | Select-Object -ExpandProperty Id
taskkill /PID $port /F
npm start
```

### Git push fails?
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git push -u origin main
```

---

## 📋 Files You'll Need

**In your project folder:**
- ✅ `index.html` - The website
- ✅ `server.js` - The backend
- ✅ `package.json` - Dependencies
- ✅ `.env.example` - Configuration template (copy to `.env`)
- ✅ `DEPLOYMENT_GUIDE.md` - Full deployment options

---

## 🎯 Summary

| Step | Time | Action |
|------|------|--------|
| 1 | 2 min | Create GitHub account |
| 2 | 2 min | Push code to GitHub |
| 3 | 1 min | Deploy to Railway |
| 4 | - | Setup Twilio (optional) |
| 5 | 5 min | Add custom domain |
| **Total** | **~10 min** | **Live Website!** ✅ |

---

## 🎓 What Happens When You Deploy

1. **GitHub** stores your code
2. **Railway** watches for changes
3. **Automatically redeploys** when you push code
4. **HTTPS enabled** (free SSL)
5. **24/7 uptime** (unless you exceed free tier)

---

## 💾 Making Updates

After deployment, to make changes:

```powershell
# Edit your files in VS Code

# Then:
git add .
git commit -m "Update: Fixed booking form"
git push origin main

# Railway auto-redeploys! 🚀
```

---

## 🔐 Keep Your Credentials Safe

**IMPORTANT:** Never commit `.env` to GitHub!

Make sure `.gitignore` has:
```
.env
node_modules/
```

---

## 🌟 Next Steps

After deployment:
- [ ] Test the booking form
- [ ] Setup Twilio for SMS
- [ ] Add your domain
- [ ] Share with users
- [ ] Monitor logs in Railway dashboard

---

**That's it! You're deployed! 🚀**

Questions? Check DEPLOYMENT_GUIDE.md for more details.

Good luck with Kit Laundry Shop! 🧺✨
