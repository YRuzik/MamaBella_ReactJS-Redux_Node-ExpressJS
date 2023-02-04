import {createStore} from "redux";
import MainReducer from "../reducers/MainReducer";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(MainReducer, composeWithDevTools())
