const JWT = require('jsonwebtoken');

const JWT_SECRET = require("fs")
  .readFileSync("jwt.evaluation.key", { encoding: "utf-8" });

function generateToken(params = {}) {
  return JWT.sign(params, JWT_SECRET);
}

function verifyToken(token) {
  return JWT.verify(token, JWT_SECRET);
}

module.exports = {
  generateToken,
  verifyToken,
};