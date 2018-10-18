import React, {Component} from 'react'
import Navbar from './Navbar';
import StaffGallery from './StaffGallery'
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
                    <p className="mainParagraph">Hours: Mon-Thurs 8:30-5:00 <br/>Lunch from 12:30-1:30</p>
                    <a className="navButtonApptMain" href='#Appointment'>Contact Us</a>

                </div>
                <div className="about">
                    <h2 className="mainHeader">Come See Us Today</h2>
                        <p className="aboutParagraph">At Gardner Dental, we are committed to providing you and your family with high-quality service at an
                                                affordable price. Our friendly dentists offers a wide range of services to help patients of all ages enjoy
                                                excellent oral health, and we go the extra mile to ensure that you feel at ease in our office. Our goal is
                                                treat you with the honesty, courtesy, and respect that you deserve while providing you with
                                                comprehensive services to meet all your oral health needs. Our practice also features the latest
                                                technologies and diagnostic tools to ensure precise, comfortable, and effective care. We invite you to
                                                call or visit us today to schedule an appointment with Dr. Rod Gardner or Dr. Tyson Gardner. We look
                                                forward to helping you care for your smile!
                            </p>
                </div>
                <div className="gallery">
                    <div className="imageHolder">
                        <img alt={'sign'}className="signImg" src={KJS_7293}/>
                        <img alt={'office'} className="officeImg" src={KJS_7308}/>
                        <img alt={'chair'} className="rightChair" src={KJS_7307}/>
                        <img alt={'chair'} className="leftChair" src={KJS_7304}/>
                    </div>
                </div>
                <div className="contact">
                <ContactForm/>
                <div className="homeContactMap">
                    <a className="mapLink" href="https://www.google.com/maps/dir//814+E+Main+St,+Tremonton,+UT+84337/">map link</a>
                </div>
                </div>
                <div className="staffGallery">
                <div className="hoursOverlay"> 
                    <h2 className="galleryHeader">Our Staff</h2>
                    <StaffGallery/>
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