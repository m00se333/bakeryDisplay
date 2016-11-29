import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";


// root reducer

import rootReducer from "./reducers/mainReducer";

// data Objects

import cakeGallery from './data/galleryObject'; 


// default state object

const defaultState = {

  cakeGallery,
  ordersRemaining: 5

};


const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

