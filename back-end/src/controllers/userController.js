const userService = require('../services/userService');

async function login(request, response) {
  const { email, password } = request.body;
  try {
    const token = await userService.login(email, password);
    response.status(200).json({ token });
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = {
  login,
};