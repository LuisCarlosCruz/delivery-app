module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  });

  sales.associate = (models) => {
    sales.belongsTo(models.users,
      { foreignKey: 'user_id', as: 'User' });
  };

  sales.associate = (models) => {
    sales.belongsTo(models.users,
      { foreignKey: 'seller_id', as: 'Seller' });
  };

  sales.associate = (models) => {
    sales.hasMany(models.salesProducts,
      { foreignKey: 'sale_id', as: 'SalesProducts' });
  };

  return sales;
};