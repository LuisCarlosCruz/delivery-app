const regex = /\S+@\S+\.\w{2,3}/;

function validateEmail(request, response, next) {
  const { email } = request.body;
  if (email === '') {
    return response.status(400).json({ message: '"email" is required' });
  }
  if (email === undefined) {
    return response.status(400).json({ message: '"email" is required' });
  }
  if (!regex.test(email)) {
    return response.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
}

function validatePassword(request, response, next) {
  const { password } = request.body;
  if (password === '') {
    return response.status(400).json({ message: '"password" is required' });
  }
  if (password === undefined) {
    return response.status(400).json({ message: '"password" is required' });
  }
  if (password.length < 6) {
    return response.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
}

module.exports = {
  validateEmail,
  validatePassword,
};