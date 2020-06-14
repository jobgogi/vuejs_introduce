<template>
  <div id="app">
    <h2>Global Store</h2>
    <p>{{ count }}</p>
    <button type="button"
      @click="globalUpdate">
      Global Update
    </button>
    <h2>Local Store - example</h2>
    <p>{{ index }} x 3{{ triple }}</p>
    <button type="button"
      @click="multiplyByFive">
      global x 5
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 1
    };
  },
  computed: {
    count() {
      return this.$store.getters.double;
    },
    triple() {
      return this.$store.getters['example/triple'];
    }
  },
  methods: {
    globalUpdate() {
      this.$store.commit('update', ++this.index);
    },
    multiplyByFive() {
      this.$store.dispatch('example/multiplyByFive');
    }
  }
}
</script>