<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページへ行く</button>
    <p>{{ count }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
  export default {
    // Vuexのプロパティにはcomputedを用いてアクセスする
    computed: {
      count() {
        // main.jsとstore.jsに記述することによって全体で「$store」が使用できるようになる
        // Vuex側の算出プロパティgettersの使用
        return this.$store.getters.doubleCount;
      },
      tripleCount() {
        return this.$store.getters.tripleCount;
      }
    },
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