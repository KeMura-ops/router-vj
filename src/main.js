import Vue from 'vue'
import App from './App.vue'
import router from './router' // ルーターをVue.jsに適用させる

Vue.config.productionTip = false

new Vue({
  router, // router.jsのthis.appを指す
  render: h => h(App),
}).$mount('#app')
