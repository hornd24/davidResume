import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Footer from './Components/Footer'
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Thanks from './Components/thanks'
import Projects from './Components/projects'
import Admin from './Components/admin/admin'
import About from './Components/About'
import { Grid, Row, Col } from 'react-bootstrap';
class App extends Component {
  render() {

    return (
      <BrowserRouter>
      <Grid fluid={true}>
      <div className="App">
   
          <Row>
          <Navbar  />
          </Row>
          <Row>

          <Header/>
          </Row>
          <Row>
            <Col md={12}>
           <Switch>
            <Route exact path='/' component={Home}/>
          <Route  path='/contact' component={Contact} />
         <Route path='/thanks' component={Thanks}/>
         <Route path='/projects' component={Projects}/>
         <Route path='/about' component={About}/>
         <Route exact path='/admin/info' component={Admin}/>
          </Switch> 
          </Col>
          </Row>
          <Row>
            <Col md={4}>
            
            </Col>
            <Col md={4}>
         
         </Col>
         <Col md={4}>
         
         </Col>
         </Row>
         <Row>
           <Col md={12}>
         
         <Footer/>
 
         </Col>
         </Row>
        
        
      </div>
      </Grid>
      </BrowserRouter>
    );
  }
}

export default App;
