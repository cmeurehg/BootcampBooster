'use strict'

module.exports = (sequelize, DataTypes) => {
  const Week = sequelize.define('week', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    
    name: {
      type: DataTypes.STRING,
      required: true
    },
    
    gitlab_link: {
        type: DataTypes.INTEGER,
        required: true
    },

    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin', 'disabled']

    },
    
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    paranoid: true,
    underscored: true
  });
  //TODO::Week hasMany Activities
  return Week;
};
