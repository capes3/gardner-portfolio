import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import ContactForm from './ContactForm';


class Appointment extends Component {

    render(){
        return(
            <div>
            <Navbar/>    
            <ContactForm/>
            </div>
        )
    }
}

export default Appointment