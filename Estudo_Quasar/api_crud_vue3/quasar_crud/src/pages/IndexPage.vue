<template>
  <q-page padding>
    <q-table
      title="Contatos"
      :rows="posts"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:top>
        <span class="text-h5">Codastros</span>
        <q-space />
        <q-btn color="primary" label="Cadastrar" :to="{ name: 'Contato' }" />
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props" class="q-gutter-sm">
          <q-btn icon="edit" color="info" dense size="sm" @click="handleEditPost(props.row.id)" />
          <q-btn icon="delete" color="negative" dense size="sm" @click="handleDeletePost(props.row.id)" />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'
// import postsService from 'src/services/posts'
// import { useQuasar } from 'quasar'
// import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'IndexPage11',
  setup () {
    const posts = ref([])
    // const { list, remove } = postsService()
    const columns = [
      { name: 'id', field: 'id', label: 'Id', sortable: true, align: 'left' },
      { name: 'nome', field: 'nome', label: 'Nome', sortable: true, align: 'left' },
      { name: 'telefone', field: 'telefone', label: 'Telefone', sortable: true, align: 'left' }
      // { name: 'actions', field: 'actions', label: 'Ações', align: 'right' }
    ]
    // const $q = useQuasar()
    // const router = useRouter()

    onMounted(() => {
      getPosts()
    })

    const getPosts = async (form) => {
      try {
        const { data } = await api.get('http://localhost:3000/posts')
        posts.value = data
      } catch (error) {
        console.error(error)
      }
    }

    // const handleDeletePost = async (id) => {
    //   try {
    //     $q.dialog({
    //       title: 'Contatos',
    //       message: 'Deseja deletar este post ?',
    //       cancel: true,
    //       persistent: true
    //     }).onOk(async () => {
    //       await remove(id)
    //       $q.notify({ message: 'Apagado com sucesso', icon: 'check', color: 'positive' })
    //       await getPosts()
    //     })
    //   } catch (error) {
    //     $q.notify({ message: 'Erro ao apagar post', icon: 'times', color: 'negative' })
    //   }
    // }

    // const handleEditPost = (id) => {
    //   router.push({ name: 'Contatos', params: { id } })
    // }

    return {
      posts,
      columns
      // handleDeletePost,
      // handleEditPost
    }
  }
})
</script>
