<template>
  <div>
    <div class="row mx-auto">
      <div class="col">
        <div class="section my-4">
          <div class="header bg-3 py-2">
            <span class="fs-1">Temas</span>
          </div>
          <div class="body bg-2">
            <div class="row py-3">
              <CardTheme v-for="(item,i) in listThemes" :key="i" @click="selectTheme(item)" :data="item" class="col-4 mx-auto"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mx-auto">
      <div class="col">
        <div class="section mb-4">
          <div class="header bg-3 py-2">
            <span class="fs-1">Nivel</span>
          </div>
          <div class="body bg-2">
            <div class="row p-3">
              <Button-01 v-for="(item, i) in listLevels" :key="i" class="col-4" @click="selectLevel(item)" :data="item"/>
            </div>
          </div>
        </div>
        <div v-if="!loadedData" class="btn btn-2 w-100 mb-3" @click="createGame()">
          <span class="fs-6 mx-auto">Crear partida</span>
        </div>
        <div v-else class="btn btn-2 active w-100 mb-3">
          <span class="fs-6 mx-auto">Listo</span>
        </div>
        <div v-if="!loadedData" class="btn btn-1 py-2">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </div>
        <router-link v-else :to=" {name: 'RoomGame'}" class="btn btn-1 py-2">
          <img src="@/assets/img/play.svg" alt="Iniciar juego" width="40" height="40">
        </router-link>
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
        {id: 1, urlImg: 'assets/img/PokeApi.png', title: 'Pokémon', selected: false},
        {id: 2, urlImg: 'assets/img/RickAndMortyApi.png', title: 'Rick and Morty', selected: false},
      ],
      listLevels: [
        {id: 1, text: 'Fácil', selected: false},
        {id: 2, text: 'Medio', selected: false},
        {id: 3, text: 'Difícil', selected: false},
      ],
      game: {theme: '', level: '', stateFinished: false, listImg: []},
      loadedData: false
    }
  },
  methods: {
    ...mapActions(['nuevoJuego']),
    ...mapActions(['reiniciarData']),
    selectTheme(theme) {
      this.resetThemes()
      this.loadedData = false
      this.game.theme = theme.id
      theme.selected = true
    },
    selectLevel(level) {
      this.game.level = level.id
      this.resetLevels()
      this.loadedData = false
      level.selected = true
      // this.createGame()
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
.section {
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.1);
}
</style>
