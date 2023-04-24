import {cartProduct, drinks, pizza, products, salads, snacks, souses} from "../interfaces/ProductsInterfaces";
import {AuthResponse, IUser} from "../interfaces/AuthInterfaces";
import AuthService from "../services/AuthService";
import {useDispatch} from "react-redux";
import axios from "axios";
import {API_URL} from "../http";

export const setAdminLayout = (adminLayout: boolean) => {
    return {
        type: 'SET_ADMIN_LAYOUT',
        payload: adminLayout
    }
}

export const productsFetched = (products: products[]) => {
    return {
        type: 'PRODUCTS_FETCHED',
        payload: products
    }
}

export const currentProductFetched = (currentProduct: products[]) => {
    return {
        type: 'CURRENT_PRODUCT_FETCHED',
        payload: currentProduct
    }
}

export const setAuth = (bool: boolean) => {
    return {
        type: 'SET_AUTH',
        payload: bool
    }
}

export const loginUser = (user: IUser) => {
    return {
        type: 'USER_FETCHED',
        payload: user
    }
}

export const logout = async () => {
    try {
        const {logout} = AuthService()
        await logout()
        localStorage.removeItem('token')
    } catch (e) {
        console.log(e.response?.data?.message)
    }
}

export const addToCart = (currentProduct: { thumbnail: string; quantity: number; size: number; price: number; product_id: number; description: string; weight: number; id: number; title: string; category: string }[]) => {
    return {
        type: 'ADD_TO_CART',
        payload: currentProduct
    }
}

export const removeFromCart = (productID: string) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: productID
    }
}

export const removeCart = () => {
    return {
        type: 'REMOVE_CART'
    }
}

export const setQuantityReducer = (id: string, quantity: number) => {
    return {
        type: 'SET_QUANTITY',
        payload: {
            id,
            quantity
        }
    }
}

export const usersFetched = (users: IUser[]) => {
    return {
        type: 'USERS_FETCHED',
        payload: users
    }
}

export const checkAuth = async () => {
    try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
        localStorage.setItem('token', response.data.accessToken)
        return response
    } catch (e) {
        console.log(e.response?.data?.message)
    }
}
