import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
class App extends Component {
  render() {

    return (
      <div className="App">
          <Home />
          <Header />
          <About />
          <Portfolio/>
          <Contact />
      </div>
    );
  }
}

export default App;
