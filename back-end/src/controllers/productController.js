const productService = require('../services/productService');

async function getAllProducts(_req, res) {
  try {
    const allProducts = await productService.getAllProducts();
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

module.exports = {
  getAllProducts,
};
