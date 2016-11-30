

export function addOrder(){
  return{
    type: "ADD_ORDER"
  }
}

export function login(provider){
  return{
    type: "LOGIN",
    provider
  }
}

