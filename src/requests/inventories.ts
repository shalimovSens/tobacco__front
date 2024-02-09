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

export const getFirstDateInventory = async () => {
    return instance.get('/get_last_date')
        .then(res => res.data)
        .catch(err => console.error(err))
}

export const createInventory = async (firstDate: string, lastDate: string) => {
    return instance.post('/create', {
        "start_date": `${firstDate}`,
        "end_date": `${lastDate}`,          
    })

        .then(res => res.data)
        .catch(err => console.error(err))
}

export const getInventoryById = async (id: number) => {
    return instance.get(`/get/${id}`)
        .then(res => res.data)
        .catch(err => console.error(err))
}