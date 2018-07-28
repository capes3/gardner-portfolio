import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer';

class About extends Component {

    render(){
        return(
            <div className="aboutWrapper">
                <div className="head">
                <Navbar/>
                </div>
                <div className="aboutImage">3</div>
                <div className="aboutBlurb">4</div>
                <div className="aboutGallery">5</div>
                <div className="reviews">6</div>
                <div className="foot">
                <Footer/>
                </div>
            </div>
        )
    }
}

export default About