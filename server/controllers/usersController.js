import db from"../models"

import bcrypt from'bcrypt'
// Defining methods for the booksController
const saltRounds =10;
const controller = {
  findAll: (req, res) => {
    db.Contacts.findAll({
        
      })
      .then(dbModel => {    
        const info=[];
        for(let i=0;i<dbModel.length;i++){
          // console.log(dbModel[i].dataValues)
          let split=JSON.stringify(dbModel[i].dataValues.createdAt);
          let dbDate = split.split(':')
          let splitDate=dbDate[0].split('-')
         let dayCreated =splitDate[2].split('T')
         let removed=splitDate[0].split('"')
        
        let dates=splitDate[1]+'-'+dayCreated[0]+'-'+removed[1]
        
        console.log(dates)
      let  contacts={
        id:dbModel[i].dataValues.id,
        name:dbModel[i].dataValues.name,
        email:dbModel[i].dataValues.email,
        comments:dbModel[i].dataValues.comments,
        createdAt:dates

        }
        info.push(contacts)
        }
        

console.log(info)
      })
      .catch(err => res.status(422).json(err));
  },
  signIn: function(req, res) {
      console.log(req.body)
    db.Users.findOne({
        where: {
          email: req.body.email
        }
      }).then(function (userSign) {
      
        if(userSign === null){
          res.send('noUser')
        }else{
    bcrypt.compare(req.body.password, userSign.dataValues.password).then(function (pass) {
        if (pass === true && req.body.email === userSign.email) {
            console.log(userSign.dataValues.password)
            const user={
              auth:'auth',
              userEmail:userSign.email
            }
   res.json(user)
     
    }
    })
}
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      if (err) {


        console.log(err)
      }
    console.log(hash)
   
    
    db.Users.create({
        name: req.body.name,
        email: req.body.email,
        password:hash
      })
      .then(dbModel => {
        console.log(dbModel[0].dataValues)
        res.json(dbModel)
       })
      .catch(err => res.status(422).json(err));
    })
  },
  update: function(req, res) {
    db.Organization.update({
        name: req.body.name,
        description: req.body.description
      }, {
        where: {
          id: req.params.id,
          inactive: false
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Organization.update({
        inactive: true
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

export { controller as default };
