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

db.Item.belongsTo(db.Category);
db.Category.hasMany(db.Item);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;