const express = require('express');

const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

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

routes.post(
  '/admin/manage',
  validateEmail,
  validatePassword,
  validateName,
  userController.adminRegister,
);

routes.get(
  '/products',
  productController.getAllProducts,
);

module.exports = routes;
