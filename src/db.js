require('dotenv').config();
const { Sequelize } = require('sequelize');
const modelPlace = require('./models/place.js');
const modelUser = require('./models/user.js');
const modelCategory = require('./models/category.js');
const modelProduct = require('./models/product.js');
const modelComment = require('./models/comment.js');
const modelOder = require('./models/order.js');
const modelQualification = require('./models/qualification.js');
const modelImg = require('./models/img.js');
const modelSize = require('./models/size.js');

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/mercadito`, {
  logging: false,
  native: false,
});
/**
 * Create models in database
 */
modelPlace (sequelize)
modelUser (sequelize)
modelCategory (sequelize)
modelProduct (sequelize)
modelComment (sequelize)
modelUser(sequelize);
modelOder(sequelize);
modelQualification(sequelize);
modelImg(sequelize);
modelSize(sequelize);

/**
 * create relationship
 */
const {place, category, product, comment, user, order, qualification, img, size } = sequelize.models;
place.hasMany(place,  {foreignKey: 'located'});
user.belongsTo(place);
place.hasMany(user);
category.hasMany(category,  {foreignKey: 'subCategory'});
product.hasMany(comment);
comment.belongsTo(product);

product.hasMany(img);
img.belongsTo(product);

product.belongsToMany(size, {through: 'size_has_product'});
size.belongsToMany(product, {through: 'size_has_product'});

user.hasMany(product);
product.belongsTo(user);

user.belongsToMany(product, {through: 'shoppingcart'});
product.belongsToMany(user, {through: 'shoppingcart'});

user.belongsToMany(product, {through: 'favorites'});
product.belongsToMany(user, {through: 'favorites'});

product.belongsToMany(category, {through: 'category_has_product'});
category.belongsToMany(product, {through: 'category_has_product'});

user.belongsToMany(product, { through: order });
product.belongsToMany(user, {through: order});

user.belongsToMany(product, { through: qualification });
product.belongsToMany(user, {through: qualification});

module.exports = {
  ...sequelize.models, 
  conn: sequelize,    
};