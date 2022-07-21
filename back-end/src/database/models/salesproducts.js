module.exports = (sequelize, _DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    quantity: {
      type: _DataTypes.INTEGER,
      allowNull: false,
    },
  }, { timestamps: false });

  salesProducts.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: salesProducts,
      foreignKey: {
        field: 'product_id',
        name: 'productId'
      },
      otherKey: 'product_id',
    });
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: salesProducts,
      foreignKey: {
        field: 'sale_id',
        name: 'saleId'
      },
      otherKey: 'sale_id',
    });
  };

  return salesProducts;
};