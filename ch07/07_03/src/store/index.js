import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment(state, payload) {
      state.count += payload;
    }
  },
  actions: {
  },
  modules: {
    counter: {
      namespaced: true,
      state: {
        amount: 1
      },
      mutations: {
        incrementAmount(state, payload) {
          state.amount += payload;
        }
      }
    }
  }
});

export default store;
