import $api from "../http";
import {AxiosResponse} from 'axios'
import {IAddresses, IAnalytics, IUser} from "../interfaces/AuthInterfaces";



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

    return {fetchUsers, takeUserByID, takeUserAnalytics, deleteUserByID, addAddress, takeAddress, deleteAddress}
}

export default UserService
