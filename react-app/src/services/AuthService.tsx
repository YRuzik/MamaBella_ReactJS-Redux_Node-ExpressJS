import $api from "../http";
import {AxiosResponse} from 'axios'
import {AuthResponse, IUser} from "../interfaces/AuthInterfaces";

const AuthService = () => {
    const login = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
        return $api.post<AuthResponse>('/login', {email, password})
    }

    const VKLogin = async (): Promise<AxiosResponse<void>> => {
        return $api.get<void>('/login/vk')
    }

    const VKTakeData = async (access_token: string): Promise<AxiosResponse<IUser>> => {
        return $api.post<IUser>('/vk-user-data', {access_token})
    }

    const registration = async (
        username: string,
        first_name: string,
        last_name: string,
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> => {
        return $api.post<AuthResponse>('/registration', {email, password, first_name, last_name, username})
    }

    const logout = async (): Promise<void> => {
        return $api.post('/logout')
    }

    return {login, registration, logout, VKLogin, VKTakeData}
}

export default AuthService
