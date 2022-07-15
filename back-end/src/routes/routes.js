const express = require('express');
const userController = require('../controllers/userController');
const { validateEmail, validatePassword } = require('../middlewares/userValidations');
const routes = express.Router();

routes.post(
  '/login',
  validateEmail,
  validatePassword,
  userController.login,
);

module.exports =  routes;
