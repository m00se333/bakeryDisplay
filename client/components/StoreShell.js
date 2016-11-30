import React from "react";


// components

import Main from "./Main";
import Header from "./Header";

// this is giving only one child props and such. I should be using a spread operator instead I think.


const StoreShell = React.createClass({
  render(){
    return(
        <div className="theBigWrapper">
          <Header ordersRemaining={this.props.ordersRemaining}
                  location={this.props.location}/>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      )
  }
})

export default StoreShell;


