import React, {Component} from 'react'
import phone from '../Office/phone-icon.png'
import email from '../Office/email-icon.png'
import facebook from '../Office/fb-icon.png'

class Footer extends Component {

    render(){
        return(
            <div className="footer">
                <div className="footerLogo">
                    
                </div>
                <div className="infoBar">
                    <div className="contactFooter">
                        <img alt="phone icon"src={phone} className="phoneFooter"/>
                        (435) 257-3880
                        <img alt="email icon"src={email} className="emailFooter"/> 
                        gardnerdental@gmail.com
                    </div>
                        <div className="socialFooter">
                        follow us:
                        <a href="https://www.facebook.com/gardner.dental" >

                        <img alt="facebook icon"src={facebook} className="facebookFooter"/>
                        </a>
                        </div>
                </div>
                

            
            </div>
        )
    }
}

export default Footer