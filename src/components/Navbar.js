import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    render(){
        return(
            <div className="navbarBackground">
            <Link to= '/'><button className="navButton">Home</button></Link>
            <Link to= '/Gallery'><button className="navButton">Gallery</button></Link>
            <Link to= '/Payments'><button className="navButton">Payments</button></Link>
            <Link to= '/Appointment'><button className="navButton">Appointments</button></Link>
            </div>
        )
    }
}

export default Navbar