import React from 'react';
// import Images from 'react-bootstrap/lib/Image';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './Classwork.css'

const Classwork = (props) => {

    return (
        <Grid className="container1">
        <div>
        <br/><br/>
            <div >
           
                <div className="ClassworkDiv">
                    <h1>Classwork</h1>
            
                        <Row>

                            <Col lg={6}>
                                <div className="IntroText">
                                    <ul>
                                      
                                    <li className='list' >Burger App: <br/><a className='links' href='https://burgers1.herokuapp.com/' target="_blank"rel="noopener noreferrer">Buggers App</a> || <a className='links' href='https://github.com/hornd24/Burger' target="_blank"rel="noopener noreferrer">GitHub Repository</a> </li>
                                    <br/>
                                    <li className='list' >Python Username and Rock Paper Python Game:  <br/><a className='links' href='http://www.thedavehorn.com/python.html' target="_blank"rel="noopener noreferrer">Play Game</a> || <a className='links' href='https://github.com/hornd24/Python' target="_blank"rel="noopener noreferrer">GitHub Repository</a></li>
                                    <br/>
                                    <li className='list'> Crystal Counter: <br/><a className='links' href='https://hornd24.github.io/week-4-game/' target="_blank"rel="noopener noreferrer">Crystal Counter</a> || <a className='links' href='https://github.com/hornd24/week-4-game' target="_blank"rel="noopener noreferrer">GitHub Repository</a></li>
    <br/>
                                       

                                        <li className='list' >Basic HTML 5: <br/><a className='links' href='https://hornd24.github.io/koenigsegg-website/' target="_blank"rel="noopener noreferrer">Koenigsegg Website</a> || <a className='links' href='https://github.com/hornd24/koenigsegg-website' target="_blank"rel="noopener noreferrer">GitHub Repository</a> </li>
<br/>
<li className='list' > Basic JavaScript Game: <br/><a className='links' href='https://hornd24.github.io/Psychic-Game/' target="_blank"rel="noopener noreferrer">Psychic Game</a> || <a className='links' href='https://github.com/hornd24/Psychic-Game' target="_blank"rel="noopener noreferrer">GitHub Repository</a></li>
                                    </ul>
                                </div>
                            </Col>
                           
                        </Row>

                   
                </div>
            </div>
        </div>
        </Grid>
    )
}

export default Classwork; 