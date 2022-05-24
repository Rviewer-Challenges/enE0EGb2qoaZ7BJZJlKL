<template>
  <div class="container">
    <div class="row d-flex d-column mx-auto">
      <div class="col col-sm-9 col-md-6 col-lg-4 mx-auto">
        <div class="row mx-auto">
          <div class="col vh-30"></div>
        </div>
        <div class="row mx-auto">
          <div class="col vh-40">
            <img src="@/assets/img/MemoryGameLogo.png" alt="" class="img-fluid mx-auto">
            <!-- <a href="#" class="btn-1 bg-2"><span class="fs-4">Jugar</span></a> -->
            <router-link :to="{ name: 'Levels'}" class="btn-1 bg-2"><span class="fs-4">Jugar</span></router-link>
          </div>
        </div>
        <div class="row mx-auto">
          <div class="col">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.vh-30{
  height: 30vh !important;
}
.vh-40{
  min-height: 40vh !important;
}
.btn-1 {
  color: #ffffff !important;
  text-decoration: none;
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin: 1.5rem auto;
  cursor: pointer;
}
.btn-1:hover {
  transform: scale(1.1) !important;
  transform-origin: 50% 50% !important;
}
</style>
