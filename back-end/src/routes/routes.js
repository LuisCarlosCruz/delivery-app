const express = require('express');

const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const salesController = require('../controllers/salesController');

const {
  validateEmail, validatePassword, validateName, validateToken,
} = require('../middlewares/userValidations');

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

routes.post('/sales/orders', salesController.getAllSalesController);
routes.post('/sales', validateToken, salesController.createSalesController);
routes.get('/sales/:id', salesController.getSalesByIdController);
routes.put('/sales', salesController.changeStatusController);

module.exports = routes;
