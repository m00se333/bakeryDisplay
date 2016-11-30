import base from "../base";

function authHandler(err, authData){
  console.log(authData);
}

function userId(state=null, action){


  switch(action.type){

    case "LOGIN":

    console.log(`Trying to log in with ${action.provider}`);
    base.AuthWithOAuthPopup(action.provider, authHandler);
    
    default:
      return state;
  }
}

export default userId;