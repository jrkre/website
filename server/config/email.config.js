const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  },
  // Connection pool for better performance
  pool: true,
  maxConnections: 5,
  maxMessages: 10
});

// Verify connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server ready to send messages');
  }
});

module.exports = transporter;
