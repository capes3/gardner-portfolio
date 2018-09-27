import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

class Procedures extends Component {

render() {
    return(
        <div>
            <Navbar/>
            
            <div className="proceduresWrapper">   
            <div className="proceduresBanner"></div>
            <h1>Dental Exams & Cleanings</h1>
                <h2><Link to="/Procedures/DentalExam">Dental Exam</Link></h2>
                
                <h2><Link to="/Procedures/DentalCleaning">Professional Dental Cleaning</Link></h2>
                
                <h2><Link to="/Procedures/DigitalXRays">Digital X-Rays</Link></h2>
                  
                <h2><Link to="/Procedures/PanoramicXRays">Panoramic X-Rays</Link></h2>
                
                <h2><Link to="/Procedures/FlourideTreatment">Flouride Treatment</Link></h2>
                
                <h2><Link to="/Procedures/Sealants">Sealants</Link></h2>
                
                <h2><Link to="/Procedures/HomeCare">Home Care</Link></h2>
                
            <h1>Restorations</h1>
                <h2><Link to="/Procedures/CompositeFillings">Composite Fillings</Link></h2>
                
                <h2><Link to="/Procedures/DentalImplants">Dental Implants</Link></h2>
                
                <h2><Link to="/Procedures/PorcelainCrowns">Porcelain Crowns (Caps)</Link></h2>
                
                <h2><Link to="/Procedures/PorcelainFixedBridges">Porcelain Fixed Bridges</Link></h2>
                 
                <h2><Link to="/Procedures/Dentures">Dentures & Partial Dentures</Link></h2>
                
                <h2><Link to="/Procedures/RootCanal">Root Canal Therapy</Link></h2>
                
            <h1>Cosmetic</h1>   
                <h2><Link to="/Procedures/TeethWhitening">Teeth Whitening</Link></h2> 
                 
                <h2><Link to="/Procedures/PeriodontalDisease">Periodontal Disease</Link></h2> 
            
                <h2><Link to="/Procedures/Maintenance">Maintenance</Link></h2>
            
            </div>
            <div className="proceduresFooter">
            <Footer/>
            </div>
        </div>
    )
}
}



export default Procedures 





