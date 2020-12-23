export default function cartsItemModel(sequelize, DataTypes) {
  return sequelize.define(
    'CartsItem',
    {
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      // timestamps: false prevents Sequelize from adding
      // createdAt and updatedAt timestamp fields
      // https://sequelize.org/master/class/lib/model.js~Model.html#static-method-init
      timestamps: false,
    },
  );
}
