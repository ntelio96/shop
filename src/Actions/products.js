import { GET_PRODUCTS_FROM_SERVER, SORT_PRODUCTS, FILTER_PRICE } from "../Constants/types";

export function getProductsFromServer(products) {
    return {
        type: GET_PRODUCTS_FROM_SERVER,
        payload: products
    };
}

export function sortProducts(sortType) {
    return {
        type: SORT_PRODUCTS,
        payload: sortType
    }
}

export function filterPrice(price) {
    return {
        type: FILTER_PRICE,
        payload: price
    }
}