<template>
  <div class="col-4">
    <div class="tema">
      <div class="tema-img" :class="{'selected': data.selected}">
        <img :src="require(`@/${data.urlImg}`)" class="img-fluid" @click="$emit('click')">
      </div>
      <div class="tema-text my-2">
        <span class="fs-6">{{data.title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardTheme',
  props: {
    data: { type: Object, required: true }
  }
}
</script>
<style scoped>
.tema-img{
  border: .4rem #FFF solid;
  overflow: hidden;
  border-radius: 2rem;
  cursor: pointer;
  position: relative;
}
.tema-img:hover{
  transform: scale(1.1) !important;
  transform-origin: 50% 50% !important;
}
.selected {
  border: .4rem #DE9151 solid;
}
.selected::after {
  content: "";
  width: 100%;
  height: 100%;
  background: #DE915180;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
