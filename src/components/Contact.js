import React from "react";
import "../css/Contact.css";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Contact extends React.Component{
    
    
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
            
        }
    }
    
    render() {
        return(
            <div class= "Write">
                <div class="Pen">
        <p> Contact Page in Progress</p>
                </div>
            <div class="word">
                <Form>
            
         <Form.Group>
            <Form.Label htmlFor="full-name">Full Name</Form.Label>
            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
             </Form.Group>
            
             <Form.Group>
            <Form.Label htmlFor="Email">Email</Form.Label>
            <Form.Control id="Email" name="Email" type="email" value={this.state.email} onChange={this.handleChange} />
             </Form.Group>
            
             <Form.Group>
            <Form.Label htmlFor="Message">Message</Form.Label>
            <Form.Control id="Message" name="Message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
             </Form.Group>
            
                    <Button>Send</Button>
            
            </Form>
                </div>
                    </div>
                 
            
        );
        
    }
    
  
  
  }



export default Contact;