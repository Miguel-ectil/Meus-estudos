<template>
  <Banner />
  <div class="main-container">
    <h1>MONTE O SEU BURGER:</h1>
    <BurgerForm />
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import BurgerForm from '../components/BurgerForm.vue'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Banner,
    BurgerForm
  }
}
</script>
