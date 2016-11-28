import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";


// Components
import Gallery from "./Gallery.js";
import Contact from "./Contact.js";
import Header from "./Header.js";



const Main = React.createClass({ 

  openAndClose(){

    if (this.props.open === true){
      return{
        height: "50vh",
        
        }
      
    } else if (this.props.open === false){
      return {
        height: "0vh",
        
      }
    }

  },

  render(){

    // const galleryComponent = <Gallery images={this.props.images}
    //                            open={this.props.open}
    //                            openAndClose={this.openAndClose}
    //                            closeGallery={this.closeGallery}
    //                            />

    // const nothing = null;

    // const galleryClosed = this.props.open === false;

    // const galleryStatus = galleryClosed? nothing : galleryComponent;


    // This is rendering the Header Component
    //                       An Unnamed CSS Transiton group...
    //                   and Contact Component

    // this is also Main.js but exports App...


      return(
          <div id="appContainer">
            
              <Gallery images={this.props.images} />

              <Contact
                     openGallery={this.props.openGallery}
                     closeGallery={this.props.closeGallery}/>
                                                 
          </div>
          )
    
  }
})

export default Main;