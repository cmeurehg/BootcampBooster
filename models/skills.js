module.exports = (sequelize, DataTypes) => {
  const skills = sequelize.define('skills', {
   
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
  return skills;
};

