function ordersRemaining(state=5, action){

  switch(action.type){

    case "ADD_ORDER":

      console.log("adding an order to the list");
      return (state - 1);
  
    default:
       return state;
  }
  

}

export default ordersRemaining