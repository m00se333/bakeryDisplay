function open(state={open:false}, action){
  console.log("open reducer");
  console.log(state, action);
  return state;
}

export default open;