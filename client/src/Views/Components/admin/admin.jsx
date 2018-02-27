import React,{Component} from 'react';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
// import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import axios from "axios";

import './admin.css'
import { Grid, Row, Col } from 'react-bootstrap';
class Contact extends Component {
    state={
        user:'',
        
       pass:'',
       modal:false,
       confirmModal:false,
        otherEmailModal:false,
        show:false,
        overlay:'overlay',
        sign:'show',
        info:[],
        hide:true,
        name:'',
        email:'',
        comment:'',
        commentTwo:'',
        oneComment:true,
        commentModal:false,
        createdat:'',
        userEmail:'',
        otherEmail:'',
        
        useDiffEmail:false
        
        
        
    }
    componentDidMount=()=>{

    }
    handleText=(e) =>{
        const name = e.target.name;
        const value = e.target.value;
  
         this.setState({ [name]: value })
      }
      getInfo=(e)=>{
          let name=e.currentTarget.attributes.name.nodeValue
         let email=e.currentTarget.attributes.email.nodeValue
         let comments=e.currentTarget.attributes.comment.nodeValue
         let createdAt=e.currentTarget.attributes.createdat.nodeValue
         let commenttwo='';
         if(e.currentTarget.attributes.comment.nodeValue !== ''){
            this.setState({
                commentModal:true
            })
             try{
                commenttwo=e.currentTarget.attributes.commenttwo.nodeValue
            
             }catch(err){
                console.log( err)
             }
            
         }
        
    this.setState({
name:name,
email:email,
comment:comments,
commentTwo:commenttwo,
createdat:createdAt
    },this.showMore)
    setTimeout(function(){  }, 3000);
    
 
      }
      showMore=()=>{
       
this.setState({
    modal:true
})

      }
      closeModal=()=>{
        this.setState({modal:false})
}
      closeConfirmModal=()=>{
        this.setState({confirmModal:false})  
      }
      closeOtherEmailModal=()=>{
          this.setState({
            otherEmailModal:false
          })
      }

