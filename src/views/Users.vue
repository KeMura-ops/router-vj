<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <!-- ルートコンポーネントの再利用性を高めるためにはpropsの値で受け取る -->
    <h1>User No. {{ id }}</h1>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // パラメーターの変更の際にcreatedなどライフサイクルフックが呼ばれないことに注意する
  // ウォッチャーを使用することで変更の確認ができる
  watch: {
    $route(to, from) {
      console.log('$routeの変更');
      console.log(to);
      console.log(from);
    }
  }
}
</script>