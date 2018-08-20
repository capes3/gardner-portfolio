import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import { Parallax } from 'react-parallax'
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
                    <button className="navButtonApptMain">Contact Us</button>

                </div>
                <div className="about">
                    <h2 className="mainHeader">SED UT PERSPICIATIS UNDE</h2>
                    <p className="aboutParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet eros bibendum ante vestibulum rutrum. Suspendisse potenti. Proin sed bibendum est. Nulla bibendum enim eu scelerisque vulputate. Quisque sit amet ante sed ex pulvinar sagittis sit amet sed erat. Maecenas consectetur ex eget faucibus gravida. Donec vel facilisis orci.</p>
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
                </div>
                <div className="foot">
                <Footer/>
                </div>
            </div>
            
        )
    }
}

export default Home