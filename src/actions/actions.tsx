import {pizza, salads} from "../interfaces/interfaces";


export const pizzaFetched = (pizza: pizza[]) => {
    return {
        type: 'PIZZA_FETCHED',
        payload: pizza
    }
}

export const myPizzaSorted = (sortedPizza: pizza[]) => {
    return {
        type: 'PIZZA_SORTED',
        payload: sortedPizza
    }
}

export const currentProductFetched = (currentProduct: any) => {
    return {
        type: 'CURRENT_PRODUCT_FETCHED',
        payload: currentProduct
    }
}

export const saladsFetched = (salads: salads[]) => {
    return {
        type: 'SALADS_FETCHED',
        payload: salads
    }
}
