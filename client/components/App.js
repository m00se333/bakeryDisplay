// this file is basically creating a component that will
// "sprinkle on" props and dispatchers to our Main component

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/userActions.js";

import StoreShell from "./StoreShell.js";


function mapStateToProps(state){
  return {
    images: state.cakeGallery,
    open: state.open,
    ordersRemaining: state.ordersRemaining
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}




const App = connect(mapStateToProps, mapDispatchToProps)(StoreShell);
                                          // immediately call what component you want to connect to (Main)
export default App;