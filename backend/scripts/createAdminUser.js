const mongoose = require('mongoose');
const User = require('../models/User');
const { connectDB } = require('../config/db');

// Connect to the database
connectDB();

const createAdminUser = async () => {
  try {
    // Check if admin already exists
    const adminExists = await User.findOne({ email: 'admin@aischool.com' });
    
    if (adminExists) {
      console.log('Admin user already exists');
      process.exit();
    }
    
    // Create admin user
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@aischool.com',
      password: 'admin123', // In production, use a strong password
      role: 'admin'
    });
    
    if (admin) {
      console.log('Admin user created successfully');
      console.log('Email: admin@aischool.com');
      console.log('Password: admin123');
    }
    
    process.exit();
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
};

createAdminUser();
