import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


class MaintenanceParagraph extends Component{
    render(){
        return(
            <div>
            <Navbar/>
            <div className="proceduresWrapper">
            <div className="proceduresBanner">
                <div className="aboutOverlay"></div>
                <div className="procedureText">Maintenance</div>

            </div>
            <p>It only takes twenty four hours for plaque that is not removed from your teeth to turn into calculus (tartar)!  Daily home cleaning helps control plaque and tartar formation, but those hard to reach areas will always need special attention.<br/><br/>
                    Once your periodontal treatment has been completed, your dentist and dental hygienist will recommend that you have regular maintenance cleanings (periodontal cleanings), usually four times a year.  At these cleaning appointments, the pocket depths will be carefully checked to ensure that they are healthy.  Plaque and calculus that is difficult for you to remove on a daily basis will be removed from above and below the gum line.<br/><br/>
                    In addition to your periodontal cleaning and evaluation, your appointment will usually include:<br/><br/>
                    Examination of diagnostic x-rays (radiographs): Essential for detection of decay, tumors, cysts, and bone loss. X-rays also help determine tooth and root positions.<br/><br/>
                    Examination of existing restorations: Check current fillings, crowns, etc.<br/><br/>
                    Examination of tooth decay: Check all tooth surfaces for decay.<br/><br/>
                    Oral hygiene recommendations: Review and recommend oral hygiene aids as needed. (Electric toothbrushes, special periodontal brushes, fluorides, rinses, etc.)<br/><br/>
                    Teeth polishing: Remove stain and plaque that is not otherwise removed during tooth brushing and scaling.<br/><br/>
                    Good oral hygiene practices and periodontal cleanings are essential in maintaining dental health and keeping periodontal disease under control!
                    </p>

            </div>
            <div className="proceduresFooter">
            <Footer/>
            </div>
        </div>
        )
    }
}

export default MaintenanceParagraph