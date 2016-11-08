import React from "react";

class Controls extends React.Component {

  constructor(){
    super();
    // this.openGallery = this.openGallery.bind(this);
    // this.closeGallery = this.closeGallery.bind(this);
  }

  render(){
    return(

      <div id="gallery-controls">
        <button onClick={() => this.props.openGallery}>Open</button>
        <button onClick={() => this.props.closeGallery}>Close</button>
      </div>

      )
  }


}

export default Controls;