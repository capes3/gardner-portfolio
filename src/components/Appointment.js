import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import ContactForm from './ContactForm';
import Footer from './Footer';


class Appointment extends Component {

    render(){
        return(
            <div className="contactWrapper">
                <div className="head">
                <Navbar/>
                </div>
                <div className="contactMap">
                Map Placeholder
                </div>
                <div className="contact">
                <ContactForm/>
                </div>
                <div className="foot">
                <Footer/>
                </div>
            
            
            </div>
        )
    }
}

export default Appointment