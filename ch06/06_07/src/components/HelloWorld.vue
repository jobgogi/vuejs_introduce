<docs>
# HelloWorld 컴포넌트

## 개요
이 문서는 HelloWorld 컴포넌트의 사용법을 설명하는 문서입니다.

## 사용방법
...
</docs>
<template>
  <div class="hello">
    <p class="message">{{ msg }}</p>
    <p v-html="docs"></p>
  </div>
</template>
<script>
import marked from 'marked';

export default {
  name: 'HelloWorld',
  data() {
    return {
      docs: marked(this.$options.__docs),
      msg: '안녕하세요!'
    }
  },
  created() {
    console.log(this.$options);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message { color: #42b983; }
</style>
