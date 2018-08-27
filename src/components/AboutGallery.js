import React, {Component} from 'react'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import axios from 'axios'

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
               <CloudinaryContext cloudName="gardnerDental">
                        {
                            this.state.gallery.map(data => {
                                return (
                                    <div className="responsive" key={data.public_id}>
                                        <div className="img">
                                            <a target="_blank" href={`https://res.cloudinary.com/gardnerDental/image/upload/${data.public_id}.jpg`}>
                                                <Image publicId={data.public_id}>
                                                    <Transformation
                                                        crop="scale"
                                                        width="300"
                                                        height="200"
                                                        dpr="auto"
                                                        responsive_placeholder="blank"
                                                    />
                                                </Image>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CloudinaryContext>
               </div>
           </div>
            );
        }
    }


export default AboutGallery
