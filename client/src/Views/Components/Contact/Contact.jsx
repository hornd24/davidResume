import React,{Component} from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
 import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
// import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import axios from "axios";
// import Checkbox from 'react-bootstrap/lib/Checkbox'
import { Grid, Row, Col } from 'react-bootstrap';
class Contact extends Component {
    state={
        name:'',
        email:'',
        comment:'',
        button:false,
        emailVal:false,
        nameVal:false,
        commentVal:false
        
    }
    handleChange=(e) =>{
        const name = e.target.name;
        const value = e.target.value;
         this.setState({ [name]: value })
      }
      onSubmit=()=>{
  
        axios.post("/api/contact/info", this.state)
        window.location='/thanks'
      }
      
    //   validationStateName() {
      
    //     const length = this.state.name.length;
      
    //     if (length > 4) {
           
           
    // }
       
    //     else if (length > 0) return 'error';
    //     return null;
    //   }

      validationStateEmail(){
        
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       let email= re.test(String(this.state.email).toLowerCase());
         if (email === true) {
            
             return 'success'
         }
         
         else if (email ===false) return 'error';
         return null;
        }
//  validationStateComment(){
   
//     const length = this.state.comment.length;
      
//     if (length > 8) {
       
//         return 'success'
// }
   
//     else if (length > 0) return 'error';
//     return null;
//  }
      render(){
      
            
          
      
    return (
        
        <div className="container" >
        <Grid fluid={true}>
        <br/><br/>
        <Row>
            <Col md={12}>
        <h1>Contact</h1>
        <h4>Please Leave A Comment</h4>
        </Col>
        </Row>
        <Row>
            <Col md={12}>
    
        </Col>
        </Row>
        <Row>
            <Col md={12}>
            <FormGroup bsSize={'lg'}  >
            <ControlLabel>Name</ControlLabel>
        <FormControl
        onChange={this.handleChange}
                 id="formControlsName"
                name='name'
                type="text"
                // label="Name"
                placeholder="Enter Name"
                value={this.state.name}
            />
            </FormGroup>
            </Col>
            </Row>
            <Row>
                <Col md={12}>
           
            </Col>
            </Row>
            <Row>
                <FormGroup bsSize={'lg'} validationState={this.validationStateEmail()}>
                <ControlLabel>Email</ControlLabel>
            <FormControl
             onChange={this.handleChange}
                 id="formControlsEmail"
                name='email'
                type="email"
                label="Email address"
                placeholder="Enter email"
                value={this.state.email}
            />
            </FormGroup>
            <FormGroup bsSize={'lg'} >
            <ControlLabel>Comments</ControlLabel>
            <FormControl
             onChange={this.handleChange}
             name='comment'
                id="formControlsComments"
                type="text"
                // label="Comments"
                placeholder="Please leave a comment"
                value={this.state.comment}
            />
            </FormGroup>
           
            </Row>
           
           
             <Button disabled={this.state.button} onClick={this.onSubmit} bsStyle="success">Submit</Button>
             </Grid>
             
        </div>
    )
}
}

export default Contact;