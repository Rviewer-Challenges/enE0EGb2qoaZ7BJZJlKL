<template>
  <div class="container text-white">
    <div class="row d-flex d-column">
      <div class="col col-sm-9 col-md-6 col-lg-4 mx-auto my-5">
        <div class="row mx-auto">
          <div class="col">
            <span class="fs-1">Temas</span>
            <div class="row mt-4">
              <CardTheme v-for="(item,i) in listThemes" :key="i" @click="selectTheme(item)" :data="item" class="col-4"/>
            </div>
          </div>
        </div>
        <div class="row mx-auto">
          <div class="col">
            <span class="fs-1">Nivel</span>
            <div class="my-3">
              <Button-01 v-for="(item, i) in listLevels" :key="i" class="bg-2" @click="selectLevel(item)" :data="item"/>
            </div>
            <div v-if="!loadedData" class="btn bg-3 py-2">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </div>
            <router-link v-else :to=" {name: 'RoomGame'}" class="btn bg-3">
              <span class="fs-2">Iniciar partida</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardTheme from '@/components/CardTheme.vue'
import Button01 from '@/components/Button01.vue'
import { mapActions} from "vuex"

export default {
  name: 'Levels',
  components: {
    CardTheme,
    Button01
  },
  data() {
    return {
      listThemes: [
        {id: 1, urlImg: 'assets/img/PokeApi.jpg', title: 'Pokémon', selected: true},
        {id: 2, urlImg: 'assets/img/MarvelApi.jpg', title: 'Avengers', selected: false},
        {id: 3, urlImg: 'assets/img/MoviesApi.jpg', title: 'Rick and Morty', selected: false},
      ],
      listLevels: [
        {id: 1, text: 'Fácil', selected: true},
        {id: 2, text: 'Medio', selected: false},
        {id: 3, text: 'Difícil', selected: false},
      ],
      game: {theme: '', level: '', listImg: []},
      theme: '',
      difficulty: '',
      loadedData: true
    }
  },
  methods: {
    ...mapActions(['nuevoJuego']),
    ...mapActions(['reiniciarData']),
    selectTheme(theme) {
      this.resetThemes()
      this.game.theme = theme.id
      theme.selected = true
    },
    selectLevel(level) {
      this.game.level = level.id
      this.resetLevels()
      level.selected = true
      this.createGame()
    },
    async createGame() {
      this.loadedData = false
      await this.nuevoJuego(this.game)
      this.loadedData = true
    },
    resetThemes() {
      for (let i = 0; i < this.listThemes.length; i++) {
        this.listThemes[i].selected = false
      }
    },
    resetLevels() {
      for (let i = 0; i < this.listLevels.length; i++) {
        this.listLevels[i].selected = false
      }
    }
  },
  created(){
    this.reiniciarData()
  }
}
</script>
<style scoped>
.btn {
  color: #ffffff !important;
  text-decoration: none !important;
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin: 1.5rem auto;
  cursor: pointer;
}
</style>
