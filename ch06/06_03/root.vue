<template>
  <div id="root">
    <h1 class="header">Root 컴포넌트</h1>
    <p>이것은 Root 컴포넌트 입니다.</p>
    <foo />
  </div>
</template>

<script>
import Foo from './foo';

export default {
  components: {
    Foo
  }
}
</script>

<style>
#root {
  border: solid 1px blue;
  margin: 4px;
  padding: 4px;
}

.header {
  font-size: 200%;
}
</style>