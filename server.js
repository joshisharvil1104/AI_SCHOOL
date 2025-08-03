const express = require('express');
const { connectDB } = require('./backend/config/db'); // Import the connectDB function
const cors = require('cors');
const authRoutes = require('./backend/routes/auth');
const adminRoutes = require('./backend/routes/admin');

const app = express();
const PORT = 4000; 

// Middleware
app.use(cors());
app.use(express.json());
// Auth routes
app.use('/api/auth', authRoutes);
// Admin routes
app.use('/api/admin', adminRoutes);

// MongoDB Connection
connectDB();

// Sample Route
app.get('/', (req, res) => {
  res.send('AI School Backend is running!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
