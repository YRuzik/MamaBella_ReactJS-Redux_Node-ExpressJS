import $api from "../http";
import {AxiosResponse} from 'axios'
import {IUser} from "../interfaces/AuthInterfaces";

const UserService = () => {
    const fetchUsers = async (): Promise<AxiosResponse<IUser[]>> => {
        return $api.get<IUser[]>('/users')
    }

    return {fetchUsers}
}

export default UserService
