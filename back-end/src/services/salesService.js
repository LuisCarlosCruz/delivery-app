const { Op } = require('sequelize');
const { sales, salesProducts, users, products } = require('../database/models');

async function getId(name) {
  const { id } = await users.findOne({
    where: { name },
  });
  return id;
}

async function createSales(body) {
  const {
    totalPrice, deliveryAddress, status, deliveryNumber, customerName, sellerId, productsSale,
  } = body;
  const userId = await getId(customerName);

  const sale = await sales.create({
    totalPrice, deliveryAddress, deliveryNumber, status, userId, sellerId,
  });
  
  await Promise.all(productsSale.map(async (product) => {
      const { id, quantity } = product;
      const productSale = await salesProducts.create({
        saleId: sale.id,
        productId: id,
        quantity,
      });
      return productSale;
    }));
  return sale;
}

async function getAllSales(email) {
  const userByEmail = await users.findOne({ where: { email } });
  const salesByUser = await sales.findAll({
    where: { [Op.or]: [{ userId: userByEmail.id }, { sellerId: userByEmail.id }] },
  });
  return salesByUser;
}

async function getSalesById(id) {
  const sale = await sales.findOne({
    where: { id },
    include: [
      {
        model: products,
        as: 'Products',
      },
    ],
  });
  const seller = await users.findOne({ where: { id: sale.sellerId } });
  return { sale, seller };
}

async function changeStatus(id, status) {
  await sales.update({ status }, { where: { id } });
  const sale = await sales.findOne({ where: { id } });
  return sale; 
}

module.exports = {
  createSales,
  getAllSales,
  getSalesById,
  changeStatus,
};