      emailReg=()=>{
          this.setState({
              modal:true,
              useDiffEmail:false
          })
          const contactReq={
            name:this.state.name,
            email:this.state.email,
            comment:this.state.comment,
        
            createdat:this.state.createdat,
            userEmail:this.state.userEmail
          }
axios.post('/api/contact/email',contactReq).then(result=>{
    if(result.data==="emailSent"){
        this.setState({
            confirmModal:true,
            modal:false
        })
    }else{
        console.log(result)
    }
    
})

      }
      openOtherEmailModal=()=>{
          this.setState({
              otherEmailModal:true,
              modal:false
          })
      }
      emailDiff=()=>{
        const contactReq={
            name:this.state.name,
            email:this.state.email,
            comment:this.state.comment,
        
            createdat:this.state.createdat,
            userEmail:this.state.otherEmail
          }
axios.post('/api/contact/email',contactReq).then(result=>{

})
this.setState({
    confirmModal:true,
    useDiffEmail:true,
    otherEmailModal:false
})
      }
      SignIn=()=>{
       
   let email=this.state.user
            let pass =this.state.pass

            const user={
                email:email,
                password:pass
            }
         
            axios.post('/api/users/signin',user).then((users=>{
                console.log(users.data)  
                if(users.data.auth==='auth'){
                    this.setState({
                        overlay:'overlay2',
                        sign:'not',
                        show:true,
                        hide:false,
                        userEmail:users.data.userEmail
                        
                    }, this.getConatact)
    //              for(let i=0;i<this.state.info.length;i++){
    //   if(this.state.info[i].commentTwo !==''){
    //       this.setState({oneComment:false})
          
    //   }
    //              }
      
                }
            })) 

          
    }
    getConatact=()=>{
        axios.get('/api/contact/').then(info=>{
            this.setState({
info:info.data
            })
      
    })
    }
      render(){
          let emailToSend=null
      if(this.state.useDiffEmail ===true){
emailToSend=this.state.otherEmail
      }else{
          emailToSend=this.state.userEmail
      }
            
          
      
    return (
        
        <div  className={this.state.overlay}>
        <br/>
        {!this.state.hide&&<div><br/>
        <h1>To Get More Information Or Email Yourself A Copy Click On A Box</h1></div>}
        {!this.state.hide&&
        <div  className='info boxDiv'>
       <Grid fluid={true}>
       <Row>
           <Col  className='Grid'>
        {this.state.info.map((tile) => ( 
             
             <div name={tile.name} createdat={tile.createdAt} commenttwo={tile.commentTwo} email={tile.email} comment={tile.comments} onClick={this.getInfo} key={tile.id}  className='Boxes'>
             <label>Name:</label>
        <p className='tiles'>{tile.name}</p>
        <label> Email:</label>
        <p >{tile.email}</p>
        <div className='Comments'>
        <label>Comments:</label>
        <p >{tile.comments}</p>
      {!this.state.oneComment&& <div><label>Comment#2</label><p>{tile.commentTwo}</p></div>}</div>
        </div> ))}  
        </Col> 
        </Row>
        </Grid>  
           </div> }
           {/* more info modal */}
           <Modal bsSize={'lg'}style={{overFlow:'visible'}} autoFocus show={this.state.modal}>
           <Modal.Header closeButton>To Email click On Either Button</Modal.Header>
           <Modal.Body bsSize={'lg'}><label>Name:</label>
        <p className='showMore'>{this.state.name}</p>
        <label> Email:</label>
        <p className='showMore'>{this.state.email}</p>
        <label>Comments:</label>
        <p className='showMore'>{this.state.comment}</p>
        {!this.state.commentModal&&<div><label>Comment #2:</label>
        <p className='showMore'>{this.state.commentTwo}</p></div>}<label>Created On:</label><p className='showMore'>{this.state.createdat}</p></Modal.Body>
        <Modal.Footer style={{overflow:'auto'}}>
        <Button onClick={this.closeModal}>Close</Button> <Button onClick={this.emailReg}>Email Me</Button><Button onClick={this.openOtherEmailModal}>Other Email</Button> </Modal.Footer> </Modal>
       
       {/* conformation modal */}
        <Modal bsSize={'lg'}style={{overFlow:'visible'}} autoFocus show={this.state.confirmModal}>
           <Modal.Header closeButton>Your Information was Sent to {emailToSend}.</Modal.Header>
           <Modal.Body bsSize={'lg'}>
        <h1 className='showMore'>The Information you requested is either in your inbox or spam folder.</h1></Modal.Body> 
        <Modal.Footer style={{overflow:'auto'}}>
        <Button onClick={this.closeConfirmModal}>Close</Button> </Modal.Footer> 
        </Modal>

        {/* chang email modal */}
        <Modal bsSize={'lg'}style={{overFlow:'visible'}} autoFocus show={this.state.otherEmailModal}>
           <Modal.Header closeButton={true}>Please Enter The Email You Want The Information To Be Sent To.</Modal.Header>
           <Modal.Body bsSize={'lg'}>
        <label className='showMore'>Email:</label>
        <FormControl
             onChange={this.handleText}
                 
                name='otherEmail'
                type="text"
                
                placeholder="Enter Email"
                value={this.state.otherEmail}
            /></Modal.Body> 
        <Modal.Footer style={{overflow:'auto'}}>
        <Button onClick={this.emailDiff}>Send Email</Button> <Button onClick={this.closeOtherEmailModal}>Close</Button></Modal.Footer> </Modal>
        {!this.state.show&&
        <div className={this.state.sign}>
       <label style={{color:'black',fontFamily:'Oswald'}}>Username: </label>
        <FormControl
             onChange={this.handleText}
                 id="formControlsEmail"
                name='user'
                type="text"
                label="UserName"
                placeholder="Enter Username"
                value={this.state.user}
            />
              <label style={{color:'black',fontFamily:'Oswald'}}>Password: </label>
            <FormControl
             onChange={this.handleText}
             name='pass'
                
                type="password"
                // label="Comments"
                placeholder="Enter Password"
                value={this.state.pass}
            />
            <Button onClick={this.SignIn} bsStyle="success">Sign In </Button>
            </div>}
      
        </div>
    )
}
}

export default Contact;