<template>
  <div class="section bg-2 w-100">
    <div class="game-lost d-flex flex-column">
      <div class="header bg-3 py-3">
        <span class="fs-3">{{data.title}}</span> 
      </div>
      <div class="body bg-2 d-flex flex-column py-3 px-1">
        <img :src="require(`@/${data.icon}`)" class="mx-auto my-3" alt="lost" width="80" height="80">
        <span class="btn btn-1 my-1 mx-auto">Movimientos: {{game.movements}}</span>
        <span class="btn btn-1 my-1 mx-auto">Tiempo: {{game.time}}seg</span>
        <span class="mt-3">{{data.phrase}}</span>
      </div>
      <div class="footer mb-3">
        <router-link :to="{name: 'Levels'}" class="btn btn-1 mx-2">
          <img src="@/assets/img/repeat.svg" alt="Jugar de nuevo" width="20" height="20">
        </router-link>
        <router-link :to="{name: 'Home'}" class="btn btn-1 mx-2">
          <img src="@/assets/img/home.svg" alt="Jugar de nuevo" width="20" height="20">
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardEndGame',
  props: {
    data: { type: Object, required: true },
    game: { type: Object, required: true },
  }
}
</script>
<style scoped>
</style>
