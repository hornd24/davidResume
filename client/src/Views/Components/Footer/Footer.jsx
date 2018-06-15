import React,{Component} from 'react';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
// import FormControl from 'react-bootstrap/lib/FormControl';
// import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import FormGroup from 'react-bootstrap/lib/FormGroup';
 import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import {Link} from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from "axios";
import Image from 'react-bootstrap/lib/Image';
// import { Grid, Row, Col } from 'react-bootstrap';
import './Footer.css'
import Panel from 'react-bootstrap/lib/Panel'
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Me from '../david.jpg';
import Twitter from './Twitter_logo_bird_transparent_png.png';
import GitHub from './Github.png';
import linkedin from './linkedin.svg';
class Footer extends Component {
    state={
       button:'home',
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
    
    validationStateEmail(){
        
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       let email= re.test(String(this.state.email).toLowerCase());
         if (email === true) {
            
             return 'success'
         }
         
         else if (email ===false) return 'error';
         return null;
        }
    scrollToTop=()=>{
        window.scrollTo(0,10)
    }
   componentDidMount=(e) =>{
     
        
      }
     
      render(){
      
      
    return (
    <div className="row">
      <div className="col-lg-12">
        <div className="footer">
      
   
         <Panel  collapsible className="Panel">
           <Panel.Body className='panelBody'>
            <div className="row">
            
    <div className="col-lg-3">
   
                     
    </div>
  
    <div className="col-lg-9 twitter1" >
    <Grid className="contacts">
      <Row>
            <Col md={12}>
       
        <h4 className="Text labels">Contact:</h4>
        </Col>
        </Row>
                <Row>
            <Col md={12}>
            <FormGroup    bsSize={'xs'}  >
            <ControlLabel className='labels' >Name</ControlLabel>
        <FormControl
        onChange={this.handleChange}
        className='thecontact'
                 id="formControlsName"
                name='name'
                type="text"
                // bsClass='thecontact'
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
                <Col md={12}>
                <FormGroup   bsSize={'xs'} >
                <ControlLabel className='labels' >Email</ControlLabel>
            <FormControl
             onChange={this.handleChange}
                 id="formControlsEmail"
                 className='thecontact'
                name='email'
                type="email"
                label="Email address"
                placeholder="Enter email"
                value={this.state.email}
            />
            </FormGroup>
            </Col>
            </Row>
            <Row> 
                <Col md={12}>
            <FormGroup   bsSize={'xs'} >
            <ControlLabel className='labels' >Message</ControlLabel>
            <FormControl
             onChange={this.handleChange}
            //  className='types'
             name='comment'
             className='thecontact'
                id="formControlsComments"
                type="text"
                // label="Comments"
                placeholder="Enter Message"
                value={this.state.comment}
            />
            </FormGroup>
            </Col>
           
            </Row>
          
           <Row>
           <Col className='labels' md={12}>
            
             <Button    disabled={this.state.button} onClick={this.onSubmit} bsStyle="success">Submit</Button>
            </Col>
            </Row>
             </Grid>
  
    </div>
   
 
   </div>
   <br/>
   <div className="row">
            
            <div className="col-lg-3">
          
           
            
            </div>
            
            <div className="col-lg-9 pictures">
            <a href="https://www.linkedin.com/in/david-horn-121358105/" className="footerLinks" target="_blank" rel="noopener noreferrer"> 
                 <Image className='Thesocial' src={linkedin} alt='linkedin logo'/></a>
                 <a href="https://github.com/hornd24" target="_blank" rel="noopener noreferrer">
                  <Image className='Thesocial' src={GitHub} alt='git hub'/>
                  </a>
                  <a href='https://twitter.com/dahorn689' target="_blank" rel="noopener noreferrer">
<Image className='Thesocial' src={Twitter} alt='linkedin logo'/>
</a>
            </div>
            
           </div>
        <div className="sitemap">
              <a href='sitemap.html' className='footerLinks'> <footer>Sitemap</footer></a>
             <footer>Copyright © 2018 David Horn</footer>
             </div>
         </Panel.Body>
  </Panel>
                    </div>
                </div>
            </div>
    )
}
}

export default Footer;