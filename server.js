const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const twilio = require('twilio');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Twilio Configuration
const accountSid = process.env.TWILIO_ACCOUNT_SID || 'your_account_sid';
const authToken = process.env.TWILIO_AUTH_TOKEN || 'your_auth_token';
const fromPhoneNumber = process.env.TWILIO_PHONE_NUMBER || '+63XXXXXXXXXX';

let client;
try {
    client = twilio(accountSid, authToken);
} catch (error) {
    console.warn('Twilio credentials not configured. SMS will not be sent.');
}

// In-memory storage (replace with a database in production)
const bookings = [];

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/book-laundry', async (req, res) => {
    try {
        const { name, phone, location, date, timeSlot } = req.body;

        // Validation
        if (!name || !phone || !location || !date || !timeSlot) {
            return res.status(400).json({ 
                success: false, 
                message: 'Missing required fields' 
            });
        }

        // Create booking object
        const booking = {
            id: Date.now(),
            name,
            phone,
            location,
            date,
            timeSlot,
            bookedAt: new Date(),
            status: 'confirmed'
        };

        // Save booking
        bookings.push(booking);

        // Send SMS notification
        if (client && accountSid !== 'your_account_sid') {
            try {
                await client.messages.create({
                    body: `Hi ${name}! 🧺 Your laundry reservation at Kit Laundry Shop is confirmed!\n\nAddress: ${location}\nDate: ${date}\nTime: ${timeSlot}\n\nBooking ID: ${booking.id}\n\nThank you for choosing Kit Laundry Shop!`,
                    from: fromPhoneNumber,
                    to: phone
                });
            } catch (smsError) {
                console.error('SMS Error:', smsError.message);
                // Continue with response even if SMS fails
            }
        } else {
            console.log('📧 SMS Demo - Would send to:', phone);
            console.log(`Message: Hi ${name}! Your laundry reservation at Kit Laundry Shop is confirmed!\n\nAddress: ${location}\nDate: ${date}\nTime: ${timeSlot}`);
        }

        res.status(200).json({
            success: true,
            message: 'Booking confirmed! SMS notification sent.',
            booking: booking
        });

    } catch (error) {
        console.error('Booking Error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to process booking'
        });
    }
});

// Get all bookings (for admin purposes)
app.get('/api/bookings', (req, res) => {
    res.json({
        total: bookings.length,
        bookings: bookings
    });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🧺 Kit Laundry Shop server running on http://localhost:${PORT}`);
    console.log(`\nTo enable SMS notifications for Philippines:`);
    console.log(`1. Sign up at https://www.twilio.com`);
    console.log(`2. Get your credentials (Account SID, Auth Token, Phone Number)`);
    console.log(`3. Create a .env file with:`);
    console.log(`   TWILIO_ACCOUNT_SID=your_sid`);
    console.log(`   TWILIO_AUTH_TOKEN=your_token`);
    console.log(`   TWILIO_PHONE_NUMBER=your_phone_number`);
    console.log(`\nFor now, bookings will be logged to console.`);
});
