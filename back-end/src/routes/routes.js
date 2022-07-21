const express = require('express');

const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const salesController = require('../controllers/salesController');

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

routes.post('/sales', salesController.createSalesController);
routes.get('/sales', salesController.getAllSalesController);
routes.get('/sales/:id', salesController.getSalesByIdController);

module.exports = routes;
