import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false

var vm = new Vue({
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el:'#app',
//   components: { App },
//   template: '<App/>'
// });