'use strict'

module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('skills', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    
    name: {
      type: DataTypes.STRING,
      required: true
    },
    
    week_id: {
      type: DataTypes.UUID,
      allowNull: false
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
  return Skill;
};
