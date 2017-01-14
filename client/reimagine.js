import React from "react";
import {render} from "react-dom";


import "./styles/test/mockup.css";

const Layout = React.createClass({

  render(){
    return (

        <div className="wrapper">
          
          <div className="navigation">
            <h1 className="onTop">Michael's Homemade</h1>
            <div className="links">
              <span>Login</span>
              <span>Shop</span>
            </div>
          </div>
          <div className="socket">
            <h1 className="onTop">Socket</h1>
          </div>
          <div className="content">
            <h1 className="onTop">Content?</h1>
          </div>
        </div>

      )
  }
})

render(<Layout />, document.querySelector("#root"));