function userId(state=null, action){


  switch(action.type){

    case "LOGIN":

    console.log(`Trying to log in with ${action.provider}`);
    
    default:
      return state;
  }
}

export default userId;