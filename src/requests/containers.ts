import axios from "axios"

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/container',
})

export const getContainers = async () => {
    return instance.get('/get')
        .then(res => res.data)
        .catch(err => console.error(err))
}

export const deleteContainer = async (id: number) => {
    return instance.delete(`/delete/${id}`)
        .then(res => res.data)
        .catch(err => console.error(err))
}

export const createContainer = async (name: string, weight: number) => {
    return instance.post('/create', { name: name, weight: weight })
        .then(res => res.data)
        .catch(err => console.error(err))
}