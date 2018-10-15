import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


class PorcelainFixedBridgesParagraph extends Component{
    render(){
        return(
            <div>
            <Navbar/>
            <div className="proceduresWrapper">
            <div className="proceduresBanner">
                <div className="aboutOverlay"></div>
                <div className="procedureText">Porcelain Bridges</div>

            </div>
            <p>A dental bridge is a fixed (non-removable) appliance and is an excellent way to replace missing teeth.<br/><br/>
                    There are several types of bridges.  You and your dentist will discuss the best options for your particular case.  The “traditional bridge” is the most popular type and is usually made of porcelain fused to metal.  Porcelain fixed bridges are most popular because they resemble your natural teeth.  This type of bridge consists to two crowns that go over two anchoring teeth (abutment teeth) and are attached to pontics (artificial teeth), filling the gap created by one or more missing teeth.<br/><br/>
                    Dental bridges are highly durable and will last many years; however, they may need replacement or need to be re-cemented due to normal wear.<br/><br/>
                    Reasons for a fixed bridge:<br/><br/>
                    Fill space of missing teeth.<br/>
                    Maintain facial shape.<br/>
                    Prevent remaining teeth from drifting out of position.<br/>
                    Restore chewing and speaking ability.<br/>
                    Restore your smile.<br/>
                    Upgrade from a removable partial denture to a permanent dental appliance.<br/><br/>
                    What does getting a fixed bridge involve?<br/><br/>
                    Getting a bridge usually requires two or more visits.  While the teeth are numb, the two anchoring teeth are prepared by removing a portion of enamel to allow for a crown.  Next, a highly accurate impression (mold) is made which will be sent to a dental laboratory where the bridge will be fabricated.  In addition, a temporary bridge will be made and worn for several weeks until your next appointment.<br/><br/>
                    At the second visit, your permanent bridge will be carefully checked, adjusted, and cemented to achieve a proper fit.  Occasionally your dentist may only temporarily cement the bridge, allowing your teeth and tissue time to get used to the new bridge.  The new bridge will be permanently cemented at a later time.<br/><br/>
                    You will receive care instructions at the conclusion of your treatment.  Proper brushing, flossing and regular dental visits will aid in the life of your new permanent bridge.
                    </p>
                    </div>
            <div className="proceduresFooter">
            <Footer/>
            </div>
        </div>
        )
    }
}

export default PorcelainFixedBridgesParagraph