import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


class SealantsParagraph extends Component{
    render(){
        return(
            <div>
            <Navbar/>
            <div className="proceduresWrapper">
            <div className="proceduresBanner">
                <div className="aboutOverlay"></div>
                <div className="procedureText">Sealants</div>

            </div>
            <p>A sealant is a thin, plastic coating applied to the chewing surface of molars, premolars and any deep grooves (called pits and fissures) of teeth.  More than 75% of dental decay begins in these deep grooves.  Teeth with these conditions are hard to clean and are very susceptible to decay.  A sealant protects the tooth by sealing deep grooves, creating a smooth, easy to clean surface.<br/>
            Sealants can protect teeth from decay for many years, but need to be checked for wear and chipping at regular dental visits.<br/><br/>
            Reasons for sealants:<br/><br/>
            Children and teenagers – As soon as the six-year molars (the first permanent back teeth) appear or any time throughout the cavity prone years of 6-16.<br/>
            Adults – Tooth surfaces without decay that have deep grooves or depressions.<br/>
            Baby teeth – Occasionally done if teeth have deep grooves or depressions and child is cavity prone.<br/><br/>
            What do sealants involve?<br/><br/>
            Sealants are easily applied by your dentist or dental hygienist and the process takes only a couple of minutes per tooth.<br/>
            The teeth to be sealed are thoroughly cleaned and then surrounded with cotton to keep the area dry.  A special solution is applied to the enamel surface to help the sealant bond to the teeth.  The teeth are then rinsed and dried.  Sealant material is carefully painted onto the enamel surface to cover the deep grooves or depressions.  Depending on the type of sealant used, the material will either harden automatically or with a special curing light.<br/>
            Proper home care, a balanced diet, and regular dental visits will aid in the life of your new sealants.<br/>
            </p>
            </div>
            <div className="proceduresFooter">
            <Footer/>
            </div>
        </div>
        )
    }
}

export default SealantsParagraph
