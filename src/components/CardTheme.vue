<template>
  <div class="col-4">
    <div class="tema">
      <div class="btn btn-1 bg-6 p-2" :class="{'selected': data.selected}">
        <img :src="require(`@/${data.urlImg}`)" class="img-fluid" @click="$emit('click')">
      </div>
      <div class="tema-text my-2">
        <span class="fs-7">{{data.title}}</span>
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
</style>
