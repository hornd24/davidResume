import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';


const Contact = (props) => {

    const FieldGroup = ({ id, label, help, ...props })=> {
        return (
          <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
          </FormGroup>
        );
      }

    return (
        <div className="container">
        <h1>Contact</h1>
            <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email address"
                placeholder="Enter email"
            />
            <FieldGroup
                id="formControlsComments"
                type="text"
                label="Comments"
                placeholder="Please leave a comment"
            />
        </div>
    )
}

export default Contact;