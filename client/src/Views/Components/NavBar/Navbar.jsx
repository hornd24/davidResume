import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
// import Header from 'react-bootstrap/lib/Header';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
// import NavDropdown from 'react-bootstrap/lib/NavDropdown';
// import MenuItem from 'react-bootstrap/lib/MenuItem';
import './Navbar.css'

 class TheNavbar extends Component {
     scrollToTop=()=>{
         window.scrollTo(0,10);
         window.location='/';
     };
    
    scrollToEducation=()=>{
        window.scrollTo(0,1500);
        window.history.replaceState='/education';
    };
    scrollToClasswork=()=>{
        window.scrollTo(0,2335);
        window.history.replaceState='/classwork';
    };
    scrollToProjects=()=>{
        window.scrollTo(0,2800);
        window.history.replaceState='/projects';
    };
    scrollToAbout=()=>{
        window.scrollTo(0,3400);
        window.history.replaceState='/about';
    };
    scrollToContact=()=>{
        window.scrollTo(0,4000);
        window.history.replaceState='/contact';
    }

     render(){
    return (
        <div>
           
            <Navbar  classNames="navbar" fluid={true} toggleKey collapseOnSelect  fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                    <Link className="links" to="/" onClick={this.scrollToTop}>
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
                    <Link to='/' onClick={this.scrollToTop}>
                        Home
                        </Link>
                    </NavItem>
                   
                   
                    <NavItem eventKey={2} >
                   <Link to="/education" onClick={this.scrollToEducation}> 
                        Education 
                        </Link>
                    </NavItem>
                    <NavItem eventKey={3} onClick={this.scrollToClasswork}>
                   <Link to="/classwork"> 
                        Classwork
                        </Link>
                    </NavItem>
                    <NavItem eventKey={4} onClick={this.scrollToProjects}>
                    <Link to='projects'>
                        Projects
                        </Link>
                    </NavItem>
                    <NavItem eventKey={5} onClick={this.scrollToAbout}>
                   <Link to="/about"> 
                        About
                        </Link>
                    </NavItem>
                    <NavItem eventKey={6} onClick={this.scrollToContact} >
                    <Link to="/contact">
                        Contact
                        </Link>
                    </NavItem>
                    <NavItem className="links"  eventKey={7} href="https://github.com/hornd24" target="_blank"rel="noopener noreferrer">
                       <p className='links'>GitHub</p>
                    </NavItem>
                    <NavItem className="links" eventKey={8} href="https://docs.google.com/document/d/1atQh-AgTU4gdPciFiGiV4yYRuair4iLoyTPL3EbIaQA/edit" target="_blank" rel="noopener noreferrer">
                  <p className="links">  Resume </p>
                    </NavItem>
                    <NavItem className="links" eventKey={9} href="https://www.linkedin.com/in/david-horn-121358105/" target="_blank" rel="noopener noreferrer">
                   <p className="links" > LinkedIn</p>
                    </NavItem>
                   
                   
                </Nav>
                </Navbar.Collapse>
            </Navbar>;
          
            
        </div>
    
    )
}
}

export default TheNavbar;
