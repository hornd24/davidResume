import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'
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
import MobileNav from './Components/mobile/mobileNav'
import SiteMap from './Components/Sitemap'
class App extends Component {
  state={
    admin:false,
    windowH:1,
    windowW:1,
    mobile:false
  }
  // componentDidUpdate=()=> {
  //   this.setState({
  //     windowH:$(document).height(),
  //     windowW:$(document).width()
  //   })
  // }
  

  componentDidMount=()=>{
    let heightDoc=$(document).height();
    let heightWin =$(window).height();
  // this.windowDidRezise()
    if(heightWin<=653){
      this.setState({
        mobile:true
      })
    }
    this.setState({
      windowH:$(window).height(),
      windowW:$(window).width()
    })
   
    console.log($('body').height(),'hey');

   console.log($(window).height())   // returns height of browser viewport
  // console.log($(document).height()) // returns height of HTML document (same as pageHeight in screenshot)
  //  console.log($(window).width());   // returns width of browser viewport
    // console.log($(document).width()); // returns width of HTML document (same as pageWidth in screenshot)
    const url=window.location.toString().split('/')
   
    if(url[3]==='admin'||url[3]==='sitemap'){
        
        this.setState({
            admin:true
        })
    }
  }


  windowDidRezise=()=>{
    $(window).resize(function(){
      let heightDoc=$(document).height();
      let heightWin =$(window).height();
      if(heightDoc <= 3772||heightWin<=653){
        this.setState({
          mobile:true
        })
      }
  });
  }

  render() {
    let theNav=null
    let height=$(document).height();
    let heightWin =$(window).height()
    console.log(height,'l')
    if( heightWin<=653){
      console.log('1')
      theNav=<MobileNav />
    }else if(heightWin>=653){
     
      console.log('2')
      theNav=<Navbar  />

    }else{
      console.log('nothing')
    }
    console.log(1<2)
    
    const RoutedMainPage  = (props) => {
      
      return (
        
          <Home component={Home}
         mobile= {this.state.mobile}

             {...props }
          />
      );
  }
      
    return (
      <BrowserRouter>
      <Grid fluid={true}>
      <div>
        
      <div className="App">
   
          <Row>
          
         {theNav}
          </Row>
          <Row>

          {!this.state.admin&& <Header {...height} {...this.state}/>}
          </Row>
        
         
           <Switch>
            <Route exact path='/' render={RoutedMainPage} {...this.state}/>
          <Route  path='/contact' component={Contact}  />
         <Route path='/thanks' component={Thanks}/>
         <Route path='/projects' component={Projects} {...this.state}/>
         <Route path='/about' component={About} {...this.state}/>
         <Route exact path='/admin' component={Admin}/>
          <Route exact path='/sitemap.html' component={SiteMap}/> 
          </Switch> 
          
        {/* <p>{this.state.windowH}</p>
        <p>{this.state.windowW}</p> */}
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
         
         <Footer {...this.state}/>
 
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
