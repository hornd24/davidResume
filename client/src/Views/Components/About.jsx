import React from 'react';
import Images from 'react-bootstrap/lib/Image';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './About.css';

const About = (props) => {
    return (
        <div>
            <div className="container">
                <div className="AboutDiv">
                <h1>ABOUT</h1>
                    <Grid>
                        <Row>
                            <Col lg={4} className="IntroImage">
                                <Images src='http://via.placeholder.com/250x250' className="ProfilePic"/>
                            </Col>
                            <Col lg={9}>
                                <div className="IntroText">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
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