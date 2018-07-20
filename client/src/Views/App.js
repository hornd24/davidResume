import React, { Component } from 'react';
import './App.css';
// import $ from 'jquery'
import { BrowserRouter, Switch, Route,HashHistory } from 'react-router-dom';
// import Home from '../Views/Components/Home/Home'
// import Home from './Components/Home/TheHome1';
import Home12 from './Components/Home/Home12'
import Navbar from './Components/NavBars/Navbar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer.jsx'
// import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact/Contact';
import Thanks from './Components/Thanks/Thanks';
import Projects from './Components/Projects/Projects';
import Admin from './Components/admin/admin'
import About from './Components/About/About';
import Education from './Components/Education/Education';
// import Education2 from './Components/Education/Education';
import Classwork from './Components/Classwork/Classwork';
import { Parallax } from 'react-scroll-parallax';
import { DropDownMenu } from 'material-ui';


class App extends Component {
  state = {
    admin: false,
    windowH: 1,
    windowW: 1,
    mobile: false,
    thankPage: false
  }
  // componentDidUpdate=()=> {
  //   this.setState({
  //     windowH:$(document).height(),
  //     windowW:$(document).width()
  //   })
  // }


  componentDidMount = () => {


    const url = window.location.toString().split('/');
    if (url[3] === 'thanks') {
      this.setState({
        thankPage: true
      })
    }
    if (url[3] === 'admin' || url[3] === 'thanks' || url[3] === 'education'||url[3]=='more'||'alex') {

      this.setState({
        admin: true
      })
    }
  }




  render() {



    const RoutedMainPage = (props) => {
      return (

        <Home12 component={Home12}
          {...props}
        />
      );
    }

    return (

      <BrowserRouter history={HashHistory}>

        <div className="App">

          <div className="container">

            <Navbar />


         {!this.state.admin&&
            <div className='top'>
            
              <Parallax
                className="HEADERs"
                offsetYMax={25}
                offsetYMin={-15}
                slowerScrollRate
                tag="header"
              >
              <div className='Header'>
             
     <Header  {...this.state.thankPage}{...this.state} />
     
             </div>
              </Parallax>
        
            </div>}

           


            {!this.state.admin &&
              <div >
                <Parallax
                  className="HOMEE"
                  offsetYMax={20}
                  offsetYMin={-20}
                  slowerScrollRate
                  tag="figure"
                >
                  <div className="Home">
                    <Route location='/home' render={RoutedMainPage} {...this.state} />
                  </div>
                </Parallax>
              </div>}


            {!this.state.admin &&
              <div >
                <Parallax
                  className="theEduATION"
                  offsetYMin={-45}
                  offsetYMax={50}
              
                  slowerScrollRate
                  tag="figure"
                >
                  <div className="Education">
                    <Route  location='/education' component={Education} {...this.state}/>
                  </div>
                </Parallax>
              </div>}

           

            {!this.state.admin &&
              <div>
                <Parallax
                  className="PROJECTS"
                  offsetYMin={-20}
                  offsetYMax={3}
                 
                  slowerScrollRate
                  tag="figure"
                >
                  <Route location='/projects' component={Projects} {...this.state} />
                </Parallax>
              </div>}

            {!this.state.admin &&
              <div >
                <Parallax
                  className="custom-class"
                  offsetYMax={20}
                  offsetYMin={-20}
                  slowerScrollRate
                  tag="figure"
                >
                  <div className="About">
                    <Route location='/about' component={About} {...this.state} />
                  </div>
                </Parallax>
              </div>}
            {/* {!this.state.admin &&
              <div>
                <Parallax
                  className="custom-class"
                  offsetYMax={20}
                  offsetYMin={-40}
                  slowerScrollRate
                  tag="figure"
                >
                <div className='Contact'>
                  <Route location='/contact' component={Contact} />
                  </div>
                </Parallax>
              </div>} */}

            <Switch>
              <Route exact path='/thanks' component={Thanks} />
              <Route exact path='/admin' component={Admin} />
            
              <Route exact path='/more' component={Classwork}/>
            </Switch>
          </div>
          {!this.state.admin &&
            <div>
              <Parallax
                className="TheFooter"
                offsetYMax={15}
                offsetYMin={-20}
                slowerScrollRate
                tag="footer"
              >
                <Footer {...this.state} />
              </Parallax>
            </div>
          }

        </div>


      </BrowserRouter>

    );
  }
}

export default App;
