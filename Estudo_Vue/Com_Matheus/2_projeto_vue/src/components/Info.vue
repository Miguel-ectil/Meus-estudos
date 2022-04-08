<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li v-for="(technology, index) in backend_technologies" v-bind:key="index">
                {{ technology }}
            </li>
        </ul>
        <p>Utilizo as seguintes tecnologias para front-end:</p>
        <ul>
            <li v-for="technology in frontend_technologies" :key="technology.id">
                {{ technology.language }}
            </li>
        </ul>
        <div>
            <button @click="showEmail">{{ textoBotao }}</button>
        </div>
        <p v-show="mostrar_gmail">Mande uma mensagem para: {{ gmail }}</p>
        <p class="teste">Para acessar meu portfólio: <a v-bind:href="meu_link" target="_blank">clique aqui</a></p>
        <Picture />
    </div>
</template>
<script>
import Picture from './Picture.vue'

export default {
    name: 'Info',
    components: {
        Picture
    },
    data() {
        return {
            esta_trabalhando: false,
            mostrar_gmail: false,
            gmail: 'miguel@gmail.com',
            meu_link: 'https://google.com',
            textoBotao: 'Mostrar g-mail',
            backend_technologies: ['JavaScript', 'PHP', 'Python'],
            frontend_technologies: [
                {id: 1, language: 'HTML'},
                {id: 2, language: 'CSS'},
                {id: 3, language: 'Vue'}
            ]
        }
    },
    methods: {
        showEmail() {
            this.mostrar_gmail = !this.mostrar_gmail
            if(!this.mostrar_gmail) {
                this.textoBotao = 'Mostrar g-mail'
            } else {
                this.textoBotao = 'Esconder g-mail'
            }
        }
    }
}
</script>

<style>
    .paragrafo-pai{
        color: red;
    }
</style>