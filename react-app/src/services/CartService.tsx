import {AxiosResponse} from "axios";
import {AuthResponse, ICart} from "../interfaces/AuthInterfaces";
import $api from "../http";

const CartService = () => {
    const getCart = async (id: string | number): Promise<AxiosResponse<ICart>> => {
        return $api.post<ICart>('/cart', {id})
    }


    return {getCart}
}

export default CartService
