const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('item', {
    id: {
      type:  DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
};
