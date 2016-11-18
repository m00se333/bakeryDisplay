import React from "react";


const Contact =  React.createClass({
  
  render(){

    return(
      <div className="contact">
        <div className="controls">
          <button onClick={this.props.openGallery}>Open</button>
          <button onClick={this.props.closeGallery}>Close</button>
        </div>
        <div className="contact-info">
          <h1>This is the Contact Information Area</h1>
          <span>Phone: Michael's #</span>
          <span>Email: Michael@michael.com</span>
        </div>
      </div>
       
      )
  }
})

export default Contact;