import { storiesOf } from '@storybook/vue'
import KbnLoginForm from '../src/components/molecules/KbnLoginForm.vue'

storiesOf('KbnLoginForm', module)
  .add('기본 동작', () => ({
    components: {
      KbnLoginForm
    },
    template: '<Kbn-login-form :onlogin="handleLogin" />',
    methods: {
      handleLogin(authInfo) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          }, 2000)
        })
      }
    }
  }))
