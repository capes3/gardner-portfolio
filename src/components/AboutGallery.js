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
         axios.get(	' https://api.cloudinary.com/v1_1/gardner-dental/image/upload')
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
                   <CloudinaryContext cloudName="gardner-dental">
                   {
                            this.state.gallery.map(data => {
                                return (
                                    <div className="responsive" key={data.public_id}>
                                    <div className="img">
                                        <a target="_blank" href={`http://res.cloudinary.com/gardner-dental/image/upload/${data.public_id}.jpg`}>
                                            <Image publicId={data.public_id} signUrl="true" type="authenticated">
                                              
                                            </Image>
                                        </a>
                                        <div className="desc">Created at {data.created_at}</div>
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
