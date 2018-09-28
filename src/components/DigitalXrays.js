import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


class DigitalXRaysParagraph extends Component{
    render(){
        return(
            <div>
            <Navbar/>
            <div className="proceduresWrapper">
            <div className="proceduresBanner">
                <div className="aboutOverlay"></div>
                <div className="procedureText">Digital X-Rays</div>

            </div>
            <p>Digital radiography (digital X-ray) is the latest technology used to take dental X-rays.  This technique uses an electronic sensor (instead of X-ray film) that captures and stores the digital image on a computer.  This image can be instantly viewed and enlarged, helping the dentist and dental hygienist detect problems more easily.  Digital X-rays reduce radiation 80-90% compared to the already low exposure of traditional dental X-rays.
                    Dental X-rays are essential, preventative, diagnostic tools that provide valuable information not visible during a regular dental exam.  Dentists and dental hygienists use this information to safely and accurately detect hidden dental abnormalities and complete an accurate treatment plan.  Without X-rays, problem areas can go undetected.

                    Dental X-rays may reveal:

                    Abscesses or cysts.
                    Bone loss.
                    Cancerous and non-cancerous tumors.
                    Decay between the teeth.
                    Developmental abnormalities.
                    Poor tooth and root positions.
                    Problems inside a tooth or below the gum line.
                    Detecting and treating dental problems at an early stage can save you time, money, unnecessary discomfort, and your teeth!
                    Are dental X-rays safe?
                    We are all exposed to natural radiation in our environment.  Digital X-rays produce a significantly lower level of radiation compared to traditional dental x-rays.  Not only are digital X-rays better for the health and safety of the patient, they are faster and more comfortable to take, which reduces your time in the dental office.  Also, since the digital image is captured electronically, there is no need to develop the X-rays, thus eliminating the disposal of harmful waste and chemicals into the environment.
                    Even though digital X-rays produce a low level of radiation and are considered very safe, dentists still take necessary precautions to limit the patient’s exposure to radiation.  These precautions include only taking those X-rays that are necessary, and using lead apron shields to protect the body.
                    How often should dental X-rays be taken?
                    The need for dental X-rays depends on each patient’s individual dental health needs.  Your dentist and dental hygienist will recommend necessary X-rays based upon the review of your medical and dental history, a dental exam, signs and symptoms, your age, and risk of disease.
                    A full mouth series of dental X-rays is recommended for new patients.  A full series is usually good for three to five years.  Bite-wing X-rays (X-rays of top and bottom teeth biting together) are taken at recall (check-up) visits and are recommended once or twice a year to detect new dental problems.
                    </p>
                    </div>
            <div className="proceduresFooter">
            <Footer/>
            </div>
        </div>
        )
    }
}

export default DigitalXRaysParagraph
