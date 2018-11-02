import React, {Component} from 'react'
import { Link } from 'react-router-dom'





class NavMenu extends Component {


    render(){
        if(this.props.open===true){

        return(

                <div className="navButtonHolder">
        
                        <Link to= '/'><button className="navButtonDropdown">Home</button></Link>
                        <Link to= '/About'><button className="navButtonDropdown">About</button></Link>
                        <a className="navButtonDropdown" href="https://www.ident.ws/template_include/pi_login.jsp?site=13488&practiceId=28270&page=Patient+Information"> Patient Login </a>
                        <a className="navButtonDropdown" href="https://www.ident.ws/template_include/new_patient_sign_in.do?site=13488&practiceId=28270">New Patient Form</a>
                        <Link to= '/Procedures'><button className="navButtonDropdown">Procedures</button></Link> 
                        <Link to= '/Appointment'><button className="navButtonDropdown">Appointments</button></Link>
                        
                    </div>

        )
    }else{
        return null
    }
}
}

export default NavMenu