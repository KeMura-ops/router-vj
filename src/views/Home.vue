<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページへ行く</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
  export default {
    // Vuexのプロパティにはcomputedを用いてアクセスする
    computed: {
      count() {
        // main.jsとstore.jsに記述することによって全体で「$store」が使用できるようになる
        return this.$store.state.count;
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