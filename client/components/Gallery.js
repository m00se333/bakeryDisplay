import React from "react";
import Slider from "react-slick";

const Gallery = React.createClass({
  
  renderImgPreviews(key){
    
    return(
        <div className="imgContainer" key={key}>
          <img src={this.props.images[key].image} alt="hello" />
        </div>
      )
  },



  render(){

    const settings = {

          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000,
          fade: true

    }

    return( 
        
          <Slider className="gallery" {...settings}>
            
            {Object.keys(this.props.images).map(key => this.renderImgPreviews(key))}

          </Slider>


    )
  }
})

export default Gallery;



