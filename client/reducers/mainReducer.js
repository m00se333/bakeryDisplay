import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import userActions from "./userActionsReducer";

const rootReducer = combineReducers({userActions, routing: routerReducer});

export default rootReducer;