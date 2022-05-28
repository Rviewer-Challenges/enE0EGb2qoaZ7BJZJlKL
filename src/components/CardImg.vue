<template>
  <div class="flip-container">
    <div class="card fc-2 ratio ratio-1x1 my-1" :class="{'flip-card': card.selected}" @click="$emit('click')">
      <div class="front p-1"><img class="img-fluid" :src="card.link" alt=""></div>
      <div class="back w-100 h-100 d-flex align-items-center justify-content-center"><span>?</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardImg',
  props: {
    card: { type: Object, required: true }
  }
}
</script>
<style scoped>
.card{
  background: #6F58CB !important;
  color: #FEFEFE !important;
  text-decoration: none !important;
  border-radius: 1rem;
  border-bottom: 5px solid #4B3A92 !important;
  cursor: pointer;
  transition: all 700ms ease-in-out;
  transform-style: preserve-3d;
  cursor: pointer;
}
.card.flip-card {
  background: #FEFEFE !important;
  color: #1B182D !important;
  border-radius: 1rem;
  border-bottom: 5px solid #A3A3A3 !important;
  cursor: pointer;
  transform: rotateY(-180deg);
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
