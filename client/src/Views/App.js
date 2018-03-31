import React, { Component } from 'react';
import './App.css';
// import $ from 'jquery'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from '../Views/Components/Home/Home'
import Home from '../Views/Components/Home12';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Thanks from './Components/thanks';
import Projects from './Components/projects';
import Admin from './Components/admin/admin';
import About from './Components/About';
import Education from './Components/Education/Education';
import Classwork from './Components/Classwork';
import { Parallax } from 'react-scroll-parallax';


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


    const url = window.location.toString().split('/')
    if (url[3] === 'thanks') {
      this.setState({
        thankPage: true
      })
    }
    if (url[3] === 'admin' || url[3] === 'thanks' || url[3] === 'education') {

      this.setState({
        admin: true
      })
    }
  }




  render() {



    const RoutedMainPage = (props) => {
      return (

        <Home component={Home}
          {...props}
        />
      );
    }

    return (

      <BrowserRouter>

        <div className="App">

          <div className="container">

            <Navbar />


            {/* {this.state.admin&& */}
            <div>
              <Parallax
                className="custom-class"
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                tag="figure"
              >
                <Header  {...this.state.thankPage}{...this.state} />
              </Parallax>
            </div>

            {/* </span> */}
            {/* </Parallax.Layer>} */}


            {!this.state.admin &&
              <div >
                <Parallax
                  className="custom-class"
                  offsetYMax={20}
                  offsetYMin={-20}
                  slowerScrollRate
                  tag="figure"
                >
                  <div className="Home">
                    <Route location='/' render={RoutedMainPage} {...this.state} />
                  </div>
                </Parallax>
              </div>}


            {!this.state.admin &&
              <div >
                <Parallax
                  className="custom-class"
                  offsetYMax={40}
                  offsetYMin={-20}
                  slowerScrollRate
                  tag="figure"
                >
                  <div className="Education">
                    {/* <Route  location='/education' component={Education} {...this.state}/> */}
                  </div>
                </Parallax>
              </div>}

            {!this.state.admin &&
              <div >
                <Parallax
                  className="custom-class"
                  offsetYMax={40}
                  offsetYMin={-20}
                  slowerScrollRate
                  tag="figure"
                >
                  <div className="Classwork">
                    <Route location='/classwork' component={Classwork} {...this.state} />
                  </div>
                </Parallax>
              </div>}

            {!this.state.admin &&
              <div>
                <Parallax
                  className="custom-class"
                  offsetYMax={40}
                  offsetYMin={-20}
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
            {!this.state.admin &&
              <div>
                <Parallax
                  className="custom-class"
                  offsetYMax={20}
                  offsetYMin={-40}
                  slowerScrollRate
                  tag="figure"
                >
                  <Route location='/contact' component={Contact} />
                </Parallax>
              </div>}

            <Switch>
              <Route exact path='/thanks' component={Thanks} />
              <Route exact path='/admin' component={Admin} />
              <Route exact path='/education' component={Education} {...this.state} />
            </Switch>
          </div>
          {!this.state.admin &&
            <div>
              <Parallax
                className="custom-class"
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                tag="figure"
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
