<template>
  <div class="container">
    <div class="row d-flex d-column mx-auto">
      <div class="col col-sm-9 col-md-6 col-lg-4 mx-auto">
        <div class="row mx-auto">
          <div class="col vh-30"></div>
        </div>
        <div class="row mx-auto">
          <div class="col text-white">
            <div class="bg-3 py-4 rounded-3 ">
              <div v-if="!statusGame" class="game-lost d-flex flex-column">
                <span class="fs-3">Fin del Juego</span>
                <img src="@/assets/img/emojiCry.svg" class="mx-auto my-3" alt="lost" width="100" height="100">
                <span>Esto es un juego, no un trámite de gobierno.</span>
              </div>
              <div v-else class="game-win d-flex flex-column">
                <span class="fs-3">Excelente</span>
                <img src="@/assets/img/party.svg" class="mx-auto my-3" alt="lost" width="100" height="100">
                <span>Velocidad, soy veloz</span>
              </div>
            </div>
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
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapActions} from "vuex"

export default {
  name: 'EndGame',
  data() {
    return {
      statusGame: false
    }
  },
  methods: {
    ...mapActions(['reiniciarData']),
    verifyExistingCard() {
      if (this.getGame.listImg.length === 0) {
        this.$router.push({name: 'Levels'})
      }
    },

  },
  computed: {
    ...mapGetters(['getStateGame']),
    ...mapGetters(['getGame']),
  },
  created() {
    this.verifyExistingCard()
    this.statusGame = this.getStateGame
    this.reiniciarData()
  }
}
</script>
<style scoped>
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
