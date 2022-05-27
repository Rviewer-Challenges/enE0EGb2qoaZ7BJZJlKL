<template>
  <div class="container text-white">
    <div class="row d-flex d-column">
      <div class="col col-sm-9 col-md-6 col-lg-4 mx-auto my-5">
        <div class="row mx-auto">
          <div class="col mb-3">
            <h1>Partida</h1>
            <div class="row fs-7">
              <div class="col-4">
                <div class="d-flex flex-column mt-4">
                  <span>Mov</span>
                  <span>{{movement}}</span>
                </div>
              </div>
              <div class="col-4">
                <div class="d-flex flex-column mt-4 timer">
                  <span>Tiempo</span>
                  <span>00:{{time}}</span>
                </div>
              </div>
              <div class="col-4">
                <div class="d-flex flex-column mt-4">
                  <span>Rest</span>
                  <span>{{pairsRemaining}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mx-auto mt-3">
          <CardImg class="col-3 px-1" v-for="(item,i) in getGame.listImg" :key="i" :card="item" @click="flipCard(i)"/>
        </div>
      </div>
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
      movement: 0,
      pairsRemaining: 8,
      time: 0,
    }
  },
  methods: {
    ...mapActions(['cambiarEstadoTarjeta']),
    ...mapActions(['ganarJuego']),
    async timerGame() {
      while(this.time < 59) {
        await Func.delay(1)
        this.time++
        if (!this.getGame.stateFinished) {
          this.endGame()
        }
      }
    },
    endGame() {
      if (this.time === 59 || this.pairsRemaining === 0) {
        if (this.pairsRemaining === 0) {
          this.ganarJuego(true)
        }
        this.$router.push({name: 'EndGame'})
      }
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
          this.pairsRemaining--
        }
        this.movement++
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
  },
  created() {
    this.verifyExistingCard()
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
</style>
