module.exports = function(sequelize, DataTypes) {
    var Tests = sequelize.define("Tests", {
      datatype: {
        type: DataTypes.STRING,
       
       
      },
      data: {
        type: DataTypes.STRING,
        
      
        
      },
   
    });
    return Tests;
  };
  