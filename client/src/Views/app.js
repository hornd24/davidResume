import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Organization from './Organization'
import './app.scss'
import Navbar from './navbar/navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default props =>
<BrowserRouter>
<MuiThemeProvider  >
  <div className="app">

    <Navbar/>
    <br/>
    <Route exact path="/" component={Home}/>
    <Route path="/organization" component={Organization}/>
  </div>
  </MuiThemeProvider>
</BrowserRouter>
