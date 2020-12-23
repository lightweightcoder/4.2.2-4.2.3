import { Sequelize } from 'sequelize';

import allConfig from '../config/config.js';

import itemModel from './item.mjs';
import categoryModel from './category.mjs';
import cartModel from './cart.mjs';
import cartsItemModel from './cartsItem.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.Item = itemModel(sequelize, Sequelize.DataTypes);
db.Category = categoryModel(sequelize, Sequelize.DataTypes);
db.Cart = cartModel(sequelize, Sequelize.DataTypes);
db.CartsItem = cartsItemModel(sequelize, Sequelize.DataTypes);

// in order for the many-to-many to work we must mention the join table here.
db.Item.belongsToMany(db.Category, { through: 'ItemsCategories' });
db.Category.belongsToMany(db.Item, { through: 'ItemsCategories' });

// Connect Item and Cart models.
// Note: It's possible to use a Sequelize model class (i.e. CartsItem)
// to connect the models Item and Cart instead of the table name (i.e. CartsItems).
db.Item.belongsToMany(db.Cart, { through: db.CartsItem });
db.Cart.belongsToMany(db.Item, { through: db.CartsItem });

// Define 1-M associations between CartsItems table and associated tables
// to access CartsItem attributes from Item and Cart instances
db.Item.hasMany(db.CartsItem);
db.CartsItem.belongsTo(db.Item);
db.Cart.hasMany(db.CartsItem);
db.CartsItem.belongsTo(db.Cart);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
