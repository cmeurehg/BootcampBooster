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
      activity.hasMany(models.skills,{
          onDelete:"cascade"
      })
  }
//TODO::Activity belongsTo Weeks
  activity.associate = function(models) {
     activity.belongsTo(models.weeks, {
    foreignKey: {
      allowNull: false
    }
  });
};


  return activity;
}; 

