

import db from "../models";
// import sendgrid from '../../sendgrid'
import sgMail from '@sendgrid/mail'
// ||sendgrid
sgMail.setApiKey(process.env.sendgrid);
// Defining methods for the booksController
const controller = {
  AllContacts: (req, res) => {
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
  sendInfo: function(req, res) {
  console.log(req.body)
  const name=req.body.name
  const email=req.body.email
  const comment=req.body.comment
  const dates=req.body.createdat
 const userEmail=req.body.userEmail
  const msg = {
    to: userEmail,
    from: 'thedavehorn@horn.com',
    subject: 'Here is the information you requested',
    text: ' ',
    html: `<strong><div style='width:550px;height:250px;border-width:500px;border-color:#FF4500;'><label style='color:#FF4500'>Name: </label><p style='color:#800080;text-decoration: underline;' > ${name} </p>---------------------<br/><label style='color:#FF4500'>Email: </label style='color:#FF4500'><p style='color:#800080;text-decoration: underline;'>${email} </p><br/>---------------------<br/><label style='color:#FF4500'>Comments:</label><p style='color:#800080;text-decoration: underline;'>${comment}</p>---------------------<br/><label style='color:#FF4500'>Created On:</label><p style='color:#800080;text-decoration: underline;'>${dates}</p> </strong>`,
  };
  //background-color:green
  
    sgMail.send(msg);
    res.send('emailSent');

  


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
        let name=dbModel.dataValues.name
        let email=dbModel.dataValues.email
        let comment=dbModel.dataValues.comments
        let split=JSON.stringify(dbModel.dataValues.createdAt);
        console.log(split)
        let dbDate = split.split(':')
        let splitDate=dbDate[0].split('-')
       let dayCreated =splitDate[2].split('T')
       let removed=splitDate[0].split('"')
      
      let dates=splitDate[1]+'-'+dayCreated[0]+'-'+removed[1]
    
        const msg = {
          to: 'david.horn689@gmail.com',
          from: 'thedavehorn@horn.com',
          subject: 'Someone Wants to connect with you',
          text: '<not working ',
          html: `<strong><label>Name: </label><p> ${name} <p><label>Email: </label><p>${email} </p><label>Comments:</label><p>${comment}</p><label>Created On:</label><p>${dates}</p> </strong>`,
        };
        sgMail.send(msg);
     
        res.done()
      })
        
          
        
        
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
    console.log(req.params)

   db.Contacts.destroy({
       where: {
         id: req.params.id
       }
     })
     .then(dbModel => {
       console.log(dbModel)
     })
     .catch(err => res.status(422).json(err));
  }
};

export { controller as default };
