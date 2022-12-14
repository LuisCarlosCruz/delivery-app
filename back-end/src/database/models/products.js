module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    url_image: DataTypes.STRING,
  },
  {
    tableName: 'products',
    timestamps: false,
  });
  products.associate = (models) => {
    products.hasMany(models.salesProducts, {
      foreignKey: {
        field: "product_id",
        name: "productId",
      },
      as: "SalesProducts",
    });
  };
  return products;
};