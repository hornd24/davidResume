import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from '../Views/Components/Home/Home'
import Home from '../Views/Components/Home12'
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Footer from './Components/Footer'
// import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Thanks from './Components/thanks'
import Projects from './Components/projects'
import Admin from './Components/admin/admin'
import About from './Components/About'

class App extends Component {
  state={
    admin:false,
    windowH:1,
    windowW:1,
    mobile:false,
    thankPage:false
  }
  // componentDidUpdate=()=> {
  //   this.setState({
  //     windowH:$(document).height(),
  //     windowW:$(document).width()
  //   })
  // }
  

  componentDidMount=()=>{
   
  
    const url=window.location.toString().split('/')
   if(url[3]==='thanks'){
this.setState({
  thankPage:true
})
   }
    if(url[3]==='admin'||url[3]==='sitemap'){
        
        this.setState({
            admin:true
        })
    }
  }


  

  render() {
    
    
  
    const RoutedMainPage  = (props) => {
      return (
        
          <Home component={Home}
       {...props }
          />
      );
  }
      
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Navbar  />
              {!this.state.admin&& 
              <Header  {...this.state.thankPage}{...this.state}/>}
              <Switch>
                <Route exact path='/' render={RoutedMainPage} {...this.state}/>
                <Route  path='/contact' component={Contact}  />
                <Route path='/thanks' component={Thanks}/>
                <Route path='/projects' component={Projects} {...this.state}/>
                <Route path='/about' component={About} {...this.state}/>
                <Route exact path='/admin' component={Admin}/>
              </Switch> 
          </div>
          {!this.state.admin&&
            <Footer {...this.state}/>
          }                
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
