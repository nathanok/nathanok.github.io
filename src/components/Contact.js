import React from "react";
import "../css/Contact.css";
import axios from 'axios';
import Form from 'react-bootstrap/Form';


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
            <Form.Control id="full-name" name="name" type="text" value={this.state.name} />
           
            
            </Form.Group>
            
            </Form>
                </div>
                    </div>
                 
            
        );
        
    }
    
  
  
  }



export default Contact;