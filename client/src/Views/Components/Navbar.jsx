import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
// import Header from 'react-bootstrap/lib/Header';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';


const TheNavbar = (props) => {
    return (
        <div>
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">David Horn</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="/">
                        Home
                    </NavItem>
                    <NavItem eventKey={1} href="/about">
                        About
                    </NavItem>
                    <NavItem eventKey={1} href="/projects">
                        Projects
                    </NavItem>
                    <NavItem eventKey={2} href="https://github.com/hornd24">
                       GitHub
                    </NavItem>
                    <NavItem eventKey={2} href="https://www.linkedin.com/in/david-horn-121358105/">
                    LinkedIn
                    </NavItem>
                    <NavItem eventKey={2} href="https://docs.google.com/document/d/1atQh-AgTU4gdPciFiGiV4yYRuair4iLoyTPL3EbIaQA/edit">
                    Resume
                    </NavItem>
                    <NavItem eventKey={2} href="/contact">
                        Contact
                    </NavItem>
                </Nav>
            </Navbar>;
          
            
        </div>
    )
}

export default TheNavbar;
