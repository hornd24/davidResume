import React, { Component } from 'react';
import Image from 'react-bootstrap/lib/Image';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './Education.css'
import Bartending from './Bartending_Certificate.jpg';
import Coding from './Coding_Bootcamp_Certifcate-1.jpg'
import Modal from 'react-bootstrap/lib/Modal';

class Education extends Component {
    state = {
        modal: false,
        photo: Coding,
        certificate: ''
    }
    selectPhoto = (e) => {
        let photo = e.currentTarget.attributes.photo.nodeValue;
        let certificate = e.currentTarget.attributes.certificate.nodeValue
        console.log(photo)
        this.setState({
            photo: photo,
            certificate: certificate
        }, this.openModal)
    }
    openModal = () => {
        this.setState({
            modal: true
        })
    }
    closeModal = () => {
        this.setState({
            modal: false
        })
    }
    render() {
        return (
            <div>

                <div onClick={this.closeModal} className="container">
                    <br /><br />
                    <div className="AboutDiv">
                        <Modal bsSize={'lg'} style={{ overFlow: 'visible' }} autoFocus show={this.state.modal}>
                            <Modal.Header closeButton onClick={this.closeModal}>{this.state.certificate} Certificate</Modal.Header>
                            <Modal.Body bsSize={'lg'}>
                                <Image src={this.state.photo} rounded responsive />

                            </Modal.Body>
                            <Modal.Footer style={{ overflow: 'auto' }}>
                                <Button  style={{width:'100%'}}onClick={this.closeModal}>Close</Button>  </Modal.Footer>
                        </Modal>
                        <Grid >
                            <Row >
                                <Col lg={12}>
                                    <h1>Education</h1>
                                </Col>
                            </Row>
                            <Row className='imageRow'>
                                <Col  xs={5} lg={6} className="IntroImage">
                                    <Thumbnail src={Bartending} certificate='Bartending' photo={Bartending} onClick={this.selectPhoto} rounded responsive className="Bar linkcss" >
                                    Click For more
                                    </Thumbnail>
                                </Col>
                                <Col xs={5} lg={6}>
                                    <Thumbnail src={Coding} certificate='Coding Boot Camp' onClick={this.selectPhoto} photo={Coding} rounded responsive className="Coding linkcss" >
                                    Click for more
                                    </Thumbnail>
                                </Col>
                            </Row>
                            <Row>
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
                            <br /><br />
                        </Grid>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education; 