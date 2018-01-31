import { combineReducers } from "redux";
import balanceReducer from "./balance";

export default combineReducers({
  balance: balanceReducer
});
