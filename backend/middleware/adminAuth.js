const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/auth');

const adminAuth = (req, res, next) => {
  // Support both x-admin-token and Authorization: Bearer
  let token = req.header('x-admin-token');
  if (!token && req.header('authorization')) {
    const authHeader = req.header('authorization');
    if (authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7);
    }
  }
  if (!token) {
    return res.status(401).json({ message: 'No admin token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded.isAdmin) {
      return res.status(403).json({ message: 'Not authorized as admin' });
    }
    req.admin = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Admin token is invalid or expired' });
  }
};

module.exports = adminAuth;