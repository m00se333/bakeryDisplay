import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import cakeGallery from "./cakeGalleryReducer.js";
import open from "./openReducer.js";
import ordersRemaining from "./ordersRemainingReducer.js";

const rootReducer = combineReducers({cakeGallery, open, ordersRemaining, routing: routerReducer});

export default rootReducer;