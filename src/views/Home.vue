<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページへ行く</button>
  </div>
</template>

<script>
  export default {
    methods: {
      toUsers() {
        // ビュールーターへのアクセス
        this.$router.push({ path: 'users' }); // push('users');でも良い
      }
    }
  }
</script>