import {drinks, pizza, salads, snacks, souses} from "../interfaces/ProductsInterfaces";


export const pizzaFetched = (pizza: pizza[]) => {
    return {
        type: 'PIZZA_FETCHED',
        payload: pizza
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

export const drinksFetched = (drinks: drinks[]) => {
    return {
        type: 'DRINKS_FETCHED',
        payload: drinks
    }
}

export const snacksFetched = (snacks: snacks[]) => {
    return {
        type: 'SNACKS_FETCHED',
        payload: snacks
    }
}

export const sousesFetched = (souses: souses[]) => {
    return {
        type: 'SOUSES_FETCHED',
        payload: souses
    }
}
