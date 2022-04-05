<template>
<div>
  <Navbar-Home />
   <div class="container mt-2">
     <h1 style="color: #7c3131;"><center><strong>Sejam bem-vindos e bem-vindas ao nosso chat</strong></center></h1>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
     
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
        <template #img>
          <img class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="@/assets/new_cadastro.png"
              alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide>
        <template #img>
          <img class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="@/assets/new_login.png"
              alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slides with image only -->
      
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/new_conversa.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>
  </div>
</div>
</template>

<script>
import NavbarHome from '../components/NavbarHome.vue'

export default {
  name: 'Chat',
  components: {
     NavbarHome 
     }
}
</script>
