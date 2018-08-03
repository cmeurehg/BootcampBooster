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
  
    weeks.hasMany(models.skills, {
      onDelete: "cascade"

    });
  
  };

  return weeks;

};
