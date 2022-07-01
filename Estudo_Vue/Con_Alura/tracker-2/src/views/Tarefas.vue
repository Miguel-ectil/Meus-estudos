<template>
    <Formulario @aoSalvarTarefa="salvarTarefa"/>
    <div class="lista">
        <Box v-if="semTarefas">
            Você não está muito produtivo hoje <span class="has-text-weight-bold">:(</span>
        </Box>
        <Tarefa v-for="(tarefa, index) in tarefas" :tarefa="tarefa" :key="index"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import Box from "../components/Box.vue";
import ITarefa from "../interfaces/ITarefa"

export default defineComponent({
  name: "App",
  components: {
    Formulario,
    Tarefa,
    Box
  },
  data () {
    return {
      tarefas: [] as ITarefa[]
    }
  },
  methods: {
    salvarTarefa (tarefa:ITarefa) : void {
      this.tarefas.push(tarefa)
    }
  },
  computed: {
    semTarefas () :boolean {
      return this.tarefas.length == 0
    }
  }
});
</script>
