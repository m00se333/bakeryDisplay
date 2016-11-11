import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

const Gallery = React.createClass({
  
  

  renderImgPreviews(key){
    
    return(
        <div className="imgContainer" key={key}>
          <img src={this.props.pictures[key].image} alt="hello" />
        </div>
      )
  },



  render(){

    const images =  <div className="galleryFolder">
                      {Object.keys(this.props.pictures).map(key => this.renderImgPreviews(key))}
                    </div>
  
    const nothing = null;

    const galleryClosed = this.props.open === false;
    const buttonStatus = galleryClosed? nothing : images;

    return( 
        <CSSTransitionGroup 
                  className="slideInPictures"
                  component="div"
                  transitionName="slideInPictures"
                  transitionAppear={true}
                  transitionAppearTimeout={1000}
                  transitionEnterTimeout={1}
                  transitionLeaveTimeout={1}
                  >
          {buttonStatus}
        </CSSTransitionGroup>

    )
  }
})

export default Gallery;