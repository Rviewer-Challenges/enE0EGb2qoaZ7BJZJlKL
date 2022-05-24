import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Levels from '../views/Levels.vue'
import RoomGame from '../views/RoomGame.vue'
import EndGame from '../views/EndGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/levels',
    name: 'Levels',
    component: Levels
  },
  {
    path: '/roomgame',
    name: 'RoomGame',
    component: RoomGame
  },
  {
    path: '/endgame',
    name: 'EndGame',
    component: EndGame
  },
]

const router = new VueRouter({
  routes
})

export default router
