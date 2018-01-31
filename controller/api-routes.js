
var moment = require('moment');











module.exports = function (app) {


  app.get('/',function(req,res){
    res.render('index')
  })


}