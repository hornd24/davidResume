import React from 'react';
import Images from 'react-bootstrap/lib/Image';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './Classwork.css'

const Classwork = (props) => {

    return (
        <div>
            {console.log(props)}
            <div className="container">
                <br /><br />
                <div className="ClassworkDiv">
                    <h1>Classwork</h1>
                    <Grid>
                        <Row>

                            <Col lg={9}>
                                <div className="IntroText">
                                    <ul>
                                        <li>Basic HTML 5: <a className='links' href='https://hornd24.github.io/koenigsegg-website/' target="_blank"rel="noopener noreferrer">Koenigsegg Website</a> || <a className='links' href='https://github.com/hornd24/koenigsegg-website' target="_blank"rel="noopener noreferrer">GitHub Repository</a> </li>
                                        <li> Basic JavaScript Game: <a className='links' href='https://hornd24.github.io/Psychic-Game/' target="_blank"rel="noopener noreferrer">Psychic Game</a> || <a className='links' href='https://github.com/hornd24/Psychic-Game' target="_blank"rel="noopener noreferrer">GitHub Repository</a></li>
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