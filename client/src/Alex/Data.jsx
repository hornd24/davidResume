import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
// import Header from 'react-bootstrap/lib/Header';
import axios from "axios";
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
// import NavDropdown from 'react-bootstrap/lib/NavDropdown';
// import MenuItem from 'react-bootstrap/lib/MenuItem';

 class Data extends Component {
  componentDidMount=()=>{
    axios.get('/api/users/hoe/mom').then(result=>{
        console.log(result)
    })
}
     render(){
    return (
        <div>
          
            
        </div>
    
    )
}
}
export default Data;