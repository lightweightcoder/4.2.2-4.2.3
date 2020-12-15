import { Sequelize } from 'sequelize';
import allConfig from '../config/config.js';

import itemModel from './item.mjs';
import categoryModel from './category.mjs';


const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Item = itemModel(sequelize, Sequelize.DataTypes);
db.Category = categoryModel(sequelize, Sequelize.DataTypes);

db.Item.Category = db.Item.belongsTo(db.Category, {as:'category'});
db.Category.Items = db.Category.hasMany(db.Item, {foreignKey: 'categoryId'});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;