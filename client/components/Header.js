import React from "react";

import OrderTicker from "./OrderTicker.js";

const Header = React.createClass({
  
  render(){

    return(
        <div className="header">
          <h1>Michael's Bakery</h1>
          <OrderTicker ordersRemaining={this.props.ordersRemaining}
                 location={this.props.location} />
        </div>
      )

  }

})

export default Header;