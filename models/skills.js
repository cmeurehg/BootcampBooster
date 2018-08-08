module.exports = function (sequelize, DataTypes) {
  var Skills = sequelize.define("Skills", {
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
  return Skills;
};
