import {AuthResponse, IUser} from "./AuthInterfaces";

export interface initialStates {
    loadingStatus: string;
    currentProduct: pizza[] | salads[] | drinks[] | snacks[] | souses[];
    products: products[]
    curUser: IUser;
    isAuth: boolean
}

export interface products {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
    weight: number;
    size: number;
    price: number;
    product_id: number;
}

export interface pizza {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    weight: number;
    price: number;
    pizza_id: string;
    dimension_id: string;
    dimension: string;
}

export interface drinks {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    weight: number;
    price: number;
    drinks_id: string;
    weight_id: string;
    dimension: string;
}

export interface salads {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    weight: number;
    price: number;
    dimension: string;
}

export interface snacks {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    weight: number;
    price: number;
    dimension: string;
}

export interface souses {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    weight: number;
    price: number;
    dimension: string;
}
