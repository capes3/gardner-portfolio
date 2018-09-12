import React from 'react'
import { CloudinaryContext, Transformation, Image } from '../../node_modules/cloudinary-react';
import ImageGallery from 'react-image-gallery';




class Slides extends React.Component{
    

    
render() {
    const urls = this.props.images.map(public_id => {
        var cloudinary = "http://res.cloudinary.com/gardnerDental/image/upload/.jpg"
        return cloudinary.substr(0, 53) + public_id + cloudinary.substr(53);
    })

    const newArray = urls.map((item)=>{return ({'original':item});})
    console.log(newArray)
    
             
    return(
        <div>
        <CloudinaryContext cloudName="gardnerDental">
        
        </CloudinaryContext>
         
        </div>
        
    )}
}



export default Slides

