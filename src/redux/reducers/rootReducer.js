import { combineReducers } from "redux";
import signUpReducer from "./signUpReducer";
import fetchDataReducer from "./fetchDataReducer";
import signInReducer from "./signInReducer";
import applyAdjustmentsReducer from "./applyAdjustmentsReducer";

const rootReducer = combineReducers({ fetchDataReducer, signInReducer, applyAdjustmentsReducer});

export default rootReducer;
