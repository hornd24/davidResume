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
    if(url[3]==='about'||url[3]==='contact'){
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
          <Grid fluid={true}>
          <br/> <br/>
              <p style={{color:'red',fontSize:'30px'}}>This website is under development.</p>
        <div className={this.state.boxClass}>
        <div className={this.state.headerClass}>
        <Row>
   <div className='behind'>
   {!this.state.Mern&&
            <h2 className='code' >MERN Full Web Stack Developer</h2>}
            </div>
           </Row> 
        </div>
        </div>
       {!this.state.boxesGrid&&<div> <br/>  <br/>  <br/><br/><br/></div>}
     {!this.state.boxesGrid&& <div><h2 className='lang'>Coding Languages & Frameworks</h2>  <br/></div>}
     
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
      <Col smOffset  md={3}>
      
    
        <div className='Boxes CSS'>
        </div>
        <h3 className='nodeH'>CSS:3</h3>
      </Col>
      <Col smOffset md={3}>
      <div className='Boxes Javascript'>
        </div>
        <h3 className='nodeH'>Javascript</h3>
        </Col>
        <Col smOffset md={3}>
        <div className='Boxes Boot'>
        </div>
        <h3 className='nodeH'>BootStrap</h3>
   </Col>
        </Row>
        <br/>
        <Row className="show-grid">
      <Col  smOffset md={3}>
        
        <div className='Boxes SQL'>
        </div>
        <h3 className='nodeH'>MYSQL</h3>
      </Col>
      <Col  md={3}>
      
    
        <div className='Boxes Handle'>
        </div>
        <h3 className='nodeH'>Handlebars.js</h3>
      </Col>
      <Col smOffset  md={3}>
      <div className='Boxes Jqery'>
        </div>
        <h3 className='nodeH'>JQery</h3>
        </Col>
        <Col smOffset  md={3}>
        <div className='Boxes Material'>
        </div>
        <h3 className='nodeH'>Material-UI</h3>
   </Col>
        </Row>
        <br/>
        <Row className="show-grid">
      <Col   smOffset md={3}>
        
        <div className='Boxes Git'>
        </div>
        <h3 className='nodeH'>Git Hub</h3>
      </Col>
      <Col smOffset md={3}>
      
    
        <div className='Boxes ReactBoot'>
        </div>
        <h3 className='nodeH'>React BootStrap</h3>
      </Col>
      <Col smOffset md={3}>
      <div className='Boxes Native'>
        </div>
        <h3 className='nodeH'>React Native</h3>
        </Col>
        <Col  md={3}>
        <div className='Boxes Java'>
        </div>
        <h3 className='nodeH'>Java</h3>
   </Col>
        </Row>
          </div>}
          </Grid>
        </div>
    )
}
}

export default Header;