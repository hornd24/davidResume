import sgMail from '@sendgrid/mail';

import db from "../models";
import sendgrid from '../../sendgrid';
sgMail.setApiKey(sendgrid);
// Defining methods for the booksController
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
        
        let dates=splitDate[1]+'-'+dayCreated[0]+''+removed[1]
        
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
        
res.json(info);

      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Organization.findOne({
        where: {
          id: req.params.id,
          inactive: false
        }
      })
      .then(dbModel => {
        if (dbModel) {
          res.json(dbModel);
        } else {
          res.status(404).json({
            message: 'Id not found.'
          });
        }
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    db.Contacts.create({
        name: req.body.name,
        email: req.body.email,
        comments:req.body.comment
      })
      .then(dbModel => {
        console.log(dbModel.dataValues)
        var name=dbModel.dataValues.name
        var email=dbModel.dataValues.email
        var comment=dbModel.dataValues.comments
        const msg = {
          to: 'david.horn689@gmail.com',
          from: 'thedavehorn@horn.com',
          subject: 'Someone Wants to connect with you',
          text: '',
          html: `<strong><p>Name: ${name} <p><p>Email:${email} </p><label>Comments</label><p>${comment}</p> </strong>`,
        };
        sgMail.send(msg);
     
        res.json(dbModel)})
        
          
        
        
      .catch(err => res.status(422).json(err));
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
