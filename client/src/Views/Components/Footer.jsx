import React,{Component} from 'react';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
// import FormControl from 'react-bootstrap/lib/FormControl';
// import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import axios from "axios";
// import { Grid, Row, Col } from 'react-bootstrap';
import './Footer.css'
import Panel from 'react-bootstrap/lib/Panel'
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Me from './david.jpg';
class Footer extends Component {
    state={
       button:'home'
        
    }
    
   componentDidMount=(e) =>{
        const url=window.location.toString().split('/')
        if(url[3]==='about'){
            console.log('hi')
            this.setState({
                button:'about'
            })
        }else if(url[3]==='projects'){
            this.setState({
                button:'projects'
            })
        }else if(url[3]==='contact'||url[3]==='thanks'){
            this.setState({
                button:'notNeeded'
            })
        }
        
      }
      onSubmit=()=>{
          console.log(this.state)
        axios.post("/api/contact/info", this.state)
        window.location='/thanks'
      }
      render(){
         let button=null
      if(this.state.button==='home'){
button=<a href='/about'><Button bsStyle="primary" bsSize="large" className='Flow' block>
     Next: About David
    </Button></a>
      }
      else if(this.state.button==='about'){
button=<a href='/projects'><Button bsStyle="primary" className='Flow' bsSize="large" block>
     Next: David's Projects
    </Button></a>
      }
      else if(this.state.button==='projects'){
        button=<a href='/contact'><Button bsStyle="primary" className='Flow' bsSize="large" block>
       Next: Contact David
       </Button></a> 
      }
      else if (this.state.button==='notNeeded'){
          button=<div> <br/><br/><a href='/'><Button bsStyle="primary" bsSize="large" className='Flow' block>
          Back Home
         </Button></a> </div>
      }
            
          
      
    return (
    <div className="row">
      <div className="col-lg-12">
        <div className="footer">
          {button}
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