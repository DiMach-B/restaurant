import { $auth } from "./index";

export const fetchDish = async () => {
    const {data} = await $auth.get('rest/dish/')
    return data;

}

export const updateDish = async (id, name, amount, products, inMenu) => {
    const {data} = await $auth.post('rest/dish/menu', {id, name, amount, products, inMenu})
    return data;

}

export const createDish = async ( name, amount, products, inMenu) => {
    const {data} = await $auth.post('rest/dish/create', { name, amount, products, inMenu})
    return data;

}

export const fetchOne = async (id) => {
    const {data} = await $auth.get('rest/dish/getById/' + id)
    return data;

}

