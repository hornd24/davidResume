import React, { Component } from 'react';
import Image from 'react-bootstrap/lib/Image';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './Education.css'
import Bartending from './Bartending_Certificate.jpg';
import Coding from './Coding_Boot_Camp_Certificate.jpg'
import Modal from 'react-bootstrap/lib/Modal';

class Education extends Component {
    state = {
        modal: false,
        photo: '',
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
        let certificateType = null;
        if (this.state.photo === Coding) {
            certificateType = <p>Uci Coding BootCamp</p>
        }
        else if (this.state.photo === Bartending) {
            certificateType = <p>Bartending School</p>
        }
        return (
            <div>

                <div onClick={this.closeModal} className="container11">
                    <br /><br />
                    <div className="AboutDiv">
                       
                        <Grid >
                            <Row >
                                <Col lg={12}>
                                    <h1>Education</h1>
                                </Col>
                            </Row>
                            <Row >
                                <Col xs={5} lg={6} className='imageRow'>
                                    <Thumbnail  src={Bartending} certificate='Bartending' photo={Bartending} onClick={this.selectPhoto} rounded responsive className="Bar linkcss" >
                               
                                    </Thumbnail>
                                </Col>
                                <Col className='description'xs={5} lg={6}>
                                <Thumbnail className='Text'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised in
                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                        </Thumbnail>
                                        </Col>
                                        </Row>
                                        
                                        <Row className='theRows'>
                                <Col className='imageRow' xs={5} lg={6}>
                                    <Thumbnail src={Coding} certificate='Coding Boot Camp' onClick={this.selectPhoto} photo={Coding} rounded responsive className="Coding linkcss" >
                                   
                                    </Thumbnail>
                                    </Col>
                                    <Col className='description' xs={5} lg={6}>
                                    <Thumbnail className='Text'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised in
                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                        </Thumbnail>
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