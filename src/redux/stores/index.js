import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import chainReducer from "./chainReducer";
import launchpadsReducer from "./launchpadAction";

console.log("@chainReducer", chainReducer);
const reducers = combineReducers({
  chains: chainReducer,
  launchpads: launchpadsReducer,
});

export const store = createStore(reducers, {}, applyMiddleware(thunk));
