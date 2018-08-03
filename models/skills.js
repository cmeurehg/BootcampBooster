module.exports = (sequelize, DataTypes) => {
  const skills = sequelize.define('skills', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    
    name: {
      type: DataTypes.STRING,
      required: true
    }

  });
    
    skills.associate = function(models) {
   
      skills.belongsTo(models.weeks, {
        foreignKey: {
          allowNull: false
        }
      });
    };

  return skills;

};
