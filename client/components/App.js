// this file is basically creating a component that will
// "sprinkle on" props and dispatchers to our Main component

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/userActions.js";

import NotMain from "./NotMain.js";


function mapStateToProps(state){
  return {
    images: state.cakeGallery
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}




const App = connect(mapStateToProps, mapDispatchToProps)(NotMain);
                                          // immediately call what component you want to connect to (Main)
export default App;