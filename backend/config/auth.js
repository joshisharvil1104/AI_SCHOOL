const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// JWT Secret (in production, store this in environment variables)
const JWT_SECRET = 'your_jwt_secret';
const JWT_EXPIRE = '1d';

module.exports = {
  JWT_SECRET,
  JWT_EXPIRE,
  generateToken: (userId) => {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRE });
  }
};
