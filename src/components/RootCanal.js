import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


class RootCanalParagraph extends Component{
    render(){
        return(
            <div>
            <Navbar/>
            <div className="proceduresWrapper">
            <div className="proceduresBanner">
                <div className="aboutOverlay"></div>
                <div className="procedureText">Root Canal</div>

            </div>
            <p>Root canal therapy is needed when the nerve of a tooth is affected by decay or infection.  In order to save the tooth, the pulp (the living tissue inside the tooth), nerves, bacteria, and any decay are removed and the resulting space is filled with special, medicated, dental materials, which restore the tooth to its full function.
                    Having a root canal done on a tooth is the treatment of choice to save a tooth that otherwise would die and have to be removed.  Many patients believe that removing a tooth that has problems is the solution, but what is not realized is that extracting (pulling) a tooth will ultimately be more costly and cause significant problems for adjacent teeth.
                    Root canal treatment is highly successful and usually lasts a lifetime, although on occasion, a tooth will have to be retreated due to new infections.
                    Signs and symptoms for possible root canal therapy:
                    An abscess (or pimple) on the gums.
                    Sensitivity to hot and cold.
                    Severe toothache pain.
                    Sometimes no symptoms are present.
                    Swelling and/or tenderness.
                    Reasons for root canal therapy:
                    Decay has reached the tooth pulp (the living tissue inside the tooth).
                    Infection or abscess have developed inside the tooth or at the root tip.
                    Injury or trauma to the tooth.
                    What does root canal therapy involve?
                    A root canal procedure requires one or more appointments and can be performed by a dentist or endodontist (a root canal specialist).
                    An access opening is made on top of the tooth and a series of root canal files are placed into the opening, one at a time, removing the pulp, nerve tissue, and bacteria.  If tooth decay is present, it will also be removed with special dental instruments.
                    Once the tooth is thoroughly cleaned, it will be sealed with either a permanent filling or, if additional appointments are needed, a temporary filling will be placed.
                    At the next appointment the roots and the inside cavity of the tooth will be filled and sealed with special dental materials.  A filling will be placed to cover the opening on top of the tooth.  In addition, all teeth that have root canal treatment should have a crown (cap) placed.  This will protect the tooth and prevent it from breaking, and restore it to its full function.
                    After treatment, your tooth may still be sensitive, but this will subside as the inflammation diminishes and the tooth has healed.
                    You will be given care instructions after each appointment.  Good oral hygiene practices and regular dental visits will aid in the life of your root canal treatment.
                    </p>
            </div>
            <div className="proceduresFooter">
            <Footer/>
            </div>
        </div>
        )
    }
}

export default RootCanalParagraph  