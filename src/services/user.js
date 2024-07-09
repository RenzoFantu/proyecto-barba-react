import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/users`

export const login = async (user) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, user)
        const {data} = response;
        console.log(data)
        return data
    } catch (error) {
            console.log('error')
    }
}

export const signup = async(user) => {
    try {
        const response = await axios.post(`${BASE_URL}/signup`, user)
        const {data} = response
        console.log(data);
        return data
    } catch (error) {
        console.log(error)
    }
}