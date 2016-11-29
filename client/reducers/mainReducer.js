import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import cakeGallery from "./cakeGalleryReducer.js";
import ordersRemaining from "./ordersRemainingReducer.js";

const rootReducer = combineReducers({cakeGallery, ordersRemaining, routing: routerReducer});

export default rootReducer;