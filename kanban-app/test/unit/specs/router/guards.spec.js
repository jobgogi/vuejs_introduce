import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

/**
 * App 컴포넌트
 */
const App = {
  name: 'app',
  render: h => h('router-view')
}

/**
 * Top 컴포넌트
 */
const Top = {
  name: 'top',
  render: h => h('p', ['top'])
}

/**
 * Login 컴포넌트
 */
const Login = {
  name: 'Login',
  render: h => h('p', ['login'])
}

/**
 * 내비게이션 가드 구현 파일 안에서 사용할 Vuex 스토어 목업을 만드는 헬퍼 함수
 * @param {*} store
 */
const mockAuthorizeToken = store => {
  const injector = require('inject-loader!@/router/guards')
  const storeMock = injector({
    '../store': store
  })

  return storeMock.authorizeToken
}

/**
 * Vue 애플리케이션을 초기화해주는 헬퍼 함수
 * @param {*} state
 */
const setup = state => {
  // Vuex 스토어 생성
  const store = new Vuex.Store({
    state
  })

  // Vue Router 생성
  const router = new VueRouter({
    routes: [{
      path: '/',
      component: Top,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/login',
      component: Login
    }]
  })

  // 내비게이션 가드 역할을 하는 authorizeToken 훅을 설치
  router.beforeEach(mockAuthorizeToken)

  return mount(App, {
    localVue,
    store,
    router
  })
}

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(Vuex)

describe('beforeEach 가드 훅', () => {
  describe('인증 토큰 있음', () => {
    it('그대로 진행함', () => {
      const app = setup({
        auth: {
          token: '1234567890abcdef',
          userId: 1
        }
      })

      expect(app.text()).to.equal('top')
    })
  })

  describe('인증 토큰 없음', () => {
    it('/login으로 리다이렉트', () => {
      const app = setup({})
      expect(app.text()).to.equal('login')
    })
  })
})
