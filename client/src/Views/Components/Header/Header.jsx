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
                            <h2 className='headerTxt' >MERN Full Web Stack Developer</h2>
                        </div>

                    </div>
                </div>
              
            </div>
        )
    }
}

export default Header;