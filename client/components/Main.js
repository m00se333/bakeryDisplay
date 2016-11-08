import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

// Components
import Gallery from "./Gallery.js";
import Contact from "./Contact.js";
import Header from "./Header.js"


// State Data
import samplePasteries from "../data/galleryObject.js";

class App extends React.Component {

  constructor(){
    super();

    this.loadGallery = this.loadGallery.bind(this);
    this.deleteSamples = this.deleteSamples.bind(this);
    this.openGallery = this.openGallery.bind(this);
    this.closeGallery = this.closeGallery.bind(this);
    this.openAndClose = this.openAndClose.bind(this);

    this.state = {
      pictures: samplePasteries,
      open: false,
      contact: {

        name: null,
        phone: null,
        email: null,
        picture: null

      }
    }
  }

  loadGallery(){
    this.setState({
      pictures: samplePasteries
    })
  }

  deleteSamples(){
    this.setState({
      pictures:{}
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

    if (this.state.open === true){
      return{
        height: "50vh",
        
        }
      
    } else if (this.state.open === false){
      return {
        height: "0vh",
        
      }
    }

  }

  render(){

    const galleryComponent = <Gallery pictures={this.state.pictures}
                               open={this.state.open}
                               openAndClose={this.openAndClose}
                               closeGallery={this.closeGallery}
                               />

    const nothing = null;

    const galleryClosed = this.state.open === false;

    const galleryStatus = galleryClosed? nothing : galleryComponent;

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

              <Contact contact={this.state.contact}
                     openGallery={this.openGallery}
                     closeGallery={this.closeGallery}/>
                                                      

          </div>
          )
    
  }
}

export default App;