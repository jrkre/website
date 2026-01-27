const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
require('dotenv').config();

const contactRoutes = require('./routes/contact.routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(xss());

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN || '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Body parsing
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));


app.set('trust proxy', 1)

// Routes
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
});
