
// wired up and working!!

function open(state={open:false}, action){
  
    switch(action.type){
      
      case "OPEN_GALLERY":
      // return updated state
        console.log("open the gallery")
        return true
      
      case "CLOSE_GALLERY":

        console.log("close the gallery")
        return false

      default:
        return state;

    }
}

export default open;