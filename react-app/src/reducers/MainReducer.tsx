import {cartProduct, initialStates} from "../interfaces/ProductsInterfaces";
import {number} from "yup";
import {IUser} from "../interfaces/AuthInterfaces";
import {loadState} from "../store/BrowserStorage";

const initialState: initialStates = {
    loadingStatus: 'loading',
    currentProduct: [],
    products: [],
    cart: loadState('cart') || [],
    users: [],
    adminLayout: false,

    curUser: {} as IUser,
    isAuth: false
}

const MainReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FETCHING':
            return {
                ...state,
                loadingStatus: action.payload
            }
        case 'USERS_FETCHED':
            return {
                ...state,
                loadingStatus: 'idle',
                users: action.payload
            }

        case 'PRODUCTS_FETCHED':
            return {
                ...state,
                loadingStatus: 'idle',
                products: action.payload
            }

        case 'CURRENT_PRODUCT_FETCHED':
            return {
                ...state,
                loadingStatus: 'idle',
                currentProduct: action.payload
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

        case 'ADD_TO_CART':
            return state.cart.find((obj: cartProduct) => obj.id.toString() === action.payload.toString()) ? {
                ...state,
                cart: state.cart,
                loadingStatus: 'idle',
            } : {
                ...state,
                cart: [...state.cart, ...action.payload],
                loadingStatus: 'idle',
            }
            /*return {
                ...state,
                loadingStatus: 'idle',
                cart: [...state.cart, ...action.payload]
            }*/

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                loadingStatus: 'idle',
                cart: state.cart.filter((item) => item.id !== action.payload)
            }

        case 'REMOVE_CART': {
            return {
                ...state,
                loadingStatus: 'idle',
                cart: []
            }
        }

        case 'SET_QUANTITY': {
            state.cart.forEach((product) => {
                if (product.id === action.payload.id) {
                    product.quantity = action.payload.quantity
                }
            })
            return {
                ...state,
                loadingStatus: 'idle'
            }
        }

        case 'SET_ADMIN_LAYOUT': {
            return {
                ...state,
                loadingStatus: 'idle',
                adminLayout: action.payload
            }
        }

        default: return state
    }
}

export default MainReducer;
