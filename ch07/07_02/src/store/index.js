import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = {
  state: {
    count: 1
  },
  getters: {
    double: state => state.count + state.count
  },
  mutations: {
    update(state, payload) {
      state.count = payload;
    }
  },
  modules: {
    example: {
      namespaced: true,
      state: {
        value: 'Example'
      },
      getters: {
        upper(state) {
          return state.value.toUpperCase();
        },
        /**
         * 전역 네임스페이스에 접근하는 방법
         * @param {*} state       - 현재 네임스페이스의 state
         * @param {*} getters     - 현재 네임스페이스의 getters
         * @param {*} rootState   - 전역 네임스페이스의 state를 가져온다
         * @param {*} rootGetters - 전역 네임스페이스의 getters를 가져온다.
         */
        triple(state, getters, rootState, rootGetters) {
          return rootState.count + rootGetters.double;
        }
      },
      mutations: {
        update(state) {
          state.value = 'Updated';
        }
      },
      actions: {
        update(ctx) {
          ctx.commit('update');
        },
        multiplyByFive(ctx) {
          // 전역 double 게터와 example 모듈의 triple 게터를 사용
          const payload = ctx.rootGetters.double + ctx.getters.triple;
          ctx.commit('update', payload, { root: true });
        }
      }
    }
  }
};

export default new Vuex.Store(store);
