import React from "react";
import { Link } from "react-router";

const OrderTicker = React.createClass({

  render(){
    
    const orderCountdown = this.props.ordersRemaining !== 0 ? this.props.ordersRemaining : "no more";
    const g = this.props.ordersRemaining === 1 ? "":"s";
    // g stands for grammar

    const linkToOrder = <button>
                          <Link to="/order">
                            Order Now!
                          </Link>
                        </button>

    const showLink = this.props.location.pathname === "/" ? linkToOrder : null;

    return(



      <div className="order">
        <div className="countContainer">
          <span>Michael is taking&nbsp;</span>
          <span>{orderCountdown}</span> 
          <span>&nbsp;more order{g}</span>   
        </div>
        <div className="orderButtonBox">
          {showLink}
        </div>
      </div>
     
      )
  }


});

export default OrderTicker;