import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function getCountNum(type) {
  return new Promise(resolve => {
    setTimeout(() => {
      let amount = 0;

      switch (type) {
        case 'one':
          amount = 1;
          break;
        case 'two':
          amount = 2;
          break;
        case 'ten':
          amount = 10;
          break;
        default:
          amount = 0;
      }

      resolve(amount);
    }, 1000);
  });
}

const counter = {
  state: {
    amount: 10
  },
  getters: {
    squared: state => state.amount * state.amount
  },
  mutations: {
    increment(state, { amount }) {
      state.amount += amount;
    }
  },
  actions: {
    incrementAsync({ commit }, payload) {
      console.log('payload');
      return getCountNum(payload.type)
        .then(data => {
          console.log(data);
          commit('increment', {
            amount: data
          });
        })
    }
  }
};

const task = {
  state: {
    tasks: [
      {
        id: 1,
        name: '우유 사기',
        labelIds: [1, 2],
        done: false
      },
      {
        id: 2,
        name: 'Vue.js 관련 책 사기',
        labelIds: [1, 3],
        done: true
      }
    ],
    labels: [
      {
        id: 1,
        text: '쇼핑'
      },
      {
        id: 2,
        text: '음료'
      },
      {
        id: 3,
        text: '책'
      }
    ],
    nextTaskId: 3,
    nextLabelId: 4,
    filter: null
  },
  getters: {
    filteredTasks(state) {
      if (!state.filter) {
        return state.tasks;
      }

      return state.tasks.filter(task => task.labelIds.indexOf(state.filter) !== -1);
    }
  },
  mutations: {
    addTask(state, { name, labelIds }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        labelIds,
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
    },
    addLabel(state, { text }) {
      state.labels.push({
        id: state.nextLabelId,
        text
      });
      state.nextLabelId++;
    },
    changeFilter(state, { filter }) {
      state.filter = filter;
    },
    restore(state, { tasks, labels, nextTaskId, nextLabelId }) {
      state.tasks = tasks;
      state.labels = labels;
      state.nextTaskId = nextTaskId;
      state.nextLabelId = nextLabelId;
    }
  },
  actions: {
    save({ state }) {
      const data = {
        tasks: state.tasks,
        labels: state.labels,
        nextTaskId: state.nextTaskId,
        nextLabelId: state.nextLabelId
      };
      localStorage.setItem('task-app-data', JSON.stringify(data));
    },

    restore({ commit }) {
      const data = localStorage.getItem('task-app-data');
      if (data) {
        commit('restore', JSON.parse(data));
      }
    }
  }
};

const store = new Vuex.Store({
  modules: {
    counter,
    task
  }
});

export default store;
