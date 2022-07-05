<template>
  <q-page padding>
    <q-table
      title="Treats"
      :rows="posts"
      :columns="columns"
      row-key="name"
    >
    <template v-slot:body-cell-actions="props">
    <q-td :props="props">
      <q-btn icon="delete" color="negative" dense size="sm" @click="handleDeletePost(props.row.id)" />
    </q-td>
    </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import postsService from 'src/services/posts'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const posts = ref([])
    const { list, remove } = postsService()
    const columns = [
      { name: 'id', field: 'id', label: 'Id', sortable: true, align: 'left' },
      { name: 'title', field: 'title', label: 'Titulo', sortable: true, align: 'left' },
      { name: 'author', field: 'author', label: 'Autor', sortable: true, align: 'left' },
      { name: 'actions', field: 'actions', label: 'Ações', align: 'right' }
    ]

    onMounted(() => {
      getPosts()
    })

    const getPosts = async () => {
      try {
        const data = await list() // ou podemos deixar o link todo só aqui api.get('http://localhost:3000/'), e não no axios
        posts.value = data
      } catch (error) {
        console.error(error)
      }
    }

    const handleDeletePost = a

    return {
      posts,
      columns
    }
  }
})
</script>
