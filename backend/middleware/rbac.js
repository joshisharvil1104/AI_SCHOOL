// Role-based access control middleware
const rbac = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Not authorized for this role' });
    }
    
    next();
  };
};

// Check if user has reached daily usage limit
const checkUsageLimit = async (req, res, next) => {
  const user = req.user;
  
  // Teachers have unlimited access
  if (user.role === 'teacher' || user.role === 'admin') {
    return next();
  }

  // Check if it's a new day and reset counter if needed
  const today = new Date();
  const lastReset = new Date(user.resetDate);
  
  if (today.getDate() !== lastReset.getDate() || 
      today.getMonth() !== lastReset.getMonth() || 
      today.getFullYear() !== lastReset.getFullYear()) {
    // Reset count for new day
    user.usageCount = 0;
    user.resetDate = today;
    await user.save();
  }
  
  // Check if user has reached limit
  if (user.usageCount >= user.usageLimit) {
    return res.status(429).json({ 
      message: 'Daily usage limit reached. Please try again tomorrow.'
    });
  }
  
  next();
};

module.exports = { rbac, checkUsageLimit };
