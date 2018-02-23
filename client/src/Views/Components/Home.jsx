import React,{Component} from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import axios from "axios";
import Header from './Header';

import Portfolio from './Portfolio';
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
          console.log(this.state)
        axios.post("/api/contact/info", this.state)
        window.location='/thanks'
      }
      render(){
      
            
          
      
    return (
        
        <div className="container">
       

        
 
        </div>
    )
}
}

export default Contact;