import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

class DentalCleaningParagraph extends Component{
    render(){
        return(
            <div>
            <Navbar/>
            <div className="proceduresWrapper">
            <div className="proceduresBanner">
                <div className="aboutOverlay"></div>
                <div className="procedureText">Dental Cleaning</div>

            </div>

            <p>
                        Professional dental cleanings (dental prophylaxis) are usually performed by Registered Dental Hygienists.  Your cleaning appointment will include a dental exam and the following:<br/><br/>
                        Removal of calculus (tartar): Calculus is hardened plaque that has been left on the tooth for some time and is now firmly attached to the tooth surface.  Calculus forms above and below the gum line and can only be removed with special dental instruments.<br/><br/>
                        Removal of plaque: Plaque is a sticky, almost invisible film that forms on the teeth.  It is a growing colony of living bacteria, food debris, and saliva.  The bacteria produce toxins (poisons) that inflame the gums.  This inflammation is the start of periodontal disease!<br/><br/>
                        Teeth polishing: Remove stain and plaque that is not otherwise removed during tooth brushing and scaling.

                    </p>
                    </div>
            <div className="proceduresFooter">
            <Footer/>
            </div>
        </div>
        )
    }
}


export default DentalCleaningParagraph 
