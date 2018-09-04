import React, {Component} from 'react'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import axios from 'axios'
import ImageGallery from 'react-image-gallery'
import Slides from './Slides'

class AboutGallery extends Component{
    constructor(props){
        super(props);
        this.state={
            gallery:[]
        }
    }

    componentDidMount(){
         axios.get(	' http://res.cloudinary.com/gardnerDental/image/list/gardner.json ')
            .then(res =>{
                this.setState({gallery: res.data.resources})
            })
        
    }

    render() {

        var clone = this.state.gallery.slice(0)
        var cloneIds = clone.map((images, index)=>{ return images.public_id})
        console.log(cloneIds)
        
        
        return (
           <div className="aboutMain">
               <h1 className="aboutGalleryTitle">OurWork</h1>
               <div>
                    <ul>
                        {
                            // this.state.gallery.map((images, index)=>{
                        <Slides images={cloneIds}/>
                    
                        }
                    </ul>
               </div>
           </div>
            );
        }
    }


export default AboutGallery
