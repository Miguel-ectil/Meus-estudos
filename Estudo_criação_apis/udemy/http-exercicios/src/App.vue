<template>
	<div id="app" class="container">
		<teste />
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
				v-model="usuario.nome"
				placeholder="Informe o nome"></b-form-input>
			</b-form-group>
				<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg"
				v-model="usuario.email"
				placeholder="Informe o E-mail"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar"
			style="margin-left: 960px"
			size="lg" variant="primary">Salvar</b-button>
		</b-card>
		<br>	
		
	</div>
</template>

<script>
import teste from './plugins/teste.vue'

export default {
	components: {
		teste
	},
	data() {
		return {
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		salvar() {
			console.log(this.usuario)
		}
	}
	// created() {
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'Maria',
	// 		email: 'maria_maria@gmail.com'
	// 	}).then(res => console.log(res))
	// }

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
