<template>
  <div class="foo">
    <h1 class="header">Foo 컴포넌트</h1>
    <p>이것은 Foo 컴포넌트 입니다.</p>
  </div>
</template>

<style>
  p { text-decoration: underline; }
</style>

<style scoped>
.foo {
  border: solid 1px green;
  margin: 4px;
  padding: 4px;
}
.header {
  font-size: 150%;
}
</style>