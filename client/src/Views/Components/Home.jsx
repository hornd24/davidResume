import React,{Component} from 'react';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
// import FormControl from 'react-bootstrap/lib/FormControl';
// import HelpBlock from 'react-bootstrap/lib/HelpBlock';
// import Button from 'react-bootstrap/lib/Button';
import axios from "axios";

import { Grid, Row, Col } from 'react-bootstrap';
import './Home.css'

class Contact extends Component {
    state={
        name:'',
        email:'',
        comment:''
        
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
      render(){
      
            
          
      
    return (
        
        <div className="container">
        <Grid fluid={true}>
       
       <div><h2 className='lang'>Coding Languages & Frameworks</h2></div>
 
    
     <div className='grid'> 
       <Row className="show-grid">
    <Col visibleSmBlock={true} md={3}>
      
      <div className='Boxes Mongod'>
     
      </div>
     <h3 className='nodeH'>MongoDB</h3>
    </Col>
    <Col  visibleSmBlock={true} md={3}>
    
  
      <div className='Boxes Express '>
      </div>
      <h3 className='nodeH'>Express</h3>
    </Col>
    <Col visibleSmBlock={true} md={3}>
    <div className='Boxes React'>
      </div>
      <h3 className='nodeH'>React.js</h3>
      </Col>
      <Col  visibleSmBlock={true} md={3}>
      <div className='Boxes Node'>
      </div>
      <h3 className='nodeH'>Node.js</h3>
 </Col>
      </Row>
      <br/>
      <Row className="show-grid">
    <Col  visibleSmBlock={true} md={3}>
      
      <div className='Boxes HTML'>
      </div>
      <h3 className='nodeH'>HTML:5</h3>
    </Col>
    <Col smOffset  visibleSmBlock={true} md={3}>
    
  
      <div className='Boxes CSS'>
      </div>
      <h3 className='nodeH'>CSS:3</h3>
    </Col>
    <Col smOffset visibleSmBlock={true} md={3}>
    <div className='Boxes Javascript'>
      </div>
      <h3 className='nodeH'>Javascript</h3>
      </Col>
      <Col smOffset visibleSmBlock={true} md={3}>
      <div className='Boxes Boot'>
      </div>
      <h3 className='nodeH'>BootStrap</h3>
 </Col>
      </Row>
      <br/>
      <Row className="show-grid">
    <Col  smOffset visibleSmBlock={true} md={3}>
      
      <div className='Boxes SQL'>
      </div>
      <h3 className='nodeH'>MYSQL</h3>
    </Col>
    <Col  visibleSmBlock={true} md={3}>
    
  
      <div className='Boxes Handle'>
      </div>
      <h3 className='nodeH'>Handlebars.js</h3>
    </Col>
    <Col smOffset  visibleSmBlock={true} md={3}>
    <div className='Boxes Jqery'>
      </div>
      <h3 className='nodeH'>JQery</h3>
      </Col>
      <Col smOffset  visibleSmBlock={true} md={3}>
      <div className='Boxes Material'>
      </div>
      <h3 className='nodeH'>Material-UI</h3>
 </Col>
      </Row>
      <br/>
      <Row className="show-grid">
    <Col   smOffset visibleSmBlock={true} md={3}>
      
      <div className='Boxes Git'>
      </div>
      <h3 className='nodeH'>Git Hub</h3>
    </Col>
    <Col smOffset visibleSmBlock={true} md={3}>
    
  
      <div className='Boxes ReactBoot'>
      </div>
      <h3 className='nodeH'>React BootStrap</h3>
    </Col>
    <Col smOffset visibleSmBlock={true} md={3}>
    <div className='Boxes Native'>
      </div>
      <h3 className='nodeH'>React Native</h3>
      </Col>
      <Col  visibleSmBlock={true} md={3}>
      <div className='Boxes Java'>
      </div>
      <h3 className='nodeH'>Java</h3>
 </Col>
      </Row>
        </div>
        
 </Grid>
        </div>
    )
}
}

export default Contact;