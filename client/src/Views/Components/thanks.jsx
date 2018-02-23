import React,{Component} from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import axios from "axios";
class Thanks extends Component {
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
      }
      render(){
      
            
          
      
    return (
        
        <div className="container">
        <h1>Thank you for the feedback</h1>
       
       <Button bsStyle="success">Home</Button>
        </div>
    )
}
}

export default Thanks;