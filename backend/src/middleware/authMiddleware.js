module.exports = function (req, res, next) {
  // Basic authentication logic
  const auth = req.headers['authorization'];

  if (!auth || auth !== 'Basic admin:password') {
      return res.status(403).json({ msg: 'Forbidden' });
  }

  next();
};
