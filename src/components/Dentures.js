import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


class DenturesParagraph extends Component{
    render(){
        return(
            <div>
            <Navbar/>
            <div className="proceduresWrapper">
            <div className="proceduresBanner">
                <div className="aboutOverlay"></div>
                <div className="procedureText">Dentures</div>

            </div>
            <p>A denture is a removable dental appliance and a replacement for missing teeth and surrounding tissue.  They are made to closely resemble your natural teeth and may even enhance your smile.
                    There are two types of dentures - complete and partial dentures.  Complete dentures are used when all of the teeth are missing, while partial dentures are used when some natural teeth remain.  A partial denture not only fills in the spaces created by missing teeth, it prevents other teeth from shifting.
                    A complete denture can be either “conventional” or “immediate.”  A conventional type is made after the teeth have been removed and the gum tissue has healed (usually takes 4 to 6 weeks).  During this time, the patient will go without teeth.  Immediate dentures are made in advance and immediately placed after the teeth are removed, thus preventing the patient from having to be without teeth during the healing process.  Once the tissues shrink and heal, adjustments will have to be made.
                    Dentures are very durable appliances and will last many years but may have to be remade, repaired, or readjusted due to normal wear.
                    Reasons for dentures:
                    Complete Denture - Loss of all teeth in an arch.
                    Partial Denture - Loss of several teeth in an arch.
                    Enhancing smile and facial tissues.
                    Improving chewing, speech, and digestion.
                    What does getting dentures involve?
                    The process of getting dentures requires several appointments, usually over a period of several weeks.  Highly accurate impressions (molds) and measurements are taken and used to create your custom denture.  Several “try-in” appointments may be necessary to ensure proper shape, color, and fit.  At the final appointment, your dentist will precisely adjust and place the completed denture, ensuring a natural and comfortable fit.
                    It is normal to experience increased saliva flow, some soreness, and possible speech and chewing difficulty, however this will subside as your muscles and tissues get used to the new dentures.
                    You will be given care instructions for your new dentures.  Proper cleaning of your new dental appliance, good oral hygiene, and regular dental visits will aid in the life of your new dentures.
                    </p>
                                </div>
                                <div className="proceduresFooter">
                                <Footer/>
                                </div>
                            </div>
        )
    }
}

export default DenturesParagraph