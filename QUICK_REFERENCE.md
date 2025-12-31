# 🎯 Kit Laundry Shop - Quick Reference Card

## 📌 Essential Info at a Glance

### **Current Setup**
```
Project: Kit Laundry Shop
Status: Ready to Deploy ✅
Language: JavaScript (Node.js + HTML/CSS)
Database: None yet (in-memory)
SMS: Twilio (Philippines +63)
```

---

## 🚀 Deploy in 3 Steps

```
1. Push to GitHub
   git add .
   git commit -m "Initial"
   git push -u origin main

2. Go to Railway.app
   Click "Deploy from GitHub"
   Select your repo

3. Add Twilio env vars (optional)
   TWILIO_ACCOUNT_SID
   TWILIO_AUTH_TOKEN
   TWILIO_PHONE_NUMBER
```

**Result:** Live website in 2 minutes! 🎉

---

## 📞 Quick Twilio Setup

```
1. Sign up: twilio.com
2. Buy +63 Philippines number
3. Get 3 values:
   - Account SID
   - Auth Token
   - Phone Number
4. Add to Railway env vars
5. Done! SMS works 🎊
```

---

## 📁 Important Files

| File | What | Edit |
|------|------|------|
| `index.html` | Website UI | ✏️ Yes |
| `server.js` | Backend | ✏️ Maybe |
| `package.json` | Dependencies | ✏️ Rarely |
| `.env` | Secrets | ✏️ Yes (don't share!) |
| `README.md` | How-to guide | 📖 Read |
| `QUICK_DEPLOY.md` | Deploy guide | 📖 Read |

---

## 🌐 Hosting Recommendations

### **Best for Speed:** Railway ⭐
- 1 minute to deploy
- $5/month
- Auto-scaling
- Free tier available

### **Best for Free:** Heroku
- Still free tier
- More setup
- Slower dynos

### **Best for Control:** DigitalOcean
- $4/month
- Full control
- More setup required

---

## 💾 Local Commands

```powershell
# Start server
npm start

# Install packages
npm install

# Using aliases (if profile set up)
nps                    # npm start
npi                    # npm install
dev                    # Go to project + start

# Stop server
Ctrl+C (in terminal)
```

---

## 🔗 Live URL Format

After deploying:

```
Railway:     https://[project-name].up.railway.app
Heroku:      https://[app-name].herokuapp.com
Your domain: https://kitlaundryshop.com
```

---

## 📱 Form Fields Explained

```
Name:       User's full name
Phone:      +63 9XX XXX XXXX (Philippines)
Address:    Custom location (not predefined)
Date:       Future dates only
Time:       4 slots: 8-10, 10-12, 14-16, 16-18
```

---

## ✉️ SMS Message Format

```
"Hi John! 🧺 Your laundry reservation at Kit Laundry Shop 
is confirmed!

Address: 123 Main St, Manila
Date: 2025-12-31
Time: 14:00 - 16:00

Booking ID: 1234567890

Thank you for choosing Kit Laundry Shop!"
```

---

## 🔐 Security Checklist

```
☐ .env file NOT in GitHub
☐ .gitignore includes .env
☐ Twilio credentials in Railway, not code
☐ HTTPS enabled on hosting
☐ Input validation working
☐ Error messages don't expose secrets
```

---

## 🎨 Customization Quick Guide

**Change Name:**
```
Search "LaundryHub" → Replace with "Your Name"
In: index.html, server.js, package.json
```

**Change Color:**
```
Find: #667eea (purple)
Replace with: #yourcolor
In: index.html (CSS section)
```

**Change Phone Format:**
```
Placeholder: "+63 9XX XXX XXXX"
In: index.html line ~150
```

---

## 📊 Performance Tips

```
- Use Railway or Vercel (fastest)
- Enable gzip compression
- Minimize images
- Cache static files
- Monitor response times
```

---

## 🐛 Quick Troubleshooting

| Problem | Fix |
|---------|-----|
| Site won't load | Check hosting logs |
| SMS not sending | Verify Twilio credentials |
| Port 3000 in use | Kill process: `taskkill /F /IM node.exe` |
| Form won't submit | Check browser console for errors |
| Domain not working | Wait for DNS (5-30 min), check settings |

---

## 🔑 Important Links

```
GitHub:        https://github.com
Railway:       https://railway.app ⭐
Heroku:        https://heroku.com
Twilio:        https://twilio.com
Node.js:       https://nodejs.org
PowerShell:    Built-in on Windows
```

---

## 📈 Success Metrics

After going live, check:

```
✓ Site loads in < 2 seconds
✓ Form submits successfully
✓ SMS arrives within 30 seconds
✓ Mobile view looks good
✓ No console errors
✓ Logs show bookings
```

---

## 📅 Maintenance Schedule

```
Daily:    Check logs
Weekly:   Test SMS
Monthly:  Update packages
Yearly:   Review security
```

---

## 🎓 Learning Path

If you want to improve:

1. Add database (MongoDB)
2. Add admin dashboard
3. Add email notifications
4. Add user accounts
5. Add payment processing
6. Deploy on your own server

---

## 💡 Pro Tips

```
✨ Use Railway for fastest deployment
✨ Test booking before going live
✨ Keep .env file secure
✨ Monitor Twilio usage (avoid overspending)
✨ Get feedback from early users
✨ Update documentation as you change things
```

---

## 📞 When You Need Help

1. **First:** Check the README.md
2. **Then:** Check DEPLOYMENT_GUIDE.md
3. **Next:** Check DEPLOYMENT_CHECKLIST.md
4. **Finally:** Check Google/Stack Overflow

---

## ✅ Pre-Launch Checklist

```
☐ npm install - completed
☐ npm start - works
☐ form submits - works
☐ code pushed to GitHub - done
☐ hosting chosen - Railway
☐ deployed - ready!
☐ Twilio setup - optional
☐ domain pointed - optional
```

---

## 🎉 You're Ready!

**Next step:** Follow QUICK_DEPLOY.md (5 minutes)

**Then:** Your site is LIVE! 🚀

---

**Kit Laundry Shop - Making Bookings Easy! 🧺**

*Last updated: December 31, 2025*
