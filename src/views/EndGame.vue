<template>
  <div class="d-flex flex-row align-items-center text-white vh-100">
    <CardEndGame v-if="!statusGame" :data="lostGame" :game="getGame"/>
    <CardEndGame v-else :data="winGame" :game="getGame"/>
  </div>
</template>

<script>
import { mapGetters, mapActions} from "vuex"
import CardEndGame from '@/components/CardEndGame.vue'

export default {
  name: 'EndGame',
  components: {
    CardEndGame
  },
  data() {
    return {
      statusGame: false,
      lostGame: {title: 'Fin del Juego', icon: 'assets/img/emojiCry.svg', phrase: 'Esto es un juego contra reloj, no un trámite de gobierno.'},
      winGame: {title: 'Excelente', icon: 'assets/img/party.svg', phrase: 'Velocidad, soy veloz'},
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
  },
  beforeDestroy() {
    this.reiniciarData()
  }
}
</script>
<style scoped>
.game-win {
  min-width: 100%;
}

.section {
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.1);
}
</style>
