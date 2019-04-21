import Vue from 'vue'
import routes from './routes'

import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false

const app = new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
  APP (){
      const matchedPage = routes[this.currentRoute];
      return matchedPage 
      ? require('./pages/' + matchedPage + '.vue').default
      : require('./pages/404.vue').default
    }
  },
  render (h){
    return h(this.APP)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})