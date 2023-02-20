import {initialStates} from "../interfaces/ProductsInterfaces";
import {number} from "yup";
import {IUser} from "../interfaces/AuthInterfaces";

const initialState: initialStates = {
    loadingStatus: 'loading',
    currentProduct: [],
    products: [],

    curUser: {} as IUser,
    isAuth: false
}

const MainReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'PRODUCTS_FETCHED':
            return {
                ...state,
                loadingStatus: 'idle',
                products: action.payload
            }

        case 'USER_FETCHED':
            return {
                ...state,
                loadingStatus: 'idle',
                curUser: action.payload
            }

        case 'SET_AUTH':
            return {
                ...state,
                loadingStatus: 'idle',
                isAuth: action.payload
            }
        default: return state
    }
}

export default MainReducer;
