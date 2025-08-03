const express = require('express');
const adminController = require('../controllers/adminController');
const adminAuth = require('../middleware/adminAuth');
const { getAllUsers } = require('../controllers/authController');

const router = express.Router();

// Generate admin token
router.post('/token', adminController.generateToken);

// Get all users (protected)
router.get('/users', adminAuth, getAllUsers);

module.exports = router;
