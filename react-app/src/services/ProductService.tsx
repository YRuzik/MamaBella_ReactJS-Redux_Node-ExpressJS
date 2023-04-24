import $api from "../http";
import {AxiosResponse} from 'axios'
import {drinks, pizza, products, salads, snacks, souses} from "../interfaces/ProductsInterfaces";

const ProductService = () => {

    const getProducts = async (): Promise<AxiosResponse<products[]>> => {
        return $api.get<products[]>('/products')
    }

    const getProductsID = async (id: number | string): Promise<AxiosResponse<products[]>> => {
        return $api.get<products[]>(`/products/${id}`)
    }

    return {getProducts, getProductsID}
}

export default ProductService
