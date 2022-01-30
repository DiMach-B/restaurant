import { $auth } from "./index";

export const registration = async (email, password, role) => {
    const {data} = await $auth.post('rest/create', {email, password, role})
    return data;

}

export const auth = async (email, password) => {
    const {data} = await $auth.post('rest/login', {email, password})
    return data;

}