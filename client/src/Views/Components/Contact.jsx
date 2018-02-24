import React,{Component} from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import axios from "axios";
import Checkbox from 'react-bootstrap/lib/Checkbox'
import { Grid, Row, Col } from 'react-bootstrap';
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
        
        <div className="container" style={{alignContent:'center',position:'absolute'}}>
        <Grid fluid={true}>
        <br/>
        <Row>
            <Col md={12}>
        <h1>Contact</h1>
        </Col>
        </Row>
        <Row>
            <Col md={12}>
        <label>Name</label>
        </Col>
        </Row>
        <Row>
            <Col md={12}>
        <FormControl
        onChange={this.handleChange}
                 id="formControlsName"
                name='name'
                type="text"
                label="Name"
                placeholder="Enter Name"
                value={this.state.name}
            />
            </Col>
            </Row>
            <Row>
                <Col md={12}>
            <label>Email</label>
            </Col>
            </Row>
            <FormControl
             onChange={this.handleChange}
                 id="formControlsEmail"
                name='email'
                type="email"
                label="Email address"
                placeholder="Enter email"
                value={this.state.email}
            />
              <label>Comments</label>
            <FormControl
             onChange={this.handleChange}
             name='comment'
                id="formControlsComments"
                type="text"
                // label="Comments"
                placeholder="Please leave a comment"
                value={this.state.comment}
            />
            {/* <label>To get information about hiring me check this box</label>
            <Checkbox >
      
    </Checkbox> */}
             <Button onClick={this.onSubmit} bsStyle="success">Submit</Button>
             </Grid>
        </div>
    )
}
}

export default Contact;