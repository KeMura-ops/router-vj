import Vue from 'vue';
import Router from 'vue-router'; // プラグイン(Vue.js全体に影響を与えるもの)
// views配下にあるコンポーネントのインポート
import Home from './views/Home.vue';
import Users from './views/Users.vue';

Vue.use(Router) // プラグインの適用

export default new Router({ // ルーティング main.jsにて登録
  routes: [{path: '/', component: Home}, {path: '/users', component: Users}]
});