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
              <Button01 v-for="(item, i) in listLevels" :key="i" class="col-4" @click="selectLevel(item)" :data="item"/>
            </div>
          </div>
        </div>
        <Button01 v-if="!loadedData" class="w-100 mb-3" @click="createGame()" :data="{text: 'Crear Partida', selected: false}"/>
        <div v-else class="btn btn-3 w-100 mb-3">
          <span class="fs-6 mx-auto">Listo</span>
        </div>
        <div v-if="!startGame" class="btn btn-1 py-2">
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
      game: {theme: 0, level: 0, stateFinished: false, listImg: []},
      loadedData: false,
      startGame: true
    }
  },
  methods: {
    ...mapActions(['nuevoJuego']),
    ...mapActions(['reiniciarData']),
    selectTheme(theme) {
      this.resetSelectedButton(this.listThemes)
      this.reiniciarData()
      this.game.theme = theme.id
      this.loadedData = false
      theme.selected = true
    },
    selectLevel(level) {
      this.resetSelectedButton(this.listLevels)
      this.reiniciarData()
      this.game.level = level.id
      this.loadedData = false
      level.selected = true
    },
    async createGame() {
      if (this.game.theme>0 && this.game.level>0) {
        this.loadedData = false
        this.startGame = false
        await this.nuevoJuego(this.game)
        this.loadedData = true
        this.startGame = true
      }
    },
    resetSelectedButton(array) {
      array.forEach(item => {item.selected = false})
    }
  },
  created(){
    this.reiniciarData()
  }
}
</script>
<style scoped>
</style>
