import React from "react";
import "../css/Contact.css";
import axios from 'axios';


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
            <div class= "Pen">
            <div>
        <p> Contact Page in Progress</p>
            </div>
            
                 </div>
        );
        
    }
    
  
  
  }



export default Contact;