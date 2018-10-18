import React, {Component} from 'react'
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
                    <a className="aboutProceduresButton" href='#Procedures'>List of Services</a>

                </div>
                <div className="aboutGallery">
                    <h2 className="galleryHeader">Our Work</h2>
                    <AboutGallery/>
                
                </div>
                <div className="hours">
                    <div className="hoursText">
                    Hours: Mon-Thurs 8:30-5 Lunch from 12:30-1:30
                    </div>
                </div>
                <div className="foot">
                <Footer/>
                </div>
            </div>
        )
    }
}

export default About