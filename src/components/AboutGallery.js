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
                console.log(res.data.resources);
                this.setState({gallery: res.data.resources})
            
            })
        
    }

    render() {
            
        return (
           <div className="aboutMain">
               <h1 className="aboutGalleryTitle">OurWork</h1>
               <div>
                    <ul>
                        {this.state.gallery.map((images)=>{
                            return <Slides images={images.public_id} key={images.version}/>
                        })}
                    </ul>
               </div>
           </div>
            );
        }
    }


export default AboutGallery
