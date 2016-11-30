import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import userId from "./userReducer";
import cakeGallery from "./cakeGalleryReducer";
import ordersRemaining from "./ordersRemainingReducer";

const rootReducer = combineReducers({userId, cakeGallery, ordersRemaining, routing: routerReducer});

export default rootReducer;