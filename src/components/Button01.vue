<template>
  <div>
    <div class="btn btn-1 bg-6 w-100" @click="$emit('click')" :class="{'selected': data.selected}">
      <span class="fc-1 fs-7 mx-auto">{{data.text}}</span>
    </div>
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
</style>
