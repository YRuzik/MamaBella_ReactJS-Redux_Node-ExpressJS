import $api from "../http";
import {AxiosResponse} from 'axios'
import {IAddresses, IAnalytics, INews, IUser} from "../interfaces/AuthInterfaces";



const UserService = () => {
    const fetchUsers = async (): Promise<AxiosResponse<IUser[]>> => {
        return $api.get<IUser[]>('/users')
    }

    const takeUserByID = async (id: string): Promise<AxiosResponse<IUser[]>> => {
        return $api.get<IUser[]>(`/users/${id}`)
    }

    const takeUserAnalytics = async (): Promise<AxiosResponse<IAnalytics[]>> => {
        return $api.get<IAnalytics[]>('/analytics')
    }

    const deleteUserByID = async (id: string): Promise<AxiosResponse<void>> => {
        return $api.post<void>(`/delete/user/${id}`)
    }

    const addAddress = async (address: string, user_id: string): Promise<AxiosResponse<void>> => {
        return $api.post<void>('/addresses', {address, user_id})
    }

    const takeAddress = async (id: string): Promise<AxiosResponse<IAddresses[]>> => {
        return $api.get<IAddresses[]>(`/addresses/${id}`)
    }

    const deleteAddress = async (id: string): Promise<AxiosResponse<void>> => {
        return $api.delete<void>(`/addresses/${id}`)
    }

    const takeNews = async (): Promise<AxiosResponse<INews[]>> => {
        return $api.get<INews[]>('/news')
    }

    const takeNewsByID = async (id: string): Promise<AxiosResponse<INews[]>> => {
        return $api.get<INews[]>(`/news/${id}`)
    }

    const createOrder = async (user_id: number, address: string, email: string, first_name: string, last_name: string, products: string, full_price: number): Promise<AxiosResponse<void>> => {
        return $api.post<void>('/create-order', {user_id, address, email, first_name, last_name, products, full_price})
    }

    const takeOrders = async (id: string): Promise<AxiosResponse<any>> => {
        return $api.get<any>(`/orders/${id}`)
    }

    const changeRole = async (id: string, value: boolean): Promise<AxiosResponse<any>> => {
        return $api.post<any>(`/change-role/${id}`, {value})
    }

    const verifyEmail = async (email: string): Promise<AxiosResponse<any>> => {
        return $api.post<any>(`/verify-email`, {email})
    }

    const changePassword = async (password: string, id: string): Promise<AxiosResponse<any>> => {
        return $api.post<any>(`/set-password/${id}`, {password})
    }

    const takeVKLogin = async (id: string): Promise<AxiosResponse<any>> => {
        return $api.get<any>(`/vk-login-ura/${id}`)
    }

    return {fetchUsers, takeUserByID, takeUserAnalytics, deleteUserByID, addAddress, takeAddress, deleteAddress, takeNews, takeNewsByID, createOrder, takeOrders, changeRole, verifyEmail, changePassword, takeVKLogin}
}

export default UserService
