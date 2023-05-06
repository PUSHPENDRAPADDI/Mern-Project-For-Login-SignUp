import { combineReducers } from "redux";
import reducer from "./Reducer/index";

const rootReducer = combineReducers({
    login: reducer
});

export default rootReducer;
