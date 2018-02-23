import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import Header from './Components/Header';

import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Thanks from './Components/thanks'
import Projects from './Components/projects'
import Admin from './Components/admin/admin'
import About from './Components/About'
class App extends Component {
  render() {

    return (
      <BrowserRouter>
      <div className="App">
   
          
          <Navbar />
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
          <Route  path='/contact' component={Contact} />
         <Route path='/thanks' component={Thanks}/>
         <Route path='/projects' component={Projects}/>
         <Route path='/about' component={About}/>
         <Route exact path='/admin/info' component={Admin}/>
          </Switch>
          {/* <About />
          <Portfolio/> */}
        
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
