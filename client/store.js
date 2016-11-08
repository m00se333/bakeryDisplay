import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";


// all roots



// root reducer

import rootReducer from "./reducers/mainReducer";

// data Objects

import cakeGallery from './data/galleryObject';

// default state object

const defaultData = {

  cakeGallery

};


export const store = createStore(rootReducer, defaultData);

export const history = syncHistoryWithStore(browserHistory, store);

//export default store;

