import React,{Component} from 'react';
import background from '../background.jpg';
import './Header.css';
import { Grid, Row, Col } from 'react-bootstrap';

class Header extends Component {
state={
headerClass:'headerDiv',
boxClass:'boxDiv',
boxesGrid:false,
Mern:false
}
componentDidMount=()=>{
    
    const url=window.location.toString().split('/')
    console.log(url[3])
    if(url[3]==='about'){
        console.log('hi')
        this.setState({
            boxesGrid:true
        })
    }
     if(url[3]==='projects'){
        console.log('hi')
this.setState({
    headerClass:'P',
    boxClass:'P',
    boxesGrid:true,
    Mern:true
})
console.log(this.state.headerClass)
    }else{
        this.setState({
            headerClass:'headerDiv',
            boxClass:'boxDiv',
            notNeeded:false
        }) 
    }
}

render(){
    return (
        <div>
        <div className={this.state.boxClass}>
        <div className={this.state.headerClass}>
        
   <div className='behind'>
   {!this.state.Mern&&
            <h2 className='code' >MERN Full Web Stack Developer</h2>}
            </div>
        </div>
        </div>
        <br/>  <br/>  <br/><br/><br/>
      <div><h2 className='lang'><strong>Coding Languages & Frameworks</strong></h2></div>
      <br/>
       {!this.state.boxesGrid &&
      
       <div className='grid'> 
         <Row className="show-grid">
      <Col  md={3}>
        
        <div className='Boxes Mongod'>
        {/* <div className='Node'>
        </div> */}
        </div>
       <h3 className='nodeH'>MongoDB</h3>
      </Col>
      <Col  md={3}>
      
    
        <div className='Boxes Express '>
        </div>
        <h3 className='nodeH'>Express</h3>
      </Col>
      <Col  md={3}>
      <div className='Boxes React'>
        </div>
        <h3 className='nodeH'>React.js</h3>
        </Col>
        <Col  md={3}>
        <div className='Boxes Node'>
        </div>
        <h3 className='nodeH'>Node.js</h3>
   </Col>
        </Row>
        <br/>
        <Row className="show-grid">
      <Col  md={3}>
        
        <div className='Boxes HTML'>
        </div>
        <h3 className='nodeH'>HTML:5</h3>
      </Col>
      <Col  md={3}>
      
    
        <div className='Boxes CSS'>
        </div>
        <h3 className='nodeH'>CSS:3</h3>
      </Col>
      <Col  md={3}>
      <div className='Boxes Javascript'>
        </div>
        <h3 className='nodeH'>Javascript</h3>
        </Col>
        <Col  md={3}>
        <div className='Boxes Boot'>
        </div>
        <h3 className='nodeH'>BootStrap</h3>
   </Col>
        </Row>
        <br/>
        <Row className="show-grid">
      <Col  md={3}>
        
        <div className='Boxes SQL'>
        </div>
        <h3 className='nodeH'>MYSQL</h3>
      </Col>
      <Col  md={3}>
      
    
        <div className='Boxes Handle'>
        </div>
        <h3 className='nodeH'>Handlebars.js</h3>
      </Col>
      <Col  md={3}>
      <div className='Boxes Jqery'>
        </div>
        <h3 className='nodeH'>JQery</h3>
        </Col>
        <Col  md={3}>
        <div className='Boxes Material'>
        </div>
        <h3 className='nodeH'>Material-UI</h3>
   </Col>
        </Row>
        <br/>
        <Row className="show-grid">
      <Col  md={3}>
        
        <div className='Boxes Git'>
        </div>
        <h3 className='nodeH'>Git Hub</h3>
      </Col>
      <Col  md={3}>
      
    
        <div className='Boxes ReactBoot'>
        </div>
        <h3 className='nodeH'>React BootStrap</h3>
      </Col>
      <Col  md={3}>
      <div className='Boxes Router'>
        </div>
        <h3 className='nodeH'>React Router</h3>
        </Col>
        <Col  md={3}>
        <div className='Boxes Java'>
        </div>
        <h3 className='nodeH'>Java</h3>
   </Col>
        </Row>
          </div>}
        </div>
    )
}
}

export default Header;