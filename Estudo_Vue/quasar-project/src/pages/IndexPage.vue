<template>
  <q-page class="flex flex-center"> 
    <div class="column item-center">
      <h2>{{ name }}</h2>
      <q-img :src="url" :ratio="1" width="250px"/>
    </div>
    <div class="row justify-around full-width">
      <q-input filled v-model="search" label="Digite o nome do pokemon" />
      <q-btn color="purple" label="Pesquisar" @click="getPokemon" />
    </div>
    
  </q-page>
</template>

<script>
import api from "../services/api";
export default {
  name: "IndexPage",

  data() {
    return {
      name: "",
      url: "",
      search: "ditto",
    };
  },

  async beforeMount() {
    await this.getPokemon();
  },

  methods: {
    getPokemon() {
      api
        .get(`pokemon/${this.search}/`)
        .then((response) => {
          // handle success
          this.name = response.data.name;
          this.url = response.data.sprites.other.dream_world.front_default;
        })
        .catch((error) => {
          // handle error
        console.log(error);
        })
      .then(() => {
        // always executed
      });
    },
    triggerPositive () {
      this.$q.notify({
        type: 'positive',
        message: 'This is a "positive" type notification.'
      })
    },

    triggerNegative () {
      this.$q.notify({
        type: 'negative',
        message: 'This is a "negative" type notification.'
    })
    },
  }

};
</script>
