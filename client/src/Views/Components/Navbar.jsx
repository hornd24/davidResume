import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
// import Header from 'react-bootstrap/lib/Header';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
// import NavDropdown from 'react-bootstrap/lib/NavDropdown';
// import MenuItem from 'react-bootstrap/lib/MenuItem';
import './Navbar.css'

const TheNavbar = (props) => {
    return (
        <div>
            <Navbar  classNames="navbar" fluid={true} toggleKey collapseOnSelect  fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                    <Link className="links" to="/">
                    <p className="links">
                     David Horn
                    </p>
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav pullRight style={{paddingLeft:'100px',paddingRight:'100px'}}>
                    <NavItem eventKey={1} >
                    <Link to='/'>
                        Home
                        </Link>
                    </NavItem>
                   
                   <NavItem eventKey={2} >
                   <Link to="/about"> 
                        About
                        </Link>
                    </NavItem>
                    <NavItem eventKey={2} >
                   <Link to="/education"> 
                        Education 
                        </Link>
                    </NavItem>
                    <NavItem eventKey={2} >
                   <Link to="/classwork"> 
                        Classwork
                        </Link>
                    </NavItem>
                    <NavItem eventKey={3} >
                    <Link to='projects'>
                        Projects
                        </Link>
                    </NavItem>
                    <NavItem className="links"  eventKey={4} href="https://github.com/hornd24" target="_blank"rel="noopener noreferrer">
                       <p className='links'>GitHub</p>
                    </NavItem>
                    <NavItem className="links" eventKey={5} href="https://www.linkedin.com/in/david-horn-121358105/" target="_blank" rel="noopener noreferrer">
                   <p className="links" > LinkedIn</p>
                    </NavItem>
                    <NavItem className="links" eventKey={6} href="https://docs.google.com/document/d/1atQh-AgTU4gdPciFiGiV4yYRuair4iLoyTPL3EbIaQA/edit" target="_blank" rel="noopener noreferrer">
                  <p className="links">  Resume </p>
                    </NavItem>
                    <NavItem eventKey={7} >
                    <Link to="/contact">
                        Contact
                        </Link>
                    </NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>;
          
            
        </div>
    )
}

export default TheNavbar;
