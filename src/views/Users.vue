<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <!-- ルートコンポーネントの再利用性を高めるためにはpropsの値で受け取る -->
    <h1>User No. {{ id }}</h1>
    <!-- v-bindでto属性を動的に表現する -->              <!-- クエリを直接書いても良い -->
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja#next-user'">次のユーザー</router-link>
    <router-view></router-view>
    <div style="height: 700px"></div>
    <!-- スクロール機能の使用のためにhashを付与する -->
    <router-link id="next-user" :to="{ name: 'users-id-profile', params: {id: Number(id) + 1}, query: { lang: 'ja', page: 2 }, hash: '#next-user'}">
      次のユーザー
    </router-link>
    <div style="height: 1400px"></div>
  </div>
</template>

<script>
export default {
  props: ["id"],
    beforeRouteEnter(to, from, next) {
    // コンポーネントが表示される際に実行される処理
    next(vm => {
      console.log(vm.id);
    })
  },
    beforeRouteUpdate(to, from, next) {
    // コンポーネントの値がアップデートされた時に実行
    console.log('Update');
    next()
  },
    beforeRouteLeave(to, from, next) {
    // 他のページに遷移する時に実行
    console.log('Leave');
    const isLeave = window.confirm('このページから離れますか？');
    if (isLeave) {
      next();
    } else {
      next(false);
    }
  }
};
</script>