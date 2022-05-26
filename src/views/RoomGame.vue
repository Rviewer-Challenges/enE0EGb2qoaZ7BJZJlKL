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
          <div v-for="(card, i) in getGame.listImg" :key="i" class="col-3 px-1 flip-container">
            <div class="card bg-3 fc-2 ratio ratio-1x1 my-1" :class="{'flip-card': card.selected}" @click="flipCard(i)">
              <img class="img-fluid front" :src="card.link" alt="">
              <div class="back w-100 h-100 d-flex align-items-center justify-content-center"><span>?</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapActions} from "vuex"

export default {
  name: 'RoomGame',
  components: {
    HelloWorld
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
    async flipCard(position) {
      if (!this.getCardByPosition(position).selected) {
        this.cambiarEstadoTarjeta({pos: position, state: true})
        await this.delay(0.7);
        this.verifyCards(position)
      }
    },
    async timerGame() {
      while(this.time < 59) {
        await this.delay(1)
        this.time++
        if (!this.getGame.stateFinished) {
          this.endGame()
        }
      }
    },
    endGame() {
      if (this.time === 59 || this.pairsRemaining === 0) {
        if (this.pairsRemaining === 0) {
          this.time = 59
          this.ganarJuego(true)
        }
        this.$router.push({name: 'EndGame'})
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
    },
    delay(n){
      return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
      })
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
.card.flip-card {
  transform: rotateY(-180deg);
}
.card {
  transition: all 700ms ease-in-out;
  transform-style: preserve-3d;
  cursor: pointer;
}
.front, .back {
  position: absolute;
  backface-visibility: hidden;
  font-size: 2rem;
}
.front {
  transform: rotateY(-180deg);
}
</style>
