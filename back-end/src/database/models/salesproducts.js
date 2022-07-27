module.exports = (sequelize, _DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    quantity: {
      type: _DataTypes.INTEGER,
      allowNull: false,
    },
  }, { timestamps: false });

  salesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'Sales',
      through: salesProducts,
      foreignKey: {
        field: 'product_id',
        name: 'productId'
      }, 
    });

    models.sales.belongsToMany(models.products, {
      as: 'Products',
      through: salesProducts,
      foreignKey: {
        field: 'sale_id',
        name: 'saleId'
      },
    });
  };

  return salesProducts;
};