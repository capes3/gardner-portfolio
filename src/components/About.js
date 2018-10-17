import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutGallery from './AboutGallery'



class About extends Component {

    render(){
        return(
            <div className="aboutWrapper">
                <div className="head">
                    <Navbar/>
                </div>
                <div className="aboutImage">
                        <div className="aboutOverlay"></div>
                    <div className="aboutText">About Us</div>
                </div>
                <div className="aboutBlurb">
                    <p className="aboutBlurbParagraph">Every member of our team is committed to treating you with care. We want you to be comfortable, so we've created an environment that is friendly and welcoming from the moment you enter our reception area until you leave our office with a healthier smile. </p>
                </div>
                <div className="aboutGallery">
                    <AboutGallery/>
                
                </div>
                <div className="foot">
                <Footer/>
                </div>
            </div>
        )
    }
}

export default About