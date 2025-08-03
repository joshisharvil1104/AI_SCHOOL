const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('../config/auth');

// For demo: hash for password 'adminSecretPass123'
const ADMIN_PASSWORD_HASH = '$2b$10$cr432gpqjvOkg3z..g.R..PKQG3AAblEqAJo0AUOXF3tZCC3fRPDG';

function generateAdminToken(adminId) {
  return jwt.sign(
    {
      id: adminId,
      isAdmin: true,
      timestamp: Date.now()
    },
    JWT_SECRET,
    { expiresIn: '4h' }
  );
}

const adminController = {
  generateToken: async (req, res) => {
    try {
      const { password } = req.body;
      if (!password) {
        return res.status(400).json({ message: 'Password is required' });
      }
      const isMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const adminId = 'admin-' + Date.now().toString().slice(-6);
      const token = generateAdminToken(adminId);
      res.json({ token, expiresIn: '4 hours' });
    } catch (err) {
      console.error('Admin token generation error:', err.message);
      res.status(500).json({ message: 'Server error during admin authentication' });
    }
  }
};

module.exports = adminController;
