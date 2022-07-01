import { api } from 'boot/axios'

export default functionuseApi (url) {
    const list = async () => {
        try {
            const { data } = await api.get(url)
            return data
        } catch (error) {
            throw new
        }
    }
}