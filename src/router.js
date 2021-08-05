import Vue from 'vue';
import Router from 'vue-router'; // プラグイン(Vue.js全体に影響を与えるもの)
// views配下にあるコンポーネントのインポート
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UsersPosts from './views/UsersPosts.vue';
import UsersProfile from './views/UsersProfile.vue';
import HeaderHome from './views/HeaderHome.vue';
import HeaderUser from './views/HeaderUser.vue';

Vue.use(Router) // プラグインの適用

export default new Router({ // ルーティング main.jsにて登録
  // historyモードでURLに「#」が付かなくなる
  // ただし、そのURLに対応したindex.htmlを用意する必要がある
  mode: "history",
  routes: [{path: '/',
  // 固定レイアウトその1(HeaderHome.vue)
  components: {
    default: Home,
    header:HeaderHome
  }}, 
    // propsオプションをtrueにする
    { path: '/users/:id',
    // 固定レイアウトその2(HeaderUser.vue)
      components: {
        default: Users,
        header:HeaderUser
      },
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