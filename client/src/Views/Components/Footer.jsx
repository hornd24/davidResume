import React,{Component} from 'react';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
// import FormControl from 'react-bootstrap/lib/FormControl';
// import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import axios from "axios";
import { Grid, Row, Col } from 'react-bootstrap';
import './Footer.css'
import Panel from 'react-bootstrap/lib/Panel'
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
        }else if(url[3]==='contact'){
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
     Next: Daivd's Projects
    </Button></a>
      }
      else if(this.state.button==='projects'){
        button=<a href='/contact'><Button bsStyle="primary" className='Flow' bsSize="large" block>
       Next: Contact David
       </Button></a> 
      }
      else if (this.state.button==='notNeeded'){
          button=<div> <br/><br/><a href='/'><Button bsStyle="primary" bsSize="large" className='Flow' block>
          Home
         </Button></a> </div>
      }
            
          
      
    return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer">
                        {button}
                    </div>
                </div>
            </div>
    )
}
}

export default Footer;