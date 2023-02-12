import $api from "../http";
import {AxiosResponse} from 'axios'
import {drinks, pizza, salads, snacks, souses} from "../interfaces/ProductsInterfaces";

const ProductService = () => {

    const getPizza = async (): Promise<AxiosResponse<pizza[]>> => {
        return $api.get<pizza[]>('/pizza')
    }

    const getPizzaID = async (id: string): Promise<AxiosResponse<pizza[]>> => {
        return $api.get<pizza[]>(`/pizza/${id}`)
    }

    const getSalads = async (): Promise<AxiosResponse<salads[]>> => {
        return $api.get<salads[]>('/salads')
    }

    const getSaladsID = async (id: string): Promise<AxiosResponse<salads[]>> => {
        return $api.get<salads[]>(`/salads/${id}`)
    }

    const getDrinks = async (): Promise<AxiosResponse<drinks[]>> => {
        return $api.get<drinks[]>('/drinks')
    }

    const getDrinksID = async (id: string): Promise<AxiosResponse<drinks[]>> => {
        return $api.get<drinks[]>(`/drinks/${id}`)
    }

    const getSnacks = async (): Promise<AxiosResponse<snacks[]>> => {
        return $api.get<snacks[]>('/snacks')
    }

    const getSnacksID = async (id: string): Promise<AxiosResponse<snacks[]>> => {
        return $api.get<snacks[]>(`/snacks/${id}`)
    }

    const getSouses = async (): Promise<AxiosResponse<souses[]>> => {
        return $api.get<souses[]>('/souses')
    }

    const getSousesID = async (id: string): Promise<AxiosResponse<souses[]>> => {
        return $api.get<souses[]>(`/souses/${id}`)
    }

    return {getPizza, getPizzaID, getSalads, getSaladsID, getDrinks, getDrinksID, getSnacks, getSnacksID, getSouses, getSousesID}
}

export default ProductService
