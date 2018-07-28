import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import phone from '../Office/phone-icon.png'
import email from '../Office/email-icon.png'
import facebook from '../Office/fb-icon.png'



class Navbar extends Component {

    render(){
        return(
            <div>
            
            
            <div className="header">
            <div className="contactHeader">
                <img src={phone} className="phone"/>
                123 456 7890
                <img src={email} className="email"/>
                fake_email@email.com
            </div>
            <div className="socialHeader">
            follow us on:
            <img src={facebook} className="facebook"/>
            </div>
            </div>
                <div className="navButtonHolder">
                    <div className="logo">Logo Placeholder</div>

                        <Link to= '/'><button className="navButton">Home</button></Link>
                        <Link to= '/About'><button className="navButton">About</button></Link>
                        <Link to= '/Payments'><button className="navButton">Payments</button></Link>
                        <Link to= '/Appointment'><button className="navButtonAppt">Appointments</button></Link>
                        
                    </div>
            
            </div>
        )
    }
}

export default Navbar