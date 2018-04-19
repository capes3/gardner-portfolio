import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    render(){
        return(
            <div className="navbarBackground">
            <Link to= '/Home'><button className="Button">Home</button></Link>
            <Link to= '/Gallery'><button className="Button">Gallery</button></Link>
            <Link to= '/Payments'><button className="Button">Payments</button></Link>
            <Link to= '/Appointment'><button className="Button">Appointments</button></Link>
            </div>
        )
    }
}

export default Navbar