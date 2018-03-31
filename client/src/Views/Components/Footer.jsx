import React,{Component} from 'react';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
// import FormControl from 'react-bootstrap/lib/FormControl';
// import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import axios from "axios";
import {Link} from 'react-router-dom';
// import { Grid, Row, Col } from 'react-bootstrap';
import './Footer.css'
import Panel from 'react-bootstrap/lib/Panel'
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Me from './david.jpg';
class Footer extends Component {
    state={
       button:'home'
        
    }
    scrollToTop=()=>{
        window.scrollTo(0,0)
    }
   componentDidMount=(e) =>{
     
        
      }
     
      render(){
      
      
    return (
    <div className="row">
      <div className="col-lg-12">
        <div className="footer">
   <Link to='/'><Button bsStyle="primary" bsSize="large" className='Flow' block onClick={this.scrollToTop}>
    Top Of the Page
    </Button></Link>
         <Panel  collapsible className="Panel">
           <Panel.Body>
            <div className="row">
            
    <div className="col-lg-4 ">
    <div className='lol'>
    <Thumbnail  style={{width:'80px',height:'80px',margin:'0 auto'}}responsive={true} rounded={true} src={Me} alt="David Horn">
                            
                        </Thumbnail>
                        <h3>David Horn</h3>
                            <p>MERN full stack web developer. React and Node being my specialty. Graduated from UC Irvine Coding Boot Camp.  </p>
                            <p>
                            </p>
                        </div>
                     
    </div>
    <div className="col-lg-4" >
    <p style={{margin:'0 auto'}}>Follow <a style={{color:'red'}} href='https://twitter.com/dahorn689' target="_blank" rel="noopener noreferrer">@dahorn689</a> on Twitter for articles on the MERN stack and the newest things in tech news.</p>
    </div>
    <div className="col-lg-4">
    
    </div>
    
   </div>
   <div className="row">
            
            <div className="col-lg-4">
          
           
            
            </div>
            <div  className="col-lg-4">
           <p> Follow me on<a style={{color:'red'}} href="https://github.com/hornd24" target="_blank" rel="noopener noreferrer"> @hornd24</a> on GitHub for open source projects.</p>
            </div>
            <div className="col-lg-4">
            </div>
        
           </div>
           <div className="row">
            
            <div className="col-lg-4">
            
            
            </div>
            <div className="col-lg-4">
            David Horn
            </div>
            <div className="col-lg-4">
            </div>
            
           </div>
           
             <footer>Copyright © 2018 David Horn</footer>
         </Panel.Body>
  </Panel>
                    </div>
                </div>
            </div>
    )
}
}

export default Footer;