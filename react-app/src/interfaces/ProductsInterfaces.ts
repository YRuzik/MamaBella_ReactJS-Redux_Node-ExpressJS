export interface initialStates {
    loadingStatus: string;
    currentProduct: pizza[] | salads[] | drinks[] | snacks[] | souses[];
    pizza: pizza[];
    salads: salads[];
    drinks: drinks[];
    snacks: snacks[];
    souses: souses[];
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
