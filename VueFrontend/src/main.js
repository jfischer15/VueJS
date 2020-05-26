// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as VueGoogleMaps from 'vue2-google-maps';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css'

Vue.component("v-select", vSelect);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBEFwKJDLUCG8IkxFKz9skvji3pBThOC5k',
    libraries: 'places'
  }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
