import {$auth} from './index'

export const fetchOrder = async() => {
    const {data} = await $auth.get('rest/order/')
    return data;
}

export const createOrder = async(user, dishes, status) => {
    const {data} = await $auth.post('rest/order/create', {user, dishes, status})
    return data;
}

export const updateOrder = async(id, user, dishes, status) => {
    const {data} = await $auth.post('rest/order/status', {id, user, dishes, status })
    return data;
}

export const calcOrder = async() => {
    const {data} = await $auth.get('rest/order/amount')
    return data;
}