import React from 'react';
import Images from 'react-bootstrap/lib/Image';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './About.css';
import Me from './david.jpg';
const About = (props) => {
    
    return (
        <div>
        
            <div className="container">
            <br/><br/>
                <div className="AboutDiv">
                <h1>ABOUT</h1>
                    <Grid>
                        <Row>
                            <Col lg={3} className="IntroImage">
                                <Images src={Me} className="ProfilePic"/>
                            </Col>
                            
                            <Col lg={9}>
                                <div className="TheText">
                                   I am a Full Stack Javascript Developer from Orange County, CA. I studied coding at the University of California, Irvine. I develop and design websites, computers, tablets, and mobile devices. Contact me below with any inquiries.
                            </div>
                            </Col>
                        </Row>
                      
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default About; 