import React, { Component } from 'react';
// import background from '../background.jpg';
import './Header.css';
// import { Grid, Row } from 'react-bootstrap';

class Header extends Component {
    state = {
        headerClass: 'headerDiv',
        
        headerTxt: 'headerTxt'
    }

    componentDidMount = () => {


    }
    componentWillReceiveProps = (props) => {
  

    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-xs-9">


                        <div className='headerDiv'>
                        <h1 className='headerNameTxt'>David Horn </h1>
                        <div className='boxing'>
                            <h3 className='headerTxt' >MERN Full Stack Developer</h3>
                            </div>
                        </div>

                    </div>
                </div>
         
            </div>
        )
    }
}

export default Header;