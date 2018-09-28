import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

class PorcelainCrownsParagraph extends Component{
    render(){
        return(
            <div>
            <Navbar/>
            <div className="proceduresWrapper">
            <div className="proceduresBanner">
                <div className="aboutOverlay"></div>
                <div className="procedureText">Porcelain Crown</div>

            </div>

            <p>A crown (or cap) is a covering that encases the entire tooth surface restoring it to its original shape and size.  A crown protects and strengthens tooth structure that cannot be restored with fillings or other types of restorations.
                    Although there are several types of crowns, porcelain (tooth colored crown) are the most popular, because they resemble your natural teeth.  They are highly durable and will last many years, but like most dental restorations, they may eventually need to be replaced.  Porcelain crowns are made to match the shape, size, and color or your teeth giving you a natural, long-lasting beautiful smile.
                    Reasons for crowns:
                    Broken or fractured teeth.
                    Cosmetic enhancement.
                    Decayed teeth.
                    Fractured fillings.
                    Large fillings.
                    Tooth has a root canal.
                    What does getting a crown involve?
                    A crown procedure usually requires two appointments.  Your first appointment will include taking several highly accurate molds (or impressions) that will be used to create your custom crown.  A mold will also be used to create a temporary crown which will stay on your tooth for approximately two weeks until your new crown is fabricated by a dental laboratory.
                    While the tooth is numb, the dentist will prepare the tooth by removing any decay and shaping the surface to properly fit the crown.  Once these details are accomplished, your temporary crown will be placed with temporary cement and your bite will be checked to ensure you are biting properly.
                    At your second appointment your temporary crown will be removed, the tooth will be cleaned, and your new crown will be carefully placed to ensure the spacing and bite are accurate.
                    You will be given care instructions and encouraged to have regular dental visits to check your new crown.
                    </p>
                    </div>
            <div className="proceduresFooter">
            <Footer/>
            </div>
        </div>
        )
    }
}

export default PorcelainCrownsParagraph
