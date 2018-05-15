import React from 'react';
// import Images from 'react-bootstrap/lib/Image';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './Classwork.css'

const Classwork = (props) => {

    return (
        <div>
           
            <div className="container">
                <br /><br />
                <div className="ClassworkDiv">
                    <h1>Classwork</h1>
                    <Grid>
                        <Row>

                            <Col lg={6}>
                                <div className="IntroText">
                                    <ul>
                                      
                                    <li>Handlebar.js: <a className='links' href='https://burgers1.herokuapp.com/' target="_blank"rel="noopener noreferrer">Buggers App</a> || <a className='links' href='https://github.com/hornd24/Burger' target="_blank"rel="noopener noreferrer">GitHub Repository</a> </li>
                                    <li> Crystal Counter: <a className='links' href='https://hornd24.github.io/week-4-game/' target="_blank"rel="noopener noreferrer">Psychic Game</a> || <a className='links' href='https://github.com/hornd24/week-4-game' target="_blank"rel="noopener noreferrer">GitHub Repository</a></li>
                                      
                                        <li>Python Username and Rock Paper Python Game: <a className='links' href='http://www.thedavehorn.com/python.html' target="_blank"rel="noopener noreferrer">Play Game</a> || <a className='links' href='https://github.com/hornd24/Python' target="_blank"rel="noopener noreferrer">GitHub Repository</a></li>
                                    </ul>
                                </div>
                            </Col>
                           
                        </Row>

                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Classwork; 