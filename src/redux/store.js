import { combineReducers, legacy_createStore } from "redux";
import { commonReducer } from "./reducers/commonReducer";

const rootReducer = combineReducers({ commonReducer })

const store = legacy_createStore(rootReducer)

export default store
