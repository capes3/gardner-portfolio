import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


class TeethWhiteningParagraph extends Component{
    render(){
        return(
            <div>
            <Navbar/>
            <div className="proceduresWrapper">
            <div className="proceduresBanner">
                <div className="aboutOverlay"></div>
                <div className="procedureText">Teeth Whitening</div>

            </div>
            <p>Teeth whitening (or bleaching) is a simple, non-invasive dental treatment used to change the color of natural tooth enamel and is an ideal way to enhance the beauty of your smile.<br/><br/>
                    Because having whiter teeth has now become the number one aesthetic concern of most patients, there are a number of ways to whiten teeth.  Since teeth whitening only works on natural tooth enamel, it is important to evaluate replacement of any old fillings, crowns, etc.  Replacement of any restorations will be done after bleaching so they will match the newly bleached teeth.<br/><br/>
                    Teeth whitening is not permanent.  A touch-up may be needed every several years, and more often if you smoke, drink coffee, tea, or wine.<br/><br/>
                    Reasons for teeth whitening:<br/><br/>
                    Fluorosis (excessive fluoridation during tooth development).<br/>
                    Normal wear of outer tooth layer.<br/>
                    Stained teeth due to medications (tetracycline, etc.).<br/>
                    Yellow, brown stained teeth.<br/><br/>
                    What does teeth whitening involve?<br/><br/>
                    At home whitening usually requires one visit. At this appointment, impressions (molds) will be made of your teeth to fabricate custom, clear, plastic, trays. The trays are worn with special whitening solution once a day for 30 minutes for a couple of weeks depending on the degree of staining and desired level of whitening. <br/>
                    Opalescence Boost in-office power whitener is a chemically activated gel that provides brighter, whiter teeth after just 40 minutes in the dental chair. The powerful 40% hydrogen peroxide gel is chemically activated, so it doesn’t require a hot, uncomfortable light to work. Using the unique double-syringe configuration, the clinician activates the 40% hydrogen peroxide formula just prior to application, ensuring every dose of Opalescence Boost whitening is fresh and effective.<br/><br/>
                    Chemically activated, so no light is needed<br/>
                    Powerful 40% hydrogen peroxide gel<br/>
                    Opalescence tooth whitening gel contains PF (potassium nitrate and fluoride)<br/>
                    Fresh chemical for each application<br/>
                    Precise delivery<br/>
                    Easy to see for complete removal<br/>
                    Two 20-minute applications for a total of 40 minutes of treatment time​<br/><br/>
                    It is normal to experience tooth sensitivity during the time you are whitening your teeth, but it will subside shortly after you have stopped bleaching.<br/><br/>
                    You will receive care instructions for your teeth and trays, and be encouraged to visit your dentist regularly to help maintain a beautiful, healthy, white smile.<br/><br/>
                    </p>
            </div>
            <div className="proceduresFooter">
            <Footer/>
            </div>
        </div>
        )
    }
}

export default TeethWhiteningParagraph