import Vue from 'vue'
import App from './App'
import './styles/globals'
import './styles/header'
import './styles/subheader'
import keys from './keys'

console.log(keys)

new Vue({
  render: h => h(App)
}).$mount('body')
