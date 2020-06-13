import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: '우유 사기',
        done: false
      },
      {
        id: 2,
        name: 'Vue.js 관련 책 사기',
        done: true
      }
    ],
    nextTaskId: 3
  },
  mutations: {
    addTask(state, { name }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        done: false
      });

      state.nextTaskId++;
    },
    toggleTaskStatus(state, { id }) {
      state.tasks
        .filter(task => task.id === id)
        .forEach(task => {
          task.done = !task.done
        });
    }
  }
});

export default store;
