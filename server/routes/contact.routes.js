const express = require('express');
const { body, validationResult } = require('express-validator');
const rateLimiter = require('../middleware/rateLimiter');
const emailService = require('../services/email.service');

const router = express.Router();

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be 2-100 characters')
    .escape(),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format')
    .normalizeEmail(),

  body('subject')
    .trim()
    .notEmpty().withMessage('Subject is required')
    .isLength({ min: 3, max: 200 }).withMessage('Subject must be 3-200 characters')
    .escape(),

  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 5000 }).withMessage('Message must be 10-5000 characters')
];

// POST /api/contact/send
router.post('/send', rateLimiter, contactValidation, async (req, res) => {
  // Check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Send emails
    await emailService.sendContactEmail({ name, email, subject, message });
    await emailService.sendAutoReply({ name, email });

    res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    });
  }
});

module.exports = router;