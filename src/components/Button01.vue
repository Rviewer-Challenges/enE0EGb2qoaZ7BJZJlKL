<template>
  <div class="btn" @click="$emit('click')" :class="{'selected': data.selected}">
    <span>{{data.text}}</span>
  </div>
</template>
<script>
export default {
  name: 'Button01',
  props: {
    data: { type: Object, required: true }
  }
}
</script>
<style scoped>
.btn {
  color: #ffffff !important;
  text-decoration: none !important;
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin: 1.5rem auto;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}
.hover-active:hover {
  transform: scale(1.1) !important;
  transform-origin: 50% 50% !important;
}
.selected::after {
  content: "";
  width: 100%;
  height: 100%;
  background: #ffffff40;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
