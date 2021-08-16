import Vue from 'vue'
import App from './App.vue'
import router from './router' // ルーターをVue.jsに適用させる

Vue.config.productionTip = false

// ナビゲーションガード(全てのページに遷移する前に特定の処理を行う)
// ユーザー認証を行っていない場合に、ログインや新規登録フォームに遷移させたい時などに使用する
router.beforeEach((to, from, next) => {
  next();
})

new Vue({
  router, // router.jsのthis.appを指す
  render: h => h(App),
}).$mount('#app')
