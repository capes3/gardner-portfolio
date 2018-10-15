import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


class FlourideTreatmentParagraph extends Component{
    render(){
        return(
            <div>
            <Navbar/>
            <div className="proceduresWrapper">
            <div className="proceduresBanner">
                <div className="aboutOverlay"></div>
                <div className="procedureText">Flouride Treatment</div>

            </div>
            <p>Fluoride is the most effective agent available to help prevent tooth decay.  It is a mineral that is naturally present in varying amounts in almost all foods and water supplies.  The benefits of fluoride have been well known for over 50 years and are supported by many health and professional organizations.<br/><br/>
            Fluoride works in two ways:<br/><br/>
            Topical fluoride strengthens the teeth once they have erupted by seeping into the outer surface of the tooth enamel, making the teeth more resistant to decay.  We gain topical fluoride by using fluoride containing dental products such as toothpaste, mouth rinses, and gels.  Dentists and dental hygienists generally recommend that children have a professional application of fluoride twice a year during dental check-ups.<br/><br/>
            Systemic fluoride strengthens the teeth that have erupted as well as those that are developing under the gums.  We gain systemic fluoride from most foods and our community water supplies.  It is also available as a supplement in drop or gel form and can be prescribed by your dentist or physician.  Generally, fluoride drops are recommended for infants, and tablets are best suited for children up through the teen years.  It is very important to monitor the amounts of fluoride a child ingests.  If too much fluoride is consumed while the teeth are developing, a condition called fluorosis (white spots on the teeth) may result.<br/><br/>
            Although most people receive fluoride from food and water, sometimes it is not enough to help prevent decay.  Your dentist or dental hygienist may recommend the use of home and/or professional fluoride treatments for the following reasons:<br/><br/>
            Deep pits and fissures on the chewing surfaces of teeth.<br/>
            Exposed and sensitive root surfaces.<br/>
            Fair to poor oral hygiene habits.<br/>
            Frequent sugar and carbohydrate intake.<br/>
            Inadequate exposure to fluorides.<br/>
            Inadequate saliva flow due to medical conditions, medical treatments or medications.<br/>
            Recent history of dental decay.<br/>
            Remember, fluoride alone will not prevent tooth decay!  It is important to brush at least twice a day, floss regularly, eat balanced meals, reduce sugary snacks, and visit your dentist on a regular basis.
            </p>
            </div>
            <div className="proceduresFooter">
            <Footer/>
            </div>
        </div>
        )
    }
}

export default FlourideTreatmentParagraph
