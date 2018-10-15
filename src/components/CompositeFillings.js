import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


class CompositeFillingsParagraph extends Component{
    render(){
        return(
            <div>
            <Navbar/>
            <div className="proceduresWrapper">
            <div className="proceduresBanner">
                <div className="aboutOverlay"></div>
                <div className="procedureText">Composite Fillings</div>

            </div>
            <p>A composite (tooth colored) filling is used to repair a tooth that is affected by decay, cracks, fractures, etc.  The decayed or affected portion of the tooth will be removed and then filled with a composite filling.<br/>
            There are many types of filling materials available, each with their own advantages and disadvantages.  You and your dentist can discuss the best options for restoring your teeth.  Composite fillings, along with silver amalgam fillings, are the most widely used today.  Because composite fillings are tooth colored, they can be closely matched to the color of existing teeth, and are more aesthetically suited for use in front teeth or more visible areas of the mouth.<br/><br/>
            As with most dental restorations, composite fillings are not permanent and may someday have to be replaced.  They are very durable and will last many years, giving you a long lasting, beautiful smile.<br/><br/>
            Reasons for composite fillings:<br/><br/>
            Chipped teeth.<br/>
            Closing space between two teeth.<br/>
            Cracked or broken teeth.<br/>
            Decayed teeth.<br/>
            Worn teeth.<br/><br/>
            How are composite fillings placed?<br/><br/>
            Composite fillings are usually placed in one appointment.  While the tooth is numb, your dentist will remove decay as needed.  The space will then be thoroughly cleaned and carefully prepared before the new filling is placed.  If the decay was near the nerve of the tooth, a special medication will be applied for added protection.  The composite filling will then be precisely placed, shaped, and polished, restoring your tooth to its original shape and function.<br/><br/>
            It is normal to experience sensitivity to hot and cold when composite fillings are first placed, however this will subside shortly after your tooth acclimates to the new filling.
            </p>

                       </div>
            <div className="proceduresFooter">
            <Footer/>
            </div>
        </div>
        )
    }
}

export default CompositeFillingsParagraph
