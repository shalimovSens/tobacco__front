import axios from "axios"

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/weighing',
})

export type Weighing = {
    inventory_id: number, 
    value: number, 
    container_count: number, 
    container_id: number
}

export const getWeighings = async (inventoryId: number) => {
    return instance.get(`/get/${inventoryId}`)
        .then(res => res.data)
        .catch(err => console.error(err))
}

export const deleteWeighing = async (weighingId: number) => {
    return instance.delete(`/delete/${weighingId}`)
        .then(res => res.data)
        .catch(err => console.error(err))
}

export const createWeighing = async (weighing: Weighing) => {
    return instance.post('/create', weighing)
        .then(res => res.data)
        .catch(err => console.error(err))
}