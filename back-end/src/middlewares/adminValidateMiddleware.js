const { verifyToken } = require('../token/token')

function adminValidateMiddleware(request, response, next) {
  const { authorization } = request.headers;
  if (!authorization) {
    return response.status(401).json({ message: 'Token not found' });
  }
  const verify = verifyToken(authorization);
  console.log(verify);
  if (verify.role ==! 'administrator') {
    return response.status(401).json({ message: 'Invalid token' });
  }

  next();
}

module.exports = {
  adminValidateMiddleware,
};
