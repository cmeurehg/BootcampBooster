<<<<<<< HEAD
=======
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
   
      skills.belongsTo(models.activity, {
        foreignKey: {
          allowNull: false
        }
      });
    };

  return skills;

};
>>>>>>> ce3f05bb3ff083801bde21bd8cfecea738703e11
