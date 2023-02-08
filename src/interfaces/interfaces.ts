export interface initialStates {
    loadingStatus: string;
    currentProduct: {};
    pizza: object[];
    sortedPizza: object[];
    salads: object[];
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
}

export interface salads {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    weight: number;
    price: number;
}
