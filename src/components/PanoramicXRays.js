import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


class PanoramicXRaysParagraph extends Component{
    render(){
        return(

            <div>
            <Navbar/>
            <div className="proceduresWrapper">
            <div className="proceduresBanner">
                <div className="aboutOverlay"></div>
                <div className="procedureText">Panoramic X-Rays</div>

            </div>
            <p>Panoramic X-rays (also known as Panorex® or orthopantomograms) are wraparound photographs of the face and teeth.  They offer a view that would otherwise be invisible to the naked eye.  X-rays in general, expose hidden structures, such as wisdom teeth, reveal preliminary signs of cavities, and also show fractures and bone loss.
            Panoramic X-rays are extraoral and simple to perform.  Usually, dental X-rays involve the film being placed inside the mouth, but panoramic film is hidden inside a mechanism that rotates around the outside of the head.
            Unlike bitewing X-rays that need to be taken every few years, panoramic X-rays are generally only taken on an as-needed basis.  A panoramic X-ray is not conducted to give a detailed view of each tooth, but rather to provide a better view of the sinus areas, nasal areas and mandibular nerve.  Panoramic X-rays are preferable to bitewing X-rays when a patient is in extreme pain, and when a sinus problem is suspected to have caused dental problems.
            Panoramic X-rays are extremely versatile in dentistry, and are used to:
            Assess patients with an extreme gag reflex.
            Evaluate the progression of TMJ.
            Expose cysts and abnormalities.
            Expose impacted teeth.
            Expose jawbone fractures.
            Plan treatment (full and partial dentures, braces and implants).
            Reveal gum disease and cavities.
            How are panoramic X-rays taken?
            The panoramic X-ray provides the dentist with an ear-to-ear two-dimensional view of both the upper and lower jaw.  The most common uses for panoramic X-rays are to reveal the positioning of wisdom teeth and to check whether dental implants will affect the mandibular nerve (the nerve extending toward the lower lip).
            The Panorex equipment consists of a rotating arm that holds the X-ray generator, and a moving film attachment that holds the pictures.  The head is positioned between these two devices.  The X-ray generator moves around the head taking pictures as orthogonally as possible.  The positioning of the head and body is what determines how sharp, clear and useful the X-rays will be to the dentist.  The pictures are magnified by as much as 30% to ensure that even the minutest detail will be noted.
            Panoramic X-rays are an important diagnostic tool and are also valuable for planning future treatment.  They are safer than other types of X-rays because less radiation enters the body.
            If you have questions or concerns about panoramic X-rays, please contact our practice.
            </p>
            </div>
            <div className="proceduresFooter">
            <Footer/>
            </div>
        </div>
        )
    }
}

export default PanoramicXRaysParagraph
