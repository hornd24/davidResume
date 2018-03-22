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
                    <NavItem eventKey={1} href="/about">
                        About
                    </NavItem>
                    <NavItem eventKey={1} href="/projects">
                        Projects
                    </NavItem>
                    <NavItem eventKey={2} href="https://github.com/hornd24" target="_blank">
                       GitHub
                    </NavItem>
                    <NavItem eventKey={2} href="https://www.linkedin.com/in/david-horn-121358105/" target="_blank">
                    LinkedIn
                    </NavItem>
                    <NavItem eventKey={2} href="https://docs.google.com/document/d/1atQh-AgTU4gdPciFiGiV4yYRuair4iLoyTPL3EbIaQA/edit" target="_blank">
                    Resume
                    </NavItem>
                    <NavItem eventKey={2} href="/contact">
                        Contact
                    </NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>;
          
            
        </div>
    )
}

export default TheNavbar;
