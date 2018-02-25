import React,{Component} from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import axios from "axios";
import Overlay from 'react-bootstrap/lib/Overlay'
import './admin.css'
import { Grid, Row, Col } from 'react-bootstrap';
class Contact extends Component {
    state={
        user:'',
        
       pass:'',
       modal:false,
        show:false,
        overlay:'overlay',
        sign:'show',
        info:[],
        hide:true,
        name:'',
        email:'',
        comment:''
        
    }
    componentDidMount=()=>{

    }
    handleChange=(e) =>{
        const name = e.target.name;
        const value = e.target.value;
         this.setState({ [name]: value })
      }
      getInfo=(e)=>{
          let name=e.currentTarget.attributes.name.nodeValue
         let email=e.currentTarget.attributes.email.nodeValue
         let comments=e.currentTarget.attributes.comment.nodeValue
         
    this.setState({
name:name,
email:email,
comment:comments
    },this.showMore)
    setTimeout(function(){  }, 3000);
    
 
      }
      showMore=()=>{
        console.log(this.state.name) 
this.setState({
    modal:true
})

      }
      closeModal=()=>{
        this.setState({modal:false})
      }
      onSubmit=()=>{
        
        
          
          if(this.state.user===''||this.state.pass===''){
              this.setState({
                  overlay:'overlay2',
                  sign:'not',
                  show:true,
                  hide:false,
                  info:[{name:'john hop',email:'jon@gmail.com',comment:'great site jfknnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnlets work together',key:1},{name:'john hop',email:'jon@gmail.com',comment:'great site lets work together',key:2},{name:'john hop',email:'jon@gmail.com',comment:'great site lets work together',key:3},{name:'john hop',email:'jon@gmail.com',comment:'great site lets work together',key:4},{name:'john hop',email:'jon@gmail.com',comment:'great site lets work together',key:5},{name:'billy',email:'billy@bill.com',comment:'test',key:6}]
              })
           

          }
        // axios.post("/api/contact/info", this.state)
        // window.location='/thanks'
      }
      render(){
      
            
          
      
    return (
        
        <div onClick={this.closeModal} className={this.state.overlay}>
        <br/>
        {!this.state.hide&&
        <div  className='info boxDiv'>
       
        {this.state.info.map((tile) => ( 
             
             <div name={tile.name} email={tile.email} comment={tile.comment} onClick={this.getInfo} key={tile.key} className='Boxes'>
             <label>Name:</label>
        <p className='tiles'>{tile.name}</p>
        <label> Email:</label>
        <p >{tile.email}</p>
        <label>Comments:</label>
        <p >{tile.comment}</p>
       
        </div> ))}     
           </div> }
           <Modal bsSize={'lg'}style={{overFlow:'auto'}} show={this.state.modal}>
           <Modal.Body bsSize={'lg'}><label>Name:</label>
        <p className='showMore'>{this.state.name}</p>
        <label> Email:</label>
        <p className='showMore'>{this.state.email}</p>
        <label>Comments:</label>
        <p className='showMore'>{this.state.comment}</p>
        <Button onClick={this.showMore}>Email Me Info</Button></Modal.Body> </Modal>
        {!this.state.show&&
        <div className={this.state.sign}>
       <label>Username: </label> <FormControl
             onChange={this.handleChange}
                 id="formControlsEmail"
                name='user'
                type="text"
                label="UserName"
                placeholder="Enter Username"
                value={this.state.email}
            />
              <label>Password: </label>
            <FormControl
             onChange={this.handleChange}
             name='pass'
                
                type="password"
                // label="Comments"
                placeholder="Enter Password"
                value={this.state.comment}
            />
            <Button onClick={this.onSubmit} bsStyle="success">Sign In </Button>
            </div>}
      
        </div>
    )
}
}

export default Contact;