import $api from "../http";
import {AxiosResponse} from 'axios'
import {drinks, pizza, products, salads, snacks, souses} from "../interfaces/ProductsInterfaces";

const ProductService = () => {

    const getProducts = async (): Promise<AxiosResponse<products[]>> => {
        return $api.get<products[]>('/products')
    }

    return {getProducts}
}

export default ProductService
