import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

// Components
import Gallery from "./Gallery.js";
import Contact from "./Contact.js";
import Header from "./Header.js"


// State Data
import samplePasteries from "../data/galleryObject.js";

class Main extends React.Component {

  constructor(){
    super();

    this.loadGallery = this.loadGallery.bind(this);
    this.openGallery = this.openGallery.bind(this);
    this.closeGallery = this.closeGallery.bind(this);
    this.openAndClose = this.openAndClose.bind(this);

    
  }

  loadGallery(){
    this.setState({
      pictures: samplePasteries
    })
  }

 
  openGallery(){
    this.setState({
      open: true
    });
  }

  closeGallery(){
    this.setState({
      open: false
    });
  }

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

  }

  render(){

    const galleryComponent = <Gallery pictures={this.props.images}
                               open={this.props.open}
                               openAndClose={this.openAndClose}
                               closeGallery={this.closeGallery}
                               />

    const nothing = null;

    const galleryClosed = this.props.open === false;

    const galleryStatus = galleryClosed? nothing : galleryComponent;


    // This is rendering the Header Component
    //                       An Unnamed CSS Transiton group...
    //                   and Contact Component

    // this is also Main.js but exports App...


      return(
          <div id="appContainer">
              <Header />
            
              <CSSTransitionGroup className="openGallery" 
                                  style={this.openAndClose()}
                                  component="div"
                                  transitionName="openGallery"
                                  transitionEnterTimeout={1000}
                                  transitionLeaveTimeout={250}
                                  >
                    {galleryStatus}
                       
              </CSSTransitionGroup>

              <Contact
                     openGallery={this.props.openGallery}
                     closeGallery={this.props.closeGallery}/>
                                                      

          </div>
          )
    
  }
}

export default Main;