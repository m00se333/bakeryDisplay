import React from "react";


const Dashboard = React.createClass({

  render(){
    return(
      <div className="dashContainer">

        <form className="orderForm">
          
          <span>Select your item</span>
          <select className="pastry-type">
            <option> select </option>
            <option>Cake small</option>
            <option>Cake large</option>
            <option>Cupcakes 12 count</option>
            <option>Cupcakes 24 count</option>
          </select>
          
          <span>What's the occasion?</span>
          <select className="pastry-type">
            <option> select </option>
            <option>Birthday</option>
            <option>Office Party</option>
            <option>Special Request</option>
            <option>Other</option>
          </select>

          <span>A phone number I can reach you at</span>
          <input type="text" placeholder="(###) - ### - ####"/>

          <span>Your email address</span>
          <input type="text"/>

          <input type="button" value="Submit order"/>
        </form>

        <div className="orderPreview">
          <span>Item:</span>
          <span>For:</span>
          <span>Contact (phone):</span>
          <span>Contact (email):</span>          
        </div>

      </div>
    )
  }


})


export default Dashboard;