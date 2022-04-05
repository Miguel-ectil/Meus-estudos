<template>
  <div id="app">
    <NavbarHome/>
     <router-view/>
  </div>
</template>

<script>
import NavbarHome from '@/components/NavbarHome.vue'
// import Conversa from '@/components/Conversa.vue'

export default {
  name: 'App',
  components: {
    NavbarHome
    // Conversa
  }
}
</script>
