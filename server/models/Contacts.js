module.exports = function(sequelize, DataTypes) {
  var Contacts = sequelize.define("Contacts", {
    name: {
      type: DataTypes.STRING,
     
     
    },
    email: {
      type: DataTypes.STRING,
      
    
      
    },
    comments: {
      type: DataTypes.STRING,
    
    }
  });
  return Contacts;
};
