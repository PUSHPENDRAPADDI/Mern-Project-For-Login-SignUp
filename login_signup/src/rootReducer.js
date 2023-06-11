import { combineReducers } from "redux";
import reducer from "./Reducer/index";
import NoteReducer from "./Reducer/NoteReducer";

const rootReducer = combineReducers({
    login: reducer,
    NoteReducer:NoteReducer
});

export default rootReducer;
