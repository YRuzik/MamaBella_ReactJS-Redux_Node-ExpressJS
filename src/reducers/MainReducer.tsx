import {initialStates} from "../interfaces/interfaces";

const initialState: initialStates = {
    loadingStatus: 'loading',
    currentProduct: [],
    pizza: [],
    sortedPizza: [],
    salads: []
}

const MainReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'CURRENT_PRODUCT_FETCHED':
            return {
                ...state,
                currentProduct: action.payload,
                loadingStatus: 'idle'
            }

        case 'PIZZA_FETCHING':
            return {
                ...state,
                loadingStatus: 'loading'
            }

        case 'PIZZA_FETCHED':
            return {
                ...state,
                loadingStatus: 'idle',
                pizza: action.payload
            }

        case 'PIZZA_SORTED':
            return {
                ...state,
                loadingStatus: 'idle',
                sortedPizza: action.payload
            }

        case 'SALADS_FETCHED':
            return {
                ...state,
                loadingStatus: 'idle',
                salads: action.payload
            }
        default: return state
    }
}

export default MainReducer;
