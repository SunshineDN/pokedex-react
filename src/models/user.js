const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = sequelize.define('Users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profileImage: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'default.jpg',
  },
  favorites: {
    type: DataTypes.JSON,
    defaultValue: [],
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  freezeTableName: true
});

module.exports = User;