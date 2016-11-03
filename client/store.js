import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";


// all roots



// root reducer

import rootReducer from "./reducers/mainReducer";

// default state object

const defaultData = {

  username: null

};


export const store = createStore(rootReducer, defaultData);

export const history = syncHistoryWithStore(browserHistory, store);

//export default store;

