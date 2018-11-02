import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import phone from '../Office/phone-icon.png'
import email from '../Office/email-icon.png'
import facebook from '../Office/fb-icon.png'
import logo from '../Office/GardnerLogo.png'
import NavMenu from './NavMenu'
import menu from '../Office/menu.svg'
import close from '../Office/close.svg'






class Navbar extends Component {
    constructor(){
        super()
        this.state={
            open: false
        }
    }

    menuClick = () => { this.setState(prevState =>({open: !prevState.open}))}

    render(){


        return(
            <div>
            
            
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
            <div className="navWrapper">
                
            <div className="logoWrapper">
                
                <a className="logo" href="/"><img alt={'logo'}src={logo} className="logo"/></a>
            </div>
                {this.state.open ?<img src={close} className="hamburger" onClick={this.menuClick}/> : <img src={menu} className="hamburger" onClick={this.menuClick}/>}
                

                        <div className="navButtonHolderWide">
                        
                            <Link to= '/'><button className="navButton">Home</button></Link>
                            <Link to= '/About'><button className="navButton">About</button></Link>
                            <a className="navButton" href="https://www.ident.ws/template_include/pi_login.jsp?site=13488&practiceId=28270&page=Patient+Information"> Patient Login </a>
                            <a className="navButton" href="https://www.ident.ws/template_include/new_patient_sign_in.do?site=13488&practiceId=28270">New Patient Form</a>
                            <Link to= '/Procedures'><button className="navButton">Procedures</button></Link> 
                            <Link to= '/Appointment'><button className="navButtonAppt">Appointments</button></Link>
                            
                        </div>
 
                <div>
                    <NavMenu open={this.state.open}/>
                </div>
            </div>
            </div>
        )
    }
}

export default Navbar