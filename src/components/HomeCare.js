import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


class HomeCareParagraph extends Component{
    render(){
        return(
            <div>
            <Navbar/>
            <div className="proceduresWrapper">
            <div className="proceduresBanner">
                <div className="aboutOverlay"></div>
                <div className="procedureText">Home Care</div>

            </div>
            <p>A beautiful, healthy smile that lasts a lifetime is our ultimate goal when treating patients.  Your personal home care plays an important role in achieving that goal.  Your personal home care starts by eating balanced meals, reducing the number of snacks you eat, and correctly using the various dental aids that help control the plaque and bacteria that cause dental disease.
            Tooth brushing – Brush your teeth at least twice a day (especially before going to bed at night) with an ADA approved soft bristle brush and toothpaste.
            Place the brush at a 45 degree angle to the gums and gently brush using a small, circular motion, ensuring that you always feel the bristles on the gums.
            Brush the outer, inner, and biting surfaces of each tooth.
            Use the tip of the brush to clean the inside of the front teeth.
            Brush your tongue to remove bacteria and freshen your breath.
            Electric toothbrushes are also recommended.  They are easy to use and can remove plaque efficiently.  Simply place the bristles of the electric brush on your gums and teeth and allow the brush to do its job, several teeth at a time.
            Flossing – Daily flossing is the best way to clean between the teeth and under the gumline.  Flossing not only helps clean these spaces, it disrupts plaque colonies from building up, preventing damage to the gums, teeth, and bone.
            Take 12-16 inches of dental floss and wrap it around your middle fingers, leaving about 2 inches (5cm) of floss between the hands.
            Using your thumbs and forefingers to guide the floss, gently insert the floss between teeth using a sawing motion.
            Curve the floss into a “C” shape around each tooth and under the gumline.  Gently move the floss up and down, cleaning the side of each tooth.
            Floss holders are recommended if you have difficulty using conventional floss.
            Rinsing – It is important to rinse your mouth with water after brushing and after meals if you are unable to brush.  If you are using an over-the-counter product for rinsing, it’s a good idea to consult with your dentist or dental hygienist on its appropriateness for you.
            Use other dental aids as recommended by your dentist or dental hygienist:  interdental brushes, rubber tip stimulators, tongue cleaners, irrigation devices, fluoride, medicated rinses, etc., can all play a role in good dental home care.
            </p>
            </div>
            <div className="proceduresFooter">
            <Footer/>
            </div>
        </div>
        )
    }
}

export default HomeCareParagraph
