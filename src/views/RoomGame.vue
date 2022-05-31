<template>
  <div>
    <div class="row mx-auto">
      <div class="col my-3">
        <router-link :to=" {name: 'Levels'}" class="btn btn-1 py-2 mb-3">
          <img src="@/assets/img/back.svg" alt="Iniciar juego" width="20" height="20">
        </router-link>
        <h1>Partida</h1>
        <div class="row fs-7">
          <div class="col-4">
            <div class="d-flex flex-column mt-4">
              <span>Mov</span>
              <span>{{dataGame.movements}}</span>
            </div>
          </div>
          <div class="col-4">
            <div class="d-flex flex-column mt-4 timer">
              <span>Tiempo</span>
              <span>00:{{dataGame.time.toString().padStart(2, "0")}}</span>
            </div>
          </div>
          <div class="col-4">
            <div class="d-flex flex-column mt-4">
              <span>Rest</span>
              <span>{{dataGame.pairsRemaining}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mx-auto mt-3">
      <CardImg class="col-3 px-1" :class="{'w-20': (getGame.level === 3)}" v-for="(item,i) in getGame.listImg" :key="i" :card="item" @click="flipCard(i)"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardImg from '@/components/CardImg.vue'
import { mapGetters, mapActions} from "vuex"
import * as Func from '@/common/js/functions.js'

export default {
  name: 'RoomGame',
  components: {
    CardImg
  },
  data() {
    return {
      lastPairs: {
        counter: 0,
        posCard1: -1,
        posCard2: -1
      },
      dataGame: {
        movements: 0,
        pairsRemaining: 0,
        time: 0,
        statusGame: false
      }
    }
  },
  methods: {
    ...mapActions(['cambiarEstadoTarjeta']),
    ...mapActions(['ganarJuego']),
    async timerGame() {
      while(!this.endGame() && this.dataGame.time < 60) {
        await Func.delay(1)
        this.dataGame.time++
      }
      this.ganarJuego(this.dataGame)
      this.$router.push({name: 'EndGame'})
    },
    endGame() {
      if (this.dataGame.pairsRemaining === 0) {
        this.dataGame.statusGame = true
        return true
      }
      return false
    },
    async flipCard(position) {
      if (!this.getCardByPosition(position).selected) {
        this.cambiarEstadoTarjeta({pos: position, state: true})
        await Func.delay(0.7);
        this.verifyCards(position)
      }
    },
    verifyCards(pos) {
      this.lastPairs.counter++
      if (this.lastPairs.counter === 2) {
        this.lastPairs.posCard2 = pos
        let card1 = this.getCardByPosition(this.lastPairs.posCard1)
        let card2 = this.getCardByPosition(this.lastPairs.posCard2)
        if (card1.id !== card2.id) {
          this.cambiarEstadoTarjeta({pos: this.lastPairs.posCard1, state: false})
          this.cambiarEstadoTarjeta({pos: this.lastPairs.posCard2, state: false})
        } else {
          this.dataGame.pairsRemaining--
        }
        this.dataGame.movements++
        this.resetLastPair()
      } else {
        this.lastPairs.posCard1 = pos
      }
    },
    resetLastPair() {
      this.lastPairs.counter = 0
      this.lastPairs.posCard1 = -1
      this.lastPairs.posCard2 = -1
    },
    verifyExistingCard() {
      if (this.getGame.listImg.length === 0) {
        this.$router.push({name: 'Levels'})
      }
    }
  },
  computed: {
    ...mapGetters(['getGame']),
    ...mapGetters(['getCardByPosition']),
    ...mapGetters(['getCountPairsCards']),
  },
  created() {
    this.verifyExistingCard()
    this.dataGame.pairsRemaining = this.getCountPairsCards
    this.timerGame()
  },
  beforeDestroy() {
    this.time = 59
  }
}
</script>
<style scoped>
.timer{
  transform: scale(1.65) !important;
  transform-origin: 50% 50% !important;
}
.w-20 {
  width: 20% !important;
}
</style>
