import React, {Component} from 'react'
import { Link } from 'react-router-dom'
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
                        <img src={phone} className="phoneFooter"/>
                        123-456-7890
                        <img src={email} className="emailFooter"/> 
                        email@gmail.com
                    </div>
                        <div className="socialFooter">
                        follow us:
                        <img src={facebook} className="facebookFooter"/>
                        </div>
                </div>
                

            
            </div>
        )
    }
}

export default Footer