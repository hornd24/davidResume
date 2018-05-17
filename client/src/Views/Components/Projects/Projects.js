import React from 'react';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './Projects.css'
import TechCheck from './ProjectScreenShots/techcheck.png'
import ProntoSeats from './ProjectScreenShots/prontoseats.png'

import Mooch1 from './ProjectScreenShots/Mooch1_0.png'
const Projects = (props) => {
    return (
        <div className="container PortfolioWrapper">
        <br/>
        <h1>Projects</h1>
        
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <Thumbnail href='http://techcheck.herokuapp.com/'target="_blank" src={TechCheck} alt="TechCheck">
                            <h3>TechCheck</h3>
                            <p>A middleman service where users post their computer parts for resale, with the app testing the part and authenticating its value through a rating. After these thorough tests, the part can then be sold at market value or other value deemed by seller on the site.</p>
                            <p>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail href='https://mooch-sell.herokuapp.com/'target="_blank" src={Mooch1} alt="Mooch">
                            <h3>Mooch</h3>
                            <p>A middle man interface that allows users to post and/or find items for rent. </p>
                            <p>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail href='https://bytopia.github.io/ProntoSeats/' target="_blank" src={ProntoSeats} alt="Pronto Seats">
                            <h3>Pronto Seats</h3>
                            <p>A web app providing restaurants with an electronic host stand to help seat guests and monitor tables in a more efficient manner. Also included outside information such as weather updates and google maps to further assist customers. </p>
                            <p>
                            </p>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                <Col className='whitespace' xs={6} md={4}>
                  
                    </Col>
                    <Col className='thecol' xs={6} md={4}>
                    <div className='More'>
           <a href="/more" className='MoreLink' >Click for more</a>
                    </div>
                    </Col>
                    </Row>
            </Grid>
            <br/><br/>
        </div>
    );
}

export default Projects;