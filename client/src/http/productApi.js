import { $auth } from "./index";

export const createProduct = async (name, quantity) => {
    const {data} = await $auth.post('rest/product/create', {name, quantity})
    return data;

}

export const fetchProduct = async () => {
    const {data} = await $auth.get('rest/product/')
    return data;

}