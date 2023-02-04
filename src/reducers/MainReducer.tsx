import {initialStates} from "../interfaces/interfaces";

const initialState: initialStates = {
    list: []
}

const MainReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default: return state
    }
}

export default MainReducer;
