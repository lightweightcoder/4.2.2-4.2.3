export default function cartsItemModel(sequelize, DataTypes) {
  return sequelize.define('CartsItem', {
    quantity: DataTypes.INTEGER,
  }, { timestamps: false });
}
