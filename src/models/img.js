const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('img', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true, 
      }
    }
  }, {timeStamps: false,
    createdAt: false, 
    updatedAt: false});
};