<template>
  <p :class="$style.message">안녕하세요</p>
</template>
<script>
export default {
  created() {
    console.log('css modules: $style', this.$style);
  }
}
</script>
<style module>
.message {
  color: #42B983;
}
</style>