import { api } from './api'

export async function getMake(brand) {
    try {
        const response = await api.get(`/products.json?brand=${brand}`)
        return response.data
    } catch (error) {
        console.log(error)
        return []
    }
}
