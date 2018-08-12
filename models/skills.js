 module.exports = function (sequelize, DataTypes) {
  var skills = sequelize.define("skills", {
   id: {
      type: DataTypes.INTEGER,
       primaryKey: true
     },

    weekNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    gitlabLink: {
      type: DataTypes.STRING,
      allowNull: false
    },

    skill: {
      type: DataTypes.STRING,
      allowNull: false
    },

    webReference: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  skills.associate = function(models) {
  
    skills.belongsTo(models.activity, {
      foreignKey: {
          allowNull: false
      }

    });

  };

  return skills;
 
};

  
