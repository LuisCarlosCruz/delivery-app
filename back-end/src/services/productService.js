const { products } = require('../database/models');

async function getAllProducts() {
  const allProducts = await products.findAll();
  return allProducts;
}

module.exports = {
  getAllProducts,
};
