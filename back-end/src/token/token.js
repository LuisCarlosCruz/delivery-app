const JWT = require('jsonwebtoken');

function generateToken(params = {}) {
  return JWT.sign(params, process.env.JWT_SECRET);
}

function verifyToken(token) {
  return JWT.verify(token, process.env.JWT_SECRET);
}

module.exports = {
  generateToken,
  verifyToken,
};