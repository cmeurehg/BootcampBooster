<<<<<<< HEAD
=======
module.exports = (sequelize, DataTypes) => {
  const weeks = sequelize.define('weeks', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      
    },
    
    name: {
      type: DataTypes.STRING,
      required: true
    },
    
    gitlab_link: {
        type: DataTypes.STRING,
        required: true
    }

  });

  weeks.associate = function(models) {
  
    weeks.hasMany(models.activity, {
      onDelete: "cascade"

    });
  
  };

  return weeks;

};
>>>>>>> ce3f05bb3ff083801bde21bd8cfecea738703e11
