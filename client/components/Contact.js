import React from "react";


const Contact =  React.createClass({
  
  render(){


    const orderCountdown = this.props.ordersRemaining !== 0 ? this.props.ordersRemaining : "no";

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
        <div className="countContainer">
          <span>Michael is taking&nbsp;</span>
          <span>{orderCountdown}</span> 
          <span>&nbsp;more orders</span>   
        </div>
      </div>
       
      )
  }
})

export default Contact;