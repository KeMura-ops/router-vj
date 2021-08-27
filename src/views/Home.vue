<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページへ行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input type="text" :value="message" @input="updateMessage">
    <p>{{ message }}</p>
  </div>
</template>

<script>
  // mapGettersのインポート
  import { mapGetters } from "vuex";

  export default {
    computed: {
      /*
      スプレッド演算子「...」を使用し、mapGettersをcomputedに結合することで
      その他のcomputedも記述できる
      */
      ...mapGetters(["doubleCount", "tripleCount"]),
      message() {
        return this.$store.getters.message;
      }
    },
    methods: {
      updateMessage(e) {
        this.$store.dispatch("updateMessage", e.target.value)
      },
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