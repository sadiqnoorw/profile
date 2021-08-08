import Vue from 'vue'
import App from './App.vue'
import router from "./router";

window.$ = window.jQuery = require('jquery')
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/theme/assets/libs/flot/css/float-chart.css'
import './assets/theme/dist/css/style.min.css'
// import './assets/theme/css/nalika-icon.css'

// import './assets/theme/css/metisMenu/metisMenu.min.css'
// import './assets/theme/css/owl.transitions.css'
// import './assets/theme/css/animate.css'
// import './assets/theme/css/normalize.css'
// import './assets/theme/css/meanmenu.min.css'
// import './assets/theme/style.css'
// import './assets/theme/css/responsive.css'

//import './assets/theme/css/responsive.css'

//  require('./assets/theme/libs/bootstrap/dist/js/bootstrap.bundle.min.js')
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
  render: h => h(App),
}).$mount('#app')
