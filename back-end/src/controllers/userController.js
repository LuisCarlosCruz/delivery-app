const userService = require('../services/userService');

async function login(request, response) {
  const { email, password } = request.body;
  try {
    const user = await userService.login(email, password);
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
}

async function register(request, response) {
  const { name, email, password } = request.body;
  try {
    const user = await userService.register(name, email, password);
    response.status(201).json(user);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
}

module.exports = {
  login,
  register,
};