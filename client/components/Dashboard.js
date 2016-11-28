import React from "react";


const Dashboard = React.createClass({

  render(){
    return(
      <div className="dashContainer">

        <button onClick={this.props.addOrder}>Click</button>

      </div>
    )
  }


})


export default Dashboard;