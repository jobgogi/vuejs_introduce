<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <template v-if="loading">LOADING...</template>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementAction">Action</button>
    <button :disabled="loading" @click="incrementAsync">Async Action</button>
    <button :disabled="loading" @click="incrementAwait">Async - Await Action</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return this.$store.state;
  },
  created() {
    console.log(this.$store);
    this.count = this.$store.state.count;
  },
  methods: {
    increment() {
      this.$store.state.count += 1;
    },
    decrement() {
      this.$store.commit('decrement', { amount: 1 });
    },
    incrementAction() {
      this.$store.dispatch('incrementAction');
    },
    incrementAsync() {
      this.$store.commit('loading', { loading: true });
      this.$store.dispatch('incrementAsync', { type: 'one' }).then(() => {
        this.$store.commit('loading', { loading: false });
      });
    },
    async incrementAwait() {
      try {
        this.$store.commit('loading', { loading: true });
        await this.$store.dispatch('incrementAsync', { type: 'one' });
      } catch (e) {
        console.log(e);
      } finally {
        this.$store.commit('loading', { loading: false });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
