import React from "react";


const Dashboard = React.createClass({


  render(){


    const fbLogin = <button onClick={this.props.login.bind(null, "Facebook")}className="facebook-login"> 
                      Log in with Facebook 
                    </button>;


    return(
      <div className="dashContainer">

        {fbLogin}

      </div>
    )
  }


})


export default Dashboard;