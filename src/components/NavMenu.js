import React, {Component} from 'react'
import { Link } from 'react-router-dom'





class NavMenu extends Component {
    constructor(props){
        super(props)
    }

    render(){
        if(this.props.open===true){

        return(

                <div className="navButtonHolder">
        
                        <Link to= '/'><button className="navButton">Home</button></Link>
                        <Link to= '/About'><button className="navButton">About</button></Link>
                        <a className="navButton" href="https://www.ident.ws/template_include/pi_login.jsp?site=13488&practiceId=28270&page=Patient+Information"> Patient Login </a>
                        <a className="navButton" href="https://www.ident.ws/template_include/new_patient_sign_in.do?site=13488&practiceId=28270">New Patient Form</a>
                        <Link to= '/Procedures'><button className="navButton">Procedures</button></Link> 
                        <Link to= '/Appointment'><button className="navButtonAppt">Appointments</button></Link>
                        
                    </div>

        )
    }else{
        return null
    }
}
}

export default NavMenu