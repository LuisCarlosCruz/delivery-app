const express = require('express');
const userController = require('../controllers/userController');
const { validateEmail, validatePassword, validateName } = require('../middlewares/userValidations');

const routes = express.Router();

routes.post(
  '/login',
  validateEmail,
  validatePassword,
  userController.login,
);

routes.post(
  '/register',
  validateEmail,
  validatePassword,
  validateName,
  userController.register,
);

module.exports = routes;
