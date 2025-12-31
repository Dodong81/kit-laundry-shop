# 🧺 LaundryHub - Reservation System

A beautiful, modern web-based laundry shop reservation system with automated SMS notifications.

## Features ✨

✅ **Beautiful UI** - Gradient design with laundry theme  
✅ **Easy Booking** - Simple form with location and time selection  
✅ **SMS Notifications** - Customers receive instant booking confirmations  
✅ **Responsive Design** - Works on mobile, tablet, and desktop  
✅ **Quick Setup** - Just follow the installation steps  

## Required Information

Users need to provide:
- **Name** - Full name
- **Phone Number** - For SMS notification (must be valid)
- **Location** - Choose from: Downtown, Midtown, Uptown, or Airport
- **Preferred Date** - Future dates only
- **Preferred Time** - Choose 2-hour time slots

## Installation

### 1. Prerequisites

Make sure you have **Node.js** and **npm** installed:
```bash
node --version
npm --version
```

If not installed, download from: https://nodejs.org

### 2. Install Dependencies

```bash
npm install
```

This will install:
- **Express** - Web server framework
- **Cors** - Cross-origin requests
- **Dotenv** - Environment variable management
- **Twilio** - SMS service
- **Nodemon** - Development auto-reload (optional)

### 3. Set Up Twilio (SMS Notifications)

To enable SMS notifications:

1. **Sign up** at https://www.twilio.com (free trial available)
2. **Get your credentials**:
   - Account SID
   - Auth Token
   - Twilio Phone Number

3. **Create a `.env` file** in the project root:
```bash
cp .env.example .env
```

4. **Edit `.env`** with your Twilio credentials:
```
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=+1234567890
PORT=3000
```

**Note:** During development, you can test without real Twilio credentials. Bookings will be logged to the console.

## Running the Application

### Start the Server

```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

You should see:
```
🧺 LaundryHub server running on http://localhost:3000
```

### Open in Browser

1. Open your browser
2. Go to: `http://localhost:3000`
3. Fill in the reservation form
4. Click "Complete Booking"
5. If Twilio is configured, an SMS will be sent to the phone number

## Project Structure

```
├── index.html          # Frontend UI (Beautiful laundry-themed form)
├── server.js           # Backend (Express server & SMS handler)
├── package.json        # Dependencies and scripts
├── .env.example        # Environment variables template
└── README.md           # This file
```

## How It Works

### Frontend (index.html)
- Beautiful gradient design with laundry theme
- Form validation
- Location selection (4 options)
- Time slot selection (4 options)
- Responsive design for all devices

### Backend (server.js)
- Express.js server handles booking requests
- Validates user input
- Stores bookings in memory (database-ready)
- Sends SMS via Twilio API
- Provides booking confirmation

## Testing Without Twilio

If you haven't set up Twilio yet:

1. Run the server normally
2. Fill in the booking form
3. Check the console where the server is running - you'll see the booking details logged
4. The frontend will show "Booking confirmed!" message

## Customization

### Add/Remove Locations
Edit `index.html` - Find the locations section:
```html
<button type="button" class="location-btn" data-location="Downtown">Downtown</button>
<button type="button" class="location-btn" data-location="Midtown">Midtown</button>
<!-- Add more as needed -->
```

### Change Time Slots
Edit `index.html` - Find the time slots section:
```html
<button type="button" class="time-slot" data-time="08:00 - 10:00">8:00 - 10:00</button>
<!-- Modify times as needed -->
```

### Change Colors
Edit the CSS in `index.html`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Change these hex colors to your preference */
```

## Database Integration (Production)

For production, replace the in-memory bookings array with a real database:

**Option 1: MongoDB**
```bash
npm install mongoose
```

**Option 2: PostgreSQL**
```bash
npm install pg
```

**Option 3: Firebase**
```bash
npm install firebase-admin
```

## Troubleshooting

### "Cannot find module 'express'"
- Run: `npm install`

### SMS not working
- Check `.env` file has correct Twilio credentials
- Verify the phone number format (e.g., +1234567890)
- Check Twilio account has credits/active trial

### Port already in use
- Change PORT in `.env` file
- Or: `PORT=3001 npm start`

### CORS errors
- Already enabled in server.js
- Check browser console for specific errors

## Security Notes

⚠️ **Important for Production:**
- Store credentials in `.env` (never commit to Git)
- Add `.env` to `.gitignore`
- Validate all inputs server-side (already done)
- Implement user authentication
- Use HTTPS
- Implement rate limiting
- Consider data encryption

## Support & Next Steps

### To enhance further:
1. Add database to persist bookings
2. Create admin dashboard to view bookings
3. Add email notifications
4. Implement user accounts
5. Add payment integration
6. Deploy to cloud (Heroku, AWS, Vercel, etc.)

## License

MIT License - Feel free to modify and use as needed!

---

**Happy Booking! 🧺✨**
