const {
  createSales,
} = require('../services/salesService');

async function createSalesController(req, res) {
  try {
    const sale = await createSales(req.body);
    res.status(201).json(sale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createSalesController,
};