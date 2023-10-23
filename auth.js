// auth.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

const generateToken = (user, secret, expiresIn = '1h') => {
  return jwt.sign({ id: user.id, email: user.email, roles: user.roles }, secret, { expiresIn });
};

const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken
};
