'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Animal, { foreignKey: 'animalId', as: 'animal' });
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
  };
  Collar.init({
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Collar',
  });
  return Collar;
};