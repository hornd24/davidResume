import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Footer from './Components/Footer'
// import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Thanks from './Components/thanks'
import Projects from './Components/projects'
import Admin from './Components/admin/admin'
import About from './Components/About'
import { Grid, Row, Col } from 'react-bootstrap';
class App extends Component {
  state={
    admin:false
  }
  componentDidMount=()=>{
    const url=window.location.toString().split('/')
    console.log(url[3])
    console.log(this.state.admin)
    if(url[3]==='admin'){
        console.log('hi')
        this.setState({
            admin:true
        })
    }
    console.log(this.state.admin)
  }
  render() {

    return (
      <BrowserRouter>
      <Grid fluid={true}>
      <div>
        
      <div className="App">
   
          <Row>
          <Navbar  />
          </Row>
          <Row>

          {!this.state.admin&& <Header/>}
          </Row>
        
         
           <Switch>
            <Route exact path='/' component={Home}/>
          <Route  path='/contact' component={Contact} />
         <Route path='/thanks' component={Thanks}/>
         <Route path='/projects' component={Projects}/>
         <Route path='/about' component={About}/>
         <Route exact path='/admin' component={Admin}/>
          </Switch> 
          
        
          {!this.state.admin&&
          <div>
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
         </div>}
        
          
      </div>
      </div>
      </Grid>
      </BrowserRouter>
    );
  }
}

export default App;
