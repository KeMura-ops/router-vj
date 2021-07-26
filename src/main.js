import Vue from 'vue'
import App from './App.vue'
import router from './router' // ルーターをVue.jsに適用させる

Vue.config.productionTip = false

new Vue({
  router: router, // routerのみの登録で可能
  render: h => h(App),
}).$mount('#app')
