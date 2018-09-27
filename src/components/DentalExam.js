import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


class DentalExamParagraph extends Component{
    render(){
        return(
        <div>
            <Navbar/>
            <div className="proceduresWrapper">
            <div className="proceduresBanner"></div>
                <p>
                A comprehensive dental exam will be performed by your dentist at your initial dental visit.  At regular check-up exams, your dentist and hygienist will perform the following:
                Examination of diagnostic X-rays (radiographs): Essential for detection of decay, tumors, cysts, and bone loss.  X-rays also help determine tooth and root positions.
                Gum disease evaluation: Check the gums and bone around the teeth for any signs of periodontal disease.
                Examination of tooth decay: All tooth surfaces will be checked for decay with special dental instruments.
                Examination of existing restorations: Check current fillings, crowns, etc.
                </p>
            </div>
            <div className="proceduresFooter">
            <Footer/>
            </div>
        </div>
        )
    }
}

export default DentalExamParagraph 
