import React from 'react';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './Portfolio.css';

const Portfolio = (props) => {
    return (
        <div className="container PortfolioWrapper">
        <h1>Portfolio</h1>
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <Thumbnail src="http://via.placeholder.com/150x150" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="http://via.placeholder.com/150x150" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="http://via.placeholder.com/150x150" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                            </p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default Portfolio;