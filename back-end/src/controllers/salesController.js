const {
  createSales,
  getAllSales,
} = require('../services/salesService');

async function createSalesController(req, res) {
  try {
    const sale = await createSales(req.body);
    res.status(201).json(sale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAllSalesController(req, res) {
  try {
    const { email } = req.body;
    const sales = await getAllSales(email);
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createSalesController,
  getAllSalesController,
};