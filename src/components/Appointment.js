import React, {Component} from 'react'
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
                    <a className="mapLink" href="https://www.google.com/maps/dir//814+E+Main+St,+Tremonton,+UT+84337/">map link</a>
                </div>
                <div className="apptContact">
                <ContactForm/>
                <div className="apptImage">

                </div>
                </div>

                <div className="foot">
                <Footer/>
                </div>
            
            
            </div>
        )
    }
}

export default Appointment