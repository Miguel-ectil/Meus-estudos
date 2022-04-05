<template>
  <div style="background-color: #f2f4f4">
  <NavbarHome />
    <h1 class="container mt-2">
      <center>
        <strong>Criar Contato</strong>
      </center>
    </h1>
    <div class="container mt-6">
      <b-row class="my-4">
        <b-col sm="4">
          <label for="input-large">
            <strong>Nome completo:</strong>
          </label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-large"
            size="lg"
            placeholder="Ex: Guilherme Lima"
          ></b-form-input>
        </b-col>
      </b-row>

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
            placeholder="Ex: guilherme@gamil.com"
          ></b-form-input>
        </b-col>
      </b-row>

      <div class="row">
        <div class="col-sm-5">
          <b-row class="my-1">
            <b-col sm="5">
              <label for="input-large">
                <strong>Senha</strong>
              </label>
            </b-col>
            <b-col sm="12">
              <b-form-input
                id="input-large"
                size="lg"
                placeholder="Criar uma senha "
              ></b-form-input>
            </b-col>
          </b-row>
        </div>

        <div class="col-sm-5">
          <b-row class="my-1">
            <b-col sm="7">
              <label for="input-large">
                <strong>Confirmação da Senha</strong>
              </label>
            </b-col>
            <b-col sm="12">
              <b-form-input
                id="input-large"
                size="lg"
                placeholder="Digite a senha novamente"
              ></b-form-input>
            </b-col>
          </b-row>
        </div>
      </div>
      <br />
      <div>
        <b-button href="./login" style="margin-left: 395px; background-color: #7c3131"
          >Criar sua conta</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import NavbarHome from '@/components/NavbarHome'

export default {
  name: "Cadastro",
  components: {
    NavbarHome
  }
};
</script>