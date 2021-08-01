<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <!-- ルートコンポーネントの再利用性を高めるためにはpropsの値で受け取る -->
    <h1>User No. {{ id }}</h1>
    <!-- ネストされたrouter-viewの使用 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>