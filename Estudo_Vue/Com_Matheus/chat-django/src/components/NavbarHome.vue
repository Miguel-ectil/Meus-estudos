<template>
  <div>
    <b-navbar class="p-10 b-nav justify-content-between" type="dark">
      <b-navbar-brand href="#" style="font-size: 38px">
        <strong> Chat </strong>
      </b-navbar-brand>
  
      <b-navbar-nav style="font-size: 24px">
        <b-nav-item href="./" ><strong>Home</strong> | </b-nav-item>
        <b-nav-item href="./Cadastro" link-gen="cadastro" ><strong>Cadastro</strong> | </b-nav-item>
        <b-nav-item href="./login"><strong>Login</strong></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "NavbarHome"
};

</script>
<style>
.navbar {
  background-color: #7c3131 !important;
}
</style>
