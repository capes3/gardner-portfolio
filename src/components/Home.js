import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import { Parallax } from 'react-parallax'
import ScrollableAnchor from 'react-scrollable-anchor'
import KJS_7288 from '../Office/KJS_7288.jpg'
import KJS_7308 from '../Office/KJS_7308.jpg'
import KJS_7304 from '../Office/KJS_7304.jpg'
import KJS_7307 from '../Office/KJS_7307.jpg'
import KJS_7293 from '../Office/KJS_7293.jpg'


import ContactForm from './ContactForm'
import Footer from './Footer'


class Home extends Component {

    render(){
        return(
            <div className="homeWrapper">
                <div className="head">
                <Navbar/>
                </div>
                <div className="main">
                    <div className="colorOverlay"></div>
                    <h1 className="mainTitle">Smile with Confidence</h1>
                    <p className="mainParagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <a className="navButtonApptMain" href='#Appointment'>Contact Us</a>

                </div>
                <div className="about">
                    <h2 className="mainHeader">SED UT PERSPICIATIS UNDE</h2>
                    <p className="aboutParagraph">Dr. Rod T. Gardner and his team warmly welcome you to our dental practice located in Tremonton! We provide comprehensive, high-quality dental care designed to meet your needs in a relaxed atmosphere. From the moment you walk through the door, we hope you will feel at ease and cared for as a part of our family. We know you have plenty of options when it comes to dental care and appreciate you choosing us. It is truly an honor to continue serving the existing patients while welcoming new patients every day.</p>
                </div>
                <div className="gallery">
                    <div className="imageHolder">
                        <img className="signImg" src={KJS_7293}/>
                        <img className="officeImg" src={KJS_7308}/>
                        <img className="rightChair" src={KJS_7307}/>
                        <img className="leftChair" src={KJS_7304}/>
                    </div>
                </div>
                <div className="contact">
                <ContactForm/>
                <div className="homeContactMap"></div>
                </div>
                <div className="hours">
                <div className="hoursOverlay"> 
                    <div className="hoursText">
                        <h1>Hours</h1>
                        <h2>Mon-Thurs</h2>
                        <h2>8:30-5:00</h2>
                        <h2>Lunch from 12:30-1:30</h2>
                    </div>
                    </div>
                </div>
                <div className="foot">
                <Footer/>
                </div>
            </div>
            
        )
    }
}

export default Home