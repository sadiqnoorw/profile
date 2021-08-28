import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

// bootstrap and style loading here  
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/theme/assets/libs/flot/css/float-chart.css'
import './assets/theme/dist/css/style.min.css'

// jquery and othere js loaded here
window.$ = window.jQuery = require('jquery')

require('./assets/theme/assets/libs/jquery/dist/jquery.min.js')
require('./assets/theme/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js')
require('./assets/theme/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js')
require('./assets/theme/assets/extra-libs/sparkline/sparkline.js')
require('./assets/theme/dist/js/waves.js')
require('./assets/theme/dist/js/sidebarmenu.js')
require('./assets/theme/dist/js/custom.min.js')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
