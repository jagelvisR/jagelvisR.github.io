import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'




//import 'material-design-icons-iconfont/dist/material-design-icons.css'

//import '@mdi/font/css/materialdesignicons.css';

import Vuetify from 'vuetify/lib';

import 'font-awesome/css/font-awesome.min.css'

import VueScrollactive from 'vue-scrollactive';
Vue.use(VueScrollactive);

import firebase from 'firebase/app';
Vue.use(firebase)

import VueFire from 'vuefire'
Vue.use(VueFire)

import VueParticles from 'vue-particles'
Vue.use(VueParticles)


import BackToTop from 'vue-backtotop'
Vue.use(BackToTop)
        

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(Vuetify,{
  iconfont: 'fas'
});

