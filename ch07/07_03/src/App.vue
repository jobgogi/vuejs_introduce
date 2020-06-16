<template>
  <div id="app">
    <p>{{ count }}</p>
    <p>{{ double }}</p>
    <p>Amount : {{ amount }}</p>
    <button v-on:click="increment(1)">+1</button>
    <button v-on:click="incrementAmount(2)">
      +2 Amount
    </button>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations,
  createNamespacedHelpers
} from 'vuex';

const counterHelpers = createNamespacedHelpers('counter');

export default {
  name: 'App',
  computed: {
    double() {
      return this.count * 2
    },
    ...mapState([
      'count'
    ]),
    ...counterHelpers.mapState([
      'amount'
    ])
  },
  methods: {
    ...mapMutations([
      'increment'
    ]),
    ...counterHelpers.mapMutations([
      'incrementAmount'
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
