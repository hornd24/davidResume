import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
// import Header from 'react-bootstrap/lib/Header';
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
                        <a href="/">David Horn</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav pullRight style={{paddingLeft:'100px',paddingRight:'100px'}}>
                    <NavItem eventKey={1} href="/">
                        Home
                    </NavItem>
                    <NavItem eventKey={2} href="/about">
                        About
                    </NavItem>
                    <NavItem eventKey={3} href="/projects">
                        Projects
                    </NavItem>
                    <NavItem eventKey={4} href="https://github.com/hornd24" target="_blank"rel="noopener noreferrer">
                       GitHub
                    </NavItem>
                    <NavItem eventKey={5} href="https://www.linkedin.com/in/david-horn-121358105/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                    </NavItem>
                    <NavItem eventKey={6} href="https://docs.google.com/document/d/1atQh-AgTU4gdPciFiGiV4yYRuair4iLoyTPL3EbIaQA/edit" target="_blank" rel="noopener noreferrer">
                    Resume
                    </NavItem>
                    <NavItem eventKey={7} href="/contact">
                        Contact
                    </NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>;
          
            
        </div>
    )
}

export default TheNavbar;
