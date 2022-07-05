import useApi from 'src/composables/UseApi'
import { api } from 'boot/axios'

export default function postsService () {
  const { post, update, remove } = useApi('posts')

  const list = async () => {
    try {
      const { data } = await api.get(url)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    list,
    post,
    update,
    remove
  }
}
