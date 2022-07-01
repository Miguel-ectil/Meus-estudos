<template>
  <section>
    <i class="far fa-clock"></i> {{tempoDecorrido}}
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Cronometro',
  props: {
    tempoEmSegundos: {
      type: Number,
      default: 0
    },
  },
  computed: {
    tempoDecorrido () : string {
      return new Date(this.tempoEmSegundos * 1000)
        .toISOString()
        .substr(11, 8)
    }
  }
});
</script>
<style>

</style>