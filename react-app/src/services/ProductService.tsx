import $api from "../http";
import {AxiosResponse} from 'axios'
import {drinks, pizza, products, salads, snacks, souses} from "../interfaces/ProductsInterfaces";

const ProductService = () => {

    const getProducts = async (): Promise<AxiosResponse<products[]>> => {
        return $api.get<products[]>('/products')
    }

    const getProductsID = async (id: string | number): Promise<AxiosResponse<products[]>> => {
        return $api.get<products[]>(`/products/${id}`)
    }

    const changeProductsID = async (id: string | number, data: object): Promise<AxiosResponse<void>> => {
        return $api.post<void>(`/products_change/${id}`, data)
    }



    return {getProducts, getProductsID, changeProductsID}
}

export default ProductService
