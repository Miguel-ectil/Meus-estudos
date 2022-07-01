import { api } from 'boot/axios'

export default functionuseApi (url) {
    const list = async () => {
        try {
            const { data } = await api.get(url)
            return data
        } catch (error) {
            throw new Error(error)
        }
    }

    const post = async () => {
        try {
            const { data } = await api.post(url)
            return data
        } catch (error) {
            throw new Error(error)
        }
    }

    const update = async () => {
        try {
            const { data } = await api.get(url)
            return data
        } catch (error) {
            throw new Error(error)
        }
    }

    return {
        list, 
        post
    }
}