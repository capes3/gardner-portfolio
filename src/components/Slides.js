import React from 'react'
import ImageGallery from 'react-image-gallery'
import { CloudinaryContext, Transformation, Image } from '../../node_modules/cloudinary-react';


class Slides extends React.Component{


    
render() {
    return(
        <CloudinaryContext cloudName="gardnerDental">
        <img src={`http://res.cloudinary.com/gardnerDental/image/upload/${this.props.images}.jpg`}/>
        </CloudinaryContext>
    )
}

}

export default Slides

