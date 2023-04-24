import {createStore} from "redux";
import MainReducer from "../reducers/MainReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {saveState} from "./BrowserStorage";

export const store = createStore(MainReducer, composeWithDevTools())

store.subscribe(() => {
    saveState('cart', store.getState().cart)
})
