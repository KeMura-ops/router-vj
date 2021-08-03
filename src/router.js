import Vue from 'vue';
import Router from 'vue-router'; // プラグイン(Vue.js全体に影響を与えるもの)
// views配下にあるコンポーネントのインポート
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UsersPosts from './views/UsersPosts.vue';
import UsersProfile from './views/UsersProfile.vue';

Vue.use(Router) // プラグインの適用

export default new Router({ // ルーティング main.jsにて登録
  // historyモードでURLに「#」が付かなくなる
  // ただし、そのURLに対応したindex.htmlを用意する必要がある
  mode: "history",
  routes: [{path: '/', component: Home}, 
    // propsオプションをtrueにする
    { path: '/users/:id',
      component: Users,
      props: true,
      // ネストされたrouter-viewに表示させるコンポーネントの登録
      children: [
        { path: "posts", component: UsersPosts},
        // name属性を付与し、そのnameをpathの代替にする
        { path: "profile", component: UsersProfile, name: "users-id-profile"}
      ]
    }
  ]
});