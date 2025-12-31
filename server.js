const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const twilio = require('twilio');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Email Configuration (Gmail)
let emailTransporter;
if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
    emailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });
} else {
    console.warn('Email credentials not configured. Emails will not be sent.');
    emailTransporter = null;
}

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

        // Send Email Notification
        if (emailTransporter) {
            try {
                const emailContent = `
                    <h2>🧺 Kit Laundry Shop - Booking Confirmed!</h2>
                    <p>Hi ${name},</p>
                    <p>Your laundry reservation has been confirmed! Here are your booking details:</p>
                    <hr>
                    <p><strong>Booking Details:</strong></p>
                    <ul>
                        <li><strong>Booking ID:</strong> ${booking.id}</li>
                        <li><strong>Location:</strong> ${location}</li>
                        <li><strong>Date:</strong> ${date}</li>
                        <li><strong>Time:</strong> ${timeSlot}</li>
                        <li><strong>Booked At:</strong> ${booking.bookedAt.toLocaleString()}</li>
                    </ul>
                    <hr>
                    <p>Thank you for choosing Kit Laundry Shop! We look forward to serving you.</p>
                    <p><strong>If you have any questions, please contact us immediately.</strong></p>
                    <br>
                    <p>Best regards,<br><strong>Kit Laundry Shop Team</strong> 🧺</p>
                `;

                await emailTransporter.sendMail({
                    from: process.env.EMAIL_USER,
                    to: phone.includes('@') ? phone : `${name}@example.com`,
                    subject: `🧺 Kit Laundry Shop - Booking Confirmed (ID: ${booking.id})`,
                    html: emailContent
                });

                console.log('✉️ Confirmation email sent to:', phone);
            } catch (emailError) {
                console.error('Email Error:', emailError.message);
                // Continue even if email fails
            }
        } else {
            console.log('📧 Email Demo - Would send to:', phone);
            console.log(`Details: Booking #${booking.id} confirmed for ${date} at ${timeSlot}`);
        }

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
