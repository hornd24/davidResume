import React,{Component} from 'react';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
// import FormControl from 'react-bootstrap/lib/FormControl';
// import HelpBlock from 'react-bootstrap/lib/HelpBlock';
// import Button from 'react-bootstrap/lib/Button';
import axios from "axios";
import classNames from 'classnames'
import { Grid, Row, Col } from 'react-bootstrap';
import './Home.css'

class Contact extends Component {
    state={
        name:'',
        email:'',
        comment:'',
        mobile:'Boxes',
        Grid:'grid'
        
    }
    componentDidMount=()=> {
      
    }
  
    
    handleChange=(e) =>{
        const name = e.target.name;
        const value = e.target.value;
         this.setState({ [name]: value })
      }
      componentWillReceiveProps=(nextProps) =>{
        console.log(nextProps)
        if(nextProps.mobile===true){
          this.setState({
            mobile:'BoxesMobile',
            Grid:'mobileGrid'
          })
        }
      }
      
      render(){
      
     
          
      
    return (
        
        <div className="container">
        <Grid fluid={true}>
       
       <div><h2 className='lang'>Coding Languages & Frameworks</h2></div>
 
    
     <div className={this.state.Grid}> 
       <Row className="show-grid">
    <Col visibleSmBlock={true} xs={5} md={3}>
      
      <div className={classNames(this.state.mobile,'Mongod') } >
     
      </div>
     <h3 className='nodeH'>MongoDB</h3>
    </Col>
    <Col  visibleSmBlock={true} xs={5} md={3}>
    
  
      <div className={classNames(
        this.state.mobile, 'Express' 
      )}>
      </div>
      <h3 className='nodeH'>Express</h3>
    </Col>
    <Col xs={4}visibleSmBlock={true} md={3}>
    <div className={classNames(this.state.mobile,'React') }>
      </div>
      <h3 className='nodeH'>React.js</h3>
      </Col>
      <Col  xs={4}visibleSmBlock={true} md={3}>
      <div className={classNames(this.state.mobile,'Node') }>
      </div>
      <h3 className='nodeH'>Node.js</h3>
 </Col>
      </Row>
      <br/>
      <Row className="show-grid">
    <Col  xs={4}visibleSmBlock={true} md={3}>
      
      <div className={classNames(this.state.mobile,'HTML') }>
      </div>
      <h3 className='nodeH'>HTML:5</h3>
    </Col>
    <Col smOffset  xs={4}visibleSmBlock={true} md={3}>
    
  
      <div className={classNames(this.state.mobile,'CSS') }>
      </div>
      <h3 className='nodeH'>CSS:3</h3>
    </Col>
    <Col xs={4} smOffset visibleSmBlock={true} md={3}>
    <div className={classNames(this.state.mobile,'Javascript') } >
      </div>
      <h3 className='nodeH'>Javascript</h3>
      </Col>
      <Col xs={4}smOffset visibleSmBlock={true} md={3}>
      <div className={classNames(this.state.mobile,'Boot') }>
      </div>
      <h3 className='nodeH'>BootStrap</h3>
 </Col>
      </Row>
      <br/>
      <Row className="show-grid">
    <Col xs={4} smOffset visibleSmBlock={true} md={3}>
      
      <div className={classNames(this.state.mobile,'SQL') }>
      </div>
      <h3 className='nodeH'>MYSQL</h3>
    </Col>
    <Col  xs={4}visibleSmBlock={true} md={3}>
    
  
      <div className={classNames(this.state.mobile,'Handle') }>
      </div>
      <h3 className='nodeH'>Handlebars.js</h3>
    </Col>
    <Col smOffset xs={4} visibleSmBlock={true} md={3}>
    <div className={classNames(this.state.mobile,'Jqery') }>
      </div>
      <h3 className='nodeH'>JQery</h3>
      </Col>
      <Col xs={4}smOffset  visibleSmBlock={true} md={3}>
      <div className={classNames(this.state.mobile,'Material') } >
      </div>
      <h3 className='nodeH'>Material-UI</h3>
 </Col>
      </Row>
      <br/>
      <Row className="show-grid">
    <Col  xs={4} smOffset visibleSmBlock={true} md={3}>
      
      <div className={classNames(this.state.mobile,'Git') }>
      </div>
      <h3 className='nodeH'>Git Hub</h3>
    </Col>
    <Col xs={4} smOffset visibleSmBlock={true} md={3}>
    
  
      <div className={classNames(this.state.mobile,'ReactBoot') }>
      </div>
      <h3 className='nodeH'>React BootStrap</h3>
    </Col>
    <Col xs={4}smOffset visibleSmBlock={true} md={3}>
    <div className={classNames(this.state.mobile,'Native') }>
      </div>
      <h3 className='nodeH'>React Native</h3>
      </Col>
      <Col xs={4} visibleSmBlock={true} md={3}>
      <div className={classNames(this.state.mobile,'Java') }>
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