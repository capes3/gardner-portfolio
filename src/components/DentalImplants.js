import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


class DentalImplantsParagraph extends Component{
    render(){
        return(
            <div>
            <Navbar/>
            <div className="proceduresWrapper">
            <div className="proceduresBanner">
                <div className="aboutOverlay"></div>
                <div className="procedureText">Dental Implants</div>

            </div>
            <p>Dental implants are a great way to replace missing teeth and also provide a fixed solution to having removable partial or complete dentures.  Implants provide excellent support and stability for these dental appliances.<br/><br/>
                    Dental implants are artificial roots and teeth (usually titanium) that are surgically placed into the upper or lower jaw bone by a dentist or Periodontist - a specialist of the gums and supporting bone.  The teeth attached to implants are very natural looking and often enhance or restore a patient’s smile!<br/><br/>
                    Dental implants are strong and durable and will last many years.  On occasion, they will have to be re-tightened or replaced due to normal wear.<br/><br/>
                    Reasons for dental implants:<br/>
                    Replace one or more missing teeth without affecting adjacent teeth.<br/>
                    Resolve joint pain or bite problems caused by teeth shifting into missing tooth space.<br/>
                    Restore a patient’s confident smile.<br/>
                    Restore chewing, speech, and digestion.<br/>
                    Restore or enhance facial tissues.<br/>
                    Support a bridge or denture, making it more secure and comfortable.<br/><br/>
                    What does getting dental implants involve?<br/><br/>
                    The process of getting implants requires a number of visits over several months.<br/><br/>
                    X-rays and impressions (molds) are taken of the jaw and teeth to determine bone, gum tissue, and spacing available for an implant.  While the area is numb, the implant will be surgically placed into the bone and allowed to heal and integrate itself for up to six months.   Depending on the type of implant, a second surgery may be required in order to place the “post” that will hold the artificial tooth in place.  With other implants the post and anchor are already attached and placed at the same time.<br/><br/>
                    After several weeks of healing the artificial teeth are made and fitted to the post portion of the anchor.  Because several fittings may be required, this step may take one to two months to complete.  After a healing period, the artificial teeth are securely attached to the implant, providing excellent stability and comfort to the patient.<br/><br/>
                    You will receive care instructions when your treatment is completed.  Good oral hygiene and eating habits, alongside regular dental visits, will aid in the life of your new implant.<br/><br/>
                    If you have questions about dental implants or would like to schedule a consultation, please contact our office.
                    </p>
                    </div>
            <div className="proceduresFooter">
            <Footer/>
            </div>
        </div>
        )
    }
}

export default DentalImplantsParagraph
