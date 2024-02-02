// import instance from "./instance"
import axios from "axios"

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/inventory',
})

export const getInventories = async () => {
    return instance.get('/get')
        .then(res => res.data)
        .catch(err => console.error(err))
}

export const deleteInventory = async (inventoryId: number) => {
    if (!inventoryId) {
        throw new Error('Parameter not passed')
    }

    return instance.delete(`/delete/${inventoryId}`)
        .then(res => res.data)
        .catch(err => console.error(err))
}