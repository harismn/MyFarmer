'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    full_name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING
    },
    phone: {
      allowNull: true,
      type: DataTypes.STRING
    },
    hash: {
      allowNull: true,
      type: DataTypes.STRING
    },
    is_active_notif: {
      type: DataTypes.TINYINT,
      defaultValue: 0
    },
    registration_complete: {
      type: DataTypes.TINYINT,
      defaultValue: 0
    },
  
  }, {timestamps: true,
    underscored: true});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};