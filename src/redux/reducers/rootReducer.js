import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer/modalReducer";

export const rootReducer = combineReducers({
    //aca van todos los reducers
    modal:modalReducer,
})