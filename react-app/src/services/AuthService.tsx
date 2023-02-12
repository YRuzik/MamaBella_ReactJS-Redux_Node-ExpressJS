import $api from "../http";
import {AxiosResponse} from 'axios'
import {AuthResponse} from "../interfaces/AuthInterfaces";

const AuthService = () => {
    const login = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
        return $api.post<AuthResponse>('/login', {email, password})
    }

    const registration = async (
        username: string,
        first_name: string,
        last_name: string,
        email: string,
        password: string,
        address: string
    ): Promise<AxiosResponse<AuthResponse>> => {
        return $api.post<AuthResponse>('/registration', {email, password, first_name, last_name, username, address})
    }

    const logout = async (): Promise<void> => {
        return $api.post('/logout', )
    }

    return {login, registration}
}

export default AuthService
