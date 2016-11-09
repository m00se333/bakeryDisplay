import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import cakeGallery from "./cakeGalleryReducer.js";
import open from "./openReducer.js";

const rootReducer = combineReducers({cakeGallery, open, routing: routerReducer});

export default rootReducer;