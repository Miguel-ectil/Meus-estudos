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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const posts = ref([])

    const columns = [
      { name: 'id', fields: 'id', label: 'Id', sortable: true },
      { name: 'title', fields: 'title', label: 'Titulo', sortable: true },
      { name: 'author', fields: 'author', label: 'Autor', sortable: true },
      { name: 'content', fields: 'content', label: 'Conteúdo', sortable: true },
    ]

    return {
      posts
    }
  }
})
</script>
