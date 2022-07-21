const { sales, salesProducts } = require('../database/models');

async function createSales(body) {
  const {
    totalPrice, deliveryAddress, status, deliveryNumber, userId, sellerId, productsSale } = body;
  const sale = await sales.create({
    totalPrice, deliveryAddress, deliveryNumber, status, userId, sellerId, productsSale });
  await Promise.all(
    productsSale.map(async (product) => {
      const { id, quantity } = product;
      const productSale = await salesProducts.create({
        saleId: sale.dataValues.id,
        productId: id,
        quantity,
      });
      return productSale;
    }),
  );
  return sale.dataValues;
}

module.exports = {
  createSales,
};