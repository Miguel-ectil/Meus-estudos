<template>
  <div class="back-container">
    <Navbar-Home />
    <div class="container-fluid front-container mt-1">
      <div class="back-top"></div>
      <div class="back-main"></div>
    </div>

    <div class="container front-container1">
      <div class="row">
        <div style="background-color: #b4afaf" class="col-sm-5 contacts">
          <h1>
            <center><strong>Contatos</strong></center>
          </h1>
          <div class="contact-table-scroll">
            <table class="table table-hover">
              <tbody style="background-color: rgb(167, 164, 164)">
                <tr>
                  <td><b-avatar alt="" class="mr-4"></b-avatar></td>
                  <td>
 
                    <!-- <a
                      style="color: black"
                      href="{% url 'chat' username=user.username%}"
                    ></a> -->
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <!-- <a
                      style="color: black"
                      href="{% url 'chat' username=user.username%}"
                    ></a> -->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarHome from './NavbarHome.vue';

export default {
  name: "Contatos",
  components: { NavbarHome }
};
</script>