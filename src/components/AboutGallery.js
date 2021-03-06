import React, {Component} from 'react'
import { CloudinaryContext } from 'cloudinary-react';
import axios from 'axios'
import Slide from './Slide'

class AboutGallery extends Component{
    constructor(props){
        super(props);
        this.renderNav = this.renderNav.bind(this);
        this.renderSlide = this.renderNav.bind(this);


        this.state={
            height: 300,
            width: 300,
            gallery:[]
        }
    }

    componentDidMount(){
         axios.get(	' https://res.cloudinary.com/dpa1h29s1/image/list/procedures.json ')
            .then(res =>{
                var public_ids = res.data.resources.map((images, index)=>{ return images.public_id })
                this.setState({gallery:public_ids})
            })}

    renderNav(){
        return (
            <div className="slider-arrows">
              <a className="arrowLeft" onClick={() => this.slideLeft()}>
                <img alt={''} src={require('../Office/leftArrow.png')} />
              </a>
              <a className="arrowRight" onClick={() => this.slideRight()}>
                <img alt={''} src={require('../Office/rightArrow.png')} />
              </a>
            </div>
          )
    }



    sliderLeft = () => {
        let last = this.state.gallery.slice(-1)
        let rest = this.state.gallery.slice(0, -1)
        let images = [last, ...rest]
        this.setState({gallery: images});
    }

    sliderRight =  () =>{
        let [first, ...rest] = this.state.gallery;
        let images = [...rest, first];
        this.setState({gallery: images});
    
    }

    

    render() {

        const images = this.state.gallery
        
        return (
           <div className="aboutMain">
               <div className="sliderWrapper">
               <a className="arrowLeft" onClick={this.sliderLeft}>
                    <img alt={''} src={require('../Office/leftArrow.png')} />
                </a>
                <a className="arrowRight" onClick={this.sliderRight}>
                    <img alt={''} src={require('../Office/rightArrow.png')} />
                </a>
               <div className="slider-items">
               <CloudinaryContext>
                   
            {images.map((image, index) => {
                return (
                  <Slide image={image} width={this.state.width} height={this.state.height} key={index} />
                )}) }
                
                </CloudinaryContext>
          </div>
          

          </div>
    


           </div>
           
            );
        }
    }


export default AboutGallery
