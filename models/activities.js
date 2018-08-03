'use strict'

module.exports = (sequelize, DataTypes) => {
  const activity = sequelize.define('activity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    skill_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  //TODO::Activity has Many Skills
  activity.associate=function(models){
      activty.hasMany(models.activity,{
          onDelete:"cascade"
      })
  }
//TODO::Activity belongsTo Weeks
  return activity;
};