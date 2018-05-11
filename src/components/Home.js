import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import { Parallax } from 'react-parallax'

const image1="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
class Home extends Component {

    render(){
        return(
            <div>
            <Navbar/>
            <div className="homeBackground">
            <img className="homeImage"src={image1}/>
            </div>

            <Parallax className="iconsPlaceholder" bgImage={image1} blur={5} strength={300}>
                
                    <div className="servicesContainer">
                        <div className="gridItem">1</div><div className="gridItem">4</div>
                        <div className="gridItem">2</div><div className="gridItem">5</div>
                        <div className="gridItem">3</div><div className="gridItem">6</div>
                        
                    </div>
                
            </Parallax>
            <div className="contactForm">
                Contact Form placeholder
            </div>
            <div className="mapHours">
                Map and hours placeholder
            </div>
            </div>
        )
    }
}

export default Home