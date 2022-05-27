<template>
  <div class="flip-container">
    <div class="card bg-3 fc-2 ratio ratio-1x1 my-1" :class="{'flip-card': card.selected}" @click="$emit('click')">
      <img class="img-fluid front" :src="card.link" alt="">
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
