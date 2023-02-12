import {initialStates} from "../interfaces/ProductsInterfaces";

const initialState: initialStates = {
    loadingStatus: 'loading',
    currentProduct: [],
    pizza: [],
    salads: [],
    drinks: [],
    snacks: [],
    souses: []
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

        case 'SALADS_FETCHED':
            return {
                ...state,
                loadingStatus: 'idle',
                salads: action.payload
            }

        case 'DRINKS_FETCHED':
            return {
                ...state,
                loadingStatus: 'idle',
                drinks: action.payload
            }

        case 'SNACKS_FETCHED':
            return {
                ...state,
                loadingStatus: 'idle',
                snacks: action.payload
            }

        case 'SOUSES_FETCHED':
            return {
                ...state,
                loadingStatus: 'idle',
                souses: action.payload
            }
        default: return state
    }
}

export default MainReducer;
