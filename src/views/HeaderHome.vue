<template>
  <nav>
    <h2>Home</h2>
    <router-link to="/" active-class="link--active" exact="" class="link">Home</router-link>
    <!-- ブラウザから直接アクセスすることによってスクロールが可能であるが、Vuerouter側の仕様としてそれは出来ない -->
    <router-link :to="{ name: 'users-id-profile', params: {id: 1}, query: { lang: 'ja', page: 2 }, hash: '#next-user'}" active-class="link--active" exact="" class="link">Users</router-link>
    <button @click="increment(2)">+1</button>
    <button @click="decrement(2)">-1</button>
  </nav>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    methods: {
      // mapActionsを使用してActionsをコンポーネントで使用する
      ...mapActions(["increment", "decrement"])
    }
  }
</script>

<style scoped>
  .link {
    margin-right: 10px;
  }

  /* リンクがアクティブな際のスタイル付与 */
  .link--active {
    font-size: 20px;
  }
</style>