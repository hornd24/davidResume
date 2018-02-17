import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
// import Header from 'react-bootstrap/lib/Header';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';


const Home = (props) => {
    return (
        <div>
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Name</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Home
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Intro
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Portfolio
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Contact
                    </NavItem>
                </Nav>
            </Navbar>;
        </div>
    )
}

export default Home;
