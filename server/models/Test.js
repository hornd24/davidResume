module.exports = function(sequelize, DataTypes) {
    var Test = sequelize.define("Test", {
      datatype: {
        type: DataTypes.STRING,
       
       
      },
      data: {
        type: DataTypes.STRING,
        
      
        
      },
   
    });
    return Test;
  };
  