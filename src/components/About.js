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
                    <h2>SED UT PERSPICIATIS UNDE</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. </p>
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