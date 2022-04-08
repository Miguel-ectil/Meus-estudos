<template>
  <div style="background-color: #f2f4f4">
  <NavbarHome />
    <h1 class="container mt-1">
      <center>
        <strong>Login</strong>
      </center>
    </h1>

    <div class="container mt-4">
      <b-row class="my-1">
        <b-col sm="4">
          <label for="input-large">
            <strong>Email</strong>
          </label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-large"
            size="lg"
            placeholder="Ex:guilhermelima@gmail.com"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-4">
        <b-col sm="4">
          <label for="input-large">
            <strong>Senha</strong>
          </label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-large"
            size="lg"
            placeholder=" "
          ></b-form-input>
        </b-col>
      </b-row>
      <div>
        <b-button href="./Contatos" style="margin-left: 250px; background-color: #7c3131"
          >Acessar sua conta</b-button
        >
        <b-button href="./Cadastro" style="margin-left: 8px; background-color: #7c3131"
          >Ainda não tem conta? Clique aqui</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import NavbarHome from '@/components/NavbarHome.vue'

export default {
  name: "Login",
  components: {
    NavbarHome
    
  }
};
</script>

