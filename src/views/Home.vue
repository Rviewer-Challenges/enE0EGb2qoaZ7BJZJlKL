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
            <router-link :to="{ name: 'Levels'}" class="btn btn-1 w-100 mt-3"><span class="fs-4">Jugar</span></router-link>
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
export default {
  name: 'Home',
  components: {
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
</style>
