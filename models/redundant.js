'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class redundant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.redundant.hasMany(models.attachment, { foreignKey: 'artistId' });
    }
  };
  redundant.init({
    name: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    },
    thing: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    },
    number: {
      type: DataTypes.INTEGER,
      validate: { isInt: true }
    },
    purpose: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    },
  }, {
    sequelize,
    modelName: 'redundant',
  });
  return redundant;
};