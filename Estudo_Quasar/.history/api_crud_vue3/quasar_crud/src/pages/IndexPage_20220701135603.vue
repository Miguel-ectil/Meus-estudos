<template>
  <q-page padding>
    <q-table
      title="Treats"
      :rows="posts"
      :columns="columns"
      row-key="name"
    />
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const posts = ref([])
    const columns = [
      { name: 'id', fields: 'id', label: 'Id', sortable: true, align: 'left' },
      { name: 'title', fields: 'title', label: 'Titulo', sortable: true, align: 'left' },
      { name: 'author', fields: 'author', label: 'Autor', sortable: true, align: 'left' }
    ]

    

    const getPosts = async () => {
      try {
        const response = api.get('http://localhost:3000/posts')
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }

    return {
      posts,
      columns
    }
  }
})
</script>
