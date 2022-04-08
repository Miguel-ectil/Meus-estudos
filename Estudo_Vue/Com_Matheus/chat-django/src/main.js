import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Chat from '@/views/Chat.vue'
import Cadastro from '@/components/Cadastro'
import Login from '@/views/Login.vue'
import Contatos from '@/components/Contatos'
import Conversa from '@/components/Conversa'
const NotFound = { template: '<p>Page not found</p>' }

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false


const routes = {
  '/': Chat,
  '/Cadastro': Cadastro,
  '/login': Login,
  '/Contatos': Contatos,
  '/Conversa': Conversa
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
