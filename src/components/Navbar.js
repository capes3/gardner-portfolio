import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import phone from '../Office/phone-icon.png'
import email from '../Office/email-icon.png'
import facebook from '../Office/fb-icon.png'
import logo from '../Office/GardnerLogo.png'




class Navbar extends Component {

    render(){


        return(
            <div className="navWrapper">
            
            
            <div className="header">
            <div className="contactHeader">
                <img alt={'phone icon'}src={phone} className="phone"/>
                (435) 257-3880
                <img alt={'email-icon'}src={email} className="email"/>
                gardnerdental@gmail.com
            </div>
                
            <div className="socialHeader">
            follow us on:
            <a href="https://www.facebook.com/gardner.dental" >
            <img alt={'facebook icon'}src={facebook} className="facebook"/>
            </a>
            </div>


            </div>
            
            <div className="logoWrapper">
                <img alt={'logo'}src={logo} className="logo"/>
            </div>

                <div className="navButtonHolder">
        
                        <Link to= '/'><button className="navButton">Home</button></Link>
                        <Link to= '/About'><button className="navButton">About</button></Link>
                        <a className="navButton" href="https://www.ident.ws/template_include/pi_login.jsp?site=13488&practiceId=28270&page=Patient+Information"> Patient Login </a>
                        <a className="navButton" href="https://www.ident.ws/template_include/new_patient_sign_in.do?site=13488&practiceId=28270">New Patient Form</a>
                        <Link to= '/Procedures'><button className="navButton">Procedures</button></Link> 
                        <Link to= '/Appointment'><button className="navButtonAppt">Appointments</button></Link>
                        
                    </div>
            
            </div>
        )
    }
}

export default Navbar