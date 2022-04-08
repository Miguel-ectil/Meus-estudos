<template>
    <div>
        <h2>Meu formulario:</h2>
        
        <form action="" @submit="enviarFormulario($event)">
            <div>
                <input type="text" v-model="name">
            </div>
            <div>
                <input type="text" v-model="gmail">
            </div>
            <div>
                <Submit />
            </div>
        </form>
        <p>Conteúdo</p>
        <p>Conteúdo</p>
        <p>Conteúdo</p>
    </div>
</template>

<script>
import InputText from './form/InputText'
import Submit from './form/Submit'

export default {
    name: 'Form',
    components: {
        InputText,
        Submit
    },
    data() {
        return {
            name: "",
            gmail: "",
        }
    },
    methods: {
        enviarFormulario(e) {

            e.preventDefault();

            const name = this.name;
            const gmail = this.gmail;

            console.log("Formulario Enviado!");
            console.log("O nome é: " + name);
            console.log("O gmail é: " + gmail);
        }
    }
}
</script>

<style scoped>
    p {
        margin: 40px;
    }
</style>