import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/userActions.js";

import StoreShell from "./StoreShell.js";


function mapStateToProps(state){
  return {
    images: state.cakeGallery,
    userId: state.userId,
    ordersRemaining: state.ordersRemaining
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}




const App = connect(mapStateToProps, mapDispatchToProps)(StoreShell);
                                          // immediately call what component you want to connect to (Main)
export default App;