import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { initialState } from "./reducers/initialState";
import { rootReducer } from "./reducers/rootReducer";
import {createStore,applyMiddleware} from "redux"
const middleware=[thunk];


export const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
