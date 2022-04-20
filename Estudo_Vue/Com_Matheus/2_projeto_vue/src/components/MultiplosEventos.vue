<template>
    <div>
        <button @click="primeiro($event), segundo($event), terceiro(txt3,  $event)">Ativar multiplos eventos</button>
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>

<script>
    export default {
        name: 'MultiplosEventos',
        data() {
            return {
                multiplos_eventos: "",
                txt3: "Terceiro evento"
            }
        },
        methods: {
            primeiro(e) {
                this.multiplos_eventos = "Primeiro evento ativado!"
            },
            segundo(e) {
                setTimeout(() => this.multiplos_eventos = "Segundo evento!",500 )
            },
            terceiro(txt, e) {
                setTimeout(() => this.multiplos_eventos = txt, 1500)
            }
        }
    }
</script>

<style scoped>
    div {
        margin: 60px;
    }
</style>