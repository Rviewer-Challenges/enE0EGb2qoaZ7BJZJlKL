<template>
  <div class="container text-white">
    <div class="row d-flex d-column">
      <div class="col col-sm-9 col-md-6 col-lg-4 mx-auto my-5">
        <div class="row mx-auto">
          <div class="col">
            <span class="fs-1">Temas</span>
            <div class="row mt-4">
              <div class="col-4">
                <div class="tema">
                  <div class="tema-img">
                    <img src="@/assets/img/PokeApi.jpg" alt="" class="img-fluid">
                  </div>
                  <div class="tema-text my-2">
                    <span class="fs-6">Pokémon</span>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="tema">
                  <div class="tema-img">
                    <img src="@/assets/img/MarvelApi.jpg" alt="" class="img-fluid">
                  </div>
                  <div class="tema-text my-2">
                    <span class="fs-6">Avengers</span>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="tema">
                  <div class="tema-img">
                    <img src="@/assets/img/MoviesApi.jpg" alt="" class="img-fluid">
                  </div>
                  <div class="tema-text my-2">
                    <span class="fs-6">Rick and Morty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mx-auto">
          <div class="col">
            <span class="fs-1">Nivel</span>
            <div class="my-3">
              <a href="#" class="btn-1 bg-2" @click="selectPokeApi(1)"><span>Fácil</span></a>
              <a href="#" class="btn-1 bg-2" @click="selectPokeApi(2)"><span>Medio</span></a>
              <a href="#" class="btn-1 bg-2" @click="selectPokeApi(3)"><span>Difícil</span></a>
            </div>
              <router-link :to=" {name: 'RoomGame'}" type="button" class="btn-1 bg-3" ><span class="fs-2">Iniciar partida</span></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions} from "vuex"

import * as LibJs from '@/common/js/functions.js'

export default {
  name: 'Levels',
  components: {
    HelloWorld
  },
  data() {
    return {
      game: {
        api: '',
        level: '',
        listImg: []
      }
    }
  },
  methods: {
    ...mapActions(['nuevoJuego']),
    selectPokeApi(level) {
      this.game.level = level
      this.nuevoJuego(this.game)
    },
    createGame(){

    }
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
.tema-img{
  border: .4rem #FFF solid;
  overflow: hidden;
  border-radius: 2rem;
}
.tema-img:hover{
  transform: scale(1.1) !important;
  transform-origin: 50% 50% !important;
}
</style>
