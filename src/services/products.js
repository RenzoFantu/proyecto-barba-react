import axios from "axios"

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/products`

export const Products = async (product) => {
    try {
        const response = await axios.get(`${BASE_URL}/products`, product)
        const {data} = response;
        console.log(data)
        return data
    } catch (error) {
            console.log('error')
    }
}