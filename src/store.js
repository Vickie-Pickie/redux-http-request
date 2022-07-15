import {combineReducers, legacy_createStore} from "redux";
import serviceListReducer from "./reducers/serviceListReducer";
import serviceAddReducer from "./reducers/serviceAddReducer";
import setFilterReducer from "./reducers/setFilterReducer";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  filter: setFilterReducer,
});

const store = legacy_createStore(reducer);

export default store;
