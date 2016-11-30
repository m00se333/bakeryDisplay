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