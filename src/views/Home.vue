<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページへ行く</button>
    <!-- オブジェクトで取得する場合 -->
    <!-- <p>{{ myComponentDoubleCount }}</p> -->
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
  // mapGettersのインポート
  import { mapGetters } from "vuex";

  export default {
    // mapGettersを用いて配列もしくはオブジェクトで記述することによりVuexのプロパティにアクセスできる
    computed: mapGetters(["doubleCount", "tripleCount"]), // 配列で取得
    /* computed: mapGetters({ // オブジェクトで取得
      myComponentDoubleCount: "doubleCount"
    }), */
    methods: {
      toUsers() {
        // Homeからアクセスする
        this.$router.push({
          name: 'users-id-profile',
          params: {id: 1}
          });
      }
    }
  }
</script>