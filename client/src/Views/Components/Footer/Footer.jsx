import React,{Component} from 'react';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
// import FormControl from 'react-bootstrap/lib/FormControl';
// import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import {Link} from 'react-router-dom';
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
       button:'home'
        
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
   <Link to='/'><Button bsStyle="primary" bsSize="large" className='Flow' block onClick={this.scrollToTop}>
    Top Of the Page
    </Button></Link>
         <Panel  collapsible className="Panel">
           <Panel.Body>
            <div className="row">
            
    <div className="col-lg-3 ">
   
                     
    </div>
    <div className="col-lg-6 twitter1" >
    <img className='linkedinIcon' src={Twitter} alt='linkedin logo'/>
    <p style={{margin:'0 -4'}}>Follow <a className="footerLinks" href='https://twitter.com/dahorn689' target="_blank" rel="noopener noreferrer">@dahorn689</a> on Twitter for articles on the MERN stack and the newest things in tech news.</p>
    </div>
    <div className="col-lg-4">
    <div className='lol'>
    <Thumbnail src={Me} style={{width:'80px',height:'80px',margin:'0 auto'}}responsive={true} rounded={true}  alt="David Horn">
                            
                        </Thumbnail>
                        <h4>David Horn</h4>
                            <p>MERN full stack web developer. <br/>React and Node being my specialty. <br/>Graduated from UC Irvine Coding Boot Camp.  </p>
                           
                        </div>
    </div>
    
   </div>
   <div className="row">
            
            <div className="col-lg-2">
          
           
            
            </div>
            <div  className="col-lg-6">
            <img className='linkedinIcon' src={GitHub} alt='linkedin logo'/>
           <p> Follow me on<a className="footerLinks" href="https://github.com/hornd24" target="_blank" rel="noopener noreferrer"> @hornd24</a> on GitHub for open source projects.</p>
            </div>
            <div className="col-lg-4">
            </div>
        
           </div>
           <div className="row">
            
            <div className="col-lg-2">
            
            
            </div>
            <div className="col-lg-6">
            <img className='linkedinIcon' src={linkedin} alt='linkedin logo'/>
           <p> View my 
               <a href="https://www.linkedin.com/in/david-horn-121358105/" className="footerLinks" target="_blank" rel="noopener noreferrer">LinkedIn profile </a>
               </p>
            </div>
            <div className="col-lg-4">
            </div>
            
           </div>
        
              <a href='sitemap.html' className='footerLinks'> <footer>Sitemap</footer></a>
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