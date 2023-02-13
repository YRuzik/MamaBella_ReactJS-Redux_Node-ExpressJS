import {drinks, pizza, salads, snacks, souses} from "../interfaces/ProductsInterfaces";
import {AuthResponse, IUser} from "../interfaces/AuthInterfaces";
import AuthService from "../services/AuthService";
import {useDispatch} from "react-redux";
import axios from "axios";
import {API_URL} from "../http";


export const pizzaFetched = (pizza: pizza[]) => {
    return {
        type: 'PIZZA_FETCHED',
        payload: pizza
    }
}

export const currentProductFetched = (currentProduct: any) => {
    return {
        type: 'CURRENT_PRODUCT_FETCHED',
        payload: currentProduct
    }
}

export const saladsFetched = (salads: salads[]) => {
    return {
        type: 'SALADS_FETCHED',
        payload: salads
    }
}

export const drinksFetched = (drinks: drinks[]) => {
    return {
        type: 'DRINKS_FETCHED',
        payload: drinks
    }
}

export const snacksFetched = (snacks: snacks[]) => {
    return {
        type: 'SNACKS_FETCHED',
        payload: snacks
    }
}

export const sousesFetched = (souses: souses[]) => {
    return {
        type: 'SOUSES_FETCHED',
        payload: souses
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

export const checkAuth = async () => {
    try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
        localStorage.setItem('token', response.data.accessToken)
        return response
    } catch (e) {
        console.log(e.response?.data?.message)
    }
}
