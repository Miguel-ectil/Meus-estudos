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
      { name: 'id', fields: 'id' label: 'Calories', field: 'calories', sortable: true },
    ]

    return {
      posts
    }
  }
})
</script>
