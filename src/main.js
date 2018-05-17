import './firebase';

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueFire from 'vuefire';
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)

firebase.initializeApp({
  projectId: 'firestarter-96e46',
  databaseURL: 'https://firestarter-96e46.firebaseio.com'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
