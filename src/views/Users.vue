<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <!-- ルートコンポーネントの再利用性を高めるためにはpropsの値で受け取る -->
    <h1>User No. {{ id }}</h1>
    <!-- v-bindでto属性を動的に表現する -->              <!-- クエリを直接書いても良い -->
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja'">次のユーザー</router-link>
    <!-- クエリの指定ができる。(?lang=ja&page=2) -->
    <router-link :to="{ name: 'users-id-profile', params: {id: Number(id) + 1}, query: { lang: 'ja', page: 2 }}">次のユーザー</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>