const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');

const router = express.Router();

// Register
router.post('/register', adminAuth, registerUser);

// Login
router.post('/login', loginUser);

// Get user profile (protected)
router.get('/profile', protect, getUserProfile);

module.exports = router;
