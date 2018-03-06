import React from 'react';
import {DropdownButton,MenuItem} from 'react-bootstrap'

class MobileNav extends React.Component {
 state={

 }
 

 
  
 
  render() {
    return (
        <DropdownButton
        // bsStyle={title.toLowerCase()}
        // title={title}
        // key={i}
        // id={`dropdown-basic-${i}`}
      >
        <MenuItem href='/'eventKey="1">Home</MenuItem>
        <MenuItem  href='/about' eventKey="2">About</MenuItem>
        <MenuItem href='/projects'eventKey="3" > Projects</MenuItem>
        <MenuItem eventKey="4">GitHub</MenuItem>
        <MenuItem eventKey="5">Linkedin</MenuItem>
        <MenuItem eventKey="6">Resume</MenuItem>
        <MenuItem href='/contact' eventKey="6">Contact</MenuItem>
        
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>
    );
  }
}
 
export default MobileNav;