import Vue from 'vue'
import Vuex from 'vuex'

import * as LibJs from '@/common/js/functions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {
      api: '',
      level: '',
      stateFinished: false,
      listImg: []
    }
  },
  mutations: {
    newGame(state, game) {
      state.game = game
    },
    changeStateCard(state, val) {
      state.game.listImg[val.pos].selected = val.state
    },
    winGame(state, val) {
      state.game.stateFinished = val
    },
    resetGame(state) {
      state.game = {
        api: '',
        level: '',
        stateFinished: false,
        listImg: []
      }
    }
  },
  actions: {
    async nuevoJuego({commit}, game) {
      game.listImg = await LibJs.getListPokemon(game.level)
      console.log(game);
      commit('newGame', game)
    },
    cambiarEstadoTarjeta({commit}, obj) {
      commit('changeStateCard', obj)
    },
    ganarJuego({commit}, val) {
      commit('winGame', val)
    },
    reiniciarData({commit}) {
      commit('resetGame')
    }
  },
  getters: {
    getGame(state) {
      return state.game
    },
    getCardByPosition: (state) => (pos) => {
      return state.game.listImg[pos]
    },
    getStateGame(state) {
      return state.game.stateFinished
    }
  },
  modules: {
  }
})
