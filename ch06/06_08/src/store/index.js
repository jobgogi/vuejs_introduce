import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// function getCountNum(type) {
//   return new Promise(resolve => {
//     setTimeout(() =>{
//     }, 1000);
//   });
// };

const store = new Vuex.Store({
  // 애플리케이션의 스테이트
  // * 서버에서 데이터를 받아오는 중인지 나타내는 플래그
  // * 로그인한 사용자 정보 등 전체 애플리케이션에서 사용하는 데이터
  // * 전자 상거래 사이트의 상품 정보처럼 애플리케이션 여러 곳에서 사용될 가능성이 있는 데이터
  state: {
    count: 0
  },
  // state를 업데이트를 한다
  mutations: {
    increment(state, amount) {
      state.count += amount;
    },
    increments(state) {
      state.count += 1;
    },
    decrement(state, payload) {
      state.count = state.count - payload.amount;
    }
  },
  // Ajax요청 등의 비동기 처리 및 로컬 스토리지를 읽고 쓰는
  // 외부 API와의 통신을 주로 담당
  actions: {
    incrementAction(ctx) {
      ctx.commit('increments');
    }
  },
  // 스테이트의 일부 혹은 스테이트로부터 계산된 값을 반환
  getters: {
    squared: (state) => state.count * state.count,
    cubed: (state, getters) => state.count * getters.squared
  }
});


export default store;